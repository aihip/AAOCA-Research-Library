import type { Dictionary } from "../lib/i18n";
import {
  accessionMonthCounts,
  publicationYearCounts,
} from "../lib/library";

function TimelineBars({
  items,
  formatLabel,
  formatCount,
}: {
  items: { label: string; count: number }[];
  formatLabel: (label: string) => string;
  formatCount: (count: number) => string;
}) {
  const maximum = Math.max(...items.map((item) => item.count), 1);

  return (
    <ol className="timeline-bars">
      {items.map((item) => (
        <li key={item.label}>
          <span className="timeline-label">{formatLabel(item.label)}</span>
          <span className="timeline-track" aria-hidden="true">
            <span style={{ width: `${(item.count / maximum) * 100}%` }} />
          </span>
          <strong>{formatCount(item.count)}</strong>
        </li>
      ))}
    </ol>
  );
}

export function LibraryTimeline({ dict }: { dict: Dictionary }) {
  const copy = dict.home.timeline;

  return (
    <section className="library-timeline" aria-labelledby="library-timeline-title">
      <header className="library-timeline-heading">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="library-timeline-title">{copy.heading}</h2>
        </div>
        <p>{copy.lede}</p>
      </header>

      <div className="library-timeline-grid">
        <article>
          <h3>{copy.byYear}</h3>
          <TimelineBars
            items={publicationYearCounts}
            formatLabel={(year) => year}
            formatCount={copy.publicationCount}
          />
        </article>

        <article className="accession-timeline">
          <h3>{copy.byMonth}</h3>
          <TimelineBars
            items={accessionMonthCounts}
            formatLabel={copy.monthLabel}
            formatCount={copy.additionCount}
          />
          <p>{copy.monthNote}</p>
        </article>
      </div>
    </section>
  );
}
