import type { MetadataRoute } from "next";
import { papers } from "../lib/library";
import { SITE_URL } from "../lib/site";
import { TOPIC_SLUGS } from "../lib/topics";

const LAST_MODIFIED = "2026-08-10";
const TREES = ["", "/en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return TREES.flatMap((base) => [
    {
      url: `${SITE_URL}${base || "/"}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: base === "" ? 1 : 0.9,
    },
    {
      url: `${SITE_URL}${base}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...TOPIC_SLUGS.map((slug) => ({
      url: `${SITE_URL}${base}/topics/${slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...papers.map((paper) => ({
      url: `${SITE_URL}${base}/papers/${paper.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]);
}
