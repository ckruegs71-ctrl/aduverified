// POST /api/leads — receives lead submissions from <LeadForm>.
//
// Behavior (MVP):
//   - Validates the required fields + RESPA gate + TCPA consent
//   - Inserts into Supabase `leads` table (or stub-logs if not configured)
//   - Fires Resend admin notification + autoresponder (or stub-logs)
//   - Returns { ok: true, id?: number } on success
//
// When Supabase + Resend env vars are populated, the stubbed clients become
// real with no code change here. See src/lib/supabase.ts and src/lib/resend.ts.

import { NextResponse } from "next/server";
import { serverSupabase } from "@/lib/supabase";
import { sendLeadAutoresponder, sendLeadNotification } from "@/lib/resend";
import { distributeLeadToBuilders } from "@/lib/distributeLead";
import { rateLimit } from "@/lib/rateLimit";

export const runtime = "nodejs";

interface LeadPayload {
  state?: string;
  zip?: string;
  lot_size?: string;
  property_owned?: string;
  hoa_present?: string;
  build_type?: string;
  sqft_range?: string;
  bedrooms?: string;
  bathrooms?: string;
  pre_approved_plan_interest?: string;
  budget_range?: string;
  timeline?: string;
  financing?: string;
  primary_use?: string;
  prior_quotes?: string;
  permit_status?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  best_contact_time?: string;
  project_notes?: string;
  consent_contact?: boolean;
  consent_marketing?: boolean;
  source_referrer?: string;
  // Honeypot — non-empty value means a bot filled the hidden field. We silently drop.
  website?: string;
}

const MAX_PROJECT_NOTES = 2000;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_PHONE = 30;
const MAX_ZIP = 12;

function isSameOriginRequest(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  const allowed = [siteUrl, "http://localhost:3000", "http://127.0.0.1:3000"].filter(Boolean);
  const norm = (s: string) => s.replace(/\/$/, "");

  if (origin) {
    return allowed.some((a) => norm(origin) === norm(a));
  }
  if (referer) {
    return allowed.some((a) => referer.startsWith(a));
  }
  // No Origin and no Referer — suspicious for a same-origin form post. Reject.
  return false;
}

// Bump this when the consent language changes. Stored with each lead for
// litigation defense (proves exactly what the user agreed to).
const CONSENT_TEXT_VERSION = "2026-05-29-v2";

