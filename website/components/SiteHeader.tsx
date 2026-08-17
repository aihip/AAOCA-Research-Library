import Link from "next/link";
import { counterpartHref, href, type Dictionary } from "../lib/i18n";
import { REPOSITORY_URL } from "../lib/site";
import { ANALYSIS_INDEX_PATH } from "../lib/analyses";
import { CARE_IN_CHINA_PATH } from "../lib/care";

type SiteHeaderProps = {
  dict: Dictionary;
  /** Language-agnostic path of the current page, e.g. "/topics/sports". */
  path: string;
};

export function SiteHeader({ dict, path }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="brand" href={href(dict, "/")}>
        <span className="brand-mark" aria-hidden="true">
          AO
        </span>
        <span>
          <strong>{dict.site.name}</strong>
          <small>{dict.site.tagline}</small>
        </span>
      </Link>

      <nav aria-label={dict.nav.questions}>
        <Link href={href(dict, ANALYSIS_INDEX_PATH)}>{dict.nav.analysis}</Link>
        <Link href={href(dict, CARE_IN_CHINA_PATH)}>{dict.nav.care}</Link>
        <a href={href(dict, "/#questions")}>{dict.nav.questions}</a>
        <a href={href(dict, "/#library")}>{dict.nav.library}</a>
        <Link href={href(dict, "/about")}>{dict.nav.about}</Link>
        <Link href={href(dict, "/updates")}>{dict.nav.updates}</Link>
        <a href={`${REPOSITORY_URL}/blob/main/RIGHTS.md`}>{dict.nav.rights}</a>
        <Link
          className="language-link"
          href={counterpartHref(dict.lang, path)}
          hrefLang={dict.lang === "zh" ? "en" : "zh-CN"}
          aria-label={dict.nav.switchToLabel}
        >
          {dict.nav.switchTo}
        </Link>
        <a
          className="repo-link"
          href={REPOSITORY_URL}
          target="_blank"
          rel="noreferrer"
        >
          {dict.nav.github} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
