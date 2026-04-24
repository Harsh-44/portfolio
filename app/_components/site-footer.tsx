"use client";

import { useEffect, useState } from "react";

function formatSingaporeTime(date: Date) {
  return new Intl.DateTimeFormat("en-SG", {
    timeZone: "Asia/Singapore",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function SiteFooter() {
  const [singaporeTime, setSingaporeTime] = useState(() =>
    formatSingaporeTime(new Date()),
  );
  const footerName = "Harsh Hareendran";
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "GitHub", href: "https://github.com/Harsh-44" },
    { label: "Figma", href: "https://www.figma.com/" },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSingaporeTime(formatSingaporeTime(new Date()));
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <footer className="border-t border-black/8 px-4 py-6 text-sm text-[var(--color-muted)] sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[110rem] flex-col gap-8">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-mono uppercase tracking-[0.14em] text-[var(--color-soft)]">
              Singapore: {singaporeTime}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono uppercase tracking-[0.14em] text-[var(--color-soft)] transition-opacity duration-200 ease-out hover:opacity-60"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <p className="whitespace-nowrap font-display text-[clamp(2.05rem,7.1vw,11rem)] font-black uppercase leading-[0.84] tracking-[-0.09em] text-[var(--color-soft)]">
            {footerName}
          </p>
        </div>
      </div>
    </footer>
  );
}
