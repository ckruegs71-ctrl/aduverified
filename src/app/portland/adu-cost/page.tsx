import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/portland/adu-cost";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "How Much Does an ADU Cost in Portland? (2026 Guide)",
  description:
    "Detached ADUs in Portland run $180K–$280K in 2026; garage conversions $90K–$150K. Portland's SDC waiver for ADUs under 800 sqft expires 2026 — full breakdown, urgency, and ROI.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "How Much Does an ADU Cost in Portland? (2026 Guide)",
    description:
      "Portland detached ADUs $180K–$280K, garage conversions $90K–$150K. SDC waiver expires 2026 — file fast to save $7K–$12K.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build an ADU in Portland in 2026?",
    a: "In 2026, a detached ADU in Portland typically costs $180,000–$280,000 all-in ($260–$380 per square foot). Garage conversions run $90,000–$150,000. Portland is moderate cost for the West Coast — cheaper than Seattle, much cheaper than the California cities — but Oregon's SDC fees can add $10K–$25K on top if you build over 800 sqft.",
  },
  {
    q: "What's the Portland SDC waiver and why does it matter NOW?",
    a: "Portland waives System Development Charges (SDCs) — transportation, parks, water, sewer — for ADUs under 800 square feet. SDCs typically add $10,000–$25,000 to ADU project costs, so the waiver is a $7,000–$12,000 savings. The waiver is set to expire in 2026, meaning ADU applications filed after expiry will owe the full SDC. If you're on the fence, this is a clock that's running.",
  },
  {
    q: "What's the cheapest type of ADU to build in Portland?",
    a: "Garage conversions are usually cheapest in Portland at $90,000–$150,000 — you already have the foundation, walls, and roof. JADUs (carved out of existing main house) are similar at $80,000–$140,000 because they avoid new exterior construction. New detached ADUs cost the most at $180,000–$280,000.",
  },
  {
    q: "How much rent can a 1-bedroom ADU in Portland get?",
    a: "1-bedroom ADUs in Portland typically rent for $1,500–$2,100/month in 2026, depending on neighborhood. Inner SE, NW, and Pearl District command the top of the range; outer East Portland and outer SW run lower. Portland's rental market has been roughly flat for the past few years, so don't budget for aggressive rent growth.",
  },
  {
    q: "What's the ROI on a detached ADU in Portland?",
    a: "On a $215,000 detached ADU renting at $1,800/month, annual net rental income runs roughly $17,500 after expenses — a cash-on-cash return of about 8.1%. Property value typically lifts $110,000–$170,000. Portland's slower rent growth means the math depends more on the property value lift than aggressive rental yield.",
  },
  {
    q: "How long does ADU construction take in Portland?",
    a: "Plan on 12–16 months for a detached ADU: 2–4 months for design, 3–5 months for permitting through Portland's Bureau of Development Services (BDS), and 6–8 months for construction. Garage conversions run 9–13 months total. Older Portland inner-east neighborhoods (Hawthorne, Belmont) often add 1–2 months of historic review.",
  },
  {
    q: "Do I need a contractor licensed in Oregon specifically?",
    a: "Yes — Oregon requires builders to hold an Oregon Construction Contractors Board (CCB) license. Verify your builder's CCB number is active and check complaint history at oregon.gov/ccb before signing any contract. The license is state-level (not Portland-specific) and any active CCB-licensed contractor can build in Portland.",
  },
  {
    q: "What's Portland's HB 2001 and does it affect ADUs?",
    a: "Oregon's HB 2001 (2019) is the state's missing-middle housing law that eliminated single-family zoning in cities over 25,000. For ADU owners specifically, it means streamlined approvals and the right to build an ADU on virtually any residential lot. Portland implements HB 2001 through its Residential Infill Project, which also legalized triplexes and fourplexes on standard lots.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "Portland Bureau of Development Services — ADU permits",
    url: "https://www.portland.gov/bds/adu",
    note: "Official Portland ADU permitting information.",
  },
  {
    label: "Portland.gov — New Detached ADU Sample Fees",
    url: "https://www.portland.gov/ppd/residential-permitting/residential-projects/new-single-family-residence-and-new-adu-sample-fees",
    note: "City fee schedule including SDC waiver details and sample permit fees.",
  },
  {
    label: "Apartment List — Portland Rent Report",
    url: "https://www.apartmentlist.com/rent-report/or/portland",
    note: "Current 1-bedroom rent data for ROI estimates.",
  },
  {
    label: "Oregon Construction Contractors Board (CCB)",
    url: "https://www.oregon.gov/ccb/",
    note: "License verification for any Oregon ADU builder.",
  },
];

