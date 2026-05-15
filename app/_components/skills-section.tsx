"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { skillGroups } from "@/app/_data/portfolio";

const skillGroupDescriptions: Record<string, string> = {
  "Frontend Engineering":
    "Production-ready interface systems, responsive implementation, and clean frontend structure.",
  "Design & Product":
    "Interface design, systems thinking, and product decisions shaped through flows and hierarchy.",
  "Adjacent Strengths":
    "Supporting technical context across Python, data tooling, and security-informed problem solving.",
  "Soft Skills":
    "Ways of working that make the craft stronger: learning fast, adapting quickly, communicating clearly, and staying rigorous with details.",
};

export function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="section-anchor grid gap-10 py-18 lg:grid-cols-[minmax(18rem,0.5fr)_minmax(0,1fr)] lg:gap-16 lg:py-24"
    >
      <div className="space-y-3 lg:sticky lg:top-28 lg:self-start">
        <div className="flex items-start gap-2">
          <h2 className="font-display text-[clamp(3.1rem,6vw,5.6rem)] font-medium uppercase leading-[0.88] tracking-[-0.07em] text-[var(--color-text)]">
            Skills
          </h2>
        </div>
      </div>

      <div className="border-b border-black/10">
        {skillGroups.map((group, index) => (
          <SkillItem
            key={group.title}
            group={group}
            description={skillGroupDescriptions[group.title]}
            isActive={activeIndex === index}
            onToggle={() =>
              setActiveIndex((current) => (current === index ? null : index))
            }
            onEnter={() => setActiveIndex(index)}
            onLeave={() => setActiveIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}

function SkillItem({
  group,
  description,
  isActive,
  onToggle,
  onEnter,
  onLeave,
}: {
  group: (typeof skillGroups)[number];
  description: string;
  isActive: boolean;
  onToggle: () => void;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <article
      onClick={onToggle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="cursor-pointer border-t border-black/10 py-6"
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(12rem,0.42fr)_minmax(0,1fr)] lg:gap-10">
        <div>
          <p className="font-mono text-[0.78rem] uppercase tracking-[0.08em] text-[var(--color-accent-strong)] sm:text-[0.9rem] sm:tracking-[0.02em]">
            {group.title}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-[48ch]">
              <p className="text-[0.95rem] leading-7 text-[var(--color-muted)] sm:text-[1.02rem] sm:leading-8">
                {description}
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
        className="grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{
          gridTemplateRows: isActive ? "1fr" : "0fr",
          opacity: isActive ? 1 : 0,
          marginTop: isActive ? "1rem" : "0rem",
        }}
      >
        <div
          className="grid min-h-0 gap-3 overflow-hidden pt-1 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] sm:grid-cols-2 xl:grid-cols-3"
          style={{
            transform: `translateY(${isActive ? 0 : -8}px)`,
            opacity: isActive ? 1 : 0.72,
          }}
        >
          {group.items.map((item) => (
            <div key={item} className="px-0 py-1.5">
              <p className="font-sans text-[0.98rem] font-bold uppercase leading-6 tracking-[-0.03em] text-[var(--color-soft)]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
