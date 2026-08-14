import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import {
  EXPERIENCE_INDEX_PATH,
  EXPERIENCE_PATH,
  familyConsultationExperience as experience,
} from "../../lib/experiences";
import { getDictionary, href, type Language } from "../../lib/i18n";

const copy = {
  zh: {
    back: "← 返回网友经验",
    eyebrow: "网友整理 · 2026 年 8 月",
    warningTitle: "先看来源边界",
    facts: "原始材料概况",
    prompts: "可以带去门诊的问题",
    related: "回到可核查的研究证据",
    disclaimer:
      "这是经过匿名和编辑处理的个人整理，不是病历、研究或医疗建议。任何手术、随访和运动决定都需要由了解本人解剖与检查结果的临床团队作出。",
  },
  en: {
    back: "← Back to community experiences",
    eyebrow: "Community-compiled · August 2026",
    warningTitle: "Source limits first",
    facts: "What the source contained",
    prompts: "Questions to take to an appointment",
    related: "Return to verifiable research evidence",
    disclaimer:
      "This is a de-identified and edited personal compilation, not a medical record, research study, or medical advice. Decisions about surgery, surveillance, and exercise require a clinical team that knows the individual's anatomy and test results.",
  },
} as const;

export function ExperiencePage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const text = copy[lang];

  return (
    <main className="topic-shell">
      <SiteHeader dict={dict} path={EXPERIENCE_PATH} />

      <article className="topic-body experience-body">
        <Link className="back-link" href={href(dict, EXPERIENCE_INDEX_PATH)}>
          {text.back}
        </Link>

        <header className="experience-header">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{experience.title[lang]}</h1>
          <p className="topic-intro">{experience.summary[lang]}</p>
        </header>

        <aside className="experience-source-note" aria-labelledby="source-boundary-title">
          <h2 id="source-boundary-title">{text.warningTitle}</h2>
          <p>{experience.sourceBoundary[lang]}</p>
        </aside>

        <section className="experience-facts" aria-labelledby="experience-facts-title">
          <h2 id="experience-facts-title">{text.facts}</h2>
          <div>
            {experience.facts.map((fact) => (
              <article key={fact.value + fact.label.en}>
                <strong>{fact.value}</strong>
                <span>{fact.label[lang]}</span>
              </article>
            ))}
          </div>
        </section>

        <div className="experience-sections">
          {experience.sections.map((section) => (
            <section className="experience-section" key={section.heading.en}>
              <h2>{section.heading[lang]}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.en}>{paragraph[lang]}</p>
              ))}
              {section.prompts ? (
                <div className="experience-prompts">
                  <h3>{text.prompts}</h3>
                  <ol>
                    {section.prompts.map((prompt) => (
                      <li key={prompt.en}>{prompt[lang]}</li>
                    ))}
                  </ol>
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="experience-related">
          <h2>{text.related}</h2>
          <div>
            {experience.related.map((item) => (
              <Link href={href(dict, item.path)} key={item.path}>
                {item.label[lang]} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <p className="topic-disclaimer">{text.disclaimer}</p>
      </article>

      <SiteFooter dict={dict} />
    </main>
  );
}
