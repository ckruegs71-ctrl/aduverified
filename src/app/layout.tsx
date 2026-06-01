import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Fraunces, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Editorial display serif — variable axes for soft/opsz feel.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
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
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <link rel="llms" href="/llms.txt" />
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
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
