import type { ProjectItem } from "@/app/_data/portfolio";

type ProjectVisualProps = {
  project: ProjectItem;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  if (project.slug === "seatrium") {
    return (
      <div className="project-visual p-4 sm:p-5">
        <div className="relative z-10 grid gap-3">
          <div className="grid grid-cols-[1.2fr_0.8fr] gap-3">
            <div className="border border-white/10 bg-slate-950/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Threat Overview
                </span>
                <span className="border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-emerald-200">
                  Stable
                </span>
              </div>
              <div className="space-y-2">
                <div className="h-3 rounded-full bg-white/10" />
                <div className="h-3 w-4/5 rounded-full bg-[var(--color-accent)]/60" />
                <div className="h-16 bg-gradient-to-br from-[var(--color-accent)]/35 to-white/5" />
              </div>
            </div>
            <div className="border border-white/10 bg-slate-950/70 p-4">
              <div className="mb-3 h-3 w-2/3 rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="h-10 bg-white/6" />
                <div className="h-10 bg-white/6" />
                <div className="h-10 bg-[var(--color-accent)]/20" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="h-20 border border-white/10 bg-white/6" />
            <div className="h-20 border border-white/10 bg-white/6" />
            <div className="h-20 border border-white/10 bg-[var(--color-accent)]/16" />
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === "zhealthy") {
    return (
      <div className="project-visual p-4 sm:p-5">
        <div className="relative z-10 grid gap-3">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-3">
            <div className="border border-white/10 bg-slate-950/75 p-3">
              <div className="mx-auto h-44 w-24 border border-white/10 bg-black/60 p-2">
                <div className="space-y-2">
                  <div className="h-4 rounded-full bg-[var(--color-accent)]/60" />
                  <div className="h-14 bg-white/8" />
                  <div className="h-8 bg-white/8" />
                  <div className="h-8 bg-white/8" />
                </div>
              </div>
            </div>
            <div className="border border-white/10 bg-slate-950/75 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-24 rounded-full bg-white/10" />
                <div className="h-3 w-12 rounded-full bg-[var(--color-accent)]/50" />
              </div>
              <div className="grid gap-3">
                <div className="h-16 bg-gradient-to-r from-white/8 to-white/4" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-24 bg-white/6" />
                  <div className="h-24 bg-[var(--color-accent)]/18" />
                </div>
                <div className="h-12 bg-white/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual p-4 sm:p-5">
      <div className="relative z-10 grid gap-3">
        <div className="grid grid-cols-[1fr_0.72fr] gap-3">
          <div className="border border-white/10 bg-slate-950/75 p-4">
            <div className="mb-4 h-3 w-28 rounded-full bg-white/10" />
            <div className="grid gap-3">
              <div className="h-12 bg-white/6" />
              <div className="h-12 bg-[var(--color-accent)]/15" />
              <div className="h-12 bg-white/6" />
            </div>
          </div>
          <div className="border border-white/10 bg-slate-950/75 p-4">
            <div className="mb-3 h-3 w-16 rounded-full bg-white/10" />
            <div className="flex h-[8.75rem] items-end gap-2">
              <div className="h-14 w-full bg-white/8" />
              <div className="h-24 w-full bg-[var(--color-accent)]/28" />
              <div className="h-[4.5rem] w-full bg-white/10" />
            </div>
          </div>
        </div>
        <div className="border border-white/10 bg-black/20 p-4">
          <div className="grid grid-cols-4 gap-3">
            <div className="h-14 bg-white/6" />
            <div className="h-14 bg-white/6" />
            <div className="h-14 bg-[var(--color-accent)]/18" />
            <div className="h-14 bg-white/6" />
          </div>
        </div>
      </div>
    </div>
  );
}
