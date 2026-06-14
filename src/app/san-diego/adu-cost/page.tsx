import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/san-diego/adu-cost";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "How Much Does an ADU Cost in San Diego? (2026 Guide)",
  description:
    "Detached ADUs in San Diego run $300K–$450K+ in 2026; garage conversions $80K–$200K. Full cost breakdown, the PRADU pre-approved plan program, soft costs, and ROI — fully cited.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "How Much Does an ADU Cost in San Diego? (2026 Guide)",
    description:
      "Detached ADUs $300K–$450K+, garage conversions $80K–$200K. PRADU program, soft costs, and ROI for San Diego in 2026.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build an ADU in San Diego in 2026?",
    a: "In 2026, a detached ADU in San Diego typically costs $300,000–$450,000 all-in (about $375–$600 per square foot for turnkey construction). Garage conversions run $80,000–$200,000. San Diego construction labor is slightly cheaper than LA but more expensive than Sacramento or Phoenix.",
  },
  {
    q: "What's the PRADU program?",
    a: "San Diego's Pre-Approved ADU (PRADU) program offers pre-reviewed plans through the Development Services Department. Picking a PRADU plan skips most of the architectural plan check — only site-specific factors get reviewed. Typical savings: $8,000–$15,000 in design + plan check costs and 2–3 months off the permitting timeline.",
  },
  {
    q: "Are ADU fees waived for smaller units in San Diego?",
    a: "Yes — under California's 2026 HCD rules, ADUs under 750 square feet are exempt from local impact fees and most utility connection charges throughout San Diego. ADUs under 500 square feet skip school fees too. Combined, these waivers save $5,000–$15,000 versus building over 750 sqft.",
  },
  {
    q: "How much rent can a 1-bedroom ADU in San Diego get?",
    a: "1-bedroom ADUs in San Diego typically rent for $2,400–$3,400/month in 2026 depending on neighborhood — coastal areas (La Jolla, Pacific Beach, Encinitas) command the top of the range, while inland neighborhoods like El Cajon and Chula Vista run lower. ADUs generally rent at a premium over apartments due to privacy and standalone unit appeal.",
  },
  {
    q: "What's the ROI on a detached ADU in San Diego?",
    a: "On a $325,000 detached ADU renting at $2,800/month, annual net rental income runs roughly $27,000–$30,000 after expenses — a cash-on-cash return of 8–10%. Property value typically lifts by $150,000–$225,000 since San Diego homes with permitted ADUs sell at a premium in this tight market.",
  },
  {
    q: "How long does ADU construction take in San Diego?",
    a: "Plan on 12–18 months for a detached ADU: 2–4 months for design, 3–5 months for permitting (faster with PRADU), and 6–9 months for construction. Garage conversions run 8–12 months total. Coastal lots and historic neighborhoods add time due to additional review.",
  },
  {
    q: "Can I get a loan to build an ADU in San Diego?",
    a: "Yes — HELOC, cash-out refinance, ADU-specific loans from lenders like RenoFi, or California's CalHFA ADU Grant Program (up to $40,000 for low- and moderate-income homeowners) all work. Specialty design-build firms like Snap ADU and Better Place Design also offer in-house financing or builder-financed options.",
  },
  {
    q: "Do I need a contractor licensed in San Diego specifically?",
    a: "No — California has a single statewide contractor license (CSLB). You need a CSLB-licensed General Building Contractor (Class B) for any ADU project over $500. Verify the license is active and complaint-free at cslb.ca.gov before signing.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "City of San Diego — Pre-Approved ADU (PRADU) Program",
    url: "https://www.sandiego.gov/development-services/permits/accessory-dwelling-units",
    note: "Official PRADU plan catalog and process.",
  },
  {
    label: "California HCD — 2026 ADU Handbook",
    url: "https://www.hcd.ca.gov/community-development/accessory-dwelling-units",
    note: "Statewide fee-waiver rules (under 750 sqft) effective 2026.",
  },
  {
    label: "Apartment List — San Diego Rent Report",
    url: "https://www.apartmentlist.com/rent-report/ca/san-diego",
    note: "Current 1-bedroom rent data for ROI estimates.",
  },
  {
    label: "Contractors State License Board (CSLB)",
    url: "https://www.cslb.ca.gov/",
    note: "License verification for any San Diego ADU builder.",
  },
];

