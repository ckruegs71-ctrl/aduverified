import type { MetadataRoute } from "next";
import { STATES } from "@/lib/states";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aduverified.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    {
      url: `${SITE_URL}/los-angeles/adu-cost`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const stateRoutes: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: new Date(s.lastReviewed),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Legal pages are intentionally excluded (noindex). /api is excluded.
  return [...staticRoutes, ...stateRoutes];
}
