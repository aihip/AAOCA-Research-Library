import type { MetadataRoute } from "next";
import { paperSlug, papers } from "../lib/library";
import { SITE_URL } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-07-31",
      changeFrequency: "monthly",
      priority: 1,
    },
    ...papers.map((paper) => ({
      url: `${SITE_URL}/papers/${paperSlug(paper)}`,
      lastModified: "2026-07-31",
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
