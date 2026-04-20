import { SectionShell } from "@/app/_components/section-shell";
import { profile, strengths } from "@/app/_data/portfolio";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      index="01"
      title="About"
      description="A quick scan of how I work, what I care about, and where I bring the most value."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.8fr)]">
        <div className="surface-panel p-6 sm:p-8">
          <p className="font-editorial mb-4 text-3xl italic leading-none text-[var(--color-accent-strong)] sm:text-4xl">
            Built for product teams, not just Dribbble shots.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-[var(--color-soft)] sm:text-xl">
            {profile.name} is a Singapore-based UI/UX Designer and Frontend
            Engineer studying Cybersecurity and Software Engineering at SUTD.
            He works best at the seam between product thinking and
            implementation, where the challenge is not only making something
            look good, but making it feel coherent, reliable, and production
            ready.
          </p>
        </div>

        <div className="border border-white/10 bg-[var(--color-surface-alt)] p-6">
          <p className="eyebrow text-xs font-medium">What stands out</p>
          <div className="mt-4 space-y-3">
            {strengths.map((item, index) => (
              <div
                key={item}
                className={`${index === 0 || index === 3 ? "accent-chip" : "border border-white/8"} px-4 py-3 text-sm leading-6 text-[var(--color-soft)]`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
