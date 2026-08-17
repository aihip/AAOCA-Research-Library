import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import {
  CARE_IN_CHINA_PATH,
  careInChinaCopy,
  careIndependentOpinionSources,
  careInstitutions,
  careVolumeSources,
} from "../../lib/care";
import { getDictionary, href, type Language } from "../../lib/i18n";

export function CareInChinaPage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const copy = careInChinaCopy[lang];

  return (
    <main className="topic-shell">
      <SiteHeader dict={dict} path={CARE_IN_CHINA_PATH} />

      <article className="topic-body care-body">
        <Link className="back-link" href={href(dict, "/")}>
          {dict.topic.backToAll}
        </Link>

        <header className="care-header">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="topic-intro">{copy.lede}</p>
        </header>

        <aside className="care-warning">
          <strong>{copy.warningTitle}</strong>
          <p>{copy.warning}</p>
        </aside>

        <section className="care-family-advice">
          <h2>{copy.familyAdviceTitle}</h2>
          {copy.familyAdviceBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="care-independent-opinion">
            <h3>{copy.independentOpinionTitle}</h3>
            {copy.independentOpinionBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="care-independent-evidence">{copy.independentOpinionEvidence}</p>
            <div className="care-volume-sources">
              <strong>{copy.independentOpinionSourcesTitle}</strong>
              <ul>
                {careIndependentOpinionSources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label[lang]} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="care-volume-evidence">{copy.volumeEvidence}</p>
          <div className="care-volume-sources">
            <strong>{copy.volumeSourcesTitle}</strong>
            <ul>
              {careVolumeSources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    {source.label[lang]} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="care-selection">
          <h2>{copy.selectionTitle}</h2>
          {copy.selectionBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <div className="care-directory">
          {careInstitutions.map((institution) => (
            <section className="care-institution" key={institution.id}>
              <header>
                <span>{institution.city[lang]}</span>
                <h2>{institution.name[lang]}</h2>
                <p>{institution.summary[lang]}</p>
              </header>

              {institution.experts.length > 0 ? (
                <div className="care-experts">
                  <h3>{copy.expertsTitle}</h3>
                  <div>
                    {institution.experts.map((expert) => (
                      <article className="care-expert" key={expert.name.en}>
                        <h4>{expert.name[lang]}</h4>
                        <p className="care-role">{expert.role[lang]}</p>
                        <p>{expert.relevance[lang]}</p>
                        <a href={expert.url} target="_blank" rel="noreferrer">
                          {copy.openProfile} <span aria-hidden="true">↗</span>
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="care-institution-only">{copy.institutionOnly}</p>
              )}

              <div className="care-sources">
                <strong>{copy.sourcesTitle}</strong>
                <ul>
                  {institution.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        {source.label[lang]} <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <section className="care-prep">
          <h2>{copy.checklistTitle}</h2>
          <p>{copy.checklistIntro}</p>
          <ul>
            {copy.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="care-questions">
          <h2>{copy.questionsTitle}</h2>
          <ol>
            {copy.questions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ol>
        </section>

        <aside className="care-emergency">{copy.emergency}</aside>
        <p className="care-disclaimer">{copy.disclaimer}</p>
        <p className="topic-disclaimer">{dict.site.disclaimer}</p>
      </article>

      <SiteFooter dict={dict} />
    </main>
  );
}
