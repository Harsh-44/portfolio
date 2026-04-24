"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";

const BOARD_WIDTH = 1600;
const BOARD_HEIGHT = 820;

const IMAGE_FRAME = {
  left: 648,
  top: 198,
  width: 430,
  shadowOffset: 16,
} as const;

const CREATIVE = {
  left: 36,
  top: 44,
  fontSize: 156,
} as const;

const DESIGNER = {
  left: 164,
  top: 212,
  fontSize: 156,
} as const;

const DEVELOPER = {
  right: 18,
  top: 404,
  fontSize: 138,
  ampersandSize: 126,
} as const;

const SPECIALTIES = {
  left: 286,
  top: 610,
  maxWidth: 320,
  fontSize: 26,
  gap: 12,
} as const;

const LOCATION = {
  right: 12,
  top: 664,
  fontSize: 17,
  inGap: 76,
} as const;

function Word({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((letter, index) => (
        <span
          key={`${text}-${index}`}
          className="inline-block"
          aria-hidden="true"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

function HeadlineWord({
  text,
  className = "",
  fontSize,
}: {
  text: string;
  className?: string;
  fontSize: number;
}) {
  return (
    <h2
      className={`font-black uppercase leading-[0.88] tracking-[-0.11em] ${className}`}
      style={{ fontSize: `${fontSize}px` }}
    >
      <Word text={text} />
    </h2>
  );
}

function DeveloperWord({
  textClassName = "",
  ampersandClassName = "",
}: {
  textClassName?: string;
  ampersandClassName?: string;
}) {
  return (
    <div className="inline-flex flex-col items-start leading-none">
      <span
        className={`inline-block font-black uppercase leading-none tracking-[-0.11em] text-[var(--color-accent-strong)] ${ampersandClassName}`}
        style={{ fontSize: `${DEVELOPER.ampersandSize}px` }}
        aria-hidden="true"
      >
        &
      </span>
      <h2
        className={`mt-[-0.08em] font-black uppercase leading-[0.8] tracking-[-0.11em] ${textClassName}`}
        style={{ fontSize: `${DEVELOPER.fontSize}px` }}
      >
        <Word text="Developer" />
      </h2>
    </div>
  );
}

function useElementSize(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState({ width: BOARD_WIDTH, height: BOARD_HEIGHT });

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const node = ref.current;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (!entry) {
        return;
      }

      const { width, height } = entry.contentRect;

      setSize({
        width: Math.max(width, 1),
        height: Math.max(height, 1),
      });
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref]);

  return size;
}

export function HeroScaledDesktop({
  portrait,
  specialties,
}: {
  portrait: StaticImageData;
  specialties: readonly string[];
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const { width, height } = useElementSize(stageRef);

  const scale = Math.min(width / BOARD_WIDTH, height / BOARD_HEIGHT);
  const offsetX = (width - BOARD_WIDTH * scale) / 2;
  const offsetY = (height - BOARD_HEIGHT * scale) / 2;

  return (
    <div
      ref={stageRef}
      className="relative hidden md:block"
      style={{
        height: "calc(100dvh - 6.75rem)",
        minHeight: "38rem",
      }}
    >
      <div
        className="absolute left-0 top-0 isolate bg-[var(--color-canvas)]"
        style={{
          width: `${BOARD_WIDTH}px`,
          height: `${BOARD_HEIGHT}px`,
          transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <div
          className="pointer-events-none absolute z-10"
          style={{
            left: `${IMAGE_FRAME.left}px`,
            top: `${IMAGE_FRAME.top}px`,
            width: `${IMAGE_FRAME.width}px`,
          }}
        >
          <div className="relative">
            <div
              className="absolute h-full w-full bg-black/4"
              style={{
                left: `${-IMAGE_FRAME.shadowOffset}px`,
                bottom: `${-IMAGE_FRAME.shadowOffset}px`,
              }}
            />
            <div className="relative overflow-hidden border border-black/10 bg-[#d9d4cd]">
              <Image
                src={portrait}
                alt="Portrait of Harsh Hareendran Kallinkeel"
                className="h-auto w-full object-cover grayscale"
                priority
                sizes={`${Math.round(IMAGE_FRAME.width * scale)}px`}
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-20 text-white mix-blend-difference">
          <div
            className="absolute"
            style={{ left: `${CREATIVE.left}px`, top: `${CREATIVE.top}px` }}
          >
            <HeadlineWord
              text="Creative"
              fontSize={CREATIVE.fontSize}
              className="text-white"
            />
          </div>

          <div
            className="absolute"
            style={{ left: `${DESIGNER.left}px`, top: `${DESIGNER.top}px` }}
          >
            <HeadlineWord
              text="Designer"
              fontSize={DESIGNER.fontSize}
              className="text-white"
            />
          </div>

          <div
            className="absolute"
            style={{ right: `${DEVELOPER.right}px`, top: `${DEVELOPER.top}px` }}
          >
            <DeveloperWord
              textClassName="text-white"
              ampersandClassName="opacity-0"
            />
          </div>
        </div>

        <div
          className="absolute z-30"
          style={{ right: `${DEVELOPER.right}px`, top: `${DEVELOPER.top}px` }}
        >
          <DeveloperWord textClassName="opacity-0" />
        </div>

        <div
          className="absolute z-20"
          style={{
            left: `${SPECIALTIES.left}px`,
            top: `${SPECIALTIES.top}px`,
            maxWidth: `${SPECIALTIES.maxWidth}px`,
          }}
        >
          <div
            className="flex flex-col text-[var(--color-soft)]"
            style={{ gap: `${SPECIALTIES.gap}px` }}
          >
            {specialties.map((specialty) => (
              <p
                key={specialty}
                className="font-bold uppercase tracking-[-0.04em]"
                style={{ fontSize: `${SPECIALTIES.fontSize}px` }}
              >
                <span className="text-[var(--color-accent-strong)]">/</span>{" "}
                {specialty}
              </p>
            ))}
          </div>
        </div>

        <div
          className="absolute z-20"
          style={{ right: `${LOCATION.right}px`, top: `${LOCATION.top}px` }}
        >
          <p
            className="font-black uppercase tracking-[0.48em] text-[var(--color-soft)]"
            style={{ fontSize: `${LOCATION.fontSize}px` }}
          >
            Based
            <span style={{ marginInline: `${LOCATION.inGap}px` }}>In</span>
            Singapore
          </p>
        </div>
      </div>
    </div>
  );
}
