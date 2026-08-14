import type { Metadata } from "next";
import { ProximalDiameterGeometryPage } from "../../../../../components/pages/analysis/ProximalDiameterGeometry";
import { alternatesFor } from "../../../../../lib/i18n";
import { analysisBySlug, analysisPath } from "../../../../../lib/analyses";

const meta = analysisBySlug("aaorca-proximal-diameter-geometry");
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
    tags: ["AAORCA", "coronary geometry", "area stenosis", "ostial minor axis", "Z score", "CTA quantification"],
  },
};

export default function Page() {
  return <ProximalDiameterGeometryPage lang="en" />;
}
