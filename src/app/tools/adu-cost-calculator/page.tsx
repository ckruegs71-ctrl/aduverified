import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { CostCalculator } from "@/components/CostCalculator";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/tools/adu-cost-calculator";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "Free ADU Cost Calculator (2026) — CA, OR, WA, CO, TX, AZ",
  description:
    "Estimate your ADU build cost in seconds. Detached, garage conversion, attached, or JADU across 6 states. Free, no email required, with hard + soft costs broken out.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "Free ADU Cost Calculator (2026)",
    description:
      "Estimate your ADU build cost in seconds. CA, OR, WA, CO, TX, AZ. Free, no email required.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How accurate is this ADU cost calculator?",
    a: "It's a good first-pass estimate, not a quote. Estimates use 2026 per-square-foot construction costs from public industry sources, adjusted by state cost-of-construction multipliers and finish level. Real bids from licensed builders typically vary 20–40% between contractors for an identical scope — so use this calculator to size your budget, then get written quotes for the real number.",
  },
  {
    q: "What does the calculator include?",
    a: "Both hard construction (foundation, framing, finishes, fixtures, appliances) and soft costs (architectural design, structural engineering, plan check fees, building permits, school facility fees, utility hookups). It does not include the cost of land, the cost of buying out existing tenants, or any unusual site conditions like sloped lots or long utility runs.",
  },
  {
    q: "Why do costs vary so much between states?",
    a: "Construction labor is the biggest driver. California — especially LA and the Bay Area — has the highest labor costs in the country, partly because of strong union markets and high cost of living. Arizona and Texas typically run 20–30% lower per square foot for comparable builds. Permit fees, school fees, and impact fees also vary widely by state and city.",
  },
  {
    q: "Why does staying under 750 sqft save money?",
    a: "Under California's 2026 HCD rules, ADUs under 750 square feet are exempt from most local impact fees, water/sewer connection charges, and capacity fees. Units under 500 sqft are also exempt from school impact fees. These waivers can save $5,000–$15,000. Most western states have similar fee-reduction tiers for smaller ADUs.",
  },
  {
    q: "Is this calculator updated for 2026?",
    a: "Yes — costs reflect 2026 construction-cost data and the 2026 California HCD ADU Handbook (effective January 1, 2026). We review the inputs quarterly and date the page with the last review date at the bottom.",
  },
  {
    q: "Can I get an exact quote without talking to a builder?",
    a: "No — no online calculator can. Your real cost depends on your specific lot (slope, access, utility distances), local market conditions at the time you build, your finish choices, and the builders bidding. Use this calculator to set realistic expectations, then submit a quick project description and we'll connect you with up to 3 local ADU builders for actual written quotes. Free, no obligation.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "LA Department of Building and Safety — ADU Standard Plan Program",
    url: "https://dbs.lacity.gov/adu/approved-standard-plans",
    note: "California baseline cost data and permit-fee schedules.",
  },
  {
    label: "California HCD — 2026 ADU Handbook",
    url: "https://www.hcd.ca.gov/community-development/accessory-dwelling-units",
    note: "Statewide fee-waiver rules (under 750 sqft) effective 2026.",
  },
  {
    label: "Apartment List — Los Angeles Rent Report (2026)",
    url: "https://www.apartmentlist.com/rent-report/ca/los-angeles",
    note: "Used to validate ROI assumptions on the cost guide pages.",
  },
  {
    label: "Contractors State License Board (CSLB)",
    url: "https://www.cslb.ca.gov/",
    note: "License verification for any California ADU builder.",
  },
];

export default function CostCalculatorPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ADUVerified ADU Cost Calculator",
    url: `${SITE_URL}${PAGE_PATH}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free 2026 ADU cost calculator for California, Oregon, Washington, Colorado, Texas, and Arizona. Estimates hard construction + soft costs (design, permits, plan check, fees, utility hookups) by state, build type, size, and finish level.",
    publisher: { "@type": "Organization", name: "ADUVerified", url: SITE_URL },
  };

  return (
    <ContentPage
      kicker="Free tool · Cost calculator"
      title={
        <>
          ADU cost <em>calculator</em>
        </>
      }
      intro="Estimate your ADU build cost in seconds. Choose your state, build type, size, and finish level — get a 2026 cost range with hard and soft costs broken out. Free, no email required."
      crumbs={[
        { label: "Tools", href: PAGE_PATH },
        { label: "Cost calculator", href: PAGE_PATH },
      ]}
      lastReviewed={LAST_REVIEWED}
    >
      {/* The interactive calculator */}
      <CostCalculator />

      {/* Methodology */}
      <section className="mt-14">
        <h2 className="display-sm text-2xl text-ink mb-4">How the estimate works</h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          We start with a 2026 Los Angeles baseline cost per square foot for
          each ADU build type — detached, garage conversion, attached, junior
          ADU, and prefab — sourced from public construction-cost data and
          permit fee schedules. We then apply two adjustments:
        </p>
        <ol className="space-y-4 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">State cost-of-construction multiplier.</strong>{" "}
            California is the priciest market; Washington runs ~5% cheaper,
            Oregon and Colorado ~15% cheaper, Texas and Arizona ~25% cheaper.
            These multipliers reflect labor rates, materials logistics, and
            permitting cost differences.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Finish level multiplier.</strong>{" "}
            Basic finishes (builder-grade materials) cost ~15% less than
            mid-grade; premium finishes (custom cabinetry, hardwood, high-end
            appliances) cost ~20% more.
          </li>
        </ol>
        <p className="mt-4 text-base text-ink-soft leading-relaxed max-w-prose">
          Soft-cost ranges (design, structural engineering, plan check,
          permits, school fees, utility hookups) are state-specific and based
          on typical permit-fee schedules. Where applicable, we flag the
          under-750-sqft fee waiver, which can save $5K–$15K in California
          under 2026 HCD rules.
        </p>
        <p className="mt-4 text-sm text-ink-muted leading-relaxed max-w-prose italic">
          The estimate is a planning range — not a quote. Real bids from
          licensed builders for the same scope routinely vary by 20–40%, and
          unusual site conditions (sloped lot, alley-only access, distant
          utilities, mature trees) can add $15K–$50K on top.
        </p>
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
      </section>

      {/* Cross-links */}
      <div className="mt-12 border-t border-rule pt-8">
        <p className="text-sm text-ink-soft leading-relaxed max-w-prose">
          Want deeper cost detail? Read the{" "}
          <Link
            href="/los-angeles/adu-cost"
            className="text-sage-600 underline-grow font-medium"
          >
            Los Angeles ADU cost guide
          </Link>
          {" "}or browse our{" "}
          <Link href="/faq" className="text-sage-600 underline-grow font-medium">
            ADU FAQ
          </Link>
          .
        </p>
      </div>

      {/* FAQ */}
      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">
          About the calculator
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
      <JsonLd data={appJsonLd} />
    </ContentPage>
  );
}
