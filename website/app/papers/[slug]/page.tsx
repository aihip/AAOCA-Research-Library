import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findPaper,
  isConsensus,
  isFullText,
  paperSlug,
  papers,
} from "../../../lib/library";
import { REPOSITORY_URL, SITE_URL } from "../../../lib/site";

type PaperPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return papers.map((paper) => ({ slug: paperSlug(paper) }));
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
    alternates: { canonical: `/papers/${slug}` },
    openGraph: {
      type: "article",
      url: `/papers/${slug}`,
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

function externalIdentifiers(paper: NonNullable<ReturnType<typeof findPaper>>) {
  return [
    paper.doi && {
      label: "DOI",
      value: paper.doi,
      href: `https://doi.org/${paper.doi}`,
    },
    paper.pmid && {
      label: "PMID",
      value: paper.pmid,
      href: `https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}/`,
    },
    paper.pmcid && {
      label: "PMCID",
      value: paper.pmcid,
      href: `https://pmc.ncbi.nlm.nih.gov/articles/${paper.pmcid}/`,
    },
  ].filter(Boolean) as { label: string; value: string; href: string }[];
}

export default async function PaperPage({ params }: PaperPageProps) {
  const { slug } = await params;
  const paper = findPaper(slug);
  if (!paper) notFound();

  const fullText = isFullText(paper);
  const identifiers = externalIdentifiers(paper);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": isConsensus(paper) ? "MedicalGuideline" : "ScholarlyArticle",
    name: paper.title,
    headline: paper.title,
    datePublished: paper.year,
    isPartOf: paper.journal,
    url: `${SITE_URL}/papers/${slug}`,
    sameAs: paper.entry_url || undefined,
    identifier: [
      paper.doi && `https://doi.org/${paper.doi}`,
      paper.pmid && `PMID:${paper.pmid}`,
      paper.pmcid && `PMCID:${paper.pmcid}`,
    ].filter(Boolean),
    inLanguage: ["en", "zh-CN"],
  };

  return (
    <main className="detail-shell">
      <header className="detail-header">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">
            AO
          </span>
          <span>
            <strong>AAOCA Research Library</strong>
            <small>返回文献检索 / Back to search</small>
          </span>
        </Link>
        <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </header>

      <article className="paper-detail">
        <Link className="back-link" href="/">
          ← 全部文献 / All records
        </Link>
        <div className="paper-meta detail-meta">
          <span>{paper.year}</span>
          <span>{paper.category === "儿童" ? "儿童 / Pediatric" : "成人 / Adult"}</span>
          <span className={fullText ? "access-badge full" : "access-badge nonfull"}>
            {fullText ? "全文记录 / Full-text record" : "非全文 / Non-full-text"}
          </span>
          {isConsensus(paper) && (
            <span className="consensus-badge">共识或指南 / Guidance</span>
          )}
        </div>

        <h1>{paper.title}</h1>
        <p className="detail-journal">{paper.journal}</p>

        {!fullText && (
          <div className="nonfull-alert">
            <strong>⚠ 非全文 / NOT FULL TEXT</strong>
            <p>
              因付费墙、登录、反自动下载限制或来源条件，仓库没有把摘要冒充论文。
              本条目仅保留书目信息和合法原始入口。
            </p>
            <p>
              The repository does not present an abstract as the paper. Use the
              DOI, PMID, PMCID, or original entry below to retrieve and verify
              the version of record.
            </p>
          </div>
        )}

        <dl className="record-grid">
          <div>
            <dt>分类 / Population</dt>
            <dd>{paper.category === "儿童" ? "儿童 / Pediatric" : "成人 / Adult"}</dd>
          </div>
          <div>
            <dt>获取状态 / Access status</dt>
            <dd>{paper.access}</dd>
          </div>
          <div>
            <dt>页数 / Local pages</dt>
            <dd>{paper.pages}</dd>
          </div>
          <div>
            <dt>整理说明 / Curator note</dt>
            <dd>{paper.notes || "—"}</dd>
          </div>
        </dl>

        <section className="identifier-section">
          <p className="eyebrow">Persistent identifiers · 持久标识</p>
          <h2>核对正式来源</h2>
          {identifiers.length ? (
            <div className="identifier-links">
              {identifiers.map((identifier) => (
                <a
                  key={identifier.label}
                  href={identifier.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{identifier.label}</span>
                  <strong>{identifier.value}</strong>
                  <b aria-hidden="true">↗</b>
                </a>
              ))}
            </div>
          ) : (
            <p className="missing-id">
              截至整理日未检得 DOI、PMID 或 PMCID。No DOI, PMID, or PMCID was
              found by the curation date.
            </p>
          )}

          {paper.entry_url && (
            <a
              className="source-button"
              href={paper.entry_url}
              target="_blank"
              rel="noreferrer"
            >
              打开原始入口 / Open original source ↗
            </a>
          )}
        </section>

        <section className="provenance">
          <p className="eyebrow">Repository provenance · 仓库溯源</p>
          <dl>
            <div>
              <dt>记录路径</dt>
              <dd>{paper.path}</dd>
            </div>
            <div>
              <dt>SHA-256</dt>
              <dd>{paper.sha256}</dd>
            </div>
          </dl>
          <p>
            路径与哈希用于核对整理记录，不代表第三方文件获得本项目许可。
            Path and checksum support provenance; they do not grant rights in
            third-party content.
          </p>
        </section>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </main>
  );
}
