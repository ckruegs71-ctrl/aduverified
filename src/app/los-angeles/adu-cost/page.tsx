import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const PAGE_PATH = "/los-angeles/adu-cost";
const LAST_REVIEWED = "2026-06-14";

export const metadata: Metadata = {
  title: "How Much Does an ADU Cost in Los Angeles? (2026 Guide)",
  description:
    "Detached ADUs in LA run $200K–$400K in 2026; garage conversions $100K–$220K. Full cost breakdown by build type, soft costs, the LA Standard Plan Program, and ROI — fully cited.",
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: "How Much Does an ADU Cost in Los Angeles? (2026 Guide)",
    description:
      "Detached ADUs in LA run $200K–$400K in 2026; garage conversions $100K–$220K. Full cost breakdown by build type, soft costs, the LA Standard Plan Program, and ROI.",
    url: `${SITE_URL}${PAGE_PATH}`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to build an ADU in Los Angeles in 2026?",
    a: "In 2026, building a detached ADU in Los Angeles typically costs $200,000–$400,000 all-in, including design, permits, and soft costs. Garage conversions run $100,000–$220,000, attached ADUs run $260,000–$380,000, and junior ADUs (≤500 sqft) run $100,000–$175,000. Per-square-foot, LA ADUs run roughly $250 (large detached) to $400 (small or premium-finish).",
  },
  {
    q: "What's the cheapest type of ADU to build in LA?",
    a: "Junior ADUs (JADUs) are usually the cheapest, ranging $100,000–$175,000 because they're carved out of existing living space inside the main house — no foundation, no separate utilities, no new exterior walls. Garage conversions are next cheapest at $100,000–$220,000. New detached ADUs cost the most because they're effectively a small standalone house.",
  },
  {
    q: "How much can the LA Standard Plan Program save me?",
    a: "The LA Standard Plan Program (run by LADBS) gets your plans through plan check much faster — weeks instead of months — because they're already pre-approved for code compliance. One plan, YOU-ADU, is free for property owners to use; others from firms like Abodu, Cottage, Villa Homes, and Connect Homes are sold by the design firm but skip most of the architecture spend. Combined with reduced design fees and faster permitting, homeowners typically save $10,000–$20,000 plus several months of project time.",
  },
  {
    q: "Are ADU permit fees waived for smaller units in LA?",
    a: "Yes — under California's 2026 HCD rules, ADUs under 750 square feet are exempt from local impact fees, special-district fees, and water/sewer connection charges. ADUs under 500 square feet are also exempt from school impact fees (LAUSD charges $4.79/sqft on residential additions ≥500 sqft). These waivers can save $5,000–$15,000 versus building over the 750-sqft threshold.",
  },
  {
    q: "How much rent can a 1-bedroom ADU in Los Angeles get?",
    a: "The median 1-bedroom rent in LA was $1,850/month as of June 2026 (Apartment List). Standalone backyard ADUs typically rent at a premium over apartments because tenants get privacy, a yard, and no shared walls — usually $2,200–$3,200/month for a 600–800 sqft 1-bedroom in 2026, depending on neighborhood and finish level.",
  },
  {
    q: "What's the ROI on a detached ADU in LA?",
    a: "On a typical $280,000 detached ADU renting at ~$2,800/month, annual net rental income is roughly $26,900 after expenses — a cash-on-cash return of about 9.6%. Property value also tends to lift by $140,000–$200,000, since LA homes with permitted ADUs sell at a premium. Most LA homeowners see full payback in 9–12 years and meaningful equity gain on day one.",
  },
  {
    q: "How long does ADU construction take in Los Angeles?",
    a: "Start to finish, plan on 12–18 months for a detached ADU in LA: 2–4 months for design, 3–6 months for permitting (faster with a Standard Plan), and 6–9 months for construction. Garage conversions run 8–12 months total. Using a pre-approved LA Standard Plan is the single biggest accelerator — it can cut 2–4 months off the permitting phase.",
  },
  {
    q: "Can I get a loan to build an ADU in LA?",
    a: "Yes. The most common options are a HELOC against existing home equity, a cash-out refinance, a renovation loan (Fannie Mae HomeStyle or FHA 203k), or a specialty ADU loan from lenders like RenoFi. CalHFA also offers an ADU Grant Program of up to $40,000 for low- and moderate-income homeowners to cover pre-development soft costs. Builder-financed and modular-financed options are increasingly common too.",
  },
  {
    q: "What's the difference between a JADU and an ADU?",
    a: "A Junior ADU (JADU) is carved out of the existing primary house — max 500 square feet, must include a small efficiency kitchen, and can share a bathroom with the main house. A regular ADU is a separate unit (detached, attached, or garage conversion) with its own full kitchen and bathroom and can be up to 1,200 square feet in LA. JADUs are cheaper to build but generally rent for less.",
  },
  {
    q: "Do I need a licensed contractor to build my LA ADU?",
    a: "Yes — for any project over $500 in labor and materials, California law requires a contractor licensed by the Contractors State License Board (CSLB). For an ADU you'll want a CSLB-licensed General Building Contractor (Class B). Verify the license is active and check for complaints at cslb.ca.gov before signing any contract. We recommend getting at least 2–3 written bids before choosing.",
  },
];