export default function PortlandAduCostPage() {
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
    headline: "How Much Does an ADU Cost in Portland? (2026 Guide)",
    datePublished: "2026-06-14",
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ADUVerified", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}` },
    description: "Detached ADUs in Portland cost $180,000-$280,000 in 2026; garage conversions $90,000-$150,000. Portland SDC waiver under 800 sqft expires 2026 — full breakdown.",
  };

  return (
    <ContentPage
      kicker="Portland · Cost guide"
      title={<>How much does an ADU cost in <em>Portland?</em> (2026)</>}
      intro="Portland is one of the West Coast's most ADU-friendly markets thanks to HB 2001. But its SDC fee waiver — worth $7K–$12K on smaller ADUs — is set to expire in 2026. Here's the math, the urgency, and the ROI."
      crumbs={[{ label: "Portland", href: PAGE_PATH }, { label: "ADU cost", href: PAGE_PATH }]}
      lastReviewed={LAST_REVIEWED}
    >
      <section aria-labelledby="quick-answer" className="border border-rule bg-paper-soft px-6 py-6 mb-12">
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">Quick answer</h2>
        <p className="text-base text-ink leading-relaxed">
          In 2026, building a <strong>detached ADU in Portland</strong> typically costs{" "}
          <strong>$180,000–$280,000</strong> all-in, while a <strong>garage conversion</strong> runs{" "}
          <strong>$90,000–$150,000</strong>. Per-square-foot costs range from about{" "}
          <strong>$200 (garage conversion)</strong> to <strong>$380 (premium detached)</strong>.{" "}
          <strong>Portland&apos;s SDC waiver</strong> for ADUs under 800 sqft saves{" "}
          <strong>$7,000–$12,000</strong> — but it expires in 2026.
        </p>
      </section>

      {/* Urgent SDC waiver callout */}
      <section className="border-2 border-terracotta-600 bg-paper-soft px-6 py-5 mb-12">
        <p className="kicker text-terracotta-600 mb-2">⚠ Time-sensitive</p>
        <p className="text-base text-ink leading-relaxed">
          <strong>The SDC waiver expires in 2026.</strong> If you file your ADU application after expiry, you&apos;ll
          owe the full System Development Charges — $10K–$25K on top of construction. For a 700 sqft ADU under the
          800-sqft threshold, that&apos;s real money lost to a timing decision.
        </p>
      </section>

      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want to lock in the SDC waiver? Tell us about your project and we&apos;ll connect you with up to three
          Portland ADU builders who can get your application filed. Free, no obligation.
        </p>
        <Link href="/?state=or#lead-form" className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Portland ADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Cost breakdown by build type</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Total project costs in 2026 Portland — hard construction plus typical soft costs — for a mid-finish build.
          Historic inner-east neighborhoods (Hawthorne, Belmont, Sellwood) push to the top due to lot constraints and
          design review.
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
              <tr><td className="py-4 pr-4 text-ink font-medium">Detached ADU</td><td className="py-4 pr-4 text-ink-soft">600–1,200 sqft</td><td className="py-4 pr-4 text-ink-soft">$180K–$280K</td><td className="py-4 text-ink-soft">$260–$380</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conversion</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$90K–$150K</td><td className="py-4 text-ink-soft">$200–$320</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Attached ADU</td><td className="py-4 pr-4 text-ink-soft">500–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$160K–$250K</td><td className="py-4 text-ink-soft">$240–$360</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Junior ADU (JADU)</td><td className="py-4 pr-4 text-ink-soft">≤500 sqft</td><td className="py-4 pr-4 text-ink-soft">$80K–$140K</td><td className="py-4 text-ink-soft">$190–$320</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Prefab / modular</td><td className="py-4 pr-4 text-ink-soft">400–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$130K–$240K</td><td className="py-4 text-ink-soft">$220–$320</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">The SDC waiver — Portland&apos;s key cost lever</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Portland charges <strong>System Development Charges (SDCs)</strong> — transportation, parks, water, sewer
          impact fees — on virtually every new dwelling unit. For a typical ADU these add{" "}
          <strong>$10,000–$25,000</strong> depending on size and utilities.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          The city waives most SDCs for ADUs under <strong>800 square feet</strong>. On a 700 sqft 1-bedroom you&apos;d
          save roughly <strong>$7,000–$12,000</strong> — money that goes straight to your bottom line. Combined with
          Portland&apos;s relatively moderate construction costs, the waiver is the single biggest reason Portland is
          one of the cheapest West Coast cities to build an ADU.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          <strong>The waiver expires in 2026.</strong> Applications filed after expiry will owe the full SDC. If
          you&apos;re planning to build, the smart move is to get your permit application in before the deadline — even
          if construction itself starts later.
        </p>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          The waiver applies to the permit application date, not construction date. Verify exact expiry timing with
          Portland BDS — fee waivers are political decisions and the cutoff has shifted before.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Hard costs vs. soft costs</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          On a typical Portland ADU project, <strong>soft costs are $13,000–$30,000</strong> on top of construction —
          but that&apos;s only with the SDC waiver. Without it, add $7K–$15K more.
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
            <p className="kicker text-terracotta-600 mb-3">Soft costs (Portland)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Design / architectural plans: $7K–$18K</li>
              <li>· Structural & energy engineering: $1.5K–$3.5K</li>
              <li>· Plan check + building permit: $3K–$8K</li>
              <li>· SDCs (waived under 800 sqft): $0 or $10K–$25K</li>
              <li>· Utility hookups (PGE / water / sewer): $0–$8K</li>
              <li>· Survey, soils, contingency: $1.5K–$4K</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">ROI — what a Portland ADU returns</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Standalone backyard ADU 1-bedrooms in Portland typically rent for{" "}
          <strong>$1,500–$2,100/month</strong> in 2026. Inner SE, NW, Pearl District at the top; outer East and outer
          SW lower. Portland&apos;s rental market has been flat-to-modest growth — don&apos;t budget aggressive rent
          appreciation.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">Sample ROI — $215K detached 750 sqft ADU (with SDC waiver)</p>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            <li>· Construction cost: <span className="text-ink font-medium">$215,000</span></li>
            <li>· Gross rent (1BR @ $1,800/mo): <span className="text-ink font-medium">$21,600/yr</span></li>
            <li>· Net rental income after expenses: <span className="text-ink font-medium">~$17,500/yr</span></li>
            <li>· Cash-on-cash return: <span className="text-ink font-medium">~8.1%</span></li>
            <li>· Property value lift: <span className="text-ink font-medium">$110K–$170K</span></li>
            <li>· Approx. rental payback: <span className="text-ink font-medium">12–14 years</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">How to lower the cost</h2>
        <ol className="space-y-5 max-w-prose">
          <li><p className="text-ink font-medium">1. File before SDC waiver expiry ($7K–$12K saved)</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Time-sensitive — confirm current deadline with Portland BDS.</p></li>
          <li><p className="text-ink font-medium">2. Stay under 800 sqft</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">The SDC threshold. Going over triggers full SDC charges.</p></li>
          <li><p className="text-ink font-medium">3. Get 3+ written bids</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">Portland builder bids vary 25–35% for identical scopes.</p></li>
          <li><p className="text-ink font-medium">4. Consider garage conversion</p><p className="mt-1 text-sm text-ink-soft leading-relaxed">$90K–$150K vs $180K+ for new detached. Many Portland garages need significant code-upgrade work though.</p></li>
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">When Portland ADU costs go up unexpectedly</h2>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Historic district overlay.</strong> Hawthorne, Sellwood, Irvington, Ladd&apos;s Addition trigger Historic Review. Add 2–4 months + $5K–$10K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Steep / sloped lots.</strong> Common in SW Portland and parts of the West Hills. Retaining walls + foundation work add $15K–$50K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Old electrical service.</strong> Many pre-1980 PGE services need upgrade for ADU panel. Add $4K–$10K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Long sewer runs.</strong> Older inner-east neighborhoods sometimes need new sewer laterals. Add $5K–$15K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Filing after SDC expiry.</strong> $7K–$12K in fees you would have saved by filing earlier.</li>
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
          Last reviewed: {LAST_REVIEWED}. Cost ranges are 2026 estimates and shift with materials and labor markets.
          Always verify the SDC waiver expiry and current fees with Portland BDS before making decisions.
        </p>
      </section>

      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">Ready for real numbers on your Portland lot?</p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Share your project once and we&apos;ll connect you with up to three Portland ADU builders who know BDS
          permitting + the SDC waiver clock. Free, no obligation.
        </p>
        <Link href="/?state=or#lead-form" className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 Portland ADU builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also our{" "}
          <Link href="/tools/adu-cost-calculator" className="text-sage-600 underline-grow">free ADU cost calculator</Link>{" "}
          or the <Link href="/oregon" className="text-sage-600 underline-grow">Oregon ADU guide</Link>.
        </p>
      </div>

      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">Portland ADU cost — common questions</h2>
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
