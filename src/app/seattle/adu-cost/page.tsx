import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/seattle/adu-cost";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "How Much Does a DADU Cost in Seattle? (2026 ADU Guide)",
  description:
    "Detached ADUs (DADUs) in Seattle run $250K–$650K in 2026; garage conversions $90K–$180K. Seattle's ADUniverse pre-approved program, soft costs, ROI — fully cited.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "How Much Does a DADU Cost in Seattle? (2026 ADU Guide)",
    description:
      "Seattle DADUs $250K–$650K, garage conversions $90K–$180K. ADUniverse program saves 4–6 weeks of permitting. Full breakdown.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build an ADU/DADU in Seattle in 2026?",
    a: "In 2026, a detached ADU (DADU) in Seattle typically costs $250,000–$450,000 for mid-grade builds, with premium DADUs in tight inner neighborhoods like Capitol Hill or Queen Anne reaching $650,000. Garage conversions run $90,000–$180,000. Seattle is the most expensive Pacific Northwest market — driven by tech-economy labor costs and tight lot conditions.",
  },
  {
    q: "What's Seattle's ADUniverse program?",
    a: "ADUniverse is Seattle's pre-approved DADU plan program, offering a catalog of designs from local architects. Picking an ADUniverse plan cuts permitting from 6–12 weeks down to 2–6 weeks — and reduces design fees significantly (typically $5,000–$15,000 saved on architecture). Plans cover a range of styles and sizes within Seattle's DADU rules.",
  },
  {
    q: "What's the difference between an ADU and a DADU in Seattle?",
    a: "In Seattle's permit language, ADU usually means an attached or interior unit (a Mother-in-Law apartment, basement conversion, etc.), while DADU specifically means Detached Accessory Dwelling Unit — a standalone backyard cottage. Seattle's rules and pre-approved program (ADUniverse) are specifically built around the DADU type.",
  },
  {
    q: "What does Washington's HB 1110 do for ADUs?",
    a: "Washington's HB 1110 (2023) is the state's missing-middle housing law. For ADU owners specifically, it requires cities of 25,000+ to allow at least two ADUs (or DADUs) per residential lot and limits cities' ability to impose owner-occupancy requirements, design conditions, or off-street parking mandates on ADUs. Seattle's rules already met most HB 1110 requirements, but the law made statewide ADU permitting more predictable.",
  },
  {
    q: "How much rent can a 1-bedroom DADU in Seattle get?",
    a: "1-bedroom DADUs in Seattle typically rent for $1,800–$2,500/month in 2026. Capitol Hill, Ballard, Queen Anne, and Wallingford command the top of the range; South Seattle, North Seattle, and West Seattle run more moderate. The DADU premium over apartments is meaningful — standalone units with a yard pull higher rents.",
  },
  {
    q: "What's the ROI on a DADU in Seattle?",
    a: "On a $325,000 mid-build DADU renting at $2,200/month, annual net rental income runs roughly $20,500 after expenses — a cash-on-cash return of about 6.3%. Lower cash-on-cash than other Pacific Northwest cities because Seattle's higher build cost outpaces the rent premium. However, property value lift tends to be high ($175,000–$275,000) due to tight Seattle housing supply.",
  },
  {
    q: "How long does DADU construction take in Seattle?",
    a: "Plan on 14–18 months for a detached DADU: 2–4 months for design, 3–6 months for permitting through SDCI (faster with ADUniverse), and 8–10 months for construction. Garage conversions run 10–14 months total. Tight Seattle lots often add 1–2 months for access and staging logistics.",
  },
  {
    q: "Do I need a contractor licensed in Washington specifically?",
    a: "Yes — Washington requires builders to register with the Washington State Department of Labor & Industries (L&I) as a registered contractor. Verify the L&I number is active and check for complaints at lni.wa.gov before signing any contract. The license is state-level; any active L&I-registered contractor can build in Seattle.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "Seattle SDCI — ADUniverse Pre-Approved DADU Plans",
    url: "https://www.seattle.gov/sdci/permits/common-projects/accessory-dwelling-units",
    note: "Official ADUniverse catalog and process.",
  },
  {
    label: "Washington HB 1110 — Statewide ADU rules",
    url: "https://app.leg.wa.gov/billsummary?BillNumber=1110&Year=2023",
    note: "Statewide ADU permitting rules enforced statewide.",
  },
  {
    label: "Apartment List — Seattle Rent Report",
    url: "https://www.apartmentlist.com/rent-report/wa/seattle",
    note: "Current 1-bedroom rent data for ROI estimates.",
  },
  {
    label: "Washington L&I — Contractor verification",
    url: "https://lni.wa.gov/",
    note: "License verification for any Seattle ADU/DADU builder.",
  },
];

