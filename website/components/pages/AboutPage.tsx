import Link from "next/link";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { getDictionary, href, type Language } from "../../lib/i18n";

/**
 * For medical content, "who says this" is a primary trust signal, not a
 * footnote. A reader who arrives from a search engine has no other way to tell
 * whether this was assembled by a cardiologist, a student, or a script.
 */
export function AboutPage({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const copy = dict.about;

  return (
    <main className="topic-shell">
      <SiteHeader dict={dict} path="/about" />

      <article className="topic-body about-body">
        <Link className="back-link" href={href(dict, "/")}>
          {dict.topic.backToAll}
        </Link>

        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="topic-intro">{copy.lede}</p>

        {copy.sections.map((section) => (
          <section className="about-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </section>
        ))}

        <p className="topic-disclaimer">{dict.site.disclaimer}</p>
      </article>

      <SiteFooter dict={dict} />
    </main>
  );
}
