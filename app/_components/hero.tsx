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

export function Hero() {
  return (
    <section id="top">
      <div className="mx-auto max-w-[112rem]">
        <div className="mt-8 md:hidden">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-[clamp(3.35rem,18vw,4.2rem)] font-black uppercase leading-[0.82] tracking-[-0.085em] text-white mix-blend-difference sm:tracking-[-0.11em]">
                <span className="block">
                  <Word text="Creative" />
                </span>
                <span className="block">
                  <Word text="Designer" />
                </span>
              </h1>
              <div className="space-y-1 text-center">
                <span
                  className="block text-[clamp(2.25rem,11vw,3rem)] font-black uppercase leading-none tracking-[-0.08em] text-[var(--color-accent-strong)]"
                  aria-hidden="true"
                >
                  &
                </span>
                <h2 className="text-[clamp(2.55rem,13vw,3.65rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-white mix-blend-difference">
                  <Word text="Developer" />
                </h2>
              </div>
            </div>

            <p className="font-mono text-center text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[var(--color-soft)] sm:text-[0.95rem] sm:tracking-[0.44em]">
              Based In Singapore
            </p>
          </div>

          <div className="mt-8 grid justify-items-center gap-5 sm:flex sm:items-end sm:justify-center sm:gap-6">
            <div className="w-[min(72vw,11.5rem)] shrink-0 sm:w-[13rem]">
              <HeroPortrait
                image={portrait}
                alt="Portrait of Harsh Hareendran Kallinkeel"
                areaRatio={0.14}
                priority
              />
            </div>

            <div className="min-w-0 space-y-2 text-center text-[var(--color-soft)] sm:space-y-3 sm:text-right">
              {specialties.map((specialty) => (
                <p
                  key={specialty}
                  className="text-[1.05rem] font-semibold uppercase tracking-[-0.03em] sm:text-[1.45rem] sm:tracking-[-0.04em]"
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
