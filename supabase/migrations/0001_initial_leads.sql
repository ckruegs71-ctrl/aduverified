-- ADUVerified — Initial migration (Phase 0/1: MVP)
-- Creates the `leads` table with full Compete Mode support from Day 1.
-- States/cities/builders/plans tables come in 0002_directory_schema.sql
-- once MVP validates demand (Phase 4).

-- ── leads ─────────────────────────────────────────────────
-- Captures every form submission on ADUVerified.com.
-- Schema supports Compete Mode (multi-builder distribution + per-lead pricing tier)
-- so the MVP brokering data is shape-compatible with the automated routing built in Phase 4.

CREATE TABLE leads (
    id                          SERIAL PRIMARY KEY,

    -- Location & RESPA gate (Step 1 of lead form)
    state                       TEXT NOT NULL,        -- 'CA' / 'OR' / 'WA' / 'CO' / 'TX' / 'AZ'
    zip                         TEXT NOT NULL,
    lot_size                    TEXT,                 -- 'lt_5k' / '5_10k' / 'gt_10k' / 'unsure'
    property_owned              BOOLEAN NOT NULL DEFAULT TRUE,  -- RESPA safety: only TRUE advances
    hoa_present                 TEXT,                 -- 'yes' / 'no' / 'unsure'

    -- Project (Step 2)
    build_type                  TEXT,                 -- detached / garage-conv / attached / jadu / tiny / prefab / modular / unsure
    sqft_range                  TEXT,                 -- '<600' / '600-900' / '900-1200' / '1200+' / 'unsure'
    bedrooms                    TEXT,                 -- 'studio' / '1' / '2' / '3+' / 'unsure'
    bathrooms                   TEXT,                 -- '1' / '1_5' / '2' / '2plus'
    pre_approved_plan_interest  TEXT,                 -- 'want' / 'open' / 'no-custom' / 'dont-know'

    -- Budget & timeline (Step 3)
    budget_range                TEXT,                 -- '<100k' / '100-200k' / '200-350k' / '350k+' / 'unsure'
    timeline                    TEXT,                 -- 'ready_now' / '3_6mo' / '6_12mo' / 'over_year' / 'researching'
    financing                   TEXT,                 -- 'cash' / 'heloc' / 'adu-loan' / 'need-help' / 'undecided'

    -- Intent (Step 4)
    primary_use                 TEXT,                 -- 'rental' / 'family' / 'office' / 'aging-in-place' / 'flex' / 'sell-later'
    prior_quotes                TEXT,                 -- 'yes' / 'no' / 'starting'
    permit_status               TEXT,                 -- 'not_started' / 'talked_to_city' / 'plans_in_progress' / 'permits_approved'

    -- Contact + consent (Step 5)
    first_name                  TEXT NOT NULL,
    last_name                   TEXT NOT NULL,
    email                       TEXT NOT NULL,
    phone                       TEXT,
    best_contact_time           TEXT,                 -- 'morning' / 'afternoon' / 'evening' / 'anytime'
    project_notes               TEXT,                 -- optional free-text "anything else?"
    consent_contact             BOOLEAN NOT NULL,     -- TCPA — required; ADUVerified + builders may call/text/email
    consent_marketing           BOOLEAN NOT NULL DEFAULT FALSE,  -- optional marketing opt-in
    consent_text_version        TEXT,                 -- which consent language version was shown (litigation defense)
    source_referrer             TEXT,                 -- "How did you hear about us?" optional

    -- Hidden / auto-captured
    utm_source                  TEXT,
    utm_medium                  TEXT,
    utm_campaign                TEXT,
    referrer_url                TEXT,
    ip_address                  TEXT,
    user_agent                  TEXT,
    session_id                  TEXT,

    -- Compete Mode workflow
    status                      TEXT NOT NULL DEFAULT 'pending',  -- pending / verified / distributed / accepted / closed-won / closed-lost / rejected
    tier                        TEXT,                  -- 'shared' / 'exclusive' (set when admin sends to builders)
    distributed_to              INTEGER[],             -- builder IDs notified (FK to builders, added in 0002)
    accepted_by                 INTEGER,               -- single builder ID (exclusive) OR first to accept (shared)
    accepted_at                 TIMESTAMPTZ,
    stripe_payment_intent_ids   TEXT[],                -- one per builder charged
    admin_notes                 TEXT,

    -- Audit
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    verified_at                 TIMESTAMPTZ,
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_leads_status        ON leads(status);
CREATE INDEX idx_leads_state         ON leads(state);
CREATE INDEX idx_leads_created_at    ON leads(created_at DESC);
CREATE INDEX idx_leads_email         ON leads(email);

-- Trigger to keep updated_at fresh
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();

-- ── Row Level Security ────────────────────────────────────
-- Service role bypasses RLS. Anon clients (the public site) can INSERT only.
-- Reads/updates are admin-only via service role from server actions.

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can insert leads"
    ON leads FOR INSERT
    TO anon
    WITH CHECK (true);

-- No SELECT policy for anon → public cannot read leads.
-- No UPDATE / DELETE policy for anon → public cannot modify leads.
-- All admin operations go through the service-role key on the server.
