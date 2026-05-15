"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  type ArchiveProjectItem,
  visibleArchiveProjects,
} from "@/app/_data/portfolio";
import ascendaImage from "@/app/assets/images/projects/ascenda.png";
import ascendaFigmaImage from "@/app/assets/images/projects/ascendafigma.png";
import customshellImage from "@/app/assets/images/projects/customshell.png";
import dishcoverImage from "@/app/assets/images/projects/dishcover.png";
import framerImage from "@/app/assets/images/projects/framer.jpeg";
import furnitectImage from "@/app/assets/images/projects/furnitect.png";
import irisAppMlImage from "@/app/assets/images/projects/irisapp_ml.svg";
import meetproImage from "@/app/assets/images/projects/meetpro.png";
import networkSecurityAiHeatmapImage from "@/app/assets/images/projects/network_security_ai_heatmap.svg";
import planqImage from "@/app/assets/images/projects/planq.png";
import pongImage from "@/app/assets/images/projects/pong.png";
import project93PenguinImage from "@/app/assets/images/projects/project93_penguin.svg";
import rpgImage from "@/app/assets/images/projects/rpg.png";
import soraLandingImage from "@/app/assets/images/projects/sora_landing.png";
import sftpImage from "@/app/assets/images/projects/sftp.png";

type FilterMode = "All" | ArchiveProjectItem["kind"];
type SortMode = "best" | "recent";

const sortOptions: Array<{ value: SortMode; label: string }> = [
  { value: "best", label: "BEST" },
  { value: "recent", label: "RECENT" },
];

const mosaicVariants = [
  {
    className: "md:col-span-5 xl:col-span-4 xl:mt-24",
    tint:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
  },
  {
    className: "md:col-span-7 xl:col-span-5",
    tint:
      "radial-gradient(circle at top left, rgba(139,92,246,0.22), rgba(255,255,255,0.02) 52%, rgba(255,255,255,0.01))",
  },
  {
    className: "md:col-span-4 xl:col-span-3 xl:mt-10",
    tint:
      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.012))",
  },
  {
    className: "md:col-span-4 xl:col-span-3",
    tint:
      "radial-gradient(circle at bottom right, rgba(139,92,246,0.18), rgba(255,255,255,0.015) 55%, rgba(255,255,255,0.008))",
  },
  {
    className: "md:col-span-4 xl:col-span-3 xl:mt-20",
    tint:
      "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
  },
  {
    className: "md:col-span-8 xl:col-span-6",
    tint:
      "radial-gradient(circle at top right, rgba(139,92,246,0.16), rgba(255,255,255,0.015) 48%, rgba(255,255,255,0.008))",
  },
];

const projectImages: Record<string, StaticImageData> = {
  "furnitect": furnitectImage,
  "custom-shell-daemon": customshellImage,
  "hotel-booking-website": ascendaFigmaImage,
  "meetpro": meetproImage,
  "vibecheck": framerImage,
  "irisapp": irisAppMlImage,
  "network-security-ai": networkSecurityAiHeatmapImage,
  "planq": planqImage,
  "project-93": project93PenguinImage,
  "dishcover": dishcoverImage,
  "ascenda-hotel": ascendaImage,
  "notpong": pongImage,
  "sora-landing-page": soraLandingImage,
  "sftp-network-security": sftpImage,
  "text-based-rpg": rpgImage,
};

const projectSizeOverrides: Record<string, string> = {
  "furnitect":
    "md:col-span-7 xl:col-span-5 xl:col-start-5 xl:row-start-1 xl:mt-0",
  "dishcover":
    "md:col-span-4 xl:col-span-3 xl:col-start-1 xl:row-start-2 xl:mt-12",
  "ascenda-hotel":
    "md:col-span-5 xl:col-span-5 xl:col-start-4 xl:row-start-2 xl:mt-0",
  "vibecheck":
    "md:col-span-5 xl:col-span-4 xl:col-start-1 xl:row-start-1 xl:mt-0",
  "notpong":
    "md:col-span-4 xl:col-span-3 xl:col-start-10 xl:row-start-3 xl:mt-8",
  "planq":
    "md:col-span-4 xl:col-span-3 xl:col-start-10 xl:row-start-1 xl:mt-0",
  "sora-landing-page":
    "md:col-span-4 xl:col-span-4 xl:col-start-9 xl:row-start-2 xl:mt-16",
};

const projectRevealOverrides: Record<string, { start: number; end: number }> = {
  "dishcover": { start: 0.72, end: -0.36 },
};

