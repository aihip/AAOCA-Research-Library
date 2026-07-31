import type { Metadata } from "next";
import { PaperExplorer } from "../components/PaperExplorer";
import { libraryStats, papers } from "../lib/library";
import {
  REPOSITORY_URL,
  SEARCH_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
  title: "AAOCA 文献库：儿童、成人、专家共识",
  description:
    "冠状动脉异常主动脉起源（AAOCA / AAORCA）双语文献索引，收录儿童、成人研究、专家共识与指南，醒目标注非全文记录。",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "AAOCA Research Library",
    alternateName: "冠状动脉异常主动脉起源文献库",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    isAccessibleForFree: true,
    inLanguage: ["zh-CN", "en"],
    keywords: SEARCH_KEYWORDS.join(", "),
    dateModified: "2026-07-31",
    version: "1.0.0",
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: {
      "@type": "Organization",
      name: "AAOCA Research Library contributors",
      url: REPOSITORY_URL,
    },
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "text/csv",
        contentUrl: `${REPOSITORY_URL}/blob/main/index/bibliography_and_access_status.csv`,
      },
      {
        "@type": "DataDownload",
        encodingFormat: "application/json",
        contentUrl: `${REPOSITORY_URL}/blob/main/index/bibliography_and_access_status.json`,
      },
    ],
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AAOCA Research Library">
          <span className="brand-mark" aria-hidden="true">
            AO
          </span>
          <span>
            <strong>AAOCA Research Library</strong>
            <small>双语证据索引</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#library">文献 / Literature</a>
          <a href={`${REPOSITORY_URL}/blob/main/RIGHTS.md`}>版权 / Rights</a>
          <a
            className="repo-link"
            href={REPOSITORY_URL}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Curated evidence · 双语整理 · 2026-07-31</p>
          <h1>
            冠状动脉异常主动脉起源
            <span>AAOCA Research Library</span>
          </h1>
          <p className="hero-lede">
            儿童与成人 AAOCA / AAORCA 文献、专家共识和临床指南的双语检索入口。
            每一条非全文记录均明确标识，并保留 DOI、PMID 或原始入口。
          </p>
          <p className="hero-lede english">
            A bilingual index for pediatric and adult AAOCA literature,
            consensus statements, clinical guidelines, imaging, risk
            assessment, and surgical outcomes.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#library">
              开始检索 / Search
            </a>
            <a
              className="button secondary"
              href={`${REPOSITORY_URL}/blob/main/README.en.md`}
              target="_blank"
              rel="noreferrer"
            >
              Read the guide
            </a>
          </div>
        </div>

        <aside className="integrity-card" aria-label="Collection integrity">
          <span className="integrity-label">Access integrity</span>
          <strong>没有用摘要冒充论文</strong>
          <p>
            No abstract is presented as a paper. Paywalled, login-restricted,
            or otherwise unavailable articles are clearly marked
            <b> NON_FULLTEXT</b>.
          </p>
          <div className="integrity-row">
            <span>DOI</span>
            <span>PMID</span>
            <span>Source</span>
            <span>SHA-256</span>
          </div>
        </aside>
      </section>

      <section className="stats" aria-label="Collection statistics">
        <article>
          <strong>{libraryStats.total}</strong>
          <span>独立记录 / records</span>
        </article>
        <article>
          <strong>{libraryStats.pediatric}</strong>
          <span>儿童 / pediatric</span>
        </article>
        <article>
          <strong>{libraryStats.adult}</strong>
          <span>成人 / adult</span>
        </article>
        <article>
          <strong>{libraryStats.consensus}</strong>
          <span>共识与指南 / guidance</span>
        </article>
      </section>

      <PaperExplorer records={papers} />

      <section className="principles">
        <div>
          <p className="eyebrow">Curation principles · 整理原则</p>
          <h2>可追溯、可核对、不混淆获取状态</h2>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>儿童与成人分开</h3>
            <p>
              Mixed-age studies are assigned once, with the classification
              rationale retained in the source index.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>专家共识单独成条</h3>
            <p>
              Consensus statements and clinical guidelines remain
              independently searchable records.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>非全文醒目标注</h3>
            <p>
              Access cards point to lawful source entries and never substitute
              an abstract for the complete article.
            </p>
          </article>
        </div>
      </section>

      <footer>
        <div>
          <strong>AAOCA Research Library</strong>
          <p>Literature discovery and research organization—not medical advice.</p>
        </div>
        <div className="footer-links">
          <a href={`${REPOSITORY_URL}/blob/main/CITATION.cff`}>Citation</a>
          <a href={`${REPOSITORY_URL}/blob/main/RIGHTS.md`}>Rights</a>
          <a href={`${REPOSITORY_URL}/blob/main/CONTRIBUTING.md`}>
            Contributing
          </a>
          <a href={REPOSITORY_URL}>GitHub</a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />
    </main>
  );
}
