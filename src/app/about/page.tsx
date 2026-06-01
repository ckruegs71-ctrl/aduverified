import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { STATES } from "@/lib/states";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";

export const metadata: Metadata = {
  title: "About ADUVerified — A Lead-Matching Service for ADU Projects",
  description:
    "ADUVerified is a free lead-matching service that connects U.S. homeowners with ADU builders who serve their area. Learn how the match works, how we make money, and why it's free for homeowners.",
  alternates: { canonical: "/about" },
};

const LICENSE_BOARDS = [
  { state: "California", board: "CSLB (Contractors State License Board)" },
  { state: "Oregon", board: "CCB (Construction Contractors Board)" },
  { state: "Washington", board: "L&I (Dept. of Labor & Industries)" },
  { state: "Colorado", board: "Local/regional licensing + state registration" },
  { state: "Texas", board: "Local licensing + TDLR where applicable" },
  { state: "Arizona", board: "ROC (Registrar of Contractors)" },
];

export default function AboutPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ADUVerified",
    url: SITE_URL,
    email: "hello@aduverified.com",
    description:
      "ADUVerified is a lead-matching service that connects U.S. homeowners with ADU, tiny home, and pre-fab builders who serve their area.",
    areaServed: STATES.map((s) => s.name),
  };

  return (
    <ContentPage
      kicker="About"
      title={
        <>
          We work for <em>homeowners</em>, not builders.
        </>
      }
      intro="ADUVerified is a free starting point for building an accessory dwelling unit — we connect you with ADU builders in your area so you can compare options and choose. We don't verify or guarantee any builder ourselves; you do that with your eyes open."
      crumbs={[{ label: "About", href: "/about" }]}
    >
      <div className="space-y-10 text-ink-soft leading-relaxed">
        <section>
          <h2 className="display-sm text-xl text-ink mb-2">Why we exist</h2>
          <p>
            ADU laws changed fast across the western U.S. — California, Oregon,
            Washington, and Colorado now require most cities to allow them — but
            the information is a mess. City pre-approved plan programs are buried
            on government portals, builder quality is impossible to compare, and
            most &ldquo;directories&rdquo; are pay-to-play link farms. We built
            ADUVerified to be the opposite: a clean, honest starting point for
            homeowners who&apos;ve decided to build.
          </p>
        </section>

        <section>
          <h2 className="display-sm text-xl text-ink mb-2">How the match works (and what we don&apos;t do)</h2>
          <p>
            When you submit your inquiry, we look up ADU builders in your state
            from our roster and pass your project to up to three of them. They
            reach out to you directly with a quote.{" "}
            <strong className="text-ink">
              We don&apos;t perform background checks, license verification,
              insurance checks, or quality audits on those builders ourselves.
            </strong>{" "}
            That responsibility is yours — and you should do it before signing
            any contract. We strongly recommend looking up each builder&apos;s
            license, complaint history, and standing yourself at the
            appropriate state contractor licensing board before hiring:
          </p>
          <ul className="mt-4 space-y-1.5">
            {LICENSE_BOARDS.map((b) => (
              <li key={b.state} className="flex gap-3">
                <span className="text-sage-600" aria-hidden>›</span>
                <span>
                  <strong className="text-ink">{b.state}:</strong> {b.board}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="display-sm text-xl text-ink mb-2">How we make money (and why you don&apos;t pay)</h2>
          <p>
            ADUVerified is 100% free for homeowners. Builders pay us a referral
            fee only when we connect them with a qualified lead. That means our
            incentive is to send builders genuinely good matches — not to upsell
            you on anything. We&apos;re an advertising and matching service, not a
            contractor, broker, or lender. See our{" "}
            <Link href="/disclosures" className="text-sage-600 underline-grow">
              disclosures
            </Link>{" "}
            for the full picture.
          </p>
        </section>

        <section>
          <h2 className="display-sm text-xl text-ink mb-2">Our approach to information</h2>
          <p>
            We summarize ADU laws in plain English and link directly to each
            state&apos;s official source for the authoritative, always-current
            detail — so you get a readable overview without us pretending to be
            the legal authority. Our{" "}
            <Link href="/faq" className="text-sage-600 underline-grow">state guides and FAQ</Link>{" "}
            are reviewed regularly and dated so you know how fresh they are.
          </p>
        </section>

        <section>
          <h2 className="display-sm text-xl text-ink mb-2">Where we operate</h2>
          <p>
            We currently serve {STATES.map((s) => s.name).join(", ")} — with the
            deepest coverage in the cities running pre-approved ADU plan programs.
            We&apos;re expanding to new states over time.
          </p>
        </section>
      </div>

      <div className="mt-14 border-t border-rule pt-10">
        <Link
          href="/#lead-form"
          className="inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
        >
          Get matched with ADU builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <JsonLd data={orgJsonLd} />
    </ContentPage>
  );
}
