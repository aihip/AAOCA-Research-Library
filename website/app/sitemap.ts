import type { MetadataRoute } from "next";
import { papers } from "../lib/library";
import { absoluteUrl } from "../lib/i18n";
import { TOPIC_SLUGS } from "../lib/topics";
import { ANALYSIS_INDEX_PATH, ANALYSIS_SLUGS, analysisPath } from "../lib/analyses";
import { UPDATE_HISTORY_PATH } from "../lib/updates";

const LAST_MODIFIED = "2026-08-14";
const TREES = ["", "/en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return TREES.flatMap((base) => [
    {
      url: absoluteUrl(base || "/"),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: base === "" ? 1 : 0.9,
    },
    {
      url: absoluteUrl(`${base}/about`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: absoluteUrl(`${base}${UPDATE_HISTORY_PATH}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: absoluteUrl(`${base}${ANALYSIS_INDEX_PATH}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: base === "" ? 0.9 : 0.8,
    },
    ...ANALYSIS_SLUGS.map((slug) => ({
      url: absoluteUrl(`${base}${analysisPath(slug)}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: base === "" ? 0.95 : 0.85,
    })),
    ...TOPIC_SLUGS.map((slug) => ({
      url: absoluteUrl(`${base}/topics/${slug}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...papers.map((paper) => ({
      url: absoluteUrl(`${base}/papers/${paper.slug}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]);
}
