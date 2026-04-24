"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ProjectPreviewThumbnail,
  ProjectVisual,
} from "@/app/_components/project-visual";
import { projects } from "@/app/_data/portfolio";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(
    null,
  );
  const [cursorState, setCursorState] = useState<{
    visible: boolean;
    x: number;
    y: number;
  }>({
    visible: false,
    x: 0,
    y: 0,
  });

  const displayedProjectIndex = hoveredProjectIndex ?? activeProjectIndex;
  const displayedProject = projects[displayedProjectIndex];
  const nextProject = projects[(displayedProjectIndex + 1) % projects.length];

  const showCursor = (event: React.PointerEvent<HTMLElement>) => {
    setCursorState({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const moveCursor = (event: React.PointerEvent<HTMLElement>) => {
    setCursorState((current) => ({
      ...current,
      x: event.clientX,
      y: event.clientY,
    }));
  };

  const hideCursor = () => {
    setCursorState((current) => ({
      ...current,
      visible: false,
    }));
  };

  const activeProgressIndex = hoveredProjectIndex ?? activeProjectIndex;

  const visibleVisuals = useMemo(
    () =>
      projects.map((project, index) => {
        const distance = index - displayedProjectIndex;
        const visibility = clamp(1 - Math.abs(distance) * 1.05, 0, 1);

        return {
          project,
          index,
          visibility,
          distance,
        };
      }),
    [displayedProjectIndex],
  );

  return (
    <section
      id="experiences"
      className="section-anchor relative left-1/2 w-screen -translate-x-1/2 bg-[#08080a] py-18 text-white sm:py-24"
    >
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[70] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 bg-[#16171b]/92 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-opacity duration-200 lg:flex ${
          cursorState.visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${cursorState.x}px, ${cursorState.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        View Project
      </div>

      <div className="mx-auto w-full max-w-[110rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-mono text-[clamp(1.25rem,1rem+0.55vw,1.9rem)] uppercase text-white/38">
            Industry Experience
          </h2>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(22rem,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-8">
              <div className="space-y-1 sm:space-y-2">
                {projects.map((project, index) => {
                  const isActive = index === displayedProjectIndex;

                  return (
                    <Link
                      href={`/projects/${project.slug}`}
                      key={project.slug}
                      onMouseEnter={() => setHoveredProjectIndex(index)}
                      onFocus={() => setHoveredProjectIndex(index)}
                      onPointerEnter={showCursor}
                      onPointerMove={moveCursor}
                      onPointerLeave={() => {
                        hideCursor();
                        setHoveredProjectIndex(null);
                      }}
                      onBlur={() => setHoveredProjectIndex(null)}
                      className="block border-0 bg-transparent p-0 text-left font-display font-bold uppercase leading-[0.92] tracking-tighter transition-[color,opacity,transform] duration-300 ease-out lg:cursor-none"
                      style={{
                        color: isActive ? "rgb(245 244 240)" : "rgb(126 123 118)",
                        opacity: isActive ? 1 : 0.88,
                        transform: `translate3d(${isActive ? 0 : 6}px, 0, 0)`,
                        fontSize: "clamp(3.2rem, 4.6vw, 6.2rem)",
                      }}
                    >
                      {project.title}
                    </Link>
                  );
                })}
              </div>

              <p className="font-mono text-[0.88rem] uppercase tracking-[0.18em] text-white/62">
                {displayedProject.year}
              </p>
            </div>

            <div className="space-y-5">
              <div className="max-w-[28rem] space-y-2">
                <p className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {displayedProject.label}
                </p>
                <p className="text-sm leading-7 text-white/68 sm:text-base sm:leading-8">
                  {displayedProject.description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {projects.map((project, index) => (
                  <button
                    type="button"
                    key={project.slug}
                    onClick={() => setActiveProjectIndex(index)}
                    onMouseEnter={() => setHoveredProjectIndex(index)}
                    onMouseLeave={() => setHoveredProjectIndex(null)}
                    className="h-[2px] w-12 cursor-pointer overflow-hidden rounded-full bg-white/15"
                    aria-label={`Show ${project.title}`}
                  >
                    <div
                      className="h-full origin-left bg-white transition-transform duration-300 ease-out"
                      style={{
                        transform: `scaleX(${index <= activeProgressIndex ? 1 : 0})`,
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start justify-end">
            <div className="relative flex h-full w-full max-w-[36rem] flex-col gap-6">
              <div className="relative aspect-[1.4/1] w-full overflow-hidden">
                {visibleVisuals.map(({ project, index, visibility, distance }) => (
                  <div
                    key={project.slug}
                    className="absolute inset-0"
                    style={{
                      opacity: visibility,
                      transform: `translate3d(${distance * 110}px, ${distance * 18}px, 0) scale(${0.94 + visibility * 0.06})`,
                      filter: `blur(${(1 - visibility) * 6}px)`,
                      pointerEvents: index === displayedProjectIndex ? "auto" : "none",
                    }}
                  >
                    <Link
                      href={`/projects/${project.slug}`}
                      onPointerEnter={showCursor}
                      onPointerMove={moveCursor}
                      onPointerLeave={hideCursor}
                      className="block h-full w-full bg-[#0d0f13] p-2 lg:cursor-none sm:p-3"
                    >
                      <ProjectVisual project={project} />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="ml-auto w-full max-w-[20rem]">
                <div className="aspect-[1.5/1] overflow-hidden bg-white/[0.04] p-1.5">
                  <div className="pointer-events-none h-full grayscale opacity-45">
                    <ProjectPreviewThumbnail project={nextProject} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
