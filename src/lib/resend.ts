// Resend email client for ADUVerified.
// Three helpers:
//   - sendLeadNotification(lead, { forwardedTo })  → admin email to Chad (full lead detail + which builders got it)
//   - sendBuilderLeadNotification(builder, lead)   → email to each matched builder
//   - sendLeadAutoresponder(lead)                  → "we got your inquiry" email back to the homeowner
//
// Stubbed safely until RESEND_API_KEY is in .env. When missing, logs and no-ops
// so dev/CI doesn't break.

export interface LeadEmailPayload {
  // Step 1 — location & ownership
  state: string;
  zip: string;
  lot_size: string | null;
  hoa_present: string | null;
  // Step 2 — project
  build_type: string | null;
  sqft_range: string | null;
  bedrooms: string | null;
  bathrooms: string | null;
  pre_approved_plan_interest: string | null;
  // Step 3 — budget & timeline
  budget_range: string | null;
  timeline: string | null;
  financing: string | null;
  // Step 4 — intent
  primary_use: string | null;
  prior_quotes: string | null;
  permit_status: string | null;
  // Step 5 — contact + consent
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  best_contact_time: string | null;
  project_notes: string | null;
  consent_marketing: boolean;
  source_referrer: string | null;
  // Audit / attribution
  consent_text_version: string | null;
  ip_address?: string | null;
  referrer_url?: string | null;
}

