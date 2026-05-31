-- ADUVerified — Builders roster (Phase 1.5: automated lead distribution)
-- Creates the `builders` table that drives round-robin distribution from /api/leads.
-- Service-role-only access (RLS on, no public policies). Chad edits rows directly
-- in the Supabase Table Editor; the API reads them via the service-role key.

-- ── builders ──────────────────────────────────────────────
-- Round-robin selection uses `last_offered_at`:
--   SELECT ... WHERE state = ? AND active = true
--   ORDER BY last_offered_at ASC NULLS FIRST LIMIT 3
-- New builders (NULL) get the next lead; after receiving, they go to the back.

CREATE TABLE builders (
    id                SERIAL PRIMARY KEY,
    name              TEXT NOT NULL,          -- company name (what shows in admin email)
    contact_name      TEXT,                   -- sales rep / owner; optional
    email             TEXT NOT NULL,          -- inbox that receives lead notifications
    phone             TEXT,
    state             TEXT NOT NULL,          -- 'CA' / 'OR' / 'WA' / 'CO' / 'TX' / 'AZ'
                                              -- multi-state builders = one row per state for now
    city              TEXT,                   -- optional; for future city-deep matching
    active            BOOLEAN NOT NULL DEFAULT TRUE,
    last_offered_at   TIMESTAMPTZ,            -- set to NOW() each time this builder receives a lead
    notes             TEXT,                   -- Chad's free-text notes (rate negotiated, preferences)
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- The round-robin query filters by (state, active) — index it for fast lookup.
CREATE INDEX idx_builders_state_active ON builders(state, active);

-- Reuse the set_updated_at() function created in 0001_initial_leads.sql.
CREATE TRIGGER builders_updated_at
    BEFORE UPDATE ON builders
    FOR EACH ROW
    EXECUTE FUNCTION set_updated_at();

-- ── Row Level Security ────────────────────────────────────
-- No public read or write. The API talks to this table only via the service-role
-- key (which bypasses RLS). Chad uses the Supabase dashboard, which uses the
-- service-role key under the hood for authenticated owners.

ALTER TABLE builders ENABLE ROW LEVEL SECURITY;

-- (No policies = no anon access. That is intentional.)

-- ── Sample seed (commented; uncomment to bootstrap) ───────
-- INSERT INTO builders (name, contact_name, email, phone, state, city, notes) VALUES
--   ('Sample CA Builder 1', 'Pat Owner', 'leads+ca1@example.com', '4155550101', 'CA', 'Los Angeles', 'Seed test row — replace before launch'),
--   ('Sample CA Builder 2', 'Sam Owner', 'leads+ca2@example.com', '5105550102', 'CA', 'Oakland',     'Seed test row — replace before launch'),
--   ('Sample CA Builder 3', 'Jo Owner',  'leads+ca3@example.com', '9165550103', 'CA', 'Sacramento',  'Seed test row — replace before launch');
