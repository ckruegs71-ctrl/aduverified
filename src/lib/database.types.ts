// Generated types for the Supabase schema.
// Manually authored for the MVP; will be regenerated via `supabase gen types typescript`
// once the project is connected.

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: number;
          state: string;
          zip: string;
          lot_size: string | null;
          property_owned: boolean;
          hoa_present: string | null;
          build_type: string | null;
          sqft_range: string | null;
          bedrooms: string | null;
          bathrooms: string | null;
          pre_approved_plan_interest: string | null;
          budget_range: string | null;
          timeline: string | null;
          financing: string | null;
          primary_use: string | null;
          prior_quotes: string | null;
          permit_status: string | null;
          first_name: string;
          last_name: string;
          email: string;
          phone: string | null;
          best_contact_time: string | null;
          project_notes: string | null;
          consent_contact: boolean;
          consent_marketing: boolean;
          consent_text_version: string | null;
          source_referrer: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          referrer_url: string | null;
          ip_address: string | null;
          user_agent: string | null;
          session_id: string | null;
          status: string;
          tier: string | null;
          distributed_to: number[] | null;
          accepted_by: number | null;
          accepted_at: string | null;
          stripe_payment_intent_ids: string[] | null;
          admin_notes: string | null;
          created_at: string;
          verified_at: string | null;
          updated_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["leads"]["Row"],
          "id" | "created_at" | "updated_at" | "status"
        > & {
          status?: string;
        };
        Update: Partial<Database["public"]["Tables"]["leads"]["Row"]>;
      };
      builders: {
        Row: {
          id: number;
          name: string;
          contact_name: string | null;
          email: string;
          phone: string | null;
          state: string;
          city: string | null;
          active: boolean;
          last_offered_at: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["builders"]["Row"],
          "id" | "created_at" | "updated_at" | "active" | "last_offered_at"
        > & {
          active?: boolean;
          last_offered_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["builders"]["Row"]>;
      };
    };
  };
};
