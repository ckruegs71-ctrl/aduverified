import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/phoenix/adu-cost";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "How Much Does a Casita / ADU Cost in Phoenix? (2026 Guide)",
  description:
    "Detached casitas (ADUs) in Phoenix run $150K–$250K in 2026; garage conversions $80K–$150K. Arizona HB 2720 newly mandates ADUs across Phoenix metro. Full breakdown.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "How Much Does a Casita / ADU Cost in Phoenix? (2026 Guide)",
    description:
      "Phoenix casitas $150K–$250K, garage conversions $80K–$150K, premium up to $400K. Arizona HB 2720 newly mandates ADUs.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build a casita / ADU in Phoenix in 2026?",
    a: "In 2026, a detached casita in Phoenix typically costs $150,000–$250,000 mid-range, with premium custom builds running $250,000–$400,000+. Garage conversions cost $80,000–$150,000. Phoenix is one of the cheapest ADU markets in the US — labor and materials run roughly 25–30% lower than coastal California.",
  },
  {
    q: "What does Arizona's HB 2720 do for ADUs?",
    a: "Arizona's HB 2720 (effective January 2025) requires every Arizona city with a population over 75,000 to allow at least one detached and one attached ADU on every single-family residential lot. That covers Phoenix, Scottsdale, Mesa, Gilbert, Chandler, Tempe, and Glendale. The law also limits cities' ability to impose owner-occupancy requirements, off-street parking mandates, and aesthetic conditions on ADUs.",
  },
  {
    q: "What's the difference between a casita and an ADU?",
    a: "In Arizona usage, casita is the common term for what California, Oregon, and Washington call a detached ADU. Functionally they're the same — a standalone second dwelling unit on a single-family lot with its own kitchen and bathroom. The casita term reflects Phoenix's Southwest cultural roots; the legal term in HB 2720 is ADU.",
  },
  {
    q: "What permit fees should I expect in Phoenix?",
    a: "Phoenix ADU permits typically run $5,000–$15,000 all-in including plan check, building permit, electrical/plumbing/mechanical sub-permits, and impact fees. Plan check + building permit alone is usually $2,500–$5,500. Impact fees vary by location and can add $5,000–$10,000+ — verify with the City of Phoenix's Permit Fee Calculator.",
  },
  {
    q: "How much rent can a 1-bedroom casita in Phoenix get?",
    a: "1-bedroom casitas in Phoenix typically rent for $1,400–$2,000/month in 2026, depending on neighborhood. Scottsdale, Arcadia, central Phoenix command the top of the range; outer Phoenix, Glendale, Mesa run lower. Phoenix's rental market has cooled from 2022 peaks but remains strong relative to Sun Belt peers.",
  },
  {
    q: "What's the ROI on a casita in Phoenix?",
    a: "On a $190,000 detached casita renting at $1,700/month, annual net rental income runs roughly $15,500 after expenses — a cash-on-cash return of about 8.2%. Property value typically lifts $80,000–$140,000. Phoenix's lower build costs mean cash-on-cash returns are competitive despite lower absolute rents.",
  },
  {
    q: "How long does casita construction take in Phoenix?",
    a: "Plan on 10–14 months for a detached casita: 2–3 months for design, 2–3 months for permitting (Phoenix is faster than coastal markets), and 6–8 months for construction. Garage conversions run 8–11 months total. Summer heat (June–September) can slow exterior work — many builders schedule around it.",
  },
  {
    q: "Do I need a contractor licensed in Arizona specifically?",
    a: "Yes — Arizona requires builders to hold an Arizona Registrar of Contractors (ROC) license. Verify the ROC number is active and check for complaints at azroc.gov before signing any contract. The license is state-level — any active ROC-licensed contractor can build in Phoenix.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "City of Phoenix — Accessory Dwelling Units",
    url: "https://www.phoenix.gov/pdd/development-applications/accessory-dwelling-units",
    note: "Official Phoenix ADU permitting information.",
  },
  {
    label: "Arizona HB 2720 — Statewide ADU mandate",
    url: "https://www.azleg.gov/legtext/56leg/2R/laws/0067.htm",
    note: "Statewide ADU permitting rules effective January 2025.",
  },
  {
    label: "Apartment List — Phoenix Rent Report",
    url: "https://www.apartmentlist.com/rent-report/az/phoenix",
    note: "Current 1-bedroom rent data for ROI estimates.",
  },
  {
    label: "Arizona Registrar of Contractors (ROC)",
    url: "https://roc.az.gov/",
    note: "License verification for any Phoenix ADU builder.",
  },
];

