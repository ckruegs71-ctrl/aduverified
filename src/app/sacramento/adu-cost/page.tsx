import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/sacramento/adu-cost";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "How Much Does an ADU Cost in Sacramento? (2026 Guide)",
  description:
    "Detached ADUs in Sacramento run $200K–$350K in 2026; garage conversions $75K–$140K. Lower than LA or SD. Full breakdown with the Permit-Ready ADU program, soft costs, and ROI.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "How Much Does an ADU Cost in Sacramento? (2026 Guide)",
    description:
      "Sacramento detached ADUs $200K–$350K, garage conversions $75K–$140K. Permit-Ready ADU program, soft costs, and ROI in 2026.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build an ADU in Sacramento in 2026?",
    a: "In 2026, a detached ADU in Sacramento typically costs $200,000–$350,000 all-in ($250–$400 per square foot). Garage conversions run $75,000–$140,000. Sacramento is meaningfully cheaper than LA or San Diego — labor markets are less squeezed, and the city's permit-ready plans accelerate the cheapest path to a finished unit.",
  },
  {
    q: "What's the Permit-Ready ADU Program?",
    a: "Sacramento's Permit-Ready ADU Program offers a catalog of pre-approved ADU designs that homeowners can purchase for use without going through full plan check. Picking a permit-ready plan typically saves $8,000–$15,000 in design and plan-check costs, plus 2–4 weeks off plan check time. Plans cover detached and attached configurations across multiple sizes.",
  },
  {
    q: "Are ADU fees waived for smaller units in Sacramento?",
    a: "Yes — 2026 California HCD rules waive most local impact fees, water/sewer capacity charges, and connection fees for ADUs under 750 square feet across all California cities, including Sacramento. Under 500 square feet, school facility fees also go away. Total potential savings: $5,000–$15,000 versus building over 750 sqft.",
  },
  {
    q: "How much rent can a 1-bedroom ADU in Sacramento get?",
    a: "1-bedroom ADUs in Sacramento typically rent for $1,500–$2,200/month in 2026, depending on neighborhood. East Sacramento, Land Park, and Midtown command the top of the range; Natomas, Arden-Arcade, and outer suburbs run lower. The market is less premium than coastal California but more stable.",
  },
  {
    q: "What's the ROI on a detached ADU in Sacramento?",
    a: "On a $235,000 detached ADU renting at $1,900/month, annual net rental income runs roughly $18,500 after expenses — a cash-on-cash return of about 7.9%. Property value typically lifts $100,000–$160,000. Lower absolute returns than coastal CA but better cash-on-cash percentages on smaller builds.",
  },
  {
    q: "How long does ADU construction take in Sacramento?",
    a: "Plan on 10–14 months for a detached ADU: 2–3 months for design, 2–4 months for permitting (faster with Permit-Ready), and 6–8 months for construction. Sacramento processes ADU applications under California's 60-day ministerial review rule (no public hearings) so permits move faster than in LA.",
  },
  {
    q: "Are permit fees lower in Sacramento than other California cities?",
    a: "Yes, somewhat. Sacramento ADU permit fees typically run $5,000–$15,000 total versus $8,000–$25,000+ in LA or San Diego — partly because Sacramento has lower impact fees and partly because the city actively streamlines the ADU permit process. The 2026 fee waivers under 750 sqft apply equally across California.",
  },
  {
    q: "Can I get a loan to build an ADU in Sacramento?",
    a: "Yes. HELOC, cash-out refinance, ADU-specific loans (RenoFi, etc.), CalHFA's ADU Grant Program (up to $40,000 for low- and moderate-income homeowners), and lender-direct ADU financing from local credit unions like Golden 1 are all common Sacramento options.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "City of Sacramento — Permit-Ready ADU Program",
    url: "https://www.cityofsacramento.gov/community-development/planning/current-planning/accessory-dwelling-units",
    note: "Official permit-ready plan catalog and process.",
  },
  {
    label: "California HCD — 2026 ADU Handbook",
    url: "https://www.hcd.ca.gov/community-development/accessory-dwelling-units",
    note: "Statewide fee-waiver rules (under 750 sqft) effective 2026.",
  },
  {
    label: "Apartment List — Sacramento Rent Report",
    url: "https://www.apartmentlist.com/rent-report/ca/sacramento",
    note: "Current 1-bedroom rent data for ROI estimates.",
  },
  {
    label: "Contractors State License Board (CSLB)",
    url: "https://www.cslb.ca.gov/",
    note: "License verification for any Sacramento ADU builder.",
  },
];

