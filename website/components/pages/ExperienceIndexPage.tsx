import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import {
  EXPERIENCE_INDEX_PATH,
  EXPERIENCE_PATH,
  experienceIndexCopy,
  familyConsultationExperience,
} from "../../lib/experiences";
import { getDictionary, href, type Language } from "../../lib/i18n";

export function ExperienceIndexPage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const copy = experienceIndexCopy[lang];

  return (
    <main className="topic-shell">
      <SiteHeader dict={dict} path={EXPERIENCE_INDEX_PATH} />

      <article className="topic-body experiences-body">
        <Link className="back-link" href={href(dict, "/")}>
          {dict.topic.backToAll}
        </Link>

        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="topic-intro">{copy.lede}</p>
        <p className="experience-warning">{copy.warning}</p>

        <Link className="experience-card" href={href(dict, EXPERIENCE_PATH)}>
          <span>{copy.sourceLabel}</span>
          <h2>{familyConsultationExperience.title[lang]}</h2>
          <p>{familyConsultationExperience.summary[lang]}</p>
          <strong>
            {copy.read} <span aria-hidden="true">→</span>
          </strong>
        </Link>
      </article>

      <SiteFooter dict={dict} />
    </main>
  );
}
