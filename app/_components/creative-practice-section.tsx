import { SectionShell } from "@/app/_components/section-shell";
import { creativePractices } from "@/app/_data/portfolio";

export function CreativePracticeSection() {
  return (
    <SectionShell
      id="creative"
      index="06"
      title="Creative Practice"
      description="Work and interests outside interface design that still shape taste, rhythm, visual judgment, and performance."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {creativePractices.map((item, index) => (
          <article key={item.title} className="surface-panel overflow-hidden">
            <div className="aspect-[1.2/1] border-b border-black/8 bg-[linear-gradient(180deg,rgba(17,18,22,0.04),rgba(139,92,246,0.1))] p-5">
              <div className="flex h-full items-end">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    Practice 0{index + 1}
                  </p>
                  <h3 className="mt-2 max-w-[14rem] font-display text-[2rem] font-black uppercase leading-[0.92] tracking-[-0.06em] text-[var(--color-ink)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="space-y-4 p-5 sm:p-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                {item.tools}
              </p>
              <p className="text-[0.98rem] leading-8 text-[var(--color-soft)] sm:text-[1.02rem]">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
