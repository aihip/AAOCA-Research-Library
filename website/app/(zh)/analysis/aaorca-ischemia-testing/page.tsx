import type { Metadata } from "next";
import { IschemiaTestingPage } from "../../../../components/pages/analysis/IschemiaTesting";
import { alternatesFor } from "../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../lib/analyses";

const meta = analysisBySlug("aaorca-ischemia-testing");
const path = analysisPath(meta.slug);

export const metadata: Metadata = {
  title: meta.zh.title,
  description: meta.zh.summary,
  alternates: alternatesFor("zh", path),
  openGraph: {
    type: "article",
    title: meta.zh.title,
    description: meta.zh.summary,
    publishedTime: meta.date,
    modifiedTime: meta.date,
    tags: ["AAORCA", "缺血检测", "负荷灌注 CMR", "CPET", "多巴酚丁胺", "FFR", "IVUS"],
  },
};

export default function Page() {
  return <IschemiaTestingPage lang="zh" />;
}
