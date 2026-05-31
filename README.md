# ADUVerified

> The only directory that combines every U.S. city's pre-approved ADU plans with verified builders who can pour them.
> **Domain:** [ADUVerified.com](https://aduverified.com) · **Stack:** Next.js 15 + Supabase + Replit Deployments + Resend

---

## What this is

A lead-generation directory for the U.S. ADU / tiny home / pre-fab market, sub-niched on **pre-approved plan programs** — the fastest, cheapest path to a legal ADU on your property.

Built MVP-first: a single landing page ships in Week 1 to validate demand via free organic traffic. The full programmatic-SEO directory (6 state hubs + deep city coverage) is built in Weeks 4–7 only for the state whose MVP traffic proves out.

## Why pre-approved ADU plans?

Cities like Los Angeles, San Jose, San Diego, Sacramento, Portland, and Seattle have launched "pre-approved" or "permit-ready" ADU programs. Homeowners using these plans save:
- ~$20K in design + permitting fees
- ~6 months in approval timelines
- Significant builder confusion (most builders are unfamiliar with the programs)

This information is scattered across city portals, builder marketing pages, and Facebook groups. No directory aggregates it. **We do.**

## Stack

| Layer | Choice |
|---|---|
| Frontend | Next.js 15 (App Router) + Tailwind + TypeScript |
| Database | Supabase (Postgres + Auth + Storage) |
| Hosting | Replit Deployments (Reserved VM, ~$7/mo) |
| Email | Resend |
| Scraping | gosom/google-maps-scraper (free Go binary) + Crawl4AI (open source) |
| Enrichment | Claude Code (text/logic) + Gemini Flash (vision) |
| Analytics | Plausible |
| Payments | Stripe (Phase 2 — paid leads + featured listings) |

## v1 launch architecture: hybrid

**6 state hubs:** California, Oregon, Washington, Colorado, Texas, Arizona — each gets a state hub page with state ADU law brief, list of cities with pre-approved programs, financing, all builders serving that state.

**5 deep cities:** Los Angeles, San Diego, Sacramento (CA), Portland (OR), Seattle (WA) — each gets full pre-approved plan catalog + verified city builders + zoning + permit timelines. This is where the moat lives.

**Bay Area coverage:** San Jose, Oakland, and San Francisco are not standalone city pages in v1. Builders headquartered in or serving those areas are surfaced via Sacramento builder profiles + service-area tagging + roll-up under the California state hub. Standalone Bay Area city pages added in v1.2.

**CO / TX / AZ coverage:** State hub + statewide builder roll-up (no city-deep pages yet). Builders live at `/[state]/builders/[slug]`. Deep city pages for Denver, Austin, Phoenix added in v1.1.

**Geographic expansion path:**
- v1 (this release): 6 state hubs + 5 deep cities
- v1.1: Add Denver/Boulder (CO), Austin (TX), Phoenix (AZ) as deep cities
- v1.2: Bay Area full coverage (San Jose, Oakland, SF), Long Beach, Pasadena
- v1.3: More states — NY, MA, FL, NC

## Monetization (layered)

| Phase | When | Mechanism |
|---|---|---|
| Day 1 | Launch | Lead-gen ($99–$499 per qualified lead depending on tier) |
| Month 1+ | Listings live | Affiliate (financing, design tools) |
| Month 3+ | ~5K visits/city | Featured listings ($99–$499/mo) |
| Month 6+ | 50K monthly sessions | Mediavine display ads |
| Year 1+ | 100+ builders | Vertical SaaS for builders (Parting Pro pattern) |

### Per-state distribution mode (Compete vs Exclusive)

Each state has its own default distribution mode based on builder density:

| State | Default mode | Builders per lead | Shared price | Exclusive price |
|---|---|---|---|---|
| CA | Compete | 3 | $129 | $399 |
| OR | Compete | 3 | $99 | $349 |
| WA | Compete | 3 | $99 | $349 |
| CO | Hybrid | 2–3 | $99 | $299 |
| TX | Hybrid | 2–3 | $99 | $299 |
| AZ | Exclusive | 1 | n/a | $299 |

Admin UI can override per-lead. Builders can set per-account preferences (Phase 4+).

## Getting started locally

```bash
git clone <repo> && cd Online-Directory
cp .env.example .env       # then fill in keys
npm install
npx supabase start         # local Supabase
npm run dev
```

Open http://localhost:3000.

## Roadmap

| Week | Focus |
|---|---|
| **1** | **MVP landing page live on ADUVerified.com (single page, 6 state blocks, 5-step lead form). Builder roster scrape runs in parallel.** |
| **2** | **Free organic traffic push (Reddit + FB + BiggerPockets) + manual lead brokering to builders.** |
| **3** | **Iterate landing page. Decision gate: pick winning state OR pivot OR keep iterating.** |
| 4 | If validated: data pipeline (scrape + verify + enrich) for the chosen state |
| 5 | Tiered Gemini image curation + Crawl4AI enrichment passes |
| 6 | Build full directory (state hub + city deep + plan + builder templates), replace MVP page |
| 7 | SEO polish + production launch as full directory |
| 8+ | Expand to next state. Begin paid builder listings. Mediavine at 50K monthly sessions. |

## Where to find things

- **Setup walkthrough:** `docs/SETUP.md`
- **Data pipeline (Frey method runbook):** `docs/DATA_PIPELINE.md`
- **SEO playbook:** `docs/SEO_PLAYBOOK.md`
- **Monetization roadmap:** `docs/MONETIZATION.md`
- **YouTube transcript that inspired the build:** `docs/transcript-frey-2026.md`
- **Builder roster (Google Sheets):** `ADUVerified Builder Roster` in your Drive root
- **Project plan:** `C:\Users\ckrue\.claude\plans\i-want-to-upload-nifty-spark.md`

## Operating principles (from Frey's transcript + brainstorm)

- **One enrichment field per Claude Code pass.** Never bundle.
- **Public data + price transparency = the moat.** Always extract pricing when present.
- **Niche specificity wins in AI search.** Every page answers a sharp query, with citations.
- **Local SEO is still wide open.** City pages are the highest-leverage SEO unit we own.
- **Property-ownership gate is non-negotiable.** RESPA safety: only accept leads who already own the property.
- **TCPA consent is non-negotiable.** Lead form requires explicit consent before sharing contact with builders.

## Legal note

ADUVerified is structured as an **advertising service** (not a referral service), matching the legal framework used by HomeAdvisor, Angi, and similar contractor lead-gen platforms. Pay-per-lead is permissible for ADU construction (which is not a "settlement service" under RESPA). **Consult a CA-licensed attorney before launching paid-lead mechanics.** See `docs/transcript-frey-2026.md` and the plan file's Decision Log for full context.
