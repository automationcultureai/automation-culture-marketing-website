"use client";

import { useEffect } from "react";

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

/**
 * Mounts once in the layout. Handles:
 *  - Count-up animation for [data-count-to] elements (ticker stats)
 *  - Fade-in for [data-count-fade] elements (the $0 numeral)
 * Triggered when [data-count-trigger] enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function AnimationController() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const trigger = document.querySelector<HTMLElement>("[data-count-trigger]");
    if (!trigger) return;

    if (reduced) {
      // Show all animated numerals at their final values immediately
      document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((el) => {
        el.textContent = el.dataset.countTo ?? el.textContent;
      });
      document.querySelectorAll<HTMLElement>("[data-count-fade]").forEach((el) => {
        el.style.opacity = "1";
      });
      return;
    }

    let fired = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired) {
            fired = true;
            observer.disconnect();

            // Animate each [data-count-to] span from its data-count-from (or 0) to its target
            document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((el) => {
              const from = parseInt(el.dataset.countFrom ?? "0", 10);
              const to = parseInt(el.dataset.countTo ?? "0", 10);
              const duration = 800;
              const startTime = performance.now();

              function step(now: number) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.round(from + easeOutQuad(progress) * (to - from));
                el.textContent = String(current);
                if (progress < 1) requestAnimationFrame(step);
              }

              requestAnimationFrame(step);
            });

            // Fade in [data-count-fade] spans (used for the $0 numeral)
            document.querySelectorAll<HTMLElement>("[data-count-fade]").forEach((el) => {
              el.style.transition = "opacity 500ms ease-out";
              el.style.opacity = "1";
            });
          }
        });
      },
      { rootMargin: "-50px" }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  return null;
}
