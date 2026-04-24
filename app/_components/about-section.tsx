import { ArrowUpRight } from "lucide-react";
import { profile } from "@/app/_data/portfolio";
import { ScrollCipherText } from "@/app/_components/scroll-cipher-text";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-anchor relative flex min-h-dvh items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[74rem]">
        <ScrollCipherText
          as="p"
          text={`I'm a Singapore-based UI/UX Designer and Frontend Engineer who's a recent SUTD graduate in Cybersecurity and Software Engineering. I work at the intersection of product thinking and implementation, designing digital experiences that feel coherent, precise, and ready for production.`}
          className="font-mono text-center font-normal uppercase tracking-[0.06em] text-[var(--color-soft)] [text-wrap:balance] text-[clamp(1.2rem,0.95rem+0.7vw,1.8rem)] leading-[2.05]"
          interactiveTokens={[
            {
              token: "SUTD",
              href: "https://www.sutd.edu.sg/",
              hoverLabel: "Visit SUTD",
            },
          ]}
          startViewport={0.9}
          endViewport={0.56}
          fps={14}
        />
      </div>

      <div className="absolute bottom-28 left-4 flex flex-col items-start text-left sm:bottom-32 sm:left-6 lg:bottom-36 lg:left-8">
        <div
          className="inline-flex items-center text-[var(--color-muted)]"
          style={{ gap: "0.45rem" }}
        >
          <p className="font-mono text-[0.92rem] font-normal uppercase tracking-[0.08em] text-[var(--color-soft)] sm:text-[1.02rem]">
            Reach me at
          </p>
          <ArrowUpRight
            className="rotate-[75deg]"
            style={{
              width: "1rem",
              height: "1rem",
            }}
          />
        </div>
        <a
          href="mailto:harshhareendran58@gmail.com"
          className="group mt-2 inline-flex items-center text-[var(--color-soft)]"
          style={{ gap: "calc(0.35rem + 0.1vw)" }}
        >
          <span className="relative inline-block">
            <span
              className="font-display text-[1.55rem] font-bold tracking-[-0.04em] sm:text-[1.85rem]"
            >
              harshhareendran58@gmail.com
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-full overflow-hidden bg-[var(--color-soft)]">
              <span className="absolute left-[-24%] top-0 h-full w-[14%] bg-[var(--color-canvas)] transition-transform duration-500 ease-out group-hover:translate-x-[900%]" />
            </span>
          </span>
        </a>
      </div>

      <div className="absolute bottom-10 right-4 flex flex-col items-end text-right sm:bottom-12 sm:right-6 lg:bottom-14 lg:right-8">
        <div
          className="inline-flex items-center justify-end text-[var(--color-muted)]"
          style={{ gap: "0.45rem" }}
        >
          <ArrowUpRight
              className="rotate-[-165deg]"
              style={{
                width: "1rem",
                height: "1rem",
              }}
          />
          <p className="font-mono text-[0.92rem] font-normal uppercase tracking-[0.08em] text-[var(--color-soft)] sm:text-[1.02rem]">
            Brief Overview
          </p>

        </div>
        <a
          href="/Resume.docx"
          download
          className="group mt-2 inline-flex items-center text-[var(--color-soft)]"
          style={{ gap: "calc(0.35rem + 0.1vw)" }}
        >
          <span className="relative inline-block">
            <span className="font-display text-[1.55rem] font-bold tracking-[-0.04em] sm:text-[1.85rem]">
              Download Resume
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-full overflow-hidden bg-[var(--color-soft)]">
              <span className="absolute left-[-24%] top-0 h-full w-[14%] bg-[var(--color-canvas)] transition-transform duration-500 ease-out group-hover:translate-x-[900%]" />
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
