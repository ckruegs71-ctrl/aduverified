import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/los-angeles/standard-plan-program";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "LA Standard Plan Program: Complete 2026 Guide for Homeowners",
  description:
    "LA's Standard Plan Program offers 60+ pre-approved ADU designs from 25+ firms, plus one fully-free city plan (YOU-ADU). Save $10K–$20K + 2–4 months on permitting. Full plan catalog, YOU-ADU details, eligibility, and step-by-step.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "LA Standard Plan Program: Complete 2026 Guide",
    description:
      "60+ pre-approved ADU plans, including one fully-free design (YOU-ADU). Save $10K–$20K + 2–4 months. Curated plan catalog, how to use, eligibility.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

// Curated featured plans by use case (the full live list lives on LADBS;
// we surface what's most useful for typical LA homeowners).
const FEATURED_PLANS: {
  useCase: string;
  planId: string;
  firm: string;
  sqft: number;
  bedrooms: string;
  note: string;
}[] = [
  {
    useCase: "Smallest 1BR (max fee savings)",
    planId: "YOU-ADU",
    firm: "City of Los Angeles",
    sqft: 455,
    bedrooms: "1BR",
    note: "Free for any LA property owner; 4 aesthetic variants.",
  },
  {
    useCase: "Tight-lot studio",
    planId: "ADU62",
    firm: "ERW Design",
    sqft: 248,
    bedrooms: "Studio",
    note: "Smallest plan in the catalog. Fits the tiniest backyards.",
  },
  {
    useCase: "Compact 1BR rental",
    planId: "ADU71",
    firm: "Plús Hús",
    sqft: 438,
    bedrooms: "1BR",
    note: "Under 500 sqft — exempt from impact fees and school fees.",
  },
  {
    useCase: "Sweet-spot 1BR",
    planId: "ADU46",
    firm: "Lytemods",
    sqft: 603,
    bedrooms: "1BR",
    note: "Under 750 sqft — qualifies for impact fee waiver.",
  },
  {
    useCase: "Spacious 2BR family",
    planId: "ADU33",
    firm: "Cottage",
    sqft: 748,
    bedrooms: "2BR",
    note: "At the 750 sqft fee-waiver threshold.",
  },
  {
    useCase: "Mid-size 2BR",
    planId: "ADU48",
    firm: "Lytemods",
    sqft: 907,
    bedrooms: "2BR",
    note: "Over 750 sqft — impact fees apply.",
  },
  {
    useCase: "Large 3BR",
    planId: "ADU45",
    firm: "Lytemods",
    sqft: 1_200,
    bedrooms: "3BR",
    note: "Largest plan in the catalog. Full-family scale.",
  },
  {
    useCase: "2-story option",
    planId: "ADU75",
    firm: "YD Group",
    sqft: 1_180,
    bedrooms: "3BR",
    note: "Two-story design — works on narrow lots.",
  },
];