const bestProjectOrder = ["vibecheck", "furnitect", "planq"] as const;
const whiteFrameProjects = new Set([
  "custom-shell-daemon",
  "sftp-network-security",
  "text-based-rpg",
  "notpong",
]);
const containProjects = new Set([
  "irisapp",
  "project-93",
  "network-security-ai",
]);

function getSourceLinkLabel(project: ArchiveProjectItem) {
  if (project.sourceHref?.includes("github.com")) {
    return "Visit GitHub";
  }

  if (project.sourceLabel === "Figma") {
    return "View Figma";
  }

  return project.sourceLabel ?? "Source";
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeOutCubic(value: number) {
  return 1 - Math.pow(1 - value, 3);
}

function getRevealStyle(progress: number, delay = 0, distance = 28) {
  const delayedProgress = clamp((progress - delay) / (1 - delay), 0, 1);
  const easedProgress = easeOutCubic(delayedProgress);

  return {
    opacity: 0.05 + delayedProgress * 0.95,
    transform: `translateY(${(1 - easedProgress) * distance}px)`,
  };
}

function useScrollRevealProgress({
  start = 0.92,
  end = 0.28,
}: {
  start?: number;
  end?: number;
} = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;

      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const nextProgress = clamp(
        (viewportHeight * start - rect.top) /
          Math.max(viewportHeight * (start - end), 1),
        0,
        1,
      );

      setProgress(nextProgress);
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

      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [end, start]);

  return { ref, progress };
}

function WaveHeading({
  text,
  progress,
}: {
  text: string;
  progress: number;
}) {
  const characters = text.split("");
  const center = (characters.length - 1) / 2;

  return (
    <h2 className="inline-block pr-[0.08em] font-display text-[clamp(2.6rem,6vw,6.4rem)] font-black uppercase leading-[0.9] tracking-[-0.08em] text-white">
      {characters.map((character, index) => {
        const delay = Math.abs(index - center) * 0.05;
        const charProgress = clamp((progress - delay) / (1 - delay), 0, 1);
        const easedProgress = easeOutCubic(charProgress);

        return (
          <span
            key={`${character}-${index}`}
            className="inline-block overflow-hidden whitespace-pre"
          >
            <span
              className="inline-block whitespace-pre"
              style={{
                opacity: 0.04 + charProgress * 0.96,
                transform: `translateY(${(1 - easedProgress) * -1.9}em)`,
              }}
            >
              {character}
            </span>
          </span>
        );
      })}
    </h2>
  );
}

function ProjectPoster({
  project,
  tint,
  revealProgress,
}: {
  project: ArchiveProjectItem;
  tint: string;
  revealProgress: number;
}) {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        clipPath: `inset(0 0 ${(1 - revealProgress) * 100}% 0)`,
        transform: `scale(${1.12 - revealProgress * 0.12})`,
        transformOrigin: "center top",
        opacity: 0.18 + revealProgress * 0.82,
      }}
    >
      <div className="absolute inset-0 bg-[#0b0b0d]" />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: tint,
        }}
      />
      <div className="absolute inset-[1rem] border border-white/8" />
      <div className="absolute left-[1rem] right-[1rem] top-[1rem] flex items-start justify-between gap-4">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/42">
          {project.kind}
        </p>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          {project.year}
        </p>
      </div>
      <div className="absolute left-[10%] top-[22%] h-[46%] w-[34%] rounded-full border border-white/10 bg-white/[0.02]" />
      <div className="absolute right-[9%] top-[18%] h-[42%] w-[32%] rounded-full bg-[var(--color-accent)]/10 blur-3xl" />
      <div className="absolute bottom-[14%] left-[12%] h-[10%] w-[28%] border border-white/12 bg-white/[0.03]" />
      <div className="absolute bottom-[14%] right-[12%] h-[10%] w-[18%] border border-white/12 bg-white/[0.02]" />
      <div className="absolute bottom-[23%] left-[12%] h-[2px] w-[42%] bg-white/14" />
    </div>
  );
}