export default function PhoenixAduCostPage() {
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
    headline: "How Much Does a Casita / ADU Cost in Phoenix? (2026 Guide)",
    datePublished: "2026-06-14",
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ADUVerified", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}` },
    description: "Casitas / ADUs in Phoenix cost $150,000-$250,000 in 2026; garage conversions $80,000-$150,000. Arizona HB 2720, soft costs, ROI, and sourced data.",
  };

  return (
    <ContentPage
      kicker="Phoenix · Casita / ADU cost guide"
      title={<>How much does a casita cost in <em>Phoenix?</em> (2026)</>}
      intro="Phoenix is one of the cheapest ADU markets in the country. Combined with Arizona's new HB 2720 mandate making ADUs by-right on every single-family lot, 2026 is the strongest year yet to add a casita to your Phoenix property."
      crumbs={[{ label: "Phoenix", href: PAGE_PATH }, { label: "Casita cost", href: PAGE_PATH }]}
      lastReviewed={LAST_REVIEWED}
    >
      <section aria-labelledby="quick-answer" className="border border-rule bg-paper-soft px-6 py-6 mb-12">
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">Quick answer</h2>
        <p className="text-base text-ink leading-relaxed">
          In 2026, building a <strong>detached casita (ADU) in Phoenix</strong> typically costs{" "}
          <strong>$150,000–$250,000</strong> for mid-grade builds — premium custom builds run{" "}
          <strong>$250,000–$400,000+</strong>. <strong>Garage conversions</strong> run{" "}
          <strong>$80,000–$150,000</strong>. Per-square-foot costs range from{" "}
          <strong>$180 (basic)</strong> to <strong>$400+ (premium)</strong>.{" "}
          <strong>Soft costs</strong> add <strong>$10,000–$25,000</strong> on top.
        </p>
      </section>

      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want real cost estimates for your specific Phoenix lot? Share your project once and we&apos;ll connect you
          with up to three local casita builders. Free, no obligation.
        </p>
        <Link href="/?state=az#lead-form" className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Phoenix casita builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Cost breakdown by build type</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Total project costs in 2026 Phoenix — hard construction plus typical soft costs — for a mid-finish build.
          Scottsdale and Arcadia push to the top due to premium finish expectations and labor demand.
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
              <tr><td className="py-4 pr-4 text-ink font-medium">Detached casita (mid)</td><td className="py-4 pr-4 text-ink-soft">500–800 sqft</td><td className="py-4 pr-4 text-ink-soft">$150K–$250K</td><td className="py-4 text-ink-soft">$200–$300</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Detached casita (premium)</td><td className="py-4 pr-4 text-ink-soft">800–1,200 sqft</td><td className="py-4 pr-4 text-ink-soft">$250K–$400K+</td><td className="py-4 text-ink-soft">$300–$400+</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conversion</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$80K–$150K</td><td className="py-4 text-ink-soft">$180–$320</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Attached ADU</td><td className="py-4 pr-4 text-ink-soft">500–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$130K–$240K</td><td className="py-4 text-ink-soft">$220–$300</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Prefab / modular</td><td className="py-4 pr-4 text-ink-soft">400–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$110K–$220K</td><td className="py-4 text-ink-soft">$200–$280</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Arizona HB 2720 — the by-right ADU mandate</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Arizona&apos;s <strong>HB 2720</strong>, effective January 2025, fundamentally changed Phoenix ADU rules. The
          law requires every Arizona city with a population over <strong>75,000</strong> to allow at least one detached
          and one attached ADU on every single-family residential lot. That covers Phoenix, Scottsdale, Mesa, Gilbert,
          Chandler, Tempe, and Glendale — basically the entire Phoenix metro.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Critically, HB 2720 also limits cities&apos; ability to impose:
        </p>
        <ul className="space-y-2 max-w-prose text-base text-ink-soft mb-4">
          <li>· <strong className="text-ink">Owner-occupancy requirements</strong> (you don&apos;t have to live on-site)</li>
          <li>· <strong className="text-ink">Off-street parking mandates</strong> (no required ADU parking space)</li>
          <li>· <strong className="text-ink">Aesthetic conditions</strong> (matching main-house style, etc.)</li>
          <li>· <strong className="text-ink">Minimum lot sizes</strong> above what's required for the primary dwelling</li>
        </ul>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose">
          The practical effect: ADU permits in Phoenix are simpler and more predictable in 2026 than ever before. If
          you&apos;ve been waiting because you weren&apos;t sure your city allowed ADUs — it does now.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Hard costs vs. soft costs</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          On a typical Phoenix casita project, <strong>soft costs are $10,000–$25,000</strong> on top of construction —
          one of the lowest soft-cost loads in the country thanks to streamlined permitting.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-sage-600 mb-3">Hard costs</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Site prep, excavation, foundation</li>
              <li>· Framing, roof, exterior (stucco common)</li>
              <li>· Plumbing, electrical, HVAC (oversized for heat)</li>
              <li>· Insulation, drywall, paint</li>
              <li>· Cabinets, counters, appliances</li>
              <li>· Flooring, fixtures, finishes</li>
            </ul>
          </div>
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-terracotta-600 mb-3">Soft costs (Phoenix)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Design / architectural plans: $5K–$12K</li>
              <li>· Structural & energy engineering: $1.5K–$3.5K</li>
              <li>· Plan check + building permit: $2.5K–$5.5K</li>
              <li>· Trade sub-permits: $1K–$2.5K</li>
              <li>· Impact fees: $0–$10K</li>
              <li>· Utility hookups (APS / SRP / SWG): $0–$8K</li>
              <li>· Survey, soils, contingency: $1.5K–$3K</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">ROI — what a Phoenix casita returns</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          1-bedroom casitas in Phoenix typically rent for <strong>$1,400–$2,000/month</strong> in 2026. Scottsdale,
          Arcadia, central Phoenix top the range; outer Phoenix and West Valley lower. Lower absolute rent than coastal
          markets, but lower build costs keep cash-on-cash returns competitive.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">Sample ROI — $190K casita 600 sqft</p>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            <li>· Construction cost: <span className="text-ink font-medium">$190,000</span></li>
            <li>· Gross rent (1BR @ $1,700/mo): <span className="text-ink font-medium">$20,400/yr</span></li>
            <li>· Net rental income after expenses: <span className="text-ink font-medium">~$15,500/yr</span></li>
            <li>· Cash-on-cash return: <span className="text-ink font-medium">~8.2%</span></li>
            <li>· Property value lift: <span className="text-ink font-medium">$80K–$140K</span></li>
            <li>· Approx. rental payback: <span className="text-ink font-medium">12–14 years</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">How to lower the cost</h2>
        <ol className="space-y-5 max-w-prose">
          <li><p className="text-ink font-medium">1. Choose stucco-frame over premium materials ($15K–$30K saved)</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Stucco is the regional norm and dramatically cheaper than alternative exteriors.</p></li>
          <li><p className="text-ink font-medium">2. Pick a prefab/modular vendor</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Phoenix has multiple Sun Belt prefab vendors — $110K–$220K all-in with faster timelines.</p></li>
          <li><p className="text-ink font-medium">3. Get 3+ written bids</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Phoenix builder bids vary 25–40% for identical scopes — the spread is wider here than in California.</p></li>
          <li><p className="text-ink font-medium">4. Consider garage conversion</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">$80K–$150K vs $150K+ new build. Phoenix garages tend to be in better condition than older Pacific Northwest garages, so reinforcement costs are usually modest.</p></li>
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">When Phoenix casita costs go up unexpectedly</h2>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Oversized HVAC.</strong> Phoenix heat means HVAC is typically oversized vs other markets — but a properly-sized unit avoids 30%+ runtime premiums. Skimping here costs you long-term.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Foundation / soil issues.</strong> Phoenix expansive clay soils sometimes require post-tension or pier foundations. Add $5K–$15K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Summer construction delays.</strong> June–September heat slows exterior work and labor productivity. Budget 1–2 months of schedule buffer.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">HOA restrictions.</strong> Phoenix HOAs can impose aesthetic conditions that HB 2720 doesn&apos;t override. Check CC&amp;Rs before designing.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Impact fee surprises.</strong> Some Phoenix neighborhoods carry higher impact fees ($8K–$10K) than the metro average — confirm with city before designing to size.</li>
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
          markets. Always verify HB 2720 compliance and current fees with the City of Phoenix before making decisions.
        </p>
      </section>

      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">Ready for real numbers on your Phoenix lot?</p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Share your project once and we&apos;ll connect you with up to three Phoenix casita builders who know HB 2720
          and the city permitting process. Free, no obligation.
        </p>
        <Link href="/?state=az#lead-form" className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Phoenix casita builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also our{" "}
          <Link href="/tools/adu-cost-calculator" className="text-sage-600 underline-grow">free ADU cost calculator</Link>{" "}
          or the <Link href="/arizona" className="text-sage-600 underline-grow">Arizona ADU guide</Link>.
        </p>
      </div>

      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">Phoenix casita cost — common questions</h2>
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
