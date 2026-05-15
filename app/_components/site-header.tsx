"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

function SlotText({ text }: { text: string }) {
  const leftBrace = text.startsWith("{") ? "{" : "";
  const rightBrace = text.endsWith("}") ? "}" : "";
  const coreText = leftBrace && rightBrace ? text.slice(1, -1) : text;
  const animatedCharacters = coreText.split("").filter((character) => character !== " ");

  return (
    <span
      className="inline-flex leading-none"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {leftBrace ? (
        <span className="inline-flex pr-[0.08em]" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="slot-brace-left">
            {leftBrace}
          </span>
        </span>
      ) : null}

      {coreText.split("").map((character, index) => {
        const glyph = character === " " ? "\u00A0" : character;
        const staggerIndex = coreText
          .slice(0, index)
          .split("")
          .filter((previousCharacter) => previousCharacter !== " ").length;
        const enterDelay =
          character === " " ? "0s" : `${staggerIndex * 0.06}s`;
        const leaveDelay =
          character === " "
            ? "0s"
            : `${(animatedCharacters.length - 1 - staggerIndex) * 0.06}s`;

        return (
          <span
            key={`${text}-${index}`}
            className="relative inline-flex h-[1.15em] overflow-hidden align-top"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="invisible">{glyph}</span>
            <span
              className="slot-char-top absolute inset-0 flex items-center justify-center"
              style={{
                fontFamily: "var(--font-mono)",
                ["--slot-delay-enter" as string]: enterDelay,
                ["--slot-delay-leave" as string]: leaveDelay,
              }}
            >
              {glyph}
            </span>
            <span
              className="slot-char-bottom absolute inset-0 flex items-center justify-center"
              style={{
                fontFamily: "var(--font-mono)",
                ["--slot-delay-enter" as string]: enterDelay,
                ["--slot-delay-leave" as string]: leaveDelay,
              }}
              aria-hidden="true"
            >
              {glyph}
            </span>
          </span>
        );
      })}

      {rightBrace ? (
        <span className="inline-flex pl-[0.08em]" style={{ fontFamily: "var(--font-mono)" }}>
          <span className="slot-brace-right">
            {rightBrace}
          </span>
        </span>
      ) : null}
    </span>
  );
}

type SiteHeaderProps = {
  hrefPrefix?: string;
};

export function SiteHeader({ hrefPrefix = "" }: SiteHeaderProps) {
  const logoHref = hrefPrefix ? "/" : "#top";
  const [forceVisible, setForceVisible] = useState(false);
  const [footerActive, setFooterActive] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const footerZoneStart = scrollHeight - viewportHeight * 2;
      setFooterActive(window.scrollY >= footerZoneStart);
    };

    const schedule = () => {
      if (frame) return;
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
  }, []);

  const shouldForceVisible = forceVisible || footerActive;

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-40 hidden h-8 lg:block"
        onMouseEnter={() => setForceVisible(true)}
        onMouseLeave={() => setForceVisible(false)}
      />

      <header
        className="fixed inset-x-0 top-0 z-50 text-[var(--color-ink)] mix-blend-difference transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        onMouseEnter={() => setForceVisible(true)}
        onMouseLeave={() => setForceVisible(false)}
        style={{
          transform: shouldForceVisible
            ? "translate3d(0, 0, 0)"
            : "translate3d(0, calc(var(--projects-header-hide, 0) * -108%), 0)",
          opacity: shouldForceVisible
            ? "1"
            : "calc(1 - (var(--projects-header-hide, 0) * 0.18))",
        }}
      >
        <div
          className="mx-auto grid w-full max-w-[110rem] grid-cols-[auto_1fr_auto] items-center"
          style={{
            gap: "calc(0.75rem + 0.5vw)",
            paddingInline: "calc(1rem + 0.8vw)",
            paddingBlock: "calc(0.55rem + 0.25vw)",
          }}
        >
          <div className="justify-self-start">
            <a
              href={logoHref}
              className="font-display font-extrabold tracking-[-0.08em] text-white"
              style={{ fontSize: "calc(1.7rem + 0.8vw)" }}
            >
              H.
            </a>
          </div>

          <div className="hidden justify-self-center lg:flex">
            <nav
              className="flex items-center"
              style={{ gap: "calc(1.25rem + 1vw)" }}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`${hrefPrefix}${item.href}`}
                  className="slot-link group relative inline-flex items-center font-normal uppercase text-white"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "calc(0.86rem + 0.28vw)",
                    letterSpacing: "0.10em",
                    paddingBlock: "calc(0.15rem + 0.1vw)",
                  }}
                >
                  <SlotText text={`[ ${item.label} ]`} />
                </a>
              ))}
            </nav>
          </div>

          <div className="justify-self-end">
            <a
              href={`${hrefPrefix}#contact`}
              className="group hidden items-center pb-1 font-black uppercase tracking-[0.04em] text-white sm:inline-flex"
              style={{
                gap: "calc(0.25rem + 0.2vw)",
                fontSize: "calc(0.86rem + 0.28vw)",
              }}
            >
              <span className="relative inline-block">
                <span
                  className="font-normal uppercase text-white"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "calc(0.86rem + 0.28vw)",
                    letterSpacing: "0.10em",
                    paddingBlock: "calc(0.15rem + 0.1vw)",
                  }}
                >
                  Contact Me
                </span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-full overflow-hidden bg-white">
                  <span className="absolute left-[-24%] top-0 h-full w-[14%] translate-x-0 bg-[var(--color-canvas)] transition-transform duration-500 ease-out group-hover:translate-x-[900%]" />
                </span>
              </span>
              <ArrowUpRight
                className="text-white transition duration-300 ease-out group-hover:rotate-[45deg]"
                style={{
                  width: "calc(1rem + 0.2vw)",
                  height: "calc(1rem + 0.2vw)",
                }}
              />
            </a>
          </div>
        </div>
      </header>

      <div
        aria-hidden="true"
        className="w-full"
        style={{
          height: "calc(3.25rem + 1.6vw)",
        }}
      />
    </>
  );
}
