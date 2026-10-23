import type { Metadata } from "next";
import { AorcaHowSeriousPage } from "../../../../../components/pages/analysis/AorcaHowSerious";
import { alternatesFor } from "../../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../../lib/analyses";

const meta = analysisBySlug("aaorca-how-serious");
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
    tags: ["AAORCA", "R-AAOCA", "intramural course", "sudden death risk", "surgery", "sports"],
  },
};

export default function Page() {
  return <AorcaHowSeriousPage lang="en" />;
}
