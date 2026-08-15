import * as React from "react";

/**
 * Reveals every ".reveal" element as it scrolls into view by toggling
 * ".is-visible" (see the CSS animation in src/styles.css). Uses a single
 * IntersectionObserver and unobserves each element after its first reveal,
 * so scrolling costs nothing beyond the browser's native intersection
 * bookkeeping — no scroll listeners, no per-frame JS work.
 */
export function useScrollReveal() {
  React.useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    if (elements.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      for (const el of elements) el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}