const SOURCES: { label: string; url: string; note: string }[] = [
  {
    label: "LA Department of Building and Safety — ADU Standard Plan Program",
    url: "https://dbs.lacity.gov/adu/approved-standard-plans",
    note: "Pre-approved plans, participating firms, permit acceleration.",
  },
  {
    label: "LA County Public Works — Pre-Approved ADU Standard Plans",
    url: "https://pw.lacounty.gov/building-and-safety/adu/pre-approved",
    note: "County-owned pre-approved plans (for unincorporated LA County).",
  },
  {
    label: "California Department of Housing and Community Development — 2026 ADU Handbook",
    url: "https://www.hcd.ca.gov/community-development/accessory-dwelling-units",
    note: "Impact fee waivers for ADUs under 750 sqft; statewide rules effective 2026.",
  },
  {
    label: "Apartment List — Los Angeles Rent Report (June 2026)",
    url: "https://www.apartmentlist.com/rent-report/ca/los-angeles",
    note: "Median 1-bedroom rent in LA: $1,850/mo; market trends.",
  },
  {
    label: "Contractors State License Board (CSLB)",
    url: "https://www.cslb.ca.gov/",
    note: "License lookup for verifying any LA ADU builder.",
  },
];

export default function LosAngelesAduCostPage() {
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
    headline: "How Much Does an ADU Cost in Los Angeles? (2026 Guide)",
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
      "Detached ADUs in LA run $200,000–$400,000 in 2026; garage conversions $100,000–$220,000. Full cost breakdown by build type, soft costs, the LA Standard Plan Program, and ROI — fully cited.",
  };

  return (
    <ContentPage
      kicker="Los Angeles · Cost guide"
      title={
        <>
          How much does an ADU cost in <em>Los Angeles?</em> (2026)
        </>
      }
      intro="Detached, garage conversion, attached, and JADU — what each build type actually costs in LA, what the soft costs add, and how the LA Standard Plan Program can cut both."
      crumbs={[
        { label: "Los Angeles", href: "/los-angeles/adu-cost" },
        { label: "ADU cost", href: PAGE_PATH },
      ]}
      lastReviewed={LAST_REVIEWED}
    >
      {/* Direct answer callout — the AI-citation chunk */}
      <section
        aria-labelledby="quick-answer"
        className="border border-rule bg-paper-soft px-6 py-6 mb-12"
      >
        <h2 id="quick-answer" className="kicker text-terracotta-600 mb-3">
          Quick answer
        </h2>
        <p className="text-base text-ink leading-relaxed">
          In 2026, building a <strong>detached ADU in Los Angeles</strong>{" "}
          typically costs <strong>$200,000–$400,000</strong>, while a{" "}
          <strong>garage conversion</strong> runs{" "}
          <strong>$100,000–$220,000</strong>. Per-square-foot costs range from
          about <strong>$250 (large detached)</strong> to{" "}
          <strong>$400 (small or premium-finish)</strong>, and depend most on
          size, finish level, and lot conditions.{" "}
          <strong>Soft costs</strong> — design, plan check, building permit,
          school fees, and utility hookups —{" "}
          typically add <strong>$15,000–$35,000</strong> on top of hard
          construction.
        </p>
      </section>

      {/* Top CTA */}
      <div className="mb-14 border-l-2 border-sage-600 pl-5">
        <p className="text-base text-ink-soft max-w-xl">
          Want real cost estimates for your specific lot and project? Share your
          project once and we&apos;ll connect you with up to three LA ADU
          builders who serve your area. Free, no obligation.
        </p>
        <Link
          href="/#lead-form"
          className="mt-4 inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
        >
          Get matched with up to 3 LA ADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Cost by build type */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          Cost breakdown by build type
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          These are total project costs in 2026 LA — hard construction plus
          typical soft costs — for a mid-finish build. Premium finishes (custom
          cabinetry, high-end appliances, hardwood) push to the top of each
          range; very small or shell-only builds sit at the bottom.
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
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">Detached ADU</td>
                <td className="py-4 pr-4 text-ink-soft">600–1,200 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$200K–$400K</td>
                <td className="py-4 text-ink-soft">$280–$400</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">Garage conversion</td>
                <td className="py-4 pr-4 text-ink-soft">350–500 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$100K–$220K</td>
                <td className="py-4 text-ink-soft">$250–$375</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">Attached ADU</td>
                <td className="py-4 pr-4 text-ink-soft">500–1,000 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$260K–$380K</td>
                <td className="py-4 text-ink-soft">$260–$380</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">Junior ADU (JADU)</td>
                <td className="py-4 pr-4 text-ink-soft">≤500 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$100K–$175K</td>
                <td className="py-4 text-ink-soft">$200–$350</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">Prefab / modular</td>
                <td className="py-4 pr-4 text-ink-soft">400–1,000 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$150K–$300K</td>
                <td className="py-4 text-ink-soft">$250–$350</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* LA Standard Plan Program */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          How the LA Standard Plan Program changes the math
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          The biggest single lever on cost and timeline in Los Angeles is the{" "}
          <strong>LADBS Standard Plan Program</strong> — a catalog of roughly 75
          ADU designs already pre-approved for code compliance. Choosing one
          collapses plan check from months to weeks because LADBS doesn&apos;t
          re-audit the design; they only verify site fit. LA County runs a
          parallel <strong>Pre-Approved ADU</strong> program for unincorporated
          areas.
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Two cost levers stack here. First,{" "}
          <strong>one plan — YOU-ADU — is free for any LA property owner</strong>
          {" "}to use. Plans from participating firms (Abodu, Cottage, Villa
          Homes, Connect Homes, Welcome Projects, and others) are sold by the
          firm but eliminate most of the $8K–$20K custom-architect spend.
          Second, faster permitting means lower carrying costs (interest, soft
          rent of construction time, contingency reserve).
        </p>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Stacked with the <strong>2026 HCD impact-fee waiver</strong> for ADUs
          under 750 square feet — no local impact fees, no water/sewer
          connection charges, no school fees under 500 sqft — homeowners
          typically save <strong>$10,000–$20,000</strong> and{" "}
          <strong>2–4 months</strong> of permitting time versus a custom design
          over 750 sqft.
        </p>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          The trade-off: standard plans aren&apos;t infinitely customizable. If
          your lot has unusual slope, alley-only access, or an oddly shaped
          buildable area, a custom design may still be the right call. For
          the full plan catalog, savings math, and how to use one,{" "}
          <Link
            href="/los-angeles/standard-plan-program"
            className="text-sage-600 underline-grow font-medium"
          >
            read our LA Standard Plan Program guide
          </Link>
          .
        </p>
      </section>

      {/* Hard vs soft costs */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          Hard costs vs. soft costs
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          Most homeowners only think about construction — but on a typical LA
          ADU project, <strong>soft costs are $15,000–$35,000</strong> on top of
          the build. Knowing them upfront is the difference between &ldquo;on
          budget&rdquo; and &ldquo;short $20K at framing.&rdquo;
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-sage-600 mb-3">Hard costs</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Site prep, excavation, foundation</li>
              <li>· Framing, roof, exterior</li>
              <li>· Plumbing, electrical, HVAC rough-in</li>
              <li>· Insulation, drywall</li>
              <li>· Cabinets, counters, appliances</li>
              <li>· Flooring, paint, fixtures</li>
              <li>· Landscaping & exterior finish</li>
            </ul>
          </div>
          <div className="border border-rule bg-paper-soft px-5 py-5">
            <p className="kicker text-terracotta-600 mb-3">Soft costs (LA)</p>
            <ul className="space-y-2 text-sm text-ink-soft">
              <li>· Design / architectural plans: $8K–$20K</li>
              <li>· Structural & energy engineering: $1.5K–$4K</li>
              <li>· LADBS plan check fee: $2K–$6K</li>
              <li>· LADBS building permit: $3K–$8K</li>
              <li>· LAUSD school fee ($4.79/sqft, ≥500 sqft): $2K–$5K</li>
              <li>· Utility hookups (DWP / sewer): $0–$13K</li>
              <li>· Survey, soils, contingency: $2K–$5K</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-muted leading-relaxed max-w-prose">
          ADUs <strong>under 750 sqft</strong> skip most impact and utility
          connection fees under 2026 California rules. Under 500 sqft, school
          fees go away too. This is why the &ldquo;build smaller&rdquo;
          strategy is so often the math-optimal one.
        </p>
      </section>

      {/* Cost by size */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          Cost by size (detached ADU)
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-6">
          For a new detached ADU in LA with mid-grade finishes, all-in cost
          tracks size pretty closely. Bigger builds get cheaper per square foot
          (fixed costs spread), but blow past the 750-sqft fee waiver and
          re-incur $5K–$15K in impact fees.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-rule text-left text-ink-muted font-mono text-xs">
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Size</th>
                <th className="py-3 pr-4 font-normal uppercase tracking-wider">Total all-in</th>
                <th className="py-3 font-normal uppercase tracking-wider">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">400–500 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$150K–$200K</td>
                <td className="py-4 text-ink-soft">Studio / JADU — fewest fees</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">600–750 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$200K–$280K</td>
                <td className="py-4 text-ink-soft">1BR — sweet spot under fee threshold</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">800–1,000 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$250K–$340K</td>
                <td className="py-4 text-ink-soft">1BR or 2BR — impact fees kick in</td>
              </tr>
              <tr>
                <td className="py-4 pr-4 text-ink font-medium">1,000–1,200 sqft</td>
                <td className="py-4 pr-4 text-ink-soft">$300K–$400K</td>
                <td className="py-4 text-ink-soft">2BR — full impact fees</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ROI */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          ROI — what an LA ADU actually returns
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          The median 1-bedroom apartment in LA rented for{" "}
          <strong>$1,850/month</strong> as of June 2026 (Apartment List).
          Standalone backyard ADU 1-bedrooms typically command a premium —
          tenants get privacy, a yard, and no shared walls — and pull{" "}
          <strong>$2,200–$3,200/month</strong> in 2026 for a 600–800 sqft unit,
          depending on neighborhood and finish.
        </p>
        <div className="border border-rule bg-paper-soft px-6 py-5 my-6">
          <p className="kicker text-sage-600 mb-3">Sample ROI — $280K detached 800 sqft ADU</p>
          <ul className="space-y-1.5 text-sm text-ink-soft">
            <li>· Construction cost: <span className="text-ink font-medium">$280,000</span></li>
            <li>· Gross rent (1BR @ $2,800/mo): <span className="text-ink font-medium">$33,600/yr</span></li>
            <li>· Net rental income after expenses: <span className="text-ink font-medium">~$26,900/yr</span></li>
            <li>· Cash-on-cash return: <span className="text-ink font-medium">~9.6%</span></li>
            <li>· Property value lift: <span className="text-ink font-medium">$140K–$200K</span></li>
            <li>· Approx. rental payback: <span className="text-ink font-medium">9–12 years</span></li>
          </ul>
        </div>
        <p className="text-sm text-ink-muted leading-relaxed max-w-prose">
          ROI also depends on what you do with the ADU. Family housing (parents,
          adult kids) saves the cost of separate housing without rental income
          but still captures the property value lift. Short-term rental returns
          can be higher but face stricter LA rules and operating overhead.
        </p>
      </section>

      {/* How to lower the cost */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          How to lower the cost
        </h2>
        <ol className="space-y-5 max-w-prose">
          <li>
            <p className="text-ink font-medium">
              1. Use an LA Standard Plan (~$10K–$20K + 2–4 months saved)
            </p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              Skip custom architecture, skip full plan check. YOU-ADU is free;
              the rest of the catalog is well-priced. This is the single
              highest-leverage move available to most LA homeowners.
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">
              2. Stay under 750 sqft (~$5K–$15K in fees saved)
            </p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              California waives local impact fees, utility connection charges,
              and capacity fees on ADUs under 750 sqft. Under 500 sqft, school
              fees go away too.
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">
              3. Get 3+ written bids
            </p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              Construction bids for identical ADU scopes routinely vary by
              20–40% between builders. The cheapest bid isn&apos;t always best —
              but you can&apos;t tell without comparison.
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">
              4. Consider a garage conversion instead of new detached
            </p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              You already have the foundation, walls, and roof. Conversions
              typically run $100K–$220K versus $250K+ for new detached. Big
              caveat: older garages often need structural reinforcement
              ($10K–$25K hidden cost) to meet current code.
            </p>
          </li>
          <li>
            <p className="text-ink font-medium">
              5. Look into ADU-specific financing
            </p>
            <p className="mt-1 text-sm text-ink-soft leading-relaxed">
              CalHFA&apos;s ADU Grant Program offers up to $40,000 for
              low-and-moderate-income homeowners to cover pre-development soft
              costs. Specialty lenders like RenoFi underwrite to the post-build
              appraised value rather than current equity.
            </p>
          </li>
        </ol>
      </section>

      {/* When costs go UP */}
      <section className="mb-14">
        <h2 className="display-sm text-2xl text-ink mb-4">
          When ADU costs go up unexpectedly
        </h2>
        <p className="text-base text-ink-soft leading-relaxed max-w-prose mb-4">
          Most LA ADU cost overruns come from a short list of preventable
          surprises. Walk your lot with your builder before you sign:
        </p>
        <ul className="space-y-3 max-w-prose">
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Sloped lot.</strong> Hillside or
            sloped lots require retaining walls, deeper foundations, or
            cripple-wall framing. Add $15K–$50K depending on severity.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Long utility runs.</strong> If the
            existing electrical panel or sewer main is far from the ADU site,
            trenching and conduit can add $5K–$20K. DWP panel upgrades alone
            (often required for new ADUs) are $3K–$10K.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Alley access only.</strong> Tight
            access blocks large equipment, slows everything, and sometimes
            forces crane work. Add 5–15% to construction.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Old main-house code issues.</strong>{" "}
            New ADU construction can trigger required upgrades on the existing
            home — typically Title 24 energy compliance, panel upgrades, or
            seismic anchoring. Add $5K–$30K.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Mature tree protection.</strong>{" "}
            Protected trees (heritage or species-protected) within construction
            radius require certified arborist plans and protection fencing —
            and can constrain footprint. Add $3K–$10K plus design rework.
          </li>
          <li className="text-base text-ink-soft leading-relaxed">
            <strong className="text-ink">Change orders mid-build.</strong>{" "}
            Mid-project layout, finish, or fixture changes are typically billed
            at 15–25% above the original line item. Lock the spec before
            breaking ground.
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
          Last reviewed: {LAST_REVIEWED}. Cost ranges are 2026 estimates and
          shift with materials prices, labor markets, and lot conditions.
          Always verify current rules with the official source and get written
          bids before making decisions.
        </p>
      </section>

      {/* Bottom CTA */}
      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">
          Ready for real numbers on your lot?
        </p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Share your project once and we&apos;ll connect you with up to three
          Los Angeles ADU builders who know LA permitting, the Standard Plan
          Program, and your area. Free, no obligation.
        </p>
        <Link
          href="/#lead-form"
          className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
        >
          Get matched with up to 3 LA ADU builders
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also the{" "}
          <Link href="/los-angeles/standard-plan-program" className="text-sage-600 underline-grow">
            LA Standard Plan Program guide
          </Link>
          , our{" "}
          <Link href="/tools/adu-cost-calculator" className="text-sage-600 underline-grow">
            free ADU cost calculator
          </Link>
          , the{" "}
          <Link href="/california" className="text-sage-600 underline-grow">
            California ADU guide
          </Link>
          , or our{" "}
          <Link href="/faq" className="text-sage-600 underline-grow">
            ADU FAQ
          </Link>
          .
        </p>
      </div>

      {/* FAQ */}
      <section className="mt-14 border-t border-rule pt-10">
        <p className="kicker mb-4">Frequently asked</p>
        <h2 className="display-sm text-2xl text-ink mb-6">
          LA ADU cost — common questions
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