export default function SacramentoAduCostPage() {
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
    headline: "How Much Does an ADU Cost in Sacramento? (2026 Guide)",
    datePublished: "2026-06-14",
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ADUVerified", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}` },
    description: "Detached ADUs in Sacramento cost $200,000-$350,000 in 2026; garage conversions $75,000-$140,000. Permit-Ready ADU program, soft costs, ROI, and sourced data.",
  };

  return (
    <ContentPage
      kicker="Sacramento · Cost guide"
      title={<>How much does an ADU cost in <em>Sacramento?</em> (2026)</>}
      intro="Sacramento is one of the most cost-favorable California ADU markets in 2026 — moderate labor costs, an active Permit-Ready ADU program, and the state's 60-day ministerial review rule. Here's what to expect."
      crumbs={[{ label: "Sacramento", href: PAGE_PATH }, { label: "ADU cost", href: PAGE_PATH }]}
      lastReviewed={LAST_REVIEWED}
    >
      <section aria-labelledby="quick-answer" className="border border-rule bg-paper-soft px-6 py-6 mb-12">
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">Quick answer</h2>
        <p className="text-base text-ink leading-relaxed">
          In 2026, building a <strong>detached ADU in Sacramento</strong> typically costs{" "}
          <strong>$200,000–$350,000</strong> all-in (about <strong>$250–$400/sqft</strong>), while a{" "}
          <strong>garage conversion</strong> runs <strong>$75,000–$140,000</strong>. Sacramento is meaningfully cheaper
          than LA or San Diego thanks to less-squeezed labor markets.{" "}
          <strong>Soft costs</strong> — design, plan check, building permit, school fees, utility hookups — typically
          add <strong>$12,000–$28,000</strong> on top of hard construction.
        </p>
      </section>

      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want real cost estimates for your specific Sacramento lot? Share your project once and we&apos;ll connect you
          with up to three local ADU builders. Free, no obligation.
        </p>
        <Link href="/?state=ca#lead-form" className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Sacramento ADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Cost breakdown by build type</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Total project costs in 2026 Sacramento — hard construction plus typical soft costs — for a mid-finish build.
          Midtown / East Sac historic neighborhoods push to the top of each range due to lot constraints and design review.
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
              <tr><td className="py-4 pr-4 text-ink font-medium">Detached ADU</td><td className="py-4 pr-4 text-ink-soft">600–1,200 sqft</td><td className="py-4 pr-4 text-ink-soft">$200K–$350K</td><td className="py-4 text-ink-soft">$250–$400</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conversion</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$75K–$140K</td><td className="py-4 text-ink-soft">$150–$300</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Attached ADU</td><td className="py-4 pr-4 text-ink-soft">500–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$185K–$310K</td><td className="py-4 text-ink-soft">$225–$340</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Junior ADU (JADU)</td><td className="py-4 pr-4 text-ink-soft">≤500 sqft</td><td className="py-4 pr-4 text-ink-soft">$80K–$140K</td><td className="py-4 text-ink-soft">$170–$300</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Prefab / modular</td><td className="py-4 pr-4 text-ink-soft">400–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$130K–$260K</td><td className="py-4 text-ink-soft">$220–$320</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Permit-Ready ADU Program — Sacramento&apos;s big lever</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Sacramento&apos;s <strong>Permit-Ready ADU Program</strong> offers a catalog of pre-approved ADU designs.
          Picking one skips most of the architectural plan check — only site-specific factors (zoning, foundation,
          utility connections) get reviewed. Plans cover detached and attached configurations from compact 400 sqft
          studios up through 1,200 sqft 3-bedroom designs.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Combined with Sacramento&apos;s already-fast ministerial review (California requires a 60-day approval window
          for ADU applications) and the 2026 HCD fee waivers for sub-750 sqft units, permit-ready homeowners typically
          see total savings of <strong>$13,000–$30,000</strong> versus a fully custom build, plus{" "}
          <strong>2–3 months</strong> shaved off the timeline.
        </p>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          The trade-off: permit-ready plans are pre-approved as designed and can&apos;t be modified. If your lot has
          unusual constraints or you want a specific architectural style, custom is still the path.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Hard costs vs. soft costs</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          On a typical Sacramento ADU project, <strong>soft costs are $12,000–$28,000</strong> on top of construction —
          meaningfully lower than LA or San Diego due to lower impact fees and faster permitting.
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
            <p className="kicker text-terracotta-600 mb-3">Soft costs (Sac)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Design / architectural plans: $6K–$15K</li>
              <li>· Structural & energy engineering: $1.5K–$3.5K</li>
              <li>· Plan check fees: $1.5K–$4K</li>
              <li>· Building permit: $2.5K–$6K</li>
              <li>· School fees (≥500 sqft): $1.5K–$4K</li>
              <li>· Utility hookups (SMUD / SCWA / sewer): $0–$10K</li>
              <li>· Survey, soils, contingency: $1.5K–$4K</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">ROI — what a Sacramento ADU returns</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Standalone backyard ADU 1-bedrooms in Sacramento typically rent for{" "}
          <strong>$1,500–$2,200/month</strong> in 2026. East Sac, Land Park, Midtown command the top; outer
          neighborhoods lower. Lower rent than coastal CA, but lower build costs too — cash-on-cash returns are
          competitive.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">Sample ROI — $235K detached 750 sqft ADU</p>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            <li>· Construction cost: <span className="text-ink font-medium">$235,000</span></li>
            <li>· Gross rent (1BR @ $1,900/mo): <span className="text-ink font-medium">$22,800/yr</span></li>
            <li>· Net rental income after expenses: <span className="text-ink font-medium">~$18,500/yr</span></li>
            <li>· Cash-on-cash return: <span className="text-ink font-medium">~7.9%</span></li>
            <li>· Property value lift: <span className="text-ink font-medium">$100K–$160K</span></li>
            <li>· Approx. rental payback: <span className="text-ink font-medium">11–13 years</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">How to lower the cost</h2>
        <ol className="space-y-5 max-w-prose">
          <li><p className="text-ink font-medium">1. Use a Permit-Ready plan ($8K–$15K + 2–3 months saved)</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Highest-leverage Sacramento move.</p></li>
          <li><p className="text-ink font-medium">2. Stay under 750 sqft ($5K–$15K in fees saved)</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">2026 California rules waive impact + most utility connection fees under 750 sqft.</p></li>
          <li><p className="text-ink font-medium">3. Get 3+ written bids</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Sacramento builder bids vary 20–35% for identical scopes.</p></li>
          <li><p className="text-ink font-medium">4. Consider garage conversion</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">$75K–$140K vs $200K+ for new detached. Watch for older stucco-frame garage reinforcement needs ($8K–$20K).</p></li>
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">When Sacramento ADU costs go up unexpectedly</h2>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Historic preservation overlay.</strong> East Sac, Land Park, Curtis Park homes in designated districts trigger extra design review. Add 2–3 months + $4K–$8K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Old main panel.</strong> Many pre-1985 SMUD electrical panels need upgrade for ADU service. Add $3K–$8K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Long utility runs.</strong> Deep lots with distant existing utility lines add $5K–$15K in trenching.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Flood zone.</strong> Some Sacramento neighborhoods sit in FEMA flood zones requiring elevated foundations. Add $10K–$25K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Change orders mid-build.</strong> Typically billed at 15–25% above original line item.</li>
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
          Last reviewed: {LAST_REVIEWED}. Cost ranges are 2026 estimates and shift with materials prices and labor
          markets. Always verify with the official source and get written bids before making decisions.
        </p>
      </section>

      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">Ready for real numbers on your Sacramento lot?</p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Share your project once and we&apos;ll connect you with up to three Sacramento ADU builders who know
          Sacramento permitting and your neighborhood. Free, no obligation.
        </p>
        <Link href="/?state=ca#lead-form" className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Sacramento ADU builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also our{" "}
          <Link href="/tools/adu-cost-calculator" className="text-sage-600 underline-grow">free ADU cost calculator</Link>{" "}
          or the <Link href="/california" className="text-sage-600 underline-grow">California ADU guide</Link>.
        </p>
      </div>

      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">Sacramento ADU cost — common questions</h2>
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
