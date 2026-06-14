import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/austin/adu-cost";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "How Much Does an ADU Cost in Austin? (2026 Guide)",
  description:
    "Detached ADUs in Austin run $150K–$300K in 2026; garage conversions $40K–$200K. Austin HOME Initiative reform makes ADU permits easier than ever. Full breakdown.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "How Much Does an ADU Cost in Austin? (2026 Guide)",
    description:
      "Austin ADUs $150K–$300K, garage conversions $40K–$200K. HOME Initiative + lower Texas labor costs. Full breakdown and ROI.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build an ADU in Austin in 2026?",
    a: "In 2026, a detached ADU in Austin typically costs $150,000–$300,000 all-in for mid-grade builds. Garage conversions span a wide range — $40,000–$70,000 for basic conversions, $70,000–$120,000 mid-range, and $120,000–$200,000+ for full ADU-grade builds with bathroom and kitchenette. Austin is a low-cost ADU market by national standards thanks to Texas's competitive construction labor.",
  },
  {
    q: "What's the HOME Initiative and how does it help ADU homeowners?",
    a: "Austin's HOME Initiative (Home Options for Middle-Income Empowerment) is the city's recent zoning reform that overhauled how residential density works. For ADU owners, HOME meaningfully streamlined the permitting process — fewer setback and lot-size restrictions, faster review timelines, and broader eligibility for which lots can host an ADU. It's the single biggest reason Austin moved from a difficult ADU market to a friendly one.",
  },
  {
    q: "What's the cheapest type of ADU to build in Austin?",
    a: "A basic garage conversion (insulation, drywall, flooring, lighting only — without bathroom or kitchenette) runs $40,000–$70,000 in Austin. Adding HVAC, plumbing for a bathroom, and a kitchenette pushes you to $70,000–$120,000 — still cheap by California standards. Full ADU-grade garage conversions with separate entry, full kitchen, and full bath run $120,000–$200,000+.",
  },
  {
    q: "What about a detached garage — is it cheaper to convert?",
    a: "Detached garages cost 20–30% more to convert than attached garages because you need to run new utility lines underground to the ADU — water, sewer, electrical, and gas if applicable. That utility trenching adds $8,000–$25,000 on top of construction.",
  },
  {
    q: "What permit fees should I expect in Austin?",
    a: "Austin ADU permit fees typically total $6,000–$16,000 — city permits run $2,000–$5,000, plus trade permits (electrical/plumbing/mechanical) and impact fees. Plan check is included in the building permit fee. Austin Energy and Austin Water charges may apply if utility upgrades are needed.",
  },
  {
    q: "How much rent can a 1-bedroom ADU in Austin get?",
    a: "1-bedroom ADUs (500–700 sqft) in Central or East Austin typically rent for $1,600–$2,200/month in 2026. South Austin and outer neighborhoods run lower at $1,200–$1,800. Austin's rental market cooled from 2021–2022 peaks but remains stable thanks to ongoing tech-economy hiring.",
  },
  {
    q: "What's the ROI on a detached ADU in Austin?",
    a: "On a $200,000 detached ADU renting at $1,900/month, annual net rental income runs roughly $18,000 after expenses — a cash-on-cash return of about 9%. Property value typically lifts $90,000–$150,000. Austin's combination of low build costs and stable rents produces some of the most competitive ADU ROI in the country.",
  },
  {
    q: "Do I need a contractor licensed in Texas specifically?",
    a: "Texas doesn't have a statewide general contractor license, but Austin requires contractors to register with the city for residential work. Always verify the contractor carries general liability insurance ($1M+ recommended), workers' comp for their crew, and check Better Business Bureau and Google reviews. Many Texas-specialty trades (electrical, plumbing, HVAC) do require state licensing — verify those at tdlr.texas.gov.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "City of Austin — Accessory Dwelling Units",
    url: "https://www.austintexas.gov/department/accessory-dwelling-units",
    note: "Official Austin ADU permitting information.",
  },
  {
    label: "City of Austin — HOME Initiative",
    url: "https://www.austintexas.gov/department/home",
    note: "Austin's zoning reform that streamlined ADU permits.",
  },
  {
    label: "Apartment List — Austin Rent Report",
    url: "https://www.apartmentlist.com/rent-report/tx/austin",
    note: "Current 1-bedroom rent data for ROI estimates.",
  },
  {
    label: "Texas Department of Licensing and Regulation (TDLR)",
    url: "https://www.tdlr.texas.gov/",
    note: "Trade license verification for electricians, plumbers, HVAC.",
  },
];

