"use client";

import { useEffect, useRef, useState } from "react";

export function ClosingStatementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      {
        threshold: 0.38,
        rootMargin: "0px 0px -16% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-anchor flex min-h-[82svh] items-center py-20 sm:min-h-svh sm:py-24"
    >
      <div className="w-full overflow-hidden">
        <p
          className="mx-auto max-w-[13ch] text-center font-editorial text-[clamp(4.2rem,15vw,12rem)] font-semibold italic leading-[0.82] tracking-[-0.065em] text-[var(--color-ink)] sm:max-w-[16ch]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate3d(0, 0, 0) skewY(0deg)"
              : "translate3d(0, 64px, 0) skewY(2.5deg)",
            filter: visible ? "blur(0px)" : "blur(14px)",
            transition:
              "opacity 950ms ease, transform 1200ms cubic-bezier(0.22, 1, 0.36, 1), filter 1200ms ease",
          }}
        >
          Let&apos;s build interfaces that feel as good as they function.
        </p>
      </div>
    </section>
  );
}
