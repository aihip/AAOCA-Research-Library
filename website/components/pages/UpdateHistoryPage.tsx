import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { getDictionary, href, type Language } from "../../lib/i18n";
import { REPOSITORY_URL } from "../../lib/site";
import { UPDATE_HISTORY_PATH, updates } from "../../lib/updates";

const copy = {
  zh: {
    back: "← 回到首页",
    eyebrow: "项目动态",
    title: "更新历史",
    lede: "这里记录文献库内容、证据分析和网站功能的主要变化。小型文字修正不单独列出；每项记录都附有可核对的代码提交。",
    current: "最新",
    changes: "本次更新",
    commits: "相关提交",
    allCommits: "查看完整提交历史",
  },
  en: {
    back: "← Back to home",
    eyebrow: "Project activity",
    title: "Update history",
    lede: "Major changes to the library, evidence analyses, and website are recorded here. Minor copy edits are omitted; each entry links to verifiable source commits.",
    current: "Latest",
    changes: "What changed",
    commits: "Related commits",
    allCommits: "View the complete commit history",
  },
} as const;

export function UpdateHistoryPage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const text = copy[lang];

  return (
    <main className="topic-shell">
      <SiteHeader dict={dict} path={UPDATE_HISTORY_PATH} />

      <article className="topic-body updates-body">
        <Link className="back-link" href={href(dict, "/")}>
          {text.back}
        </Link>

        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
        <p className="topic-intro">{text.lede}</p>

        <ol className="update-history">
          {updates.map((entry, index) => (
            <li className="update-entry" key={entry.date}>
              <div className="update-date">
                <time dateTime={entry.date}>{entry.date}</time>
                {index === 0 ? <span>{text.current}</span> : null}
              </div>

              <section className="update-card">
                <h2>{entry.title[lang]}</h2>
                <p className="update-summary">{entry.summary[lang]}</p>

                <h3>{text.changes}</h3>
                <ul>
                  {entry.changes.map((change) => (
                    <li key={change.en}>{change[lang]}</li>
                  ))}
                </ul>

                <div className="update-commits">
                  <strong>{text.commits}</strong>
                  <div>
                    {entry.commits.map((commit) => (
                      <a
                        href={`${REPOSITORY_URL}/commit/${commit}`}
                        key={commit}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {commit}
                      </a>
                    ))}
                  </div>
                </div>
              </section>
            </li>
          ))}
        </ol>

        <a
          className="all-commits-link"
          href={`${REPOSITORY_URL}/commits/main`}
          target="_blank"
          rel="noreferrer"
        >
          {text.allCommits} <span aria-hidden="true">↗</span>
        </a>
      </article>

      <SiteFooter dict={dict} />
    </main>
  );
}
