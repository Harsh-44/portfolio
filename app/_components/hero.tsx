import portrait from "@/app/assets/images/portrait.jpg";
import { HeroScaledDesktop } from "@/app/_components/hero-scaled-desktop";
import { HeroPortrait } from "@/app/_components/hero-portrait";

const specialties = ["ui/ux design", "web/app development", "cybersecurity"] as const;

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

function DeveloperWord({
  wordClassName = "",
  ampersandClassName = "",
}: {
  wordClassName?: string;
  ampersandClassName?: string;
}) {
  return (
    <span className="inline-flex flex-col items-start leading-none">
      <span className={`inline-block ${ampersandClassName}`} aria-hidden="true">
        &
      </span>
      <Word
        text="Developer"
        className={`text-white mix-blend-difference ${wordClassName}`}
      />
    </span>
  );
}

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto max-w-[112rem]">
        <div className="mt-8 md:hidden">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-[3.1rem] font-black uppercase leading-[0.9] tracking-[-0.11em] text-white mix-blend-difference sm:text-[4.2rem]">
                <Word text="Creative Designer" />
              </h1>
              <div className="flex items-start justify-center gap-3 sm:gap-4">
                <span
                  className="text-[3rem] font-black uppercase leading-none tracking-[-0.11em] text-[var(--color-accent-strong)] sm:text-[4rem]"
                  aria-hidden="true"
                >
                  &
                </span>
                <h2 className="pt-[0.16em] text-[3rem] font-black uppercase leading-[0.82] tracking-[-0.11em] text-white mix-blend-difference sm:text-[4rem]">
                  <Word text="Developer" />
                </h2>
              </div>
            </div>

            <p className="font-mono text-center text-[0.82rem] font-medium uppercase tracking-[0.44em] text-[var(--color-soft)] sm:text-[0.95rem]">
              Based In Singapore
            </p>
          </div>

          <div className="mt-8 flex items-end justify-center gap-4 sm:gap-6">
            <div className="w-[10.75rem] shrink-0 sm:w-[13rem]">
              <HeroPortrait
                image={portrait}
                alt="Portrait of Harsh Hareendran Kallinkeel"
                areaRatio={0.14}
                priority
              />
            </div>

            <div className="min-w-0 space-y-3 text-right text-[var(--color-soft)]">
              {specialties.map((specialty) => (
                <p
                  key={specialty}
                  className="text-[1.2rem] font-semibold uppercase tracking-[-0.04em] sm:text-[1.45rem]"
                >
                  <span className="text-[var(--color-accent-strong)]">/</span>{" "}
                  {specialty}
                </p>
              ))}
            </div>
          </div>
        </div>

        <HeroScaledDesktop portrait={portrait} specialties={specialties} />
      </div>
    </section>
  );
}
