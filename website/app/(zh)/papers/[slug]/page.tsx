import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaperDetail } from "../../../../components/pages/PaperDetail";
import { alternatesFor } from "../../../../lib/i18n";
import { zh } from "../../../../lib/i18n/zh";
import { displayTitle, findPaper, isConsensus, isFullText, papers } from "../../../../lib/library";

type PaperPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return papers.map((paper) => ({ slug: paper.slug }));
}

export async function generateMetadata({
  params,
}: PaperPageProps): Promise<Metadata> {
  const { slug } = await params;
  const paper = findPaper(slug);
  if (!paper) return {};

  const title = displayTitle(paper, "zh");
  const description =
    paper.summaryZh ||
    `${paper.year} · ${paper.journal} · ${
      isFullText(paper) ? zh.detail.accessFull : zh.detail.accessNonFull
    }`;

  return {
    title,
    description,
    alternates: alternatesFor("zh", `/papers/${slug}`),
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: `${paper.year}-01-01`,
      tags: [
        "AAOCA",
        paper.category === "儿童" ? "pediatric" : "adult",
        isConsensus(paper) ? "guideline" : "research",
      ],
    },
  };
}

export default async function Page({ params }: PaperPageProps) {
  const { slug } = await params;
  const paper = findPaper(slug);
  if (!paper) notFound();

  return <PaperDetail lang="zh" paper={paper} />;
}
