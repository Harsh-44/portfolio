"use client";

import { useEffect, useRef, useState } from "react";

const closingWords =
  "Let's build interfaces that feel as good as they function.".split(" ");

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
      className="section-anchor flex min-h-[78svh] items-center py-20 sm:min-h-[88svh] sm:py-24"
    >
      <div className="w-full overflow-hidden">
        <p className="mx-auto max-w-[16ch] text-center font-editorial text-[clamp(3.15rem,10.5vw,8.6rem)] font-semibold italic leading-[0.9] tracking-[-0.055em] text-[var(--color-ink)] sm:max-w-[18ch]">
          {closingWords.map((word, index) => (
            <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
              <span
                className="inline-block pr-[0.16em]"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translate3d(0, 0, 0) skewY(0deg)"
                    : "translate3d(0, 1.1em, 0) skewY(3deg)",
                  filter: visible ? "blur(0px)" : "blur(8px)",
                  transition:
                    "opacity 760ms ease, transform 980ms cubic-bezier(0.22, 1, 0.36, 1), filter 980ms ease",
                  transitionDelay: visible ? `${index * 95}ms` : "0ms",
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
