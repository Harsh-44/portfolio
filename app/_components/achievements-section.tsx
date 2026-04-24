import { achievements } from "@/app/_data/portfolio";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-anchor grid gap-10 py-18 lg:grid-cols-[minmax(18rem,0.5fr)_minmax(0,1fr)] lg:gap-16 lg:py-24"
    >
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <h2 className="font-display text-[clamp(3.1rem,6vw,5.6rem)] font-medium uppercase leading-[0.88] tracking-[-0.07em] text-[var(--color-text)]">
            Awards
          </h2>
        </div>
      </div>

      <div className="border-b border-black/10">
        {achievements.map((achievement) => (
          <article
            key={achievement.title}
            className="grid gap-5 border-t border-black/10 py-6 lg:grid-cols-[minmax(12rem,0.42fr)_minmax(0,1fr)] lg:gap-10"
          >
            <div>
              <p className="font-mono text-[0.9rem] uppercase tracking-[0.02em] text-[var(--color-accent-strong)]">
                {achievement.title}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="max-w-[24ch] font-sans text-[clamp(1.6rem,2.4vw,2.55rem)] font-medium uppercase leading-[1.02] tracking-[-0.05em] text-[var(--color-text)]">
                {achievement.result}
              </h3>
              <p className="text-[1.05rem] text-[var(--color-muted)]">
                {achievement.context}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
