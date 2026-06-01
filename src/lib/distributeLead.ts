// Round-robin lead distribution to builders.
//
// Called from /api/leads after a lead row is inserted. Selects up to 3 active
// builders in the lead's state, ordered by `last_offered_at ASC NULLS FIRST`
// (newest builders + those who waited longest go next), emails them, and
// bumps their `last_offered_at` so they rotate to the back of the queue.
//
// Sends are fire-and-forget so the form submission stays snappy.
//
// Min-2 policy: we never send a lead to a single builder. If only 1 active
// builder matches the state, we skip auto-distribution entirely and surface a
// loud admin-email banner so Chad brokers manually. Keeps the public claim
// "you always have multiple options" defensible.

import type { SupabaseLike } from "./supabase";
import {
  sendBuilderLeadNotification,
  type BuilderRecipient,
  type LeadEmailPayload,
} from "./resend";

const MIN_BUILDERS_PER_LEAD = 2; // never auto-distribute if fewer than this many active builders match
const MAX_BUILDERS_PER_LEAD = 3; // matches consent v2 ("up to 3 matched ADU builders")

export interface DistributeResult {
  builderIds: number[];
  builders: BuilderRecipient[];
  /**
   * True when at least one active builder existed but we declined to auto-distribute
   * because `< MIN_BUILDERS_PER_LEAD`. The route uses this to render a clearer
   * "found N active builders, need ≥2" admin banner.
   */
  skipped?: boolean;
  /** Number of active builders that matched the state (even if we skipped). */
  activeCount: number;
}

interface BuilderRow {
  id: number;
  name: string;
  contact_name: string | null;
  email: string;
}

export async function distributeLeadToBuilders(
  supabase: SupabaseLike,
  state: string,
  lead: LeadEmailPayload,
): Promise<DistributeResult> {
  // Pick the next builders in round-robin order.
  const { data, error } = await supabase
    .from("builders")
    .select("id, name, contact_name, email")
    .eq("state", state)
    .eq("active", true)
    .order("last_offered_at", { ascending: true, nullsFirst: true })
    .limit(MAX_BUILDERS_PER_LEAD);

  if (error) {
    console.error("[distributeLead] builder lookup failed:", error);
    return { builderIds: [], builders: [], activeCount: 0 };
  }

  const rows = (data as BuilderRow[] | null) ?? [];
  const activeCount = rows.length;

  if (activeCount === 0) {
    // Nothing to distribute. Route will surface the existing "no active builders" banner.
    return { builderIds: [], builders: [], activeCount };
  }

  if (activeCount < MIN_BUILDERS_PER_LEAD) {
    // Exactly 1 active builder: skip distribution. We don't email them, and we
    // don't bump last_offered_at — they're not blamed for the gap. The admin
    // email gets a "found 1, need ≥2" banner so Chad brokers manually.
    console.warn(
      `[distributeLead] only ${activeCount} active builder(s) for ${state}; skipping (need >= ${MIN_BUILDERS_PER_LEAD}).`,
    );
    return { builderIds: [], builders: [], skipped: true, activeCount };
  }

  const now = new Date().toISOString();

  // Fire-and-forget: email + last_offered_at bump in parallel for each builder.
  for (const builder of rows) {
    void sendBuilderLeadNotification(
      {
        id: builder.id,
        name: builder.name,
        contact_name: builder.contact_name,
        email: builder.email,
      },
      lead,
    );

    void (async () => {
      const { error: updateError } = await supabase
        .from("builders")
        .update({ last_offered_at: now })
        .eq("id", builder.id);
      if (updateError) {
        console.error(
          `[distributeLead] failed to bump last_offered_at for builder ${builder.id}:`,
          updateError,
        );
      }
    })();
  }

  return {
    builderIds: rows.map((b) => b.id),
    builders: rows.map((b) => ({
      id: b.id,
      name: b.name,
      contact_name: b.contact_name,
      email: b.email,
    })),
    activeCount,
  };
}
