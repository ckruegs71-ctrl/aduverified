import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_CATEGORIES, ALL_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "ADU FAQ — Costs, Permits, Financing & Pre-Approved Plans",
  description:
    "30+ answers on accessory dwelling units: what they cost, how long they take, permits and pre-approved plans, financing options, design types, and how builder matching works.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <ContentPage
      kicker="FAQ"
      title={
        <>
          Everything you need to know about <em>building an ADU.</em>
        </>
      }
      intro="Costs, permits, pre-approved plans, financing, timelines, and how our builder matching works — answered in plain English."
      crumbs={[{ label: "FAQ", href: "/faq" }]}
    >
      {/* Jump links */}
      <nav aria-label="FAQ categories" className="mb-12 flex flex-wrap gap-x-5 gap-y-2">
        {FAQ_CATEGORIES.map((c) => (
          <a
            key={c.category}
            href={`#${slug(c.category)}`}
            className="text-sm text-sage-600 underline-grow"
          >
            {c.category}
          </a>
        ))}
      </nav>

      <div className="space-y-16">
        {FAQ_CATEGORIES.map((cat) => (
          <section key={cat.category} id={slug(cat.category)} aria-labelledby={`h-${slug(cat.category)}`}>
            <h2 id={`h-${slug(cat.category)}`} className="kicker text-terracotta-600">
              {cat.category}
            </h2>
            <div className="mt-5 divide-y divide-rule">
              {cat.items.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="display-sm text-xl text-ink">{f.q}</h3>
                  <p className="mt-3 text-base text-ink-soft leading-relaxed max-w-prose">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">Still have questions?</p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Tell us about your project and we&apos;ll match you with up to three
          ADU builders who serve your area — they can answer questions specific
          to your city and lot. Free, no obligation.
        </p>
        <Link
          href="/#lead-form"
          className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
        >
          Get matched with builders
          <span aria-hidden>→</span>
        </Link>
      </div>

      <JsonLd data={faqJsonLd} />
    </ContentPage>
  );
}

function slug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
