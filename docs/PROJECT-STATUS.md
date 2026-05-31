# ADUVerified — Project Status

> Living snapshot of where the project stands. Source-of-truth for decisions/rationale is the
> plan file: `C:\Users\ckrue\.claude\plans\i-want-to-upload-nifty-spark.md`. Last updated: 2026-05-29.

## What this is (one paragraph)
ADUVerified.com — a lead-generation directory matching U.S. homeowners with **verified ADU / tiny-home / pre-fab builders** who know their city's **pre-approved ADU plan program**. Free for homeowners; builders pay per matched lead. **MVP-first**: ship a lean lead-capture site, validate demand via free organic traffic (Reddit/FB/BiggerPockets), broker leads to builders manually, then build the full directory only for the state that proves out. Niche + methodology come from the "Frey" YouTube transcript (`docs/transcript-frey-2026.md`).

## Tech stack
Next.js 16 (App Router) + Tailwind v4 + TypeScript · Supabase (Postgres) · Resend (email) · Replit Deployments (hosting, user preference) · Gemini Flash (image vision, later) · gosom/omkarcloud + Crawl4AI (builder scraping, later) · Plausible (analytics). Project root: `c:\dev\Online-Directory`.

## Design direction
Editorial / Craftsman: **Fraunces** (display serif) + **Geist** (body) + **JetBrains Mono** (accents); warm paper background, sage + terracotta accents, section numbering. (User reviewed 3 mockups in `design-explorations/`; chose to keep editorial but liked the warmer "Direction 02" — not ported. Tokens/classes live in `src/app/globals.css`.)

## DONE (built + build-verified)
- **MVP landing page** (`src/app/page.tsx`): Hero, TrustBar, HowItWorks, WhyUs, StateBlocks, LeadForm, FAQ.
- **5-step lead form** (`src/components/LeadForm.tsx`): 22 fields incl. RESPA gate (only "I own" advances), bathrooms, lot size, permit status, optional notes, **two-checkbox consent** (required contact + optional marketing, stores `consent_text_version`), timeline buckets.
- **`/api/leads`** (`src/app/api/leads/route.ts`): validates RESPA + TCPA + email, inserts to Supabase, fires Resend admin + autoresponder. **Currently STUBBED** — logs to console until real keys are in `.env` (see `src/lib/supabase.ts`, `src/lib/resend.ts` — TODO swap points marked).
- **Supabase migration** `supabase/migrations/0001_initial_leads.sql` (leads table, full Compete Mode columns, RLS: anon insert-only).
- **SEO/AIO/GEO**: `robots.ts` (AI-crawler allow-list), `sitemap.ts`, `/llms.txt` route, branded `opengraph-image.tsx`, server-rendered JSON-LD (`src/components/JsonLd.tsx`), security headers (`next.config.ts`).
- **Content pages**: `/faq` (~30 Qs, `src/lib/faqs.ts`), `/about` (E-E-A-T), `/[state]` × 6 (CA/OR/WA/CO/TX/AZ — summary + official-source link, data in `src/lib/states.ts`).
- **Global nav**: `src/components/SiteHeader.tsx` (logo, How it works, States dropdown, FAQ, About, Get matched) + site-wide `Footer` (both mounted in `src/app/layout.tsx`); skip-to-content link.
- **Legal starter pages** (DRAFT, attorney-review-required): `/privacy`, `/terms`, `/sms-terms`, `/disclosures`.
- **seo-audit skill** installed (`.agents/skills/seo-audit`, gitignored); latest audit **97/A** across 13 pages.
- **Google Sheet** "ADUVerified Builder Roster" created in user's Drive (6 states, ~40 seed builders, ID `1vGU3-TEUm4qZjIfKKavueaJ5L_Cr10rXeEunM5v1eJk`).

## NEXT (not yet done)
1. **Wire Supabase + Resend for real** — create/connect Supabase project, run migration, set `.env` keys, swap the stub clients, verify a real lead saves + emails. (Form works end-to-end except persistence.)
2. **Deploy to Replit (HTTPS)** then **re-run the seo-audit on the live URL** (drops the ~122 localhost-only "failures": HTTPS/SSL/canonical-protocol/sitemap-domain) and re-run **with** Core Web Vitals (remove `--no-cwv`).
3. **Builder roster scrape (Track B)** — run gosom/omkarcloud + light Crawl4AI to expand the seed sheet to ~200/state (Week-1 parallel task, not started).
4. **MVP traffic + manual brokering (Week 2 in plan)** — Reddit/FB/BiggerPockets posting; user personally qualifies + brokers leads.
5. **Decision gate (Week 3)** — pick winning state → full directory build (Phase 4 in plan).

## Open items / caveats
- **Attorney review** required for legal pages + consent language before launch.
- **Official state URLs** in `src/lib/states.ts` use stable landing pages — verify exact deep links before launch.
- **Pre-launch compliance**: 10DLC/Twilio SMS registration, CCPA "Do Not Sell/Share" tooling, CAN-SPAM email footer (documented in plan, not built).
- Accounts: domain ✅ purchased, Anthropic/Stripe/Supabase/Replit/Gemini ✅ user has; **Resend** ⛔ needs setup before lead emails work.
- Pricing/distribution: tiered per-state (CA/OR/WA compete, CO/TX hybrid, AZ exclusive); shared $99–149/builder, exclusive $299–499. Compete Mode (lead → 3 builders, pay-on-accept) is schema-ready, UI in Phase 4.

## Dev
`npm run dev` (localhost:3000) · `npm run build` · seomator audit: `seomator audit <url> --crawl -m 20 --no-cwv --format llm -o report.xml` (use live HTTPS URL + drop `--no-cwv` once deployed).
