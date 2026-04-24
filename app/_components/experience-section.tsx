import { SectionShell } from "@/app/_components/section-shell";
import { experiences } from "@/app/_data/portfolio";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      index="02"
      title="Industry Experience"
      description="The through-line across these roles is clarity: turning complexity into interfaces that feel intentional and usable."
    >
      <div className="space-y-4">
        {experiences.map((experience) => (
          <article key={experience.company} className="surface-panel p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[14rem_minmax(0,1fr)]">
              <div className="space-y-2">
                <p className="eyebrow text-xs font-medium">{experience.context}</p>
                <h3 className="font-display text-2xl font-semibold uppercase tracking-[-0.05em] text-[var(--color-text)]">
                  {experience.company}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {experience.title}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {experience.period}
                </p>
              </div>

              <div className="space-y-5">
                <p className="max-w-3xl text-base leading-7 text-[var(--color-soft)] sm:text-lg">
                  {experience.summary}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  {experience.impact.map((item) => (
                    <div
                      key={item}
                      className="border border-white/8 bg-[var(--color-surface-alt)] p-4 text-sm leading-7 text-[var(--color-muted)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[var(--color-soft)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
