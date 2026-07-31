import Link from "next/link";
import { PaperExplorer } from "../PaperExplorer";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { getDictionary, href, type Language } from "../../lib/i18n";
import { libraryStats, papers, topicCounts } from "../../lib/library";
import {
  REPOSITORY_URL,
  SEARCH_KEYWORDS,
  SITE_DESCRIPTION,
  SITE_URL,
} from "../../lib/site";
import { topics } from "../../lib/topics";

export function HomePage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);

  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "AAOCA Research Library",
    alternateName: "冠状动脉起源异常文献库",
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}${dict.basePath}`,
    isAccessibleForFree: true,
    inLanguage: ["zh-CN", "en"],
    keywords: SEARCH_KEYWORDS.join(", "),
    dateModified: "2026-07-31",
    version: "2.0.0",
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
      <SiteHeader dict={dict} path="/" />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{dict.home.eyebrow}</p>
          <h1>
            {dict.home.title}
            <span>{dict.home.subtitle}</span>
          </h1>
          <p className="hero-lede">{dict.home.lede}</p>
          <p className="hero-disclaimer">{dict.site.disclaimer}</p>
          <div className="hero-actions">
            <a className="button primary" href="#primer">
              {dict.home.startReading}
            </a>
            <a className="button secondary" href="#library">
              {dict.home.browseLibrary}
            </a>
          </div>
        </div>
      </section>

      <section className="primer" id="primer">
        <p className="eyebrow">{dict.home.primerEyebrow}</p>
        <h2>{dict.home.primerHeading}</h2>
        {dict.home.primerBody.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </section>

      <section className="questions" id="questions" aria-labelledby="questions-title">
        <div className="questions-heading">
          <p className="eyebrow">{dict.home.questionsEyebrow}</p>
          <h2 id="questions-title">{dict.home.questionsHeading}</h2>
          <p className="section-lede">{dict.home.questionsLede}</p>
        </div>
        <div className="question-grid">
          {topics.map((topic) => (
            <Link
              className="question-card"
              key={topic.slug}
              href={href(dict, `/topics/${topic.slug}`)}
            >
              <h3>{topic[lang].question}</h3>
              <p>{topic[lang].blurb}</p>
              <span className="question-count">
                {dict.home.recordCount(topicCounts[topic.slug])}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="stats" aria-label={dict.home.statsLabel}>
        <article>
          <strong>{libraryStats.total}</strong>
          <span>{dict.home.stats.total}</span>
        </article>
        <article>
          <strong>{libraryStats.pediatric}</strong>
          <span>{dict.home.stats.pediatric}</span>
        </article>
        <article>
          <strong>{libraryStats.adult}</strong>
          <span>{dict.home.stats.adult}</span>
        </article>
        <article>
          <strong>{libraryStats.consensus}</strong>
          <span>{dict.home.stats.guidance}</span>
        </article>
      </section>

      <PaperExplorer records={papers} lang={lang} />

      <section className="principles">
        <div>
          <p className="eyebrow">{dict.home.principlesEyebrow}</p>
          <h2>{dict.home.principlesHeading}</h2>
        </div>
        <div className="principle-grid">
          {dict.home.principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.heading}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />
    </main>
  );
}
