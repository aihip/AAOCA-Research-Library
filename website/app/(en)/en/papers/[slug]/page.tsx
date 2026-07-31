import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaperDetail } from "../../../../../components/pages/PaperDetail";
import { alternatesFor } from "../../../../../lib/i18n";
import { findPaper, isConsensus, isFullText, papers } from "../../../../../lib/library";

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

  const description = `${paper.year} · ${paper.journal} · ${
    isFullText(paper) ? "full-text record" : "clearly marked non-full-text record"
  }. DOI and PMID links where available.`;

  return {
    title: paper.title,
    description,
    alternates: alternatesFor("en", `/papers/${slug}`),
    openGraph: {
      type: "article",
      title: paper.title,
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

  return <PaperDetail lang="en" paper={paper} />;
}
