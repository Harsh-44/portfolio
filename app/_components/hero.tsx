import { heroMetrics, profile } from "@/app/_data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-white/8 pb-14 pt-10 lg:pb-20 lg:pt-16"
    >
      <div className="mx-auto flex max-w-[92rem] flex-col items-center gap-8 px-2 text-center lg:gap-10">
        <h1 className="max-w-[14ch] text-[4.5rem] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-text)] sm:text-[7rem] lg:text-[10rem] xl:text-[11rem]">
          <span className="font-display block uppercase">UI/UX FOCUSED</span>
          <span className="font-display block uppercase">Frontend</span>
          <span className="font-display block uppercase">Engineer</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-5 text-lg text-[var(--color-soft)]">
          <span className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream)] text-sm font-bold text-[var(--color-ink)]">
              H
            </span>
            {profile.name}
          </span>
          <span className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent-strong)]">
              UX
            </span>
            {profile.location}
          </span>
        </div>

        <p className="max-w-3xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
          {profile.intro} {profile.subtitle}
        </p>
      </div>
    </section>
  );
}
