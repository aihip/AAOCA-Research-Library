import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { getDictionary, href, type Language } from "../../lib/i18n";
import { ANALYSIS_INDEX_PATH, analyses, analysisPath } from "../../lib/analyses";

const copy = {
  zh: {
    back: "← 回到首页",
    eyebrow: "证据分析",
    heading: "把文献读成决策",
    count: (n: number) => `${n} 篇分析`,
    lede:
      "每一篇分析都围绕一个具体问题，把相关研究的病例数、设计和局限摆在一起，再说明它能回答什么、不能回答什么。所有文章由 AI 依据本库题录、PubMed 题录与可获取全文整理，没有医学专业人士审阅，不能替代医生的诊断和建议。",
  },
  en: {
    back: "← Back to home",
    eyebrow: "Evidence analysis",
    heading: "Reading the literature as a decision",
    count: (n: number) => `${n} ${n === 1 ? "analysis" : "analyses"}`,
    lede:
      "Each analysis takes one question, puts the relevant studies side by side with their patient counts, designs, and limits, and states what they can and cannot answer. All of them were assembled by AI from this library's records, PubMed metadata, and available full texts. No medical professional reviewed them, and they do not replace medical diagnosis or advice.",
  },
} as const;

export function AnalysisIndexPage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const text = copy[lang];

  return (
    <main className="analysis-shell">
      <SiteHeader dict={dict} path={ANALYSIS_INDEX_PATH} />

      <article className="analysis-article">
        <Link className="back-link" href={href(dict, "/")}>
          {text.back}
        </Link>

        <header className="analysis-article-header">
          <div className="analysis-byline">
            <span>{text.eyebrow}</span>
            <span>{text.count(analyses.length)}</span>
          </div>
          <h1>{text.heading}</h1>
          <p className="analysis-standfirst">{text.lede}</p>
        </header>

        <section className="analysis-section analysis-list">
          <ol>
            {analyses.map((analysis) => (
              <li key={analysis.slug}>
                <Link href={href(dict, analysisPath(analysis.slug))}>
                  <time dateTime={analysis.date}>{analysis.dateLabel[lang]}</time>
                  <h2>{analysis[lang].title}</h2>
                  <p>{analysis[lang].summary}</p>
                  <span>
                    {analysis[lang].read} <i aria-hidden="true">→</i>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      </article>

      <SiteFooter dict={dict} />
    </main>
  );
}
