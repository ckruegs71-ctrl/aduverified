// Renders JSON-LD structured data as a server-rendered <script> tag so it's
// present in the initial HTML (crawlers + AI engines read it). Do NOT use
// next/script with afterInteractive for JSON-LD — that injects it post-hydration,
// leaving jsonLdCount=0 in the crawlable HTML.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
