import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

export interface Crumb {
  label: string;
  href: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";

// Shared wrapper for editorial content pages (/faq, /about, /[state]).
// Renders the site masthead, a breadcrumb (+ BreadcrumbList JSON-LD),
// kicker, H1, optional intro + "last reviewed" line, then the body.
export function ContentPage({
  kicker,
  title,
  intro,
  crumbs,
  lastReviewed,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  crumbs: Crumb[];
  lastReviewed?: string;
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <main className="flex-1 bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-14 lg:px-10 lg:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-sage-700">Home</Link></li>
            {crumbs.map((c, i) => (
              <li key={c.href} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {i === crumbs.length - 1 ? (
                  <span className="text-ink" aria-current="page">{c.label}</span>
                ) : (
                  <Link href={c.href} className="hover:text-sage-700">{c.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="kicker mt-8">{kicker}</p>
        <h1 className="display mt-3 text-[clamp(2.25rem,5vw,3.75rem)]">{title}</h1>
        {intro ? (
          <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-2xl">{intro}</p>
        ) : null}
        {lastReviewed ? (
          <p className="mt-4 font-mono text-xs text-ink-muted">Last reviewed: {lastReviewed}</p>
        ) : null}
        <div className="rule mt-8 mb-10" />

        {children}
      </div>

      <JsonLd data={breadcrumbJsonLd} />
    </main>
  );
}