const REQUIRED_FIELDS: (keyof LeadPayload)[] = [
  "state",
  "zip",
  "property_owned",
  "first_name",
  "last_name",
  "email",
  "phone",
];

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  // Same-origin gate — block requests that didn't originate from our site.
  // This blocks browser-based CSRF / cross-site form abuse; rate limiter + honeypot
  // cover non-browser tooling (curl, custom scripts) where Origin can be forged.
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Request origin not allowed." }, { status: 403 });
  }

  // Per-IP rate limit (5 / 10min, 30 / hour). Reject before doing any work.
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : null;
  const rl = rateLimit(ipAddress ?? "unknown");
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec ?? 60) },
      },
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — a filled `website` field means a bot. Silently 200 so the bot
  // thinks it succeeded and moves on; we save nothing and email nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    console.warn("[/api/leads] honeypot triggered — dropping submission", {
      ip: ipAddress,
    });
    return NextResponse.json({ ok: true });
  }

  // Required field check
  for (const field of REQUIRED_FIELDS) {
    if (!body[field]) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 },
      );
    }
  }

  // RESPA gate
  if (body.property_owned !== "i_own") {
    return NextResponse.json(
      { error: "We only accept leads from current property owners." },
      { status: 422 },
    );
  }

  // TCPA gate
  if (!body.consent_contact) {
    return NextResponse.json(
      { error: "Consent to be contacted by ADUVerified and matched builders is required." },
      { status: 422 },
    );
  }

  // Email format
  if (!body.email || !isEmail(body.email)) {
    return NextResponse.json(
      { error: "Email format looks invalid." },
      { status: 422 },
    );
  }

  // Server-side length caps. The client already enforces project_notes with
  // maxLength but the server can't trust the client; cap defensively.
  if (body.project_notes && body.project_notes.length > MAX_PROJECT_NOTES) {
    return NextResponse.json(
      { error: `Project notes must be ${MAX_PROJECT_NOTES} characters or fewer.` },
      { status: 422 },
    );
  }
  if (body.first_name && body.first_name.length > MAX_NAME) {
    return NextResponse.json({ error: "First name is too long." }, { status: 422 });
  }
  if (body.last_name && body.last_name.length > MAX_NAME) {
    return NextResponse.json({ error: "Last name is too long." }, { status: 422 });
  }
  if (body.email && body.email.length > MAX_EMAIL) {
    return NextResponse.json({ error: "Email is too long." }, { status: 422 });
  }
  if (body.phone && body.phone.length > MAX_PHONE) {
    return NextResponse.json({ error: "Phone is too long." }, { status: 422 });
  }
  if (body.zip && body.zip.length > MAX_ZIP) {
    return NextResponse.json({ error: "ZIP is too long." }, { status: 422 });
  }

  // Capture remaining request metadata (for future fraud detection / attribution)
  const userAgent = request.headers.get("user-agent");
  const referrerUrl = request.headers.get("referer");

  const row = {
    state: body.state!,
    zip: body.zip!,
    lot_size: body.lot_size ?? null,
    property_owned: true,
    hoa_present: body.hoa_present ?? null,
    build_type: body.build_type ?? null,
    sqft_range: body.sqft_range ?? null,
    bedrooms: body.bedrooms ?? null,
    bathrooms: body.bathrooms ?? null,
    pre_approved_plan_interest: body.pre_approved_plan_interest ?? null,
    budget_range: body.budget_range ?? null,
    timeline: body.timeline ?? null,
    financing: body.financing ?? null,
    primary_use: body.primary_use ?? null,
    prior_quotes: body.prior_quotes ?? null,
    permit_status: body.permit_status ?? null,
    first_name: body.first_name!,
    last_name: body.last_name!,
    email: body.email!,
    phone: body.phone ?? null,
    best_contact_time: body.best_contact_time ?? null,
    project_notes: body.project_notes ?? null,
    consent_contact: true,
    consent_marketing: Boolean(body.consent_marketing),
    consent_text_version: CONSENT_TEXT_VERSION,
    source_referrer: body.source_referrer ?? null,
    ip_address: ipAddress,
    user_agent: userAgent,
    referrer_url: referrerUrl,
    status: "pending",
  };

  const supabase = serverSupabase();
  const { data: inserted, error: insertError } = await supabase
    .from("leads")
    .insert(row)
    .select("id")
    .single();
  if (insertError) {
    console.error("[/api/leads] insert error:", insertError);
    return NextResponse.json(
      { error: "Could not save lead. Please try again." },
      { status: 500 },
    );
  }
  const leadId = (inserted as { id?: number } | null)?.id ?? null;

  // Build the shared email payload (used by admin notification, builder notifications,
  // and the homeowner autoresponder).
  const emailPayload = {
    state: row.state,
    zip: row.zip,
    lot_size: row.lot_size,
    hoa_present: row.hoa_present,
    build_type: row.build_type,
    sqft_range: row.sqft_range,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    pre_approved_plan_interest: row.pre_approved_plan_interest,
    budget_range: row.budget_range,
    timeline: row.timeline,
    financing: row.financing,
    primary_use: row.primary_use,
    prior_quotes: row.prior_quotes,
    permit_status: row.permit_status,
    first_name: row.first_name,
    last_name: row.last_name,
    email: row.email,
    phone: row.phone,
    best_contact_time: row.best_contact_time,
    project_notes: row.project_notes,
    consent_marketing: row.consent_marketing,
    source_referrer: row.source_referrer,
    consent_text_version: row.consent_text_version,
    ip_address: row.ip_address,
    referrer_url: row.referrer_url,
  };

  // Round-robin distribute to up to 3 active builders in the lead's state.
  // (Awaited so the admin email can include "Forwarded to:" and the leads row
  // can be updated with the builder ids. Builder email sends themselves are
  // fire-and-forget inside distributeLeadToBuilders.)
  const { builderIds, builders } = await distributeLeadToBuilders(
    supabase,
    row.state,
    emailPayload,
  );

  // Best-effort update of the lead with distribution result. Don't fail the
  // request if this hiccups — the lead is already saved and builders already
  // notified.
  if (leadId !== null) {
    const { error: updateError } = await supabase
      .from("leads")
      .update({
        distributed_to: builderIds,
        status: builderIds.length > 0 ? "distributed" : "pending",
      })
      .eq("id", leadId);
    if (updateError) {
      console.error("[/api/leads] could not update lead with distribution:", updateError);
    }
  }

  // Fire-and-forget admin + autoresponder emails. We don't fail the request if
  // email sending hiccups — the lead is captured and admin can retry later.
  void sendLeadNotification(emailPayload, { forwardedTo: builders });
  void sendLeadAutoresponder(emailPayload);

  return NextResponse.json({ ok: true });
}