function ProjectPlaceholder({
  project,
  index,
  onPointerEnter,
  onPointerMove,
  onPointerLeave,
}: {
  project: ArchiveProjectItem;
  index: number;
  onPointerEnter: (event: React.PointerEvent<HTMLElement>) => void;
  onPointerMove: (event: React.PointerEvent<HTMLElement>) => void;
  onPointerLeave: () => void;
}) {
  const variant = mosaicVariants[index % mosaicVariants.length];
  const projectImage = projectImages[project.slug];
  const hasWhiteFrame = whiteFrameProjects.has(project.slug);
  const shouldContainImage = containProjects.has(project.slug);
  const aspectRatio = projectImage
    ? `${projectImage.width} / ${projectImage.height}`
    : "1 / 1";
  const layoutClassName = projectSizeOverrides[project.slug] ?? variant.className;
  const revealBounds = projectRevealOverrides[project.slug] ?? {
    start: 0.78,
    end: 0.04,
  };
  const { ref, progress } = useScrollRevealProgress({
    start: revealBounds.start,
    end: revealBounds.end,
  });
  const revealProgress = easeOutCubic(progress);

  return (
    <article ref={ref} className={`group ${layoutClassName}`}>
      <div className="relative space-y-4">
        <div
          className="relative overflow-hidden lg:cursor-none"
          onPointerEnter={onPointerEnter}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          style={{ aspectRatio }}
        >
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Open details for ${project.title}`}
            className="absolute inset-0 z-10 lg:cursor-none"
          />
          {projectImage ? (
            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 0 ${(1 - revealProgress) * 100}% 0)`,
                opacity: 0.18 + revealProgress * 0.82,
              }}
            >
              {hasWhiteFrame ? (
                <div className="absolute inset-0 bg-[#f7f6f2]">
                  <div className="absolute inset-5 overflow-hidden">
                    <Image
                      src={projectImage}
                      alt={`${project.title} preview`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      style={{
                        transform: `scale(${1.04 - revealProgress * 0.04})`,
                        transformOrigin: "center center",
                      }}
                    />
                  </div>
                </div>
              ) : shouldContainImage ? (
                <div className="absolute inset-0">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={projectImage}
                      alt={`${project.title} preview`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      style={{
                        transform: `scale(${1.02 - revealProgress * 0.02})`,
                        transformOrigin: "center center",
                      }}
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={projectImage}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  style={{
                    transform: `scale(${1.12 - revealProgress * 0.12})`,
                    transformOrigin: "center top",
                  }}
                />
              )}
            </div>
          ) : (
            <ProjectPoster
              project={project}
              tint={variant.tint}
              revealProgress={revealProgress}
            />
          )}
        </div>

        <div
          className="relative z-10 space-y-2 lg:cursor-none"
          onPointerEnter={onPointerEnter}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Open details for ${project.title}`}
            className="absolute inset-0 z-10 lg:cursor-none"
          />
          <div className="flex items-center justify-between gap-4">
            <p className="relative z-20 font-semibold text-[clamp(1.05rem,1.35vw,1.45rem)] uppercase leading-[0.98] tracking-[-0.03em] text-white/92">
              {project.title}
            </p>
            <p className="relative z-20 shrink-0 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
              {project.year}
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="relative z-20 flex flex-wrap items-center gap-2">
              {project.stack.slice(0, 2).map((item, itemIndex) => (
                <span
                  key={item}
                  className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/54"
                >
                  {item}
                  {itemIndex < Math.min(project.stack.length, 2) - 1 ? "," : ""}
                </span>
              ))}
            </div>

            {project.sourceHref ? (
              <a
                href={project.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="group/link relative z-30 inline-flex shrink-0 cursor-pointer items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/74 transition-opacity duration-200 ease-out hover:opacity-70"
              >
                {getSourceLinkLabel(project)}
                <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)] transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            ) : (
              <p className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/42">
                Archive
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ArchiveProjectsSection() {
  const [filterMode, setFilterMode] = useState<FilterMode>("All");
  const [sortMode, setSortMode] = useState<SortMode>("best");
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [cursorState, setCursorState] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  const { ref: headingRef, progress: headingProgress } = useScrollRevealProgress({
    start: 0.92,
    end: 0.08,
  });

  const filterOptions = useMemo(() => {
    const counts = visibleArchiveProjects.reduce<Record<string, number>>(
      (accumulator, project) => {
        accumulator[project.kind] = (accumulator[project.kind] ?? 0) + 1;
        return accumulator;
      },
      {},
    );

    return [
      { value: "All" as const, label: "All", count: visibleArchiveProjects.length },
      ...(["Course Project", "Hackathon", "Template", "Learning", "Side Project"] as const)
        .filter((kind) => counts[kind])
        .map((kind) => ({
          value: kind,
          label: kind === "Course Project" ? "Course Project" : kind,
          count: counts[kind],
        })),
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filterMode === "All") {
      return visibleArchiveProjects;
    }

    return visibleArchiveProjects.filter((project) => project.kind === filterMode);
  }, [filterMode]);

  const displayedProjects = useMemo(() => {
    const withIndex = filteredProjects.map((project, index) => ({
      project,
      index,
    }));

    if (sortMode === "best") {
      return [...withIndex]
        .sort((a, b) => {
          const aPriority = bestProjectOrder.indexOf(
            a.project.slug as (typeof bestProjectOrder)[number],
          );
          const bPriority = bestProjectOrder.indexOf(
            b.project.slug as (typeof bestProjectOrder)[number],
          );
          const normalizedA = aPriority === -1 ? Number.POSITIVE_INFINITY : aPriority;
          const normalizedB = bPriority === -1 ? Number.POSITIVE_INFINITY : bPriority;

          if (normalizedA !== normalizedB) {
            return normalizedA - normalizedB;
          }

          return a.index - b.index;
        })
        .map(({ project }) => project);
    }

    const direction = -1;

    return [...withIndex]
      .sort((a, b) => {
        const yearDifference =
          (Number(a.project.year) - Number(b.project.year)) * direction;

        if (yearDifference !== 0) {
          return yearDifference;
        }

        return a.index - b.index;
      })
      .map(({ project }) => project);
  }, [filteredProjects, sortMode]);

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
        id="projects"
        className="section-anchor relative left-1/2 w-screen -translate-x-1/2 bg-[#08080a] py-20 text-white sm:py-24"
      >
        <div
          className="mx-auto w-full max-w-[110rem]"
          style={{ paddingInline: "calc(1rem + 0.8vw)" }}
        >
          <div className="space-y-20">
            <div
              ref={headingRef}
              className="relative z-30 space-y-10 text-center"
            >
            <div className="space-y-4">
              <WaveHeading text="Projects" progress={headingProgress} />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 sm:items-end">
              <div
                className="relative justify-self-center text-left sm:justify-self-start sm:self-end"
                style={getRevealStyle(headingProgress, 0.16, 22)}
              >
                <p className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/34">
                  Filter
                </p>
                <button
                  type="button"
                  onClick={() => setFilterMenuOpen((current) => !current)}
                  className="inline-flex items-center gap-2 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white/76 transition-opacity duration-200 ease-out hover:opacity-70"
                >
                  <span>{filterMode === "All" ? "ALL" : filterMode.toUpperCase()}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[var(--color-accent)] transition-transform duration-300 ease-out ${
                      filterMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className="absolute left-0 top-[calc(100%+0.75rem)] z-50 min-w-[13rem] origin-top overflow-hidden border border-white/10 bg-[#0a0b0f] p-2 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-[opacity,transform,visibility] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: filterMenuOpen ? 1 : 0,
                    visibility: filterMenuOpen ? "visible" : "hidden",
                    transform: filterMenuOpen
                      ? "translateY(0px) scaleY(1)"
                      : "translateY(-22px) scaleY(0.78)",
                    pointerEvents: filterMenuOpen ? "auto" : "none",
                  }}
                >
                  <div>
                    {filterOptions.map((option) => {
                      const isActive = option.value === filterMode;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFilterMode(option.value);
                            setFilterMenuOpen(false);
                          }}
                          className="flex w-full items-center justify-between gap-4 px-3 py-2 text-left font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors duration-200 ease-out"
                          style={{
                            color: isActive
                              ? "#c4b5fd"
                              : "rgba(255,255,255,0.78)",
                            background: isActive
                              ? "rgba(139, 92, 246, 0.12)"
                              : "transparent",
                          }}
                        >
                          <span>{option.label}</span>
                          <span className="text-white/42">({option.count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="justify-self-center text-right sm:justify-self-end sm:self-start"
                style={getRevealStyle(headingProgress, 0.24, 22)}
              >
                {filterMode === "All" ? (
                  <>
                    <p className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-white/34">
                      Sort
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-2 font-display text-[0.95rem] font-bold uppercase tracking-[-0.02em] text-white/88 sm:justify-end">
                      {sortOptions.map((option) => {
                        const isActive = option.value === sortMode;

                        return (
                          <div key={option.value} className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => setSortMode(option.value)}
                              className={`transition-opacity duration-200 ease-out ${
                                isActive ? "text-white" : "text-white/42 hover:text-white/72"
                              }`}
                            >
                              {option.label}
                            </button>
                            {option.value === "best" ? (
                              <span className="text-white/28">/</span>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="h-[3.2rem]" />
                )}
              </div>
            </div>
          </div>

            <div className="relative z-0 grid gap-x-6 gap-y-12 md:grid-cols-12 xl:gap-x-8 xl:gap-y-14">
              {displayedProjects.map((project, index) => (
                <ProjectPlaceholder
                  key={project.slug}
                  project={project}
                  index={index}
                  onPointerEnter={showCursor}
                  onPointerMove={moveCursor}
                  onPointerLeave={hideCursor}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