export interface BuilderRecipient {
  id?: number;
  name: string;
  contact_name?: string | null;
  email: string;
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@aduverified.com";
const FROM = process.env.LEAD_NOTIFY_FROM ?? "leads@aduverified.com";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "ADUVerified";

// Code → human label maps mirroring the option labels in LeadForm.
// If a code isn't in the map, falls back to the raw value (so unknowns still render).
const LABELS: Record<string, Record<string, string>> = {
  lot_size: {
    lt_5k: "Under 5,000 sqft",
    "5_10k": "5,000–10,000 sqft",
    gt_10k: "Over 10,000 sqft",
    unsure: "Not sure",
  },
  hoa_present: { yes: "Yes", no: "No", unsure: "Not sure" },
  build_type: {
    detached: "Detached ADU (backyard cottage)",
    garage_conversion: "Garage conversion",
    attached: "Attached ADU (addition)",
    jadu: "Junior ADU",
    tiny_home: "Tiny home",
    prefab_modular: "Pre-fab / modular",
    unsure: "Not sure yet",
  },
  sqft_range: {
    lt_600: "Under 600 sqft",
    "600_900": "600–900 sqft",
    "900_1200": "900–1,200 sqft",
    gt_1200: "1,200+ sqft",
    unsure: "Not sure",
  },
  bedrooms: {
    studio: "Studio",
    "1br": "1 bedroom",
    "2br": "2 bedrooms",
    "3br_plus": "3+ bedrooms",
    unsure: "Not sure",
  },
  bathrooms: { "1": "1", "1_5": "1.5", "2": "2", "2plus": "2+" },
  pre_approved_plan_interest: {
    want: "Yes — wants to use one",
    open: "Open to it",
    no_custom: "No — wants fully custom",
    dont_know: "Doesn't know what they are",
  },
  budget_range: {
    lt_100k: "Under $100K",
    "100_200k": "$100K–$200K",
    "200_350k": "$200K–$350K",
    "350k_plus": "$350K+",
    unsure: "Not sure yet",
  },
  timeline: {
    ready_now: "Ready now (0–3 months)",
    "3_6mo": "3–6 months",
    "6_12mo": "6–12 months",
    over_year: "Over a year away",
    researching: "Just researching",
  },
  financing: {
    cash: "Cash",
    heloc: "HELOC / home equity",
    adu_loan: "ADU-specific construction loan",
    need_help: "Needs help finding financing",
    undecided: "Not decided yet",
  },
  primary_use: {
    rental_income: "Rental income",
    family_member: "Family member moving in",
    office_studio: "Home office or studio",
    aging_in_place: "Aging in place / accessibility",
    future_flex: "Future flexibility",
    sell_later: "Sell the property later",
  },
  prior_quotes: {
    yes: "Yes, a few",
    no_first: "No — we're the first",
    starting: "Just starting to look",
  },
  permit_status: {
    not_started: "Haven't started",
    talked_to_city: "Talked to the city",
    plans_in_progress: "Plans in progress",
    permits_approved: "Permits approved",
  },
  best_contact_time: {
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    anytime: "Anytime",
  },
  source_referrer: {
    google: "Google search",
    reddit: "Reddit",
    facebook: "Facebook",
    friend: "Friend / referral",
    other: "Other",
  },
};

function label(field: string, value: string | null | undefined): string {
  if (value === null || value === undefined || value === "") return "—";
  const m = LABELS[field];
  return m?.[value] ?? value;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const TD_LABEL = 'style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top;white-space:nowrap;color:#333;"';
const TD_VALUE = 'style="padding:4px 0;vertical-align:top;color:#111;"';
const H3 = 'style="margin:24px 0 8px;font-family:Georgia,serif;border-bottom:1px solid #ddd;padding-bottom:4px;color:#1a1714;"';
const TABLE = 'style="border-collapse:collapse;font-size:14px;width:100%;max-width:560px;"';

function row(field: string, labelText: string, value: string | null | undefined): string {
  return `<tr><td ${TD_LABEL}>${labelText}</td><td ${TD_VALUE}>${escapeHtml(label(field, value))}</td></tr>`;
}
function textRow(labelText: string, value: string | null | undefined): string {
  const v = value && value !== "" ? value : "—";
  return `<tr><td ${TD_LABEL}>${labelText}</td><td ${TD_VALUE}>${escapeHtml(v)}</td></tr>`;
}
function htmlRow(labelText: string, html: string): string {
  return `<tr><td ${TD_LABEL}>${labelText}</td><td ${TD_VALUE}>${html}</td></tr>`;
}

// Shared by admin + builder emails.
function renderLeadSections(lead: LeadEmailPayload): string {
  const fullName = `${lead.first_name} ${lead.last_name}`.trim();
  const emailLink = `<a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a>`;
  const phoneLink = lead.phone
    ? `<a href="tel:${escapeHtml(lead.phone)}">${escapeHtml(lead.phone)}</a>`
    : "—";
  return `
    <h3 ${H3}>Contact</h3>
    <table ${TABLE}>
      ${textRow("Name", fullName)}
      ${htmlRow("Email", emailLink)}
      ${htmlRow("Phone", phoneLink)}
      ${row("best_contact_time", "Best time to reach", lead.best_contact_time)}
    </table>

    <h3 ${H3}>Property</h3>
    <table ${TABLE}>
      ${textRow("State / ZIP", `${lead.state} ${lead.zip}`)}
      ${textRow("Property ownership", "Owns the property")}
      ${row("hoa_present", "HOA on property", lead.hoa_present)}
      ${row("lot_size", "Lot size", lead.lot_size)}
    </table>

    <h3 ${H3}>Project</h3>
    <table ${TABLE}>
      ${row("build_type", "Build type", lead.build_type)}
      ${row("sqft_range", "Square footage", lead.sqft_range)}
      ${row("bedrooms", "Bedrooms", lead.bedrooms)}
      ${row("bathrooms", "Bathrooms", lead.bathrooms)}
      ${row("pre_approved_plan_interest", "Pre-approved plan interest", lead.pre_approved_plan_interest)}
      ${row("permit_status", "Permit status", lead.permit_status)}
    </table>

    <h3 ${H3}>Budget &amp; timeline</h3>
    <table ${TABLE}>
      ${row("budget_range", "Budget", lead.budget_range)}
      ${row("timeline", "Timeline", lead.timeline)}
      ${row("financing", "Financing", lead.financing)}
      ${row("prior_quotes", "Already getting quotes", lead.prior_quotes)}
    </table>

    <h3 ${H3}>Intent &amp; notes</h3>
    <table ${TABLE}>
      ${row("primary_use", "Primary use", lead.primary_use)}
      ${textRow("Project notes", lead.project_notes)}
    </table>
  `;
}

function isConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  if (!isConfigured()) {
    console.warn(`[resend] STUB — RESEND_API_KEY not set. Would email "${to}":`, {
      subject,
      preview: html.slice(0, 200),
    });
    return;
  }
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({ from: FROM, to, subject, html });
  if (error) {
    console.error(`[resend] send to ${to} failed:`, error);
  }
}

export async function sendLeadNotification(
  lead: LeadEmailPayload,
  opts: { forwardedTo: BuilderRecipient[] } = { forwardedTo: [] },
): Promise<void> {
  const fullName = `${lead.first_name} ${lead.last_name}`.trim();
  const subject = `🛎️ New ADU lead — ${lead.state} — ${fullName}`;

  const forwardedSection =
    opts.forwardedTo.length === 0
      ? `<div style="margin:16px 0 24px;padding:12px 16px;background:#fff8e1;border:1px solid #f0c419;border-radius:6px;color:#665100;font-size:14px;">
           ⚠ <strong>No active builders for ${escapeHtml(lead.state)}.</strong> This lead was NOT forwarded.
           Add builders in the Supabase Table Editor (set <code>state="${escapeHtml(lead.state)}"</code>, <code>active=true</code>)
           to enable auto-distribution. For now, you'll need to broker this one manually.
         </div>`
      : `<h3 ${H3}>Forwarded to ${opts.forwardedTo.length} builder${opts.forwardedTo.length === 1 ? "" : "s"}</h3>
         <table ${TABLE}>
           ${opts.forwardedTo
             .map(
               (b) =>
                 textRow(
                   b.name,
                   b.contact_name ? `${b.contact_name} <${b.email}>` : b.email,
                 ),
             )
             .join("")}
         </table>
         <p style="font-size:13px;color:#555;margin:8px 0 0;">Each of the above also received the full lead detail via email and was told to reach out to the homeowner directly.</p>`;

  const html = `
    <h2 style="margin:0 0 8px;font-family:Georgia,serif;color:#1a1714;">New ADU Lead</h2>
    <p style="margin:0 0 8px;color:#555;font-size:14px;">
      You just got a new inquiry on ${escapeHtml(SITE_NAME)}.
    </p>
    ${forwardedSection}
    ${renderLeadSections(lead)}

    <h3 ${H3}>Attribution &amp; compliance</h3>
    <table ${TABLE}>
      ${row("source_referrer", "How they heard about us", lead.source_referrer)}
      ${textRow("Marketing opt-in", lead.consent_marketing ? "Yes" : "No")}
      ${textRow("Consent text version", lead.consent_text_version)}
      ${textRow("IP address", lead.ip_address ?? null)}
      ${textRow("Referrer URL", lead.referrer_url ?? null)}
    </table>
  `;
  await sendEmail(ADMIN_EMAIL, subject, html);
}

export async function sendBuilderLeadNotification(
  builder: BuilderRecipient,
  lead: LeadEmailPayload,
): Promise<void> {
  const greetingName = builder.contact_name?.trim() || "team";
  const subject = `New ADU lead in ${lead.state} ${lead.zip} — reply fast`;
  const html = `
    <p>Hi ${escapeHtml(greetingName)},</p>
    <p>
      <strong>You've been matched with a homeowner inquiry via ${escapeHtml(SITE_NAME)}.</strong>
      Reply directly to the homeowner — their contact details are below —
      within one hour for best conversion. You're one of up to three matched builders.
    </p>
    ${renderLeadSections(lead)}
    <p style="margin-top:24px;font-size:13px;color:#555;">
      Want to pause future leads or change which states you cover? Just reply to this email
      and we'll update your account.
    </p>
    <p style="font-size:12px;color:#888;">
      Sent by ${escapeHtml(SITE_NAME)} on behalf of the homeowner. ${escapeHtml(SITE_NAME)} is an advertising
      and matching service; the agreement, work, and outcome are between you and the homeowner.
    </p>
  `;
  await sendEmail(builder.email, subject, html);
}

export async function sendLeadAutoresponder(lead: LeadEmailPayload): Promise<void> {
  const subject = `Thanks ${lead.first_name} — we received your ADU inquiry`;
  const html = `
    <p>Hi ${escapeHtml(lead.first_name)},</p>
    <p>Thanks for reaching out to ${escapeHtml(SITE_NAME)}. We've received your inquiry about an ADU in ${escapeHtml(lead.state)} ${escapeHtml(lead.zip)}.</p>
    <p>Here's what happens next:</p>
    <ol>
      <li>We verify your details and match you with <strong>at least two</strong> builders who specialize in your project type and area.</li>
      <li>Each matched builder will reach out directly within 24 hours.</li>
      <li>You compare options and choose who feels like the right fit — no obligation.</li>
    </ol>
    <p style="color:#555;font-size:13px;">A reminder: ${escapeHtml(SITE_NAME)} is an advertising and matching service, not a contractor. Please verify each builder's license, references, insurance, and contract before hiring.</p>
    <p>If you have any questions in the meantime, just reply to this email.</p>
    <p>— The ${escapeHtml(SITE_NAME)} team</p>
  `;
  await sendEmail(lead.email, subject, html);
}