// Top firms by active plan count (current LADBS catalog).
const TOP_FIRMS: { name: string; plans: number; sizeRange: string; specialty: string }[] = [
  {
    name: "Lytemods",
    plans: 7,
    sizeRange: "275–1,200 sqft",
    specialty: "Widest range, studios to 3BR",
  },
  {
    name: "neXt Dwelling",
    plans: 6,
    sizeRange: "400–1,000 sqft",
    specialty: "Multiple 1BR variants",
  },
  {
    name: "YD Group",
    plans: 4,
    sizeRange: "497–1,180 sqft",
    specialty: "Includes a 2-story design",
  },
  {
    name: "Butterfly Dwellings",
    plans: 4,
    sizeRange: "696–1,044 sqft",
    specialty: "1BR through 3BR",
  },
  {
    name: "ADU Garage Designs",
    plans: 3,
    sizeRange: "280–400 sqft",
    specialty: "Studios and compact 1BR",
  },
  {
    name: "Modal",
    plans: 3,
    sizeRange: "351–567 sqft",
    specialty: "Studio and 1BR designs under fee threshold",
  },
  {
    name: "Cover",
    plans: 3,
    sizeRange: "512–870 sqft",
    specialty: "1BR and 2BR variants",
  },
  {
    name: "Cottage",
    plans: 2,
    sizeRange: "500–748 sqft",
    specialty: "1BR (500 sqft) and 2BR (748 sqft)",
  },
  {
    name: "Villa Homes",
    plans: 2,
    sizeRange: "569–750 sqft",
    specialty: "1BR and 2BR right at fee threshold",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is the LA Standard Plan Program?",
    a: "The LA Standard Plan Program is a catalog of accessory dwelling unit (ADU) designs that the Los Angeles Department of Building and Safety (LADBS) has already pre-approved for compliance with the Building, Residential, and Green Codes. When a homeowner picks one of these plans, LADBS skips the full plan check — they only review site-specific factors like zoning and foundation. The result is dramatically faster permitting and lower design + plan-check costs.",
  },
  {
    q: "How much does using a Standard Plan save?",
    a: "Most LA homeowners save $10,000–$20,000 in design and plan-check costs compared to commissioning a custom architect, plus 2–4 months off the permitting timeline. The exact savings depend on which plan you pick (some firms charge for plan rights; YOU-ADU is free) and how much builder coordination you'd have done either way.",
  },
  {
    q: "Is YOU-ADU really free?",
    a: "Yes — YOU-ADU is a 455 sqft, 1-bedroom plan owned by the City of Los Angeles and provided at no cost to any LA property owner. It comes in four aesthetic variants (In-Law, Guest, Renter, Artist) so you can match it to the look of your main home. You still pay normal LADBS plan-check and permit fees on the site-specific submittal, but you owe nothing for the plan itself.",
  },
  {
    q: "Can I modify a pre-approved plan?",
    a: "No — that's the main trade-off. Standard plans are pre-approved as designed, so significant modifications (changing the footprint, moving structural walls, altering the roof) require a full custom plan check and forfeit the time and cost savings. Cosmetic choices like paint colors, flooring, and fixtures are unrestricted. If you need a different layout, you're better off either picking a different standard plan or going custom.",
  },
  {
    q: "Does the Standard Plan Program apply to LA County or just LA City?",
    a: "LA City and LA County run separate programs. The LADBS Standard Plan Program covers properties inside the City of Los Angeles. LA County Public Works runs a parallel Pre-Approved ADU Standard Plans program for unincorporated LA County (three free county-owned plans, with private design firms coming). If your address is in an incorporated city like Long Beach, Pasadena, Burbank, or Santa Monica, neither program applies — those cities run their own permitting and may or may not have a pre-approved plan track.",
  },
  {
    q: "How long does permitting take with a Standard Plan vs a custom design?",
    a: "A custom ADU plan in LA typically takes 3–6 months for full plan check, often longer with revision cycles. A Standard Plan submittal usually moves through in 4–8 weeks for the first review because LADBS doesn't re-audit the design — they only check site-specific compliance. Combined with faster correction cycles, the net savings is typically 2–4 months on the permitting phase.",
  },
  {
    q: "Do I still need an architect if I use a Standard Plan?",
    a: "Usually no for the plan itself. The Standard Plan is already stamped and complete. You may still want a residential designer or architect to prepare the site-specific drawings (lot survey overlay, foundation, utility connections, grading), or you can use a general contractor who handles that paperwork. YOU-ADU's instructions explicitly allow homeowners to submit the plan themselves or use an architect or contractor of their choice.",
  },
  {
    q: "Who can use a Standard Plan?",
    a: "Any property owner inside the City of Los Angeles whose lot meets the program's site requirements — typical residential zones (R1, R2, RD1.5, RD2, etc.) allow ADU construction. Some plans aren't approved for sloped sites, hillside areas, or fire-hazard zones. LADBS reviews site fit during your application, so don't assume eligibility until they confirm.",
  },
  {
    q: "Are these plans suitable for sloped lots?",
    a: "Most are designed for relatively flat lots. The LADBS page explicitly notes that 'approved plans may not be approved for use in certain situations and/or site conditions' and 'roof decks may require additional setbacks in specific zones.' Hillside lots, lots with significant slope, or lots with unusual access often need a custom design. Your builder or an LADBS pre-application meeting can confirm fit for your specific lot.",
  },
  {
    q: "Can my builder build using any Standard Plan?",
    a: "Yes — Standard Plans are public LADBS-approved documents that any CSLB-licensed general contractor can build from. You don't have to use the design firm that created the plan, though some firms (like Abodu and Cottage) operate as full-service design-build companies and bundle plan rights with construction. If you go with an independent builder, just confirm they've worked with Standard Plan submittals before — there's slight process variation versus custom builds.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "LADBS — ADU Standard Plan Program (full plan catalog)",
    url: "https://dbs.lacity.gov/adu/approved-standard-plans",
    note: "Authoritative live list of every active and pending plan, with sizes and firm details.",
  },
  {
    label: "LADBS — YOU-ADU plan page",
    url: "https://dbs.lacity.gov/approved-standard-plans/you-adu",
    note: "Free 455 sqft city-owned plan with 4 aesthetic variants. Downloads + tutorial.",
  },
  {
    label: "LA County Public Works — Pre-Approved ADU Standard Plans",
    url: "https://pw.lacounty.gov/building-and-safety/adu/pre-approved",
    note: "Parallel program for unincorporated LA County areas — 3 county-owned plans (free).",
  },
  {
    label: "California HCD — 2026 ADU Handbook",
    url: "https://www.hcd.ca.gov/community-development/accessory-dwelling-units",
    note: "Statewide ADU rules including fee waivers for units under 750 / 500 sqft.",
  },
  {
    label: "Metropolis Magazine — coverage of the program",
    url: "https://metropolismag.com/viewpoints/la-standard-plan-adu-housing/",
    note: "Independent architectural press perspective on the program's goals and design quality.",
  },
];

