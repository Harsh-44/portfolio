"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/app/_components/section-shell";
import { archiveProjects } from "@/app/_data/portfolio";

type SortMode = "best" | "recent" | "oldest";

const sortOptions: Array<{ value: SortMode; label: string }> = [
  { value: "best", label: "Best" },
  { value: "recent", label: "Most Recent" },
  { value: "oldest", label: "Oldest First" },
];

export function ArchiveProjectsSection() {
  const [sortMode, setSortMode] = useState<SortMode>("best");

  const sortedProjects = useMemo(() => {
    const withIndex = archiveProjects.map((project, index) => ({
      project,
      index,
    }));

    if (sortMode === "best") {
      return withIndex;
    }

    const direction = sortMode === "recent" ? -1 : 1;

    return [...withIndex].sort((a, b) => {
      const yearDifference =
        (Number(a.project.year) - Number(b.project.year)) * direction;

      if (yearDifference !== 0) {
        return yearDifference;
      }

      return a.index - b.index;
    });
  }, [sortMode]);

  return (
    <SectionShell
      id="projects"
      index="04"
      title="Projects"
      description="Course work, hackathons, side builds, templates, and learning projects that show breadth outside formal industry experience."
    >
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          {sortOptions.map((option) => {
            const isActive = option.value === sortMode;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSortMode(option.value)}
                className="pill rounded-full px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors duration-200 ease-out"
                style={{
                  background: isActive
                    ? "rgba(139, 92, 246, 0.12)"
                    : "rgba(255, 255, 255, 0.55)",
                  borderColor: isActive
                    ? "rgba(139, 92, 246, 0.26)"
                    : "var(--color-border)",
                  color: isActive
                    ? "var(--color-accent-strong)"
                    : "var(--color-soft)",
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedProjects.map(({ project }, index) => (
            <article key={project.title} className="surface-panel overflow-hidden">
              <div className="aspect-[1.35/1] border-b border-black/8 bg-[linear-gradient(180deg,rgba(139,92,246,0.12),rgba(255,255,255,0.02))] p-5">
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      {project.kind}
                    </p>
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      {project.year}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                      Project 0{index + 1}
                    </p>
                    <div className="max-w-[14rem] font-display text-[1.9rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[var(--color-ink)]">
                      {project.title}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-5 sm:p-6">
                <p className="text-sm leading-7 text-[var(--color-soft)] sm:text-[0.98rem] sm:leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="pill rounded-full px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--color-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.sourceHref ? (
                  <a
                    href={project.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-soft)] transition-opacity duration-200 ease-out hover:opacity-60"
                  >
                    {project.sourceLabel ?? "Source"}
                    <ArrowUpRight className="h-4 w-4 transition duration-300 ease-out group-hover:rotate-[45deg]" />
                  </a>
                ) : (
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    Internal archive entry
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
