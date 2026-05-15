"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ProjectPreviewThumbnail,
  ProjectVisual,
} from "@/app/_components/project-visual";
import { projects } from "@/app/_data/portfolio";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeInOutCubic(value: number) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function mixChannel(start: number, end: number, progress: number) {
  return Math.round(start + (end - start) * progress);
}

function mixColor(
  start: [number, number, number],
  end: [number, number, number],
  progress: number,
) {
  return `rgb(${mixChannel(start[0], end[0], progress)} ${mixChannel(
    start[1],
    end[1],
    progress,
  )} ${mixChannel(start[2], end[2], progress)})`;
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [sectionProgress, setSectionProgress] = useState(0);
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

  const slideCount = projects.length;
  const fadeEnd = 0.16;
  const settleEnd = 0.28;
  const holdRatio = 1;

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const travelDistance = Math.max(rect.height - viewportHeight, 1);
      const progress = clamp(-rect.top / travelDistance, 0, 1);

      setSectionProgress(progress);

      const headerHide = clamp(
        (viewportHeight * 0.95 - rect.top) / (viewportHeight * 0.78),
        0,
        1,
      );
      const hasPassed = rect.bottom <= viewportHeight * 0.92;

      document.documentElement.style.setProperty(
        "--projects-header-hide",
        hasPassed ? "0" : easeInOutCubic(headerHide).toString(),
      );
    };

    const schedule = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      document.documentElement.style.setProperty("--projects-header-hide", "0");
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const fadeProgress = clamp(sectionProgress / fadeEnd, 0, 1);
  const contentProgress = clamp((sectionProgress - fadeEnd) / (settleEnd - fadeEnd), 0, 1);
  const projectTrackProgress = clamp((sectionProgress - settleEnd) / (1 - settleEnd), 0, 0.999999);
  const slideProgress = projectTrackProgress * slideCount;
  const phaseIndex = clamp(Math.floor(slideProgress), 0, slideCount - 1);
  const localProgress = slideProgress - phaseIndex;
  const transitionProgress =
    phaseIndex < slideCount - 1
      ? clamp((localProgress - holdRatio) / (1 - holdRatio), 0, 1)
      : localProgress;
  const rawSlideIndex =
    phaseIndex +
    (phaseIndex < slideCount - 1 ? easeInOutCubic(transitionProgress) : transitionProgress);
  const sliderProgress = slideProgress;
  const activeSlideIndex = clamp(Math.floor(sliderProgress), 0, slideCount - 1);
  const displayedProjectIndex = hoveredProjectIndex ?? activeSlideIndex;
  const visualSlideIndex =
    hoveredProjectIndex === null
      ? phaseIndex >= slideCount - 1
        ? slideCount - 1
        : rawSlideIndex
      : hoveredProjectIndex;
  const displayedProject = projects[displayedProjectIndex];
  const nextProject = projects[(displayedProjectIndex + 1) % projects.length];
  const isCursorEnabled = contentProgress >= 0.98;
  const sectionStyle = useMemo(
    () => ({
      backgroundColor: mixColor([252, 251, 248], [8, 8, 10], fadeProgress),
      color: mixColor([17, 18, 22], [245, 244, 240], fadeProgress),
    }),
    [fadeProgress],
  );

  const contentStyle = useMemo(
    () => ({
      opacity: contentProgress,
      transform: `translate3d(0, ${Math.round((1 - contentProgress) * 54)}px, 0)`,
    }),
    [contentProgress],
  );

  const jumpToProject = (index: number) => {
    if (!sectionRef.current) {
      return;
    }

    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const travelDistance = Math.max(sectionRef.current.offsetHeight - viewportHeight, 1);
    const startProgress = settleEnd + (index / slideCount) * (1 - settleEnd);
    const targetTop = window.scrollY + rect.top + startProgress * travelDistance;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  const showCursor = (event: React.PointerEvent<HTMLElement>) => {
    if (!isCursorEnabled) {
      return;
    }

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

  return (
    <>
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[70] hidden rounded-full border border-white/18 bg-[#16171b]/92 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-opacity duration-200 lg:flex ${
          cursorState.visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${cursorState.x}px`,
          top: `${cursorState.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        View Project
      </div>

      <section
        ref={sectionRef}
        id="experiences"
        className="section-anchor relative left-1/2 min-h-[300dvh] w-screen -translate-x-1/2"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={sectionStyle}
        />

        <div className="sticky top-0 flex min-h-dvh items-center py-10">
        <div
          className="mx-auto w-full max-w-[110rem]"
          style={{
            ...contentStyle,
            paddingInline: "calc(1rem + 0.8vw)",
          }}
        >
          <div className="mb-8">
            <h2 className="font-mono text-[clamp(1.25rem,1rem+0.55vw,1.9rem)] uppercase text-white/38">
              Industry Experience
            </h2>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(22rem,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            <div className="flex min-h-[72dvh] flex-col justify-between lg:min-h-[82dvh]">
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
                        className={`block border-0 bg-transparent p-0 text-left font-display font-bold uppercase leading-[0.92] tracking-tighter transition-[color,opacity,transform] duration-300 ease-out ${
                          isCursorEnabled ? "lg:cursor-none" : ""
                        }`}
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
                      onClick={() => jumpToProject(index)}
                      onMouseEnter={() => setHoveredProjectIndex(index)}
                      onMouseLeave={() => setHoveredProjectIndex(null)}
                      className="h-[2px] w-12 cursor-pointer overflow-hidden rounded-full bg-white/15"
                      aria-label={`Show ${project.title}`}
                    >
                      <div
                        className="h-full origin-left bg-white transition-transform duration-300 ease-out"
                        style={{
                          transform: `scaleX(${clamp(sliderProgress - index, 0, 1)})`,
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-[72dvh] items-start justify-end lg:min-h-[82dvh]">
              <div className="relative flex h-full w-full max-w-[36rem] flex-col gap-6">
                <div className="relative aspect-[1.4/1] w-full overflow-hidden">
                  {projects.map((project, index) => {
                    const distance = index - visualSlideIndex;
                    const visibility = clamp(1 - Math.abs(distance) * 1.1, 0, 1);

                    return (
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
                          className={`block h-full w-full bg-[#0d0f13] p-2 sm:p-3 ${
                            isCursorEnabled ? "lg:cursor-none" : ""
                          }`}
                        >
                          <ProjectVisual project={project} />
                        </Link>
                      </div>
                    );
                  })}
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
        </div>
      </section>
    </>
  );
}