export default function StandardPlanProgramPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "LA Standard Plan Program: Complete 2026 Guide for Homeowners",
    datePublished: "2026-06-14",
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "ADUVerified",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}` },
    description:
      "Complete 2026 guide to LA's Standard Plan Program. 60+ pre-approved ADU designs from 25+ architecture firms, plus the fully-free YOU-ADU plan. Saves $10K-$20K + 2-4 months. Catalog, eligibility, step-by-step, limitations.",
  };

  return (
    <ContentPage
      kicker="Los Angeles · Pre-approved plans"
      title={
        <>
          The LA <em>Standard Plan Program,</em> explained
        </>
      }
      intro="LA's Standard Plan Program is the single biggest cost-and-timeline lever available to Los Angeles ADU homeowners. Here's what it is, what's in the catalog, what's actually free, and how to use it."
      crumbs={[
        { label: "Los Angeles", href: PAGE_PATH },
        { label: "Standard Plan Program", href: PAGE_PATH },
      ]}
      lastReviewed={LAST_REVIEWED}
    >
      {/* Quick answer — AI-citation chunk */}
      <section
        aria-labelledby="quick-answer"
        className="border border-rule bg-paper-soft px-6 py-6 mb-12"
      >
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">
          Quick answer
        </h2>
        <p className="text-base text-ink leading-relaxed">
          The <strong>LA Standard Plan Program</strong> is a catalog of{" "}
          <strong>60+ ADU designs</strong> from <strong>25+ architecture firms</strong>{" "}
          that LADBS has already pre-approved for code compliance — plus one
          fully-free city-owned plan called <strong>YOU-ADU</strong>. Picking a
          Standard Plan typically saves <strong>$10,000–$20,000</strong> in
          design and plan-check costs and{" "}
          <strong>2–4 months</strong> off the permitting timeline. Plans range
          from <strong>248 sqft studios</strong> to{" "}
          <strong>1,200 sqft 3-bedroom</strong> designs.
        </p>
      </section>

      {/* Top CTA */}
      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want to use a Standard Plan but don&apos;t know which builders work
          with them? We&apos;ll connect you with up to 3 LA ADU builders who
          know the program. Free, no obligation.
        </p>
        <Link
          href="/?state=ca#lead-form"
          className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
        >
          Get matched with up to 3 LA ADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* What it is */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          What the Standard Plan Program actually does
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          A normal ADU permit application goes through a full plan check at
          LADBS: structural engineering, fire safety, energy compliance,
          accessibility, and so on. That review takes months. With a Standard
          Plan, the floor plan itself has already been reviewed and{" "}
          <strong>pre-approved by LADBS for compliance</strong> with the
          Building, Residential, and Green Codes. When you submit one, LADBS
          only needs to check site-specific factors — zoning, foundation,
          utility connections — which is a much faster review.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          The program emerged from California legislation pushing for faster
          ADU approvals (AB-68 in 2020 set state-level review deadlines) and
          from LA&apos;s own affordable housing strategy. LADBS launched the
          pilot with 14 firms; today the active catalog is approximately{" "}
          <strong>60+ plans across 25+ firms</strong>, with new submissions
          regularly added.
        </p>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          Two important caveats: <strong>(1)</strong> the program only applies
          inside the City of Los Angeles — LA County has a separate program for
          unincorporated areas, and other LA-area cities (Long Beach, Pasadena,
          Burbank, etc.) run their own permitting. <strong>(2)</strong>{" "}
          Pre-approved status applies to the floor plan, not to site fit —
          LADBS still confirms the plan works on your specific lot.
        </p>
      </section>

      {/* The math */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          How much it actually saves
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-sage-600 mb-3">Money saved</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>
                <strong className="text-ink">Custom architect fees:</strong>{" "}
                $8K–$20K avoided
              </li>
              <li>
                <strong className="text-ink">Plan-check overhead:</strong>{" "}
                Reduced because LADBS skips the full architecture review
              </li>
              <li>
                <strong className="text-ink">Revision cycles:</strong>{" "}
                Pre-approved plans rarely need design corrections; site-only
                corrections move faster
              </li>
              <li>
                <strong className="text-ink">Carrying costs:</strong>{" "}
                Less interest on construction loans during permitting
              </li>
            </ul>
            <p className="mt-4 text-base text-ink font-medium">
              Typical total: $10,000–$20,000
            </p>
          </div>
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-terracotta-600 mb-3">Time saved</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>
                <strong className="text-ink">Design phase:</strong> Eliminated
                or compressed to layout selection
              </li>
              <li>
                <strong className="text-ink">First plan check:</strong>{" "}
                Standard Plan reviews in 4–8 weeks vs 3–6 months for custom
              </li>
              <li>
                <strong className="text-ink">Correction cycles:</strong> Faster
                because corrections are site-only, not design-level
              </li>
            </ul>
            <p className="mt-4 text-base text-ink font-medium">
              Typical total: 2–4 months off project timeline
            </p>
          </div>
        </div>
      </section>

      {/* YOU-ADU section */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          YOU-ADU — the free city plan
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Of every plan in the catalog, one stands apart:{" "}
          <strong>YOU-ADU</strong>. It&apos;s a 455 sqft, 1-bedroom design
          owned by the City of Los Angeles, developed by the LA Bureau of
          Engineering with LADBS. Any LA property owner can use it at no cost.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">YOU-ADU at a glance</p>
          <dl className="grid gap-x-6 gap-y-2 sm:grid-cols-2 text-sm">
            <div>
              <dt className="inline text-ink-muted">Size: </dt>
              <dd className="inline text-ink font-medium">455 sqft</dd>
            </div>
            <div>
              <dt className="inline text-ink-muted">Bedrooms: </dt>
              <dd className="inline text-ink font-medium">1 bedroom + options</dd>
            </div>
            <div>
              <dt className="inline text-ink-muted">Stories: </dt>
              <dd className="inline text-ink font-medium">1 story</dd>
            </div>
            <div>
              <dt className="inline text-ink-muted">Cost of the plan: </dt>
              <dd className="inline text-ink font-medium">$0 — free</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="inline text-ink-muted">Aesthetic variants: </dt>
              <dd className="inline text-ink font-medium">
                In-Law (white metal roof + cement siding), Guest (gray shingles
                + charcoal siding), Renter (terra cotta shingles + craftsman
                green siding), Artist (red shingles + white plaster)
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="inline text-ink-muted">Designed by: </dt>
              <dd className="inline text-ink font-medium">
                LA Bureau of Engineering &amp; LADBS
              </dd>
            </div>
          </dl>
        </div>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-3">
          At 455 sqft, YOU-ADU is also small enough to qualify for{" "}
          <strong>full fee waivers</strong> under 2026 California rules — no
          local impact fees, no utility connection charges, and (under 500
          sqft) no school facility fees. That stacks the plan&apos;s free
          status with another $5K–$15K in fee savings.
        </p>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          The trade-off: 455 sqft is small — workable as a 1-person rental, an
          in-law unit, or a home office, but tight for a family. If you need
          more space, the rest of the catalog goes up to 1,200 sqft.
        </p>
      </section>

      {/* Featured plans table */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          Featured plans by use case
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          The full catalog has 60+ plans; here&apos;s a curated shortlist
          covering the most common LA homeowner use cases. Plan IDs link to
          the official LADBS page when you&apos;re ready to compare.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule text-left text-ink-muted font-mono text-xs">
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Use case</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Plan ID</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Firm</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Size</th>
                <th className="py-3 font-normal uppercase tracking-wider">Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {FEATURED_PLANS.map((p) => (
                <tr key={p.planId}>
                  <td className="py-3 pr-4 text-ink font-medium">{p.useCase}</td>
                  <td className="py-3 pr-4 text-ink-soft font-mono text-xs">{p.planId}</td>
                  <td className="py-3 pr-4 text-ink-soft">{p.firm}</td>
                  <td className="py-3 pr-4 text-ink-soft">
                    {p.sqft.toLocaleString()} sqft · {p.bedrooms}
                  </td>
                  <td className="py-3 text-ink-soft text-xs">{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-prose">
          See the{" "}
          <a
            href="https://dbs.lacity.gov/adu/approved-standard-plans"
            target="_blank"
            rel="noopener"
            className="text-sage-600 underline-grow font-medium"
          >
            full live catalog at LADBS ↗
          </a>{" "}
          for every active plan with downloadable PDFs.
        </p>
      </section>

      {/* Top firms */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          Top participating firms
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Roughly 25 firms have active plans in the program. Here are the most
          prolific — useful if you want a broader range of layouts from one
          firm, or want to evaluate design style by browsing a firm&apos;s
          full slate.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule text-left text-ink-muted font-mono text-xs">
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Firm</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Active plans</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Size range</th>
                <th className="py-3 font-normal uppercase tracking-wider">What they offer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {TOP_FIRMS.map((f) => (
                <tr key={f.name}>
                  <td className="py-3 pr-4 text-ink font-medium">{f.name}</td>
                  <td className="py-3 pr-4 text-ink-soft">{f.plans}</td>
                  <td className="py-3 pr-4 text-ink-soft">{f.sizeRange}</td>
                  <td className="py-3 text-ink-soft text-xs">{f.specialty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-prose">
          Some firms (like Abodu, Cottage, and Villa Homes) also operate as
          full-service builders bundling design + construction. Others are
          architects who license their plans for any builder to construct.
        </p>
      </section>

      {/* LA City vs LA County */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          LA City vs LA County — which one applies to you?
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          LA City and LA County run separate programs with separate catalogs.
          Knowing which applies is the first thing to confirm.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-sage-600 mb-3">LADBS (City of LA)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· 60+ active plans from 25+ firms</li>
              <li>· YOU-ADU plan free for any LA property owner</li>
              <li>· Apply through LADBS counter or online</li>
              <li>· Applies to incorporated City of LA addresses only</li>
            </ul>
            <a
              href="https://dbs.lacity.gov/adu/approved-standard-plans"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sage-600 underline-grow"
            >
              LADBS Standard Plan Program ↗
            </a>
          </div>
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-terracotta-600 mb-3">LA County Public Works</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· 3 county-owned plans (Plans A, B, C) — all free</li>
              <li>· Plan A: 1,200 sqft 3BR · Plan B: 1,200 sqft 2BR · Plan C: 800 sqft 1BR</li>
              <li>· Private design firm plans coming</li>
              <li>· Applies only to unincorporated LA County</li>
              <li>· Submit through EPIC-LA portal</li>
            </ul>
            <a
              href="https://pw.lacounty.gov/building-and-safety/adu/pre-approved"
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sage-600 underline-grow"
            >
              LA County Pre-Approved ADU ↗
            </a>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-muted leading-relaxed max-w-prose">
          Other LA-area cities — Long Beach, Pasadena, Glendale, Burbank, Santa
          Monica, West Hollywood, Beverly Hills — are <strong>not</strong> on
          either program. Each runs its own permitting. Some have their own
          pre-approved plan tracks; most do not.
        </p>
      </section>

      {/* How to use */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          How to use a Standard Plan (step by step)
        </h2>
        <ol className="space-y-5 max-w-prose">
          <li>
            <p className="text-ink font-medium">1. Confirm your property qualifies</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              City of LA address, ADU-permitted zone (most residential zones
              qualify), not in a hillside or fire-hazard area that excludes
              standard plans. A pre-application call with LADBS is the fastest
              way to confirm.
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">2. Pick a plan that fits</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              Browse the LADBS catalog. Match plan footprint to your buildable
              area, configuration to your needs, and size to your fee-waiver
              strategy (under 750 sqft and especially under 500 sqft both
              unlock significant fee savings).
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">3. Acquire plan rights</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              YOU-ADU is free. Other plans require purchase or licensing from
              the firm that owns them — typically much less than commissioning
              a custom design, but pricing varies by firm. Some design-build
              firms bundle plan rights with their construction contract.
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">4. Prepare site-specific drawings</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              Site survey, plot plan showing the ADU placement, foundation
              design for your soil, utility connection routing. A residential
              designer, architect, or general contractor handles this — it&apos;s
              a much smaller scope than a full custom design.
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">5. Submit to LADBS</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              File the application with the Standard Plan ID and your
              site-specific package. Pay plan check + permit fees. LADBS does
              the site-specific review (4–8 weeks typical).
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">6. Build</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              Once permitted, any CSLB-licensed builder can construct from the
              Standard Plan. Inspection schedule is the same as any ADU build.
            </p>
          </li>
        </ol>
      </section>

      {/* When NOT to use */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          When NOT to use a pre-approved plan
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Standard Plans win for most LA homeowners, but they aren&apos;t
          universal. Some scenarios where a custom design is the better call:
        </p>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Unusual lot geometry.</strong>{" "}
            Sloped lots, oddly-shaped buildable areas, alley-only access, or
            tight setbacks may not fit any standard footprint.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Specific design vision.</strong>{" "}
            Standard plans are pre-approved as designed — you can&apos;t move
            structural walls or change the roof. If you want a particular
            architectural style or layout the catalog doesn&apos;t cover,
            custom is the only path.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Garage conversions.</strong> The
            Standard Plan Program is mostly for new detached ADUs. Converting
            an existing garage needs a custom plan reflecting the existing
            structure.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">JADUs.</strong> Junior ADUs carved
            from the existing main house don&apos;t use the Standard Plan
            track — they need a custom plan showing the modification to the
            primary residence.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Hillside or fire-hazard zones.</strong>{" "}
            LADBS explicitly notes some plans aren&apos;t approved for certain
            site conditions. Confirm eligibility before committing.
          </li>
        </ul>
      </section>

      {/* Sources */}
      <section className="mt-12 border-t border-rule pt-8">
        <p className="kicker text-terracotta-600 mb-4">Sources</p>
        <ul className="space-y-3">
          {SOURCES.map((s) => (
            <li key={s.url} className="text-sm text-ink-soft leading-relaxed">
              <a
                href={s.url}
                target="_blank"
                rel="noopener"
                className="text-sage-600 underline-grow font-medium"
              >
                {s.label} ↗
              </a>
              <span className="block text-ink-muted text-xs mt-1">{s.note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-ink-muted">
          Last reviewed: {LAST_REVIEWED}. The LADBS catalog is updated
          frequently — plan IDs, firms, and approval status may shift. Always
          confirm current availability on the official LADBS page before
          finalizing a plan choice.
        </p>
      </section>

      {/* Bottom CTA */}
      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">
          Ready to build using a Standard Plan?
        </p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Tell us about your project and we&apos;ll connect you with up to 3
          Los Angeles ADU builders who know the Standard Plan Program inside
          and out. Free for homeowners. Builders pay us, never you.
        </p>
        <Link
          href="/?state=ca#lead-form"
          className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
        >
          Get matched with up to 3 LA ADU builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          Cost estimates first?{" "}
          <Link
            href="/tools/adu-cost-calculator"
            className="text-sage-600 underline-grow font-medium"
          >
            Try the cost calculator
          </Link>{" "}
          or read the{" "}
          <Link
            href="/los-angeles/adu-cost"
            className="text-sage-600 underline-grow font-medium"
          >
            LA ADU cost guide
          </Link>
          .
        </p>
      </div>

      {/* FAQ */}
      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">
          LA Standard Plan Program — common questions
        </h2>
        <div className="divide-y divide-rule">
          {FAQS.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="display-sm text-lg text-ink">{f.q}</h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed max-w-prose">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />
    </ContentPage>
  );
}
