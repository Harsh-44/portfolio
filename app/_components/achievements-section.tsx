"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { achievements } from "@/app/_data/portfolio";
import bandImage from "@/app/assets/images/awards/band.jpg";

export function AchievementsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
      <section
          id="achievements"
          className="section-anchor grid gap-10 py-18 lg:grid-cols-[minmax(18rem,0.5fr)_minmax(0,1fr)] lg:gap-16 lg:py-24"
      >
        <div className="space-y-3 lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-start gap-2">
            <h2 className="font-display text-[clamp(3.1rem,6vw,5.6rem)] font-medium uppercase leading-[0.88] tracking-[-0.07em] text-[var(--color-text)]">
              Awards
            </h2>
          </div>
        </div>

        <div className="border-b border-black/10">
          {achievements.map((achievement, index) => (
              <AchievementItem
                  key={achievement.title}
                  achievement={achievement}
                  isActive={activeIndex === index}
                  onEnter={() => setActiveIndex(index)}
                  onLeave={() => setActiveIndex(null)}
              />
          ))}
        </div>
      </section>
  );
}

function AchievementItem({
                           achievement,
                           isActive,
                           onEnter,
                           onLeave,
                         }: {
  achievement: (typeof achievements)[number];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
      <article
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="border-t border-black/10 py-6"
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(12rem,0.42fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="font-mono text-[0.9rem] uppercase tracking-[0.02em] text-[var(--color-accent-strong)]">
              {achievement.title}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <h3 className="max-w-[24ch] font-sans text-[clamp(1.6rem,2.4vw,2.55rem)] font-medium uppercase leading-[1.02] tracking-[-0.05em] text-[var(--color-text)]">
                  {achievement.result}
                </h3>
                <p className="text-[1.05rem] text-[var(--color-muted)]">
                  {achievement.context}
                </p>
              </div>
              <ChevronDown
                className={`mt-1 h-5 w-5 shrink-0 text-[var(--color-accent-strong)] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  isActive ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>

        <div
            className="overflow-hidden transition-[max-height,opacity,margin-top] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              maxHeight: isActive
                  ? `${contentRef.current?.scrollHeight || 0}px`
                  : "0rem",
              opacity: isActive ? 1 : 0,
              marginTop: isActive ? "1rem" : "0rem",
            }}
        >
          <div
            ref={contentRef}
            className="space-y-6 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
            style={{
              transform: `translateY(${isActive ? 0 : -8}px)`,
              opacity: isActive ? 1 : 0.72,
            }}
          >
            <div className="relative h-[340px] w-full overflow-hidden">
              <Image
                src={bandImage}
                alt="Band performance"
                fill
                className="object-cover"
              />
            </div>
            <p className="max-w-[70ch] text-[1rem] leading-7 text-[var(--color-muted)]">
              {achievement.description}
            </p>
          </div>
        </div>
      </article>
  );
}
