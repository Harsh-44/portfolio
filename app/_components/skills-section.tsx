"use client";

import { useEffect, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiFigma,
  SiFirebase,
  SiKeras,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { SectionShell } from "@/app/_components/section-shell";

type SkillIconChip = {
  name: string;
  icon: IconType;
  color: string;
};

const skillChips: SkillIconChip[] = [
  {
    name: "Figma",
    icon: SiFigma,
    color: "#A259FF",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#7C3AED",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#6D28D9",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#8B5CF6",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#7C3AED",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#8B5CF6",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#7C3AED",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#8B5CF6",
  },
  {
    name: "NumPy",
    icon: SiNumpy,
    color: "#6D28D9",
  },
  {
    name: "Pandas",
    icon: SiPandas,
    color: "#8B5CF6",
  },
  {
    name: "Keras",
    icon: SiKeras,
    color: "#7C3AED",
  },
];

const xOffsets = [-34, 24, -18, 30, -26, 14, -12, 20, -28, 18, -16];
const rotations = [-12, 9, -8, 13, -10, 6, -7, 11, -9, 7, -6];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const chipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef(false);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || isTriggered) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;

      if (Math.abs(sectionCenter - viewportCenter) <= viewportHeight * 0.18) {
        setIsTriggered(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isTriggered]);

  useEffect(() => {
    if (!isTriggered) {
      return;
    }

    if (hasAnimatedRef.current) {
      return;
    }

    hasAnimatedRef.current = true;

    chipRefs.current.forEach((chip, index) => {
      if (!chip) {
        return;
      }

      const x = xOffsets[index % xOffsets.length];
      const rotate = rotations[index % rotations.length];

      chip.animate(
        [
          {
            opacity: 0,
            filter: "blur(1.2px)",
            transform: `translate3d(${x}px, calc(-120vh - ${index * 44}px), 0) rotate(${rotate}deg)`,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            transform: `translate3d(${Math.round(x * 0.18)}px, 20px, 0) rotate(${Math.round(rotate * -0.2)}deg)`,
            offset: 0.78,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            transform: `translate3d(${Math.round(x * 0.08)}px, -8px, 0) rotate(${Math.round(rotate * 0.08)}deg)`,
            offset: 0.9,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            transform: "translate3d(0, 0, 0) rotate(0deg)",
          },
        ],
        {
          duration: 1450,
          delay: index * 72,
          fill: "forwards",
          easing: "cubic-bezier(0.2, 0.84, 0.22, 1)",
        },
      );
    });
  }, [isTriggered]);

  return (
    <SectionShell
      id="skills"
      index="04"
      title="Tools"
      description="A quick scan of the tools and technologies I use most often."
    >
      <div
        ref={sectionRef}
        className="min-h-[74dvh] content-center py-6 sm:min-h-[82dvh] sm:py-8"
      >
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skillChips.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                ref={(node) => {
                  chipRefs.current[index] = node;
                }}
                title={skill.name}
                aria-label={skill.name}
                className="pill flex h-[4.75rem] w-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-[1.35rem] sm:h-[5.35rem] sm:w-[5.35rem] sm:gap-2"
                style={{
                  background: "rgba(255,255,255,0.78)",
                  color: skill.color,
                  opacity: 0,
                  filter: "blur(1px)",
                  transform: `translate3d(${xOffsets[index % xOffsets.length]}px, calc(-120vh - ${index * 44}px), 0) rotate(${rotations[index % rotations.length]}deg)`,
                  willChange: "transform, opacity, filter",
                }}
              >
                <Icon className="h-8 w-8 sm:h-9 sm:w-9" />
                <span
                  className="max-w-[90%] text-center font-mono text-[0.48rem] uppercase leading-[1.1] tracking-[0.08em] sm:text-[0.54rem]"
                  style={{ color: "var(--color-soft)" }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
