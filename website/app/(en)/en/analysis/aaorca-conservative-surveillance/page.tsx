import type { Metadata } from "next";
import { ConservativeSurveillancePage } from "../../../../../components/pages/analysis/ConservativeSurveillance";
import { alternatesFor } from "../../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../../lib/analyses";

const meta = analysisBySlug("aaorca-conservative-surveillance");
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
    tags: ["AAORCA", "conservative management", "active surveillance", "follow-up", "CPET", "stress CMR", "exercise recommendations"],
  },
};

export default function Page() {
  return <ConservativeSurveillancePage lang="en" />;
}
