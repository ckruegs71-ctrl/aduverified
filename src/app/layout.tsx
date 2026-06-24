import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

// Body sans — warm humanist grotesk, no Vercel/Geist fingerprint.
const hankenSans = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

// Editorial display serif — magazine-grade, optical-size axis + true italic.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME ?? "ADUVerified";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ADU Builders + Pre-Approved Plans Directory`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "A free lead-matching directory connecting U.S. homeowners with ADU, tiny home, and pre-fab builders in CA, OR, WA, CO, TX & AZ. Submit your project once and up to three ADU builders in your area will reach out — no fee, no spam.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: [
    "ADU builders",
    "accessory dwelling unit",
    "pre-approved ADU plans",
    "tiny home builders",
    "pre-fab homes",
    "granny flat",
    "garage conversion ADU",
    "California ADU",
    "Oregon ADU",
    "Washington ADU",
    "Colorado ADU",
    "Texas barndominium",
    "Arizona casita",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ADU Builders + Pre-Approved Plans Directory`,
    description:
      "Free lead-matching directory connecting homeowners with ADU builders who know their city's pre-approved plan program. Up to three matched builders reach out to you — no fee, no spam.",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ADU Builders + Pre-Approved Plans Directory`,
    description:
      "Free lead-matching directory connecting homeowners with ADU builders who know their city's pre-approved plan program. Up to three matched builders reach out to you — no fee, no spam.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Lead-matching directory connecting homeowners with ADU, tiny home, and pre-fab builders across California, Oregon, Washington, Colorado, Texas, and Arizona.",
  areaServed: ["California", "Oregon", "Washington", "Colorado", "Texas", "Arizona"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Trim defensively — env vars pasted into Vercel can pick up stray whitespace
  // (tabs, newlines, spaces) from the clipboard, which would inject an invalid
  // GA4 property ID and silently drop all events.
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

  return (
    <html
      lang="en"
      className={`${hankenSans.variable} ${newsreader.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <link rel="llms" href="/llms.txt" />
        {/* Google Analytics 4 — plain script tags in <head> per Google's official
            install guide. We avoid next/script with strategy="afterInteractive"
            because in this Next.js / Turbopack setup the scripts get buried in
            the RSC hydration payload and never make it into the DOM. */}
        {gaMeasurementId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaMeasurementId}', { anonymize_ip: true });`,
              }}
            />
          </>
        ) : null}
      </head>
      <body className="paper min-h-full flex flex-col text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
        <JsonLd data={localBusinessJsonLd} />
      </body>
    </html>
  );
}
