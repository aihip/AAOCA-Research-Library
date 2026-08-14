import Link from "next/link";
import { PaperCard } from "../PaperCard";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { SourceList } from "../SourceList";
import { SummaryNotice } from "../SummaryNotice";
import { absoluteUrl, getDictionary, href, type Language } from "../../lib/i18n";
import { papersForTopic } from "../../lib/library";
import { topics, type Topic } from "../../lib/topics";

export function TopicPage({ lang, topic }: { lang: Language; topic: Topic }) {
  const dict = getDictionary(lang);
  const copy = topic[lang];
  const records = papersForTopic(topic.slug);
  const others = topics.filter((item) => item.slug !== topic.slug);
  const path = `/topics/${topic.slug}`;

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.question,
    description: copy.blurb,
    url: absoluteUrl(`${dict.basePath}${path}`),
    inLanguage: dict.htmlLang,
    isPartOf: {
      "@type": "Dataset",
      name: "AAOCA Research Library",
      url: absoluteUrl(dict.basePath),
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: records.length,
      itemListElement: records.map((paper, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`${dict.basePath}/papers/${paper.slug}`),
        name: paper.title,
      })),
    },
  };

  return (
    <main className="topic-shell">
      <SiteHeader dict={dict} path={path} />

      <article className="topic-body">
        <Link className="back-link" href={href(dict, "/")}>
          {dict.topic.backToAll}
        </Link>

        <p className="eyebrow">{dict.topic.eyebrow}</p>
        <h1>{copy.question}</h1>
        {copy.intro.split("\n").map((paragraph) => (
          <p className="topic-intro" key={paragraph.slice(0, 24)}>
            {paragraph}
          </p>
        ))}
        <SourceList
          slugs={topic.sources}
          label={dict.topic.sourcesLabel}
          dict={dict}
        />
        <p className="topic-disclaimer">{dict.site.disclaimer}</p>

        <section className="topic-records" aria-labelledby="topic-records-title">
          <div className="topic-records-heading">
            <h2 id="topic-records-title">{dict.topic.recordsHeading}</h2>
            <span>{dict.topic.recordCount(records.length)}</span>
          </div>
          <p className="section-lede">{dict.topic.ordering}</p>

          <SummaryNotice records={records} dict={dict} />

          {records.length ? (
            <div className="paper-list">
              {records.map((paper) => (
                <PaperCard key={paper.sha256} paper={paper} dict={dict} />
              ))}
            </div>
          ) : (
            <p className="empty-state">{dict.topic.empty}</p>
          )}
        </section>

        <section className="topic-others">
          <h2>{dict.topic.otherQuestions}</h2>
          <div className="question-grid compact">
            {others.map((item) => (
              <Link
                className="question-card"
                key={item.slug}
                href={href(dict, `/topics/${item.slug}`)}
              >
                <h3>{item[lang].question}</h3>
                <p>{item[lang].blurb}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <SiteFooter dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
    </main>
  );
}