export default function AustinAduCostPage() {
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
    headline: "How Much Does an ADU Cost in Austin? (2026 Guide)",
    datePublished: "2026-06-14",
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ADUVerified", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}` },
    description: "ADUs in Austin cost $150,000-$300,000 in 2026; garage conversions $40,000-$200,000. HOME Initiative, soft costs, ROI, and sourced data.",
  };

  return (
    <ContentPage
      kicker="Austin · ADU cost guide"
      title={<>How much does an ADU cost in <em>Austin?</em> (2026)</>}
      intro="Austin is one of the most cost-competitive ADU markets in the country — and the city's HOME Initiative zoning reform made permitting dramatically easier. Here's what to expect from build through ROI."
      crumbs={[{ label: "Austin", href: PAGE_PATH }, { label: "ADU cost", href: PAGE_PATH }]}
      lastReviewed={LAST_REVIEWED}
    >
      <section aria-labelledby="quick-answer" className="border border-rule bg-paper-soft px-6 py-6 mb-12">
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">Quick answer</h2>
        <p className="text-base text-ink leading-relaxed">
          In 2026, building a <strong>detached ADU in Austin</strong> typically costs{" "}
          <strong>$150,000–$300,000</strong> all-in for mid-grade builds.{" "}
          <strong>Garage conversions</strong> span <strong>$40,000–$200,000</strong>, depending on how thoroughly you
          finish them out. Austin is a low-cost ADU market — Texas labor runs 25–30% lower than coastal California.{" "}
          <strong>Soft costs</strong> add <strong>$10,000–$22,000</strong> on top of construction.
        </p>
      </section>

      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want real cost estimates for your specific Austin lot? Share your project once and we&apos;ll connect you
          with up to three local ADU builders. Free, no obligation.
        </p>
        <Link href="/?state=tx#lead-form" className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Austin ADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Cost breakdown by build type</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Total project costs in 2026 Austin — hard construction plus typical soft costs — for a mid-finish build.
          Central and East Austin push to the top of each range due to lot constraints and labor demand. Garage
          conversion cost varies more than other markets depending on how thoroughly finished out the unit is.
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
              <tr><td className="py-4 pr-4 text-ink font-medium">Detached ADU</td><td className="py-4 pr-4 text-ink-soft">500–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$150K–$300K</td><td className="py-4 text-ink-soft">$220–$350</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conv (basic)</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$40K–$70K</td><td className="py-4 text-ink-soft">$100–$160</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conv (mid)</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$70K–$120K</td><td className="py-4 text-ink-soft">$160–$260</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conv (full ADU)</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$120K–$200K+</td><td className="py-4 text-ink-soft">$260–$400+</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Prefab / modular</td><td className="py-4 pr-4 text-ink-soft">400–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$110K–$220K</td><td className="py-4 text-ink-soft">$200–$280</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-prose">
          Detached garages need utility lines run underground to the ADU — that adds 20–30% to conversion cost ($8K–$25K)
          versus attached garages where utilities are nearby.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">The HOME Initiative — Austin&apos;s ADU friend</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Austin&apos;s <strong>HOME Initiative</strong> (Home Options for Middle-Income Empowerment) is the city&apos;s
          recent zoning reform that overhauled how residential density works. For ADU homeowners specifically, HOME:
        </p>
        <ul className="space-y-2 max-w-prose text-base text-ink-soft mb-4">
          <li>· <strong className="text-ink">Reduced minimum lot sizes</strong> needed to allow an ADU</li>
          <li>· <strong className="text-ink">Loosened setback requirements</strong> — more buildable area on tight lots</li>
          <li>· <strong className="text-ink">Streamlined the review process</strong> — fewer hearings, faster decisions</li>
          <li>· <strong className="text-ink">Expanded eligibility</strong> — most single-family lots can now legally host an ADU</li>
        </ul>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose">
          The practical effect: Austin ADU permits in 2026 are dramatically easier than even 2–3 years ago. Combined
          with low Texas construction costs, Austin has become one of the highest-ROI ADU markets in the country.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Hard costs vs. soft costs</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          On a typical Austin ADU project, <strong>soft costs are $10,000–$22,000</strong> on top of construction —
          modest by national standards thanks to lower professional fees and a streamlined permitting process.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-sage-600 mb-3">Hard costs</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Site prep, slab foundation (most common)</li>
              <li>· Framing, roof, exterior (stucco or siding)</li>
              <li>· Plumbing, electrical, HVAC (oversized AC)</li>
              <li>· Insulation, drywall, paint</li>
              <li>· Cabinets, counters, appliances</li>
              <li>· Flooring, fixtures, finishes</li>
            </ul>
          </div>
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-terracotta-600 mb-3">Soft costs (Austin)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Design / architectural plans: $5K–$12K</li>
              <li>· Structural & energy engineering: $1.5K–$3K</li>
              <li>· City permits + plan check: $2K–$5K</li>
              <li>· Trade sub-permits: $1K–$3K</li>
              <li>· Impact fees: $0–$8K</li>
              <li>· Utility hookups (Austin Energy / Water): $0–$8K</li>
              <li>· Survey, soils, contingency: $1.5K–$3K</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">ROI — what an Austin ADU returns</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          1-bedroom ADUs (500–700 sqft) in Central or East Austin typically rent for{" "}
          <strong>$1,600–$2,200/month</strong> in 2026. South Austin and outer neighborhoods run lower at{" "}
          <strong>$1,200–$1,800</strong>. Combined with low build costs, Austin produces some of the most competitive
          ADU ROI in the country.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">Sample ROI — $200K detached 700 sqft ADU</p>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            <li>· Construction cost: <span className="text-ink font-medium">$200,000</span></li>
            <li>· Gross rent (1BR @ $1,900/mo): <span className="text-ink font-medium">$22,800/yr</span></li>
            <li>· Net rental income after expenses: <span className="text-ink font-medium">~$18,000/yr</span></li>
            <li>· Cash-on-cash return: <span className="text-ink font-medium">~9.0%</span></li>
            <li>· Property value lift: <span className="text-ink font-medium">$90K–$150K</span></li>
            <li>· Approx. rental payback: <span className="text-ink font-medium">11–13 years</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">How to lower the cost</h2>
        <ol className="space-y-5 max-w-prose">
          <li><p className="text-ink font-medium">1. Stick to a slab foundation (Austin standard)</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Pier-and-beam or post-tension foundations add $8K–$25K. Use slab unless soil testing requires otherwise.</p></li>
          <li><p className="text-ink font-medium">2. Choose attached garage over detached for conversions</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">No underground utility trenching needed — saves $8K–$25K.</p></li>
          <li><p className="text-ink font-medium">3. Get 3+ written bids</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Austin builder bids vary 25–40% for identical scopes.</p></li>
          <li><p className="text-ink font-medium">4. Use a prefab/modular vendor</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">$110K–$220K all-in with much faster timelines. Several Texas-based prefab vendors serve the Austin market.</p></li>
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">When Austin ADU costs go up unexpectedly</h2>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Tree protection.</strong> Austin&apos;s heritage tree ordinance can constrain footprint or require certified arborist plans. Add $3K–$10K + possible design rework.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Expansive clay soils.</strong> Common across Austin, sometimes requiring post-tension foundations. Add $5K–$15K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Detached garage utility runs.</strong> If converting a detached garage, expect $8K–$25K in underground utility trenching.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Flood zone.</strong> Properties near creeks or in FEMA flood zones face elevated foundation requirements. Add $10K–$25K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">HOA restrictions.</strong> Austin HOAs can impose conditions HOME Initiative doesn&apos;t override. Check CC&amp;Rs before designing.</li>
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
          markets. Always verify HOME Initiative implementation and current fees with the City of Austin before making
          decisions.
        </p>
      </section>

      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">Ready for real numbers on your Austin lot?</p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Share your project once and we&apos;ll connect you with up to three Austin ADU builders who know HOME and the
          city permitting process. Free, no obligation.
        </p>
        <Link href="/?state=tx#lead-form" className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Austin ADU builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also our{" "}
          <Link href="/tools/adu-cost-calculator" className="text-sage-600 underline-grow">free ADU cost calculator</Link>{" "}
          or the <Link href="/texas" className="text-sage-600 underline-grow">Texas ADU guide</Link>.
        </p>
      </div>

      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">Austin ADU cost — common questions</h2>
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