export default function SeattleAduCostPage() {
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
    headline: "How Much Does a DADU Cost in Seattle? (2026 ADU Guide)",
    datePublished: "2026-06-14",
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ADUVerified", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}` },
    description: "DADUs in Seattle cost $250,000-$650,000 in 2026; garage conversions $90,000-$180,000. ADUniverse pre-approved program, soft costs, ROI, and sourced data.",
  };

  return (
    <ContentPage
      kicker="Seattle · DADU cost guide"
      title={<>How much does a DADU cost in <em>Seattle?</em> (2026)</>}
      intro="Seattle is the most expensive Pacific Northwest ADU market, but its ADUniverse pre-approved DADU program meaningfully cuts both cost and permitting time. Here's what to expect."
      crumbs={[{ label: "Seattle", href: PAGE_PATH }, { label: "DADU cost", href: PAGE_PATH }]}
      lastReviewed={LAST_REVIEWED}
    >
      <section aria-labelledby="quick-answer" className="border border-rule bg-paper-soft px-6 py-6 mb-12">
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">Quick answer</h2>
        <p className="text-base text-ink leading-relaxed">
          In 2026, building a <strong>detached ADU (DADU) in Seattle</strong> typically costs{" "}
          <strong>$250,000–$450,000</strong> for mid-grade builds — pushing to <strong>$650,000</strong> for premium
          designs in tight inner-city lots. <strong>Garage conversions</strong> run{" "}
          <strong>$90,000–$180,000</strong>.{" "}
          <strong>Soft costs</strong> add <strong>$18,000–$40,000</strong> on top, but Seattle&apos;s{" "}
          <strong>ADUniverse pre-approved program</strong> can cut both cost and timeline meaningfully.
        </p>
      </section>

      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want real cost estimates for your specific Seattle lot? Share your project once and we&apos;ll connect you
          with up to three local DADU builders. Free, no obligation.
        </p>
        <Link href="/?state=wa#lead-form" className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Seattle DADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Cost breakdown by build type</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Total project costs in 2026 Seattle — hard construction plus typical soft costs — for a mid-finish build.
          Capitol Hill, Queen Anne, and Ballard push to the top of each range due to lot constraints and labor demand.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule text-left text-ink-muted font-mono text-xs">
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Build type</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Typical size</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Total cost</th>
                <th className="py-3 font-normal uppercase tracking-wider">Per sqft</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              <tr><td className="py-4 pr-4 text-ink font-medium">Detached ADU (DADU)</td><td className="py-4 pr-4 text-ink-soft">600–1,200 sqft</td><td className="py-4 pr-4 text-ink-soft">$250K–$650K</td><td className="py-4 text-ink-soft">$320–$550</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conversion</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$90K–$180K</td><td className="py-4 text-ink-soft">$230–$370</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Attached ADU</td><td className="py-4 pr-4 text-ink-soft">500–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$210K–$380K</td><td className="py-4 text-ink-soft">$300–$420</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Basement conversion</td><td className="py-4 pr-4 text-ink-soft">500–900 sqft</td><td className="py-4 pr-4 text-ink-soft">$120K–$240K</td><td className="py-4 text-ink-soft">$220–$340</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Prefab / modular</td><td className="py-4 pr-4 text-ink-soft">400–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$170K–$320K</td><td className="py-4 text-ink-soft">$260–$370</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">ADUniverse — Seattle&apos;s pre-approved DADU program</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Seattle&apos;s <strong>ADUniverse</strong> program offers a curated catalog of DADU designs from local
          architects that have been pre-approved by SDCI for code compliance. Picking an ADUniverse plan dramatically
          accelerates permitting — typical projects move through plan check in{" "}
          <strong>2–6 weeks</strong> instead of the usual <strong>6–12 weeks</strong>.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Cost savings stack: $5K–$15K saved on design fees (you&apos;re skipping the custom architecture phase) plus
          carrying-cost reductions from faster permitting (less interest on construction loans, fewer months of soft
          rent). Total typical savings: <strong>$10,000–$20,000</strong> + <strong>4–6 weeks</strong>.
        </p>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          The trade-off: ADUniverse plans are pre-approved as designed and can&apos;t be modified. Tight Seattle lots
          with unusual access, slope, or constraints may not fit any catalog design.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Hard costs vs. soft costs</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          On a typical Seattle DADU project, <strong>soft costs are $18,000–$40,000</strong> on top of construction —
          one of the higher soft-cost ranges in the Pacific Northwest due to Seattle&apos;s SDCI permit fees.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-sage-600 mb-3">Hard costs</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Site prep, excavation, foundation</li>
              <li>· Framing, roof, exterior</li>
              <li>· Plumbing, electrical, HVAC</li>
              <li>· Insulation, drywall, paint</li>
              <li>· Cabinets, counters, appliances</li>
              <li>· Flooring, fixtures, finishes</li>
            </ul>
          </div>
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-terracotta-600 mb-3">Soft costs (Seattle)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Design / architectural plans: $10K–$22K</li>
              <li>· Structural & energy engineering: $2K–$5K</li>
              <li>· SDCI plan check + permit: $8K–$18K</li>
              <li>· Trade permits (electric / plumb / mech): $1.5K–$4K</li>
              <li>· Utility hookups (SCL / SPU): $0–$10K</li>
              <li>· Survey, soils, contingency: $2K–$6K</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">ROI — what a Seattle DADU returns</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          1-bedroom DADUs in Seattle typically rent for <strong>$1,800–$2,500/month</strong> in 2026 — Capitol Hill,
          Ballard, Queen Anne, Wallingford top the range. The premium over apartments is meaningful (privacy, yard,
          standalone) but high Seattle construction costs mean cash-on-cash returns are modest.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">Sample ROI — $325K DADU 800 sqft</p>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            <li>· Construction cost: <span className="text-ink font-medium">$325,000</span></li>
            <li>· Gross rent (1BR @ $2,200/mo): <span className="text-ink font-medium">$26,400/yr</span></li>
            <li>· Net rental income after expenses: <span className="text-ink font-medium">~$20,500/yr</span></li>
            <li>· Cash-on-cash return: <span className="text-ink font-medium">~6.3%</span></li>
            <li>· Property value lift: <span className="text-ink font-medium">$175K–$275K</span></li>
            <li>· Approx. rental payback: <span className="text-ink font-medium">13–16 years</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">How to lower the cost</h2>
        <ol className="space-y-5 max-w-prose">
          <li><p className="text-ink font-medium">1. Use an ADUniverse pre-approved plan ($10K–$20K + 4–6 weeks saved)</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Highest-leverage Seattle move. Pick from the catalog and skip custom architecture.</p></li>
          <li><p className="text-ink font-medium">2. Consider basement or garage conversion</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">$90K–$240K vs $250K+ for new DADU. Big caveat: older Seattle homes often need significant work to make basements code-compliant.</p></li>
          <li><p className="text-ink font-medium">3. Get 3+ written bids</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Seattle builder bids vary 20–40% for identical scopes.</p></li>
          <li><p className="text-ink font-medium">4. Keep finishes mid-grade, not premium</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Premium finishes add 15–20% to hard cost but rarely add proportional rent.</p></li>
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">When Seattle DADU costs go up unexpectedly</h2>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Tight lots + alley-only access.</strong> Common across central Seattle. Restricted equipment access slows builds 1–3 months and adds 5–15% to construction.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Sloped / hillside lots.</strong> Common in Magnolia, West Seattle, parts of Queen Anne. Retaining walls + deeper foundations add $15K–$50K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Tree protection.</strong> Seattle&apos;s tree-protection ordinance can constrain footprint or require certified arborist plans. Add $3K–$10K + design rework.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Old service panel.</strong> Pre-1985 Seattle City Light services often need upgrade for DADU panel. Add $4K–$12K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Long sewer runs.</strong> Deep Seattle lots may need new sewer laterals to reach the DADU. Add $8K–$20K.</li>
        </ul>
      </section>

      <section className="mt-12 border-t border-rule pt-8">
        <p className="kicker text-terracotta-600 mb-4">Sources</p>
        <ul className="space-y-3">
          {SOURCES.map((s) => (
            <li key={s.url} className="text-sm text-ink-soft leading-relaxed">
              <a href={s.url} target="_blank" rel="noopener" className="text-sage-600 underline-grow font-medium">{s.label} ↗</a>
              <span className="block text-ink-muted text-xs mt-1">{s.note}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-ink-muted">
          Last reviewed: {LAST_REVIEWED}. Cost ranges are 2026 estimates and shift with materials prices, labor markets,
          and lot conditions. Always verify with the official source and get written bids before making decisions.
        </p>
      </section>

      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">Ready for real numbers on your Seattle lot?</p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Share your project once and we&apos;ll connect you with up to three Seattle DADU builders who know SDCI
          permitting and the ADUniverse process. Free, no obligation.
        </p>
        <Link href="/?state=wa#lead-form" className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Seattle DADU builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also our{" "}
          <Link href="/tools/adu-cost-calculator" className="text-sage-600 underline-grow">free ADU cost calculator</Link>{" "}
          or the <Link href="/washington" className="text-sage-600 underline-grow">Washington ADU guide</Link>.
        </p>
      </div>

      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">Seattle DADU/ADU cost — common questions</h2>
        <div className="divide-y divide-rule">
          {FAQS.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="display-sm text-lg text-ink">{f.q}</h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed max-w-prose">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <JsonLd data={faqJsonLd} />
      <JsonLd data={articleJsonLd} />
    </ContentPage>
  );
}
