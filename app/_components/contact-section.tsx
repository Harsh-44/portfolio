import { SectionShell } from "@/app/_components/section-shell";
import { profile } from "@/app/_data/portfolio";

export function ContactSection() {
  return (
    <div className="flex min-h-svh w-full items-center">
      <SectionShell
        id="contact"
        index="05"
        title="Contact"
        description="A simple final section for outreach, availability, and the kind of roles this portfolio is built to support."
      >
        <div className="surface-panel p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-semibold uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-4xl">
                Let&apos;s build interfaces that feel as good as they function.
              </h3>
              <p className="max-w-2xl text-base leading-8 text-[var(--color-soft)] sm:text-lg">
                {profile.availability}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--color-text)] bg-[var(--color-text)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:opacity-90"
                >
                  Back to Top
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border-strong)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
                >
                  Revisit Projects
                </a>
              </div>
            </div>

            <div className="border border-white/10 bg-[var(--color-surface-alt)] p-5">
              <p className="eyebrow text-xs font-medium">Snapshot</p>
              <div className="mt-5 space-y-4 text-sm text-[var(--color-muted)]">
                <div className="border-b border-white/8 pb-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Name
                  </p>
                  <p className="mt-2 text-base text-[var(--color-text)]">{profile.name}</p>
                </div>
                <div className="border-b border-white/8 pb-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Based in
                  </p>
                  <p className="mt-2 text-base text-[var(--color-text)]">{profile.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    Best fit
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--color-text)]">
                    UI engineering, product-focused frontend, and design-system
                    heavy work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
