import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { STATES, getStateBySlug } from "@/lib/states";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";

// Pre-render one page per covered state; unknown slugs 404.
export function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const info = getStateBySlug(state);
  if (!info) return {};
  const metaDescription = `ADU laws, costs, pre-approved plans, and a directory of ADU builders in ${info.name}. Get matched with up to three ${info.name} ADU builders for your project — free, no obligation.`;
  return {
    title: `ADU Laws & Builders in ${info.name} (2026)`,
    description: metaDescription,
    alternates: { canonical: `/${info.slug}` },
    openGraph: {
      title: `ADU Laws & Builders in ${info.name} (2026)`,
      description: metaDescription,
      url: `${SITE_URL}/${info.slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const info = getStateBySlug(state);
  if (!info) notFound();

  // The lawOverview headings are written as questions → reuse them as FAQPage schema.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: info.lawOverview.map((sec) => ({
      "@type": "Question",
      name: sec.heading,
      acceptedAnswer: { "@type": "Answer", text: sec.body },
    })),
  };

  return (
    <ContentPage
      kicker={`${info.name} · ${info.code}`}
      title={
        <>
          ADU laws &amp; builders in <em>{info.name}</em>
        </>
      }
      intro={info.shortLawSummary}
      crumbs={[{ label: info.name, href: `/${info.slug}` }]}
      lastReviewed={info.lastReviewed}
    >
      {/* Law overview — original plain-English content (the rankable value-add) */}
      <div className="space-y-10">
        {info.lawOverview.map((sec) => (
          <section key={sec.heading}>
            <h2 className="display-sm text-xl text-ink mb-2">{sec.heading}</h2>
            <p className="text-base text-ink-soft leading-relaxed max-w-prose">
              {sec.body}
            </p>
          </section>
        ))}
      </div>

      {/* Official source link — we summarize, they maintain the authoritative law */}
      <div className="mt-10 border border-rule bg-paper-soft px-6 py-5">
        <p className="kicker text-terracotta-600">Official source</p>
        <p className="mt-2 text-sm text-ink-soft">
          We summarize {info.name}&apos;s ADU rules in plain English. For the
          authoritative, always-current legal detail, go straight to the source:
        </p>
        <a
          href={info.officialLawUrl}
          target="_blank"
          rel="noopener"
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sage-600 underline-grow"
        >
          {info.officialLawLabel}
          <span aria-hidden>↗</span>
        </a>
        <p className="mt-3 font-mono text-xs text-ink-muted">
          Always verify current rules with the official source before making decisions.
        </p>
      </div>

      {/* Pre-approved programs by city */}
      {info.preApprovedPrograms.length > 0 ? (
        <section className="mt-12">
          <h2 className="display-sm text-xl text-ink mb-4">
            Pre-approved ADU plan programs in {info.name}
          </h2>
          <ul className="divide-y divide-rule border-y border-rule">
            {info.preApprovedPrograms.map((p) => (
              <li key={p.programName} className="flex items-baseline justify-between gap-4 py-4">
                <span className="text-ink">
                  <strong className="font-semibold">{p.city}</strong>
                  <span className="text-ink-muted"> — {p.programName}</span>
                </span>
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className="flex-none text-sm font-medium text-sage-600 underline-grow"
                  >
                    Program ↗
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* CTA */}
      <div className="mt-14 border-t border-rule pt-10">
        <p className="display-sm text-2xl text-ink">
          Find an ADU builder in {info.name}
        </p>
        <p className="mt-3 text-ink-soft max-w-xl">
          Tell us about your project and we&apos;ll match you with up to three
          ADU builders who serve {info.name} and know its rules and
          pre-approved plan programs — free, no obligation.
        </p>
        <Link
          href="/#lead-form"
          className="mt-6 inline-flex items-center gap-3 bg-ink text-paper px-7 py-3 text-sm font-medium tracking-wide transition hover:bg-sage-700"
        >
          Get matched in {info.name}
          <span aria-hidden>→</span>
        </Link>
        <p className="mt-6 text-sm text-ink-muted">
          See also our{" "}
          <Link href="/faq" className="text-sage-600 underline-grow">ADU FAQ</Link>{" "}
          and{" "}
          <Link href="/about" className="text-sage-600 underline-grow">how we verify builders</Link>.
        </p>
      </div>

      {/* Explore other states — internal cross-linking */}
      <div className="mt-12 border-t border-rule pt-8">
        <p className="kicker mb-4">Explore other states</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {STATES.filter((s) => s.slug !== info.slug).map((s) => (
            <Link
              key={s.code}
              href={`/${s.slug}`}
              className="text-sm font-medium text-sage-600 underline-grow"
            >
              {s.name} ADU guide
            </Link>
          ))}
        </div>
      </div>

      <JsonLd data={faqJsonLd} />
    </ContentPage>
  );
}
