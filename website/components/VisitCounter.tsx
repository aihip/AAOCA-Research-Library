"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Language } from "../lib/i18n";

type CounterState = number | "unavailable" | null;

export function VisitCounter({
  lang,
  label,
  loadingLabel,
}: {
  lang: Language;
  label: string;
  loadingLabel: string;
}) {
  const pathname = usePathname();
  const [count, setCount] = useState<CounterState>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function recordVisit() {
      try {
        const response = await fetch("/api/visits", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ path: pathname }),
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Visit counter request failed");
        const data = (await response.json()) as { count?: unknown };
        if (typeof data.count !== "number") throw new Error("Invalid visit count");
        setCount(data.count);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setCount("unavailable");
      }
    }

    void recordVisit();
    return () => controller.abort();
  }, [pathname]);

  if (count === "unavailable") return null;

  const formattedCount = count === null
    ? null
    : new Intl.NumberFormat(lang === "zh" ? "zh-CN" : "en").format(count);

  return (
    <p className="visit-counter" aria-live="polite">
      {formattedCount === null
        ? loadingLabel
        : `${label}${lang === "zh" ? "：" : ": "}${formattedCount}`}
    </p>
  );
}
