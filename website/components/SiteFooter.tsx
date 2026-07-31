import type { Dictionary } from "../lib/i18n";
import { REPOSITORY_URL } from "../lib/site";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer>
      <div>
        <strong>{dict.site.name}</strong>
        <p>{dict.site.notMedicalAdvice}</p>
        <p>{dict.site.rightsNotice}</p>
      </div>
      <div className="footer-links">
        <a href={`${REPOSITORY_URL}/blob/main/CITATION.cff`}>
          {dict.footer.citation}
        </a>
        <a href={`${REPOSITORY_URL}/blob/main/RIGHTS.md`}>{dict.footer.rights}</a>
        <a href={`${REPOSITORY_URL}/blob/main/CONTRIBUTING.md`}>
          {dict.footer.contributing}
        </a>
        <a href={REPOSITORY_URL}>{dict.footer.github}</a>
      </div>
    </footer>
  );
}
