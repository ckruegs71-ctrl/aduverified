// Round-robin lead distribution to builders.
//
// Called from /api/leads after a lead row is inserted. Selects up to 3 active
// builders in the lead's state, ordered by `last_offered_at ASC NULLS FIRST`
// (newest builders + those who waited longest go next), emails them, and
// bumps their `last_offered_at` so they rotate to the back of the queue.
//
// Sends are fire-and-forget so the form submission stays snappy.

import type { SupabaseLike } from "./supabase";
import {
  sendBuilderLeadNotification,
  type BuilderRecipient,
  type LeadEmailPayload,
} from "./resend";

const MAX_BUILDERS_PER_LEAD = 3; // matches consent v2 ("up to 3 matched ADU builders")

export interface DistributeResult {
  builderIds: number[];
  builders: BuilderRecipient[];
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
    return { builderIds: [], builders: [] };
  }

  const rows = (data as BuilderRow[] | null) ?? [];
  if (rows.length === 0) {
    return { builderIds: [], builders: [] };
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
  };
}
