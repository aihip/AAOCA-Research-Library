import papersData from "../data/papers.json";

export type Paper = {
  category: "儿童" | "成人";
  access: string;
  year: string;
  title: string;
  journal: string;
  doi: string;
  pmid: string;
  pmcid: string;
  entry_url: string;
  notes: string;
  path: string;
  pages: string;
  bytes: string;
  sha256: string;
};

export const papers = (papersData as Paper[]).slice().sort((a, b) => {
  const byYear = Number(b.year) - Number(a.year);
  return byYear || a.title.localeCompare(b.title);
});

const consensusPattern =
  /consensus|guideline|recommendations|scientific statement|专家共识|指南/i;

export function isFullText(paper: Paper) {
  return paper.access.startsWith("全文");
}

export function isConsensus(paper: Paper) {
  return consensusPattern.test(paper.title);
}

export function paperSlug(paper: Paper) {
  return `${paper.year}-${paper.sha256.slice(0, 12)}`;
}

export function findPaper(slug: string) {
  return papers.find((paper) => paperSlug(paper) === slug);
}

export const libraryStats = {
  total: papers.length,
  pages: papers.reduce((sum, paper) => sum + Number(paper.pages || 0), 0),
  pediatric: papers.filter((paper) => paper.category === "儿童").length,
  adult: papers.filter((paper) => paper.category === "成人").length,
  fullText: papers.filter(isFullText).length,
  nonFullText: papers.filter((paper) => !isFullText(paper)).length,
  consensus: papers.filter(isConsensus).length,
};
