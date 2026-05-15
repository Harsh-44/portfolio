"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaFigma, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/harsh-hareendran-kallinkeel-b81a60295/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://github.com/Harsh-44",
    label: "GitHub",
    Icon: FaGithub,
  },
  {
    href: "https://www.figma.com/@harsh_ui",
    label: "Figma",
    Icon: FaFigma,
  },
];

function formatSingaporeTime(date: Date) {
  return new Intl.DateTimeFormat("en-SG", {
    timeZone: "Asia/Singapore",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function StaticName({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLParagraphElement | null>(null);
  const [fontSize, setFontSize] = useState(0);

  useLayoutEffect(() => {
    const base = 300;

    const update = () => {
      if (!containerRef.current || !measureRef.current) return;
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const textWidth = measureRef.current.getBoundingClientRect().width;
      if (containerWidth && textWidth) {
        setFontSize((containerWidth / textWidth) * base);
      }
    };

    update();

    const resizeObserver = new ResizeObserver(update);
    if (containerRef.current) resizeObserver.observe(containerRef.current);
    if (measureRef.current) resizeObserver.observe(measureRef.current);

    return () => resizeObserver.disconnect();
  }, [text]);

  return (
    <div ref={containerRef} className="w-full">
      <p
        ref={measureRef}
        className="absolute whitespace-nowrap font-display font-black uppercase tracking-[-0.14em] opacity-0"
        style={{ fontSize: "300px" }}
      >
        {text}
      </p>

      <p
        className="whitespace-nowrap font-display font-black uppercase tracking-[-0.14em] text-white"
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: 0.82,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export function SiteFooter() {
  const [time, setTime] = useState(formatSingaporeTime(new Date()));

  useEffect(() => {
    const i = setInterval(() => {
      setTime(formatSingaporeTime(new Date()));
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <footer className="flex min-h-[100svh] w-full flex-col bg-black text-white">
      <div
        className="mx-auto flex w-full max-w-[110rem] items-center justify-between gap-4 pb-8 pt-20 sm:pt-24"
        style={{
          paddingInline: "calc(1rem + 0.8vw)",
        }}
      >
        <div className="flex shrink-0 gap-4 sm:gap-5">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-right font-mono text-[0.68rem] uppercase tracking-[0.08em] opacity-60 sm:text-sm sm:tracking-[0.14em]">
          Singapore - {time}
        </p>
      </div>

      <div
        className="mx-auto flex w-full max-w-[110rem] flex-1 flex-col justify-center py-8"
        style={{
          paddingInline: "calc(1rem + 0.8vw)",
        }}
      >
        <div className="w-full overflow-hidden">
          <StaticName text="HARSH" />
        </div>

        <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="mailto:harshhareendran58@gmail.com"
            className="break-all text-base font-medium transition-opacity hover:opacity-70 md:text-xl"
          >
            harshhareendran58@gmail.com
          </a>

          <a
            href="tel:+6580632846"
            className="font-mono text-base tracking-wide opacity-70 transition-opacity hover:opacity-100 md:text-xl"
          >
            +65 80632846
          </a>
        </div>
      </div>

      <div
        className="mx-auto flex w-full max-w-[110rem] items-end justify-between gap-4 py-8"
        style={{
          paddingInline: "calc(1rem + 0.8vw)",
        }}
      >
        <div className="text-[0.72rem] leading-relaxed opacity-60 sm:text-sm">
          <p>103 Potong Pasir Ave 1</p>
          <p>Singapore 350103</p>
        </div>

        <p className="flex shrink-0 items-center gap-2 text-right text-[0.72rem] opacity-60 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-green-400" />
          Available for work
        </p>
      </div>
    </footer>
  );
}