export default function SanDiegoAduCostPage() {
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
    headline: "How Much Does an ADU Cost in San Diego? (2026 Guide)",
    datePublished: "2026-06-14",
    dateModified: LAST_REVIEWED,
    author: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
    publisher: { "@type": "Organization", name: "ADUVerified", url: SITE_URL, logo: { "@type": "ImageObject", url: `${SITE_URL}/opengraph-image` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${PAGE_PATH}` },
    description: "Detached ADUs in San Diego cost $300,000-$450,000+ in 2026; garage conversions $80,000-$200,000. Full breakdown with PRADU program, soft costs, ROI, and sourced data.",
  };

  return (
    <ContentPage
      kicker="San Diego · Cost guide"
      title={<>How much does an ADU cost in <em>San Diego?</em> (2026)</>}
      intro="Detached, garage conversion, attached, and JADU — what each build type actually costs in San Diego, what the PRADU program saves you, and what to expect for ROI."
      crumbs={[{ label: "San Diego", href: PAGE_PATH }, { label: "ADU cost", href: PAGE_PATH }]}
      lastReviewed={LAST_REVIEWED}
    >
      <section aria-labelledby="quick-answer" className="border border-rule bg-paper-soft px-6 py-6 mb-12">
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">Quick answer</h2>
        <p className="text-base text-ink leading-relaxed">
          In 2026, building a <strong>detached ADU in San Diego</strong> typically costs <strong>$300,000–$450,000</strong> all-in,
          while a <strong>garage conversion</strong> runs <strong>$80,000–$200,000</strong>. Per-square-foot costs range from
          about <strong>$200 (basic garage conversion)</strong> to <strong>$600 (premium detached)</strong>.{" "}
          <strong>Soft costs</strong> — design, plan check, building permit, school fees, and utility hookups —{" "}
          typically add <strong>$15,000–$35,000</strong> on top of hard construction.
        </p>
      </section>

      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want real cost estimates for your specific San Diego lot? Share your project once and we&apos;ll connect you
          with up to three local ADU builders. Free, no obligation.
        </p>
        <Link href="/?state=ca#lead-form" className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 San Diego ADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Cost breakdown by build type</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Total project costs in 2026 San Diego — hard construction plus typical soft costs — for a mid-finish build.
          Coastal neighborhoods (La Jolla, Del Mar, Pacific Beach) push to the top of each range due to premium labor
          and stricter design review.
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
              <tr><td className="py-4 pr-4 text-ink font-medium">Detached ADU</td><td className="py-4 pr-4 text-ink-soft">600–1,200 sqft</td><td className="py-4 pr-4 text-ink-soft">$300K–$450K+</td><td className="py-4 text-ink-soft">$375–$600</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Garage conversion</td><td className="py-4 pr-4 text-ink-soft">350–500 sqft</td><td className="py-4 pr-4 text-ink-soft">$80K–$200K</td><td className="py-4 text-ink-soft">$200–$400</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Attached ADU</td><td className="py-4 pr-4 text-ink-soft">500–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$275K–$400K</td><td className="py-4 text-ink-soft">$275–$400</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Junior ADU (JADU)</td><td className="py-4 pr-4 text-ink-soft">≤500 sqft</td><td className="py-4 pr-4 text-ink-soft">$110K–$185K</td><td className="py-4 text-ink-soft">$220–$370</td></tr>
              <tr><td className="py-4 pr-4 text-ink font-medium">Prefab / modular</td><td className="py-4 pr-4 text-ink-soft">400–1,000 sqft</td><td className="py-4 pr-4 text-ink-soft">$170K–$325K</td><td className="py-4 text-ink-soft">$260–$370</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">The PRADU program — how it changes the math</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          The biggest single cost lever in San Diego is the{" "}
          <strong>Pre-Approved ADU (PRADU) Program</strong> run by the city&apos;s Development Services Department. The
          program offers a catalog of architectural plans that have already passed full plan check. Picking one
          collapses your permitting from months to weeks — DSD only reviews site-specific factors (zoning, foundation,
          utility connections) rather than re-auditing the architecture.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Stacked with the <strong>2026 HCD impact-fee waiver</strong> for ADUs under 750 sqft — no local impact fees,
          no school facility fees under 500 sqft — typical PRADU homeowners save{" "}
          <strong>$8,000–$15,000</strong> on design + plan-check and another{" "}
          <strong>$5,000–$15,000</strong> on fees. Total potential savings: <strong>$13K–$30K</strong> + 2–3 months off
          your timeline.
        </p>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          The trade-off: PRADU plans are pre-approved as designed and can&apos;t be modified. If your lot has unusual
          slope, alley-only access, or your needs require a layout the catalog doesn&apos;t cover, custom is the only
          path.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">Hard costs vs. soft costs</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          On a typical San Diego ADU project, <strong>soft costs are $15,000–$35,000</strong> on top of construction.
          Knowing them upfront is the difference between &ldquo;on budget&rdquo; and &ldquo;short $20K at framing.&rdquo;
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
            <p className="kicker text-terracotta-600 mb-3">Soft costs (SD)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Design / architectural plans: $8K–$20K</li>
              <li>· Structural & energy engineering: $1.5K–$4K</li>
              <li>· DSD plan check: $2K–$5K</li>
              <li>· Building permit: $3K–$7K</li>
              <li>· School fees (≥500 sqft): $2K–$5K</li>
              <li>· Utility hookups (SDG&amp;E / water / sewer): $0–$12K</li>
              <li>· Survey, soils, contingency: $2K–$5K</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-muted leading-relaxed max-w-prose">
          ADUs <strong>under 750 sqft</strong> skip most impact and utility connection fees under 2026 California rules.
          Under 500 sqft, school fees go away too. This is why &ldquo;build smaller&rdquo; is so often the math-optimal call.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">ROI — what an SD ADU actually returns</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Standalone backyard ADU 1-bedrooms in San Diego typically rent for{" "}
          <strong>$2,400–$3,400/month</strong> in 2026, depending on neighborhood and finish. Coastal proximity is the
          biggest variable — La Jolla / Pacific Beach / Encinitas at the top, inland neighborhoods lower.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">Sample ROI — $325K detached 800 sqft ADU</p>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            <li>· Construction cost: <span className="text-ink font-medium">$325,000</span></li>
            <li>· Gross rent (1BR @ $2,900/mo): <span className="text-ink font-medium">$34,800/yr</span></li>
            <li>· Net rental income after expenses: <span className="text-ink font-medium">~$28,000/yr</span></li>
            <li>· Cash-on-cash return: <span className="text-ink font-medium">~8.6%</span></li>
            <li>· Property value lift: <span className="text-ink font-medium">$150K–$225K</span></li>
            <li>· Approx. rental payback: <span className="text-ink font-medium">10–13 years</span></li>
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">How to lower the cost</h2>
        <ol className="space-y-5 max-w-prose">
          <li>
            <p className="text-ink font-medium">1. Use a PRADU plan ($8K–$15K + 2–3 months saved)</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">Skip custom architecture, skip full plan check. The single highest-leverage move available.</p>
          </li>
          <li>
            <p className="text-ink font-medium">2. Stay under 750 sqft ($5K–$15K in fees saved)</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">2026 California rules waive impact fees and most utility connections under 750 sqft; school fees go away under 500.</p>
          </li>
          <li>
            <p className="text-ink font-medium">3. Get 3+ written bids</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">Bids for identical scopes routinely vary 20–40% between SD builders.</p>
          </li>
          <li>
            <p className="text-ink font-medium">4. Consider a garage conversion</p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">$80K–$200K vs $300K+ for new detached. Caveat: older SD garages often need structural reinforcement ($10K–$25K).</p>
          </li>
        </ol>
      </section>

      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">When SD ADU costs go up unexpectedly</h2>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Coastal Overlay Zone.</strong> Properties west of I-5 face additional design review and permit timelines. Add 2–4 months and $5K–$10K in design + review.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Hillside / canyon lots.</strong> Retaining walls and deep foundations add $15K–$50K. La Jolla, Mt. Soledad, and many inland canyon lots qualify.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Brush / fire-hazard zones.</strong> Many SD County hillside neighborhoods (Scripps Ranch, Rancho Bernardo) require sprinklers + ignition-resistant materials. Add $8K–$20K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Old main panel.</strong> Pre-1990 electrical panels often need upgrade for ADU service. Add $3K–$10K.</li>
          <li className="text-base text-ink-soft leading-relaxed"><strong className="text-ink">Change orders mid-build.</strong> Mid-project changes are typically billed at 15–25% above original line item. Lock the spec first.</li>
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
        <p className="display-sm text-2xl text-ink">Ready for real numbers on your San Diego lot?</p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Share your project once and we&apos;ll connect you with up to three San Diego ADU builders who know SD
          permitting and your area. Free, no obligation.
        </p>
        <Link href="/?state=ca#lead-form" className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700">
          Get matched with up to 3 San Diego ADU builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also our{" "}
          <Link href="/tools/adu-cost-calculator" className="text-sage-600 underline-grow">free ADU cost calculator</Link>,{" "}
          the <Link href="/los-angeles/adu-cost" className="text-sage-600 underline-grow">LA ADU cost guide</Link>,{" "}
          or the <Link href="/california" className="text-sage-600 underline-grow">California ADU guide</Link>.
        </p>
      </div>

      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">San Diego ADU cost — common questions</h2>
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
