import type { Metadata } from "next";
import { DecisionModelPage } from "../../../../../components/pages/analysis/DecisionModel";
import { alternatesFor } from "../../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../../lib/analyses";

const meta = analysisBySlug("aaorca-decision-model");
const path = analysisPath(meta.slug);

export const metadata: Metadata = {
  title: meta.en.title,
  description: meta.en.summary,
  alternates: alternatesFor("en", path),
  openGraph: {
    type: "article",
    title: meta.en.title,
    description: meta.en.summary,
    publishedTime: meta.date,
    modifiedTime: meta.date,
    tags: ["AAORCA", "risk stratification", "stress imaging", "CPET", "indications", "shared decision-making"],
  },
};

export default function Page() {
  return <DecisionModelPage lang="en" />;
}
