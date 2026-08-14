import type { Metadata } from "next";
import { RepairTechniqueAnatomyPage } from "../../../../../components/pages/analysis/RepairTechniqueAnatomy";
import { alternatesFor } from "../../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../../lib/analyses";

const meta = analysisBySlug("aaorca-repair-technique-anatomy");
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
    tags: ["AAORCA", "unroofing", "reimplantation", "neo-ostium", "intramural segment", "aortic commissure"],
  },
};

export default function Page() {
  return <RepairTechniqueAnatomyPage lang="en" />;
}
