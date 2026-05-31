"use client";

import { useState } from "react";
import Link from "next/link";
import { HOMEPAGE_FAQS } from "@/lib/faqs";
import { JsonLd } from "@/components/JsonLd";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <p className="kicker">№ 06 — Reader Questions</p>
            <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.25rem)]">
              Frequently <em>asked</em>.
            </h2>
            <div className="rule-short mt-8" />
            <p className="mt-6 text-base text-ink-soft leading-relaxed max-w-sm">
              The questions homeowners ask most before breaking ground. See our{" "}
              <Link href="/faq" className="text-sage-600 underline-grow">
                full FAQ
              </Link>{" "}
              for 30+ answers on costs, permits, financing, and process.
            </p>
          </div>

          <dl className="divide-y divide-rule">
            {HOMEPAGE_FAQS.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={f.q} className="py-6">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="group flex w-full items-baseline gap-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-mono text-xs text-ink-muted tracking-widest mt-1 whitespace-nowrap">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="display-sm text-xl text-ink group-hover:text-sage-700 transition-colors">
                          {f.q}
                        </span>
                      </span>
                      <span className="text-sage-600 text-xl leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </dt>
                  {isOpen ? (
                    <dd className="mt-4 pl-10 pr-6">
                      <p className="text-base leading-relaxed text-ink-soft max-w-prose">
                        {f.a}
                      </p>
                    </dd>
                  ) : null}
                </div>
              );
            })}
          </dl>
        </div>
      </div>
      <JsonLd data={faqJsonLd} />
    </section>
  );
}
