import type { Metadata } from "next";
import { IschemiaTestingPage } from "../../../../../components/pages/analysis/IschemiaTesting";
import { alternatesFor } from "../../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../../lib/analyses";

const meta = analysisBySlug("aaorca-ischemia-testing");
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
    tags: ["AAORCA", "ischemia testing", "stress perfusion CMR", "CPET", "dobutamine", "FFR", "IVUS"],
  },
};

export default function Page() {
  return <IschemiaTestingPage lang="en" />;
}
