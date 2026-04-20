import { ProjectVisual } from "@/app/_components/project-visual";
import { SectionShell } from "@/app/_components/section-shell";
import { projects } from "@/app/_data/portfolio";

export function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <SectionShell
      id="projects"
      index="03"
      title="Selected Projects"
      description="A small set of work that reflects how I think about systems, usability, and polished frontend execution."
    >
      <div className="grid gap-6">
        <article className="surface-panel overflow-hidden">
          <div className="grid gap-0 xl:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]">
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="eyebrow text-xs font-medium">Featured Project</p>
                <div className="mt-4 space-y-5">
                  <h3 className="font-display max-w-3xl text-4xl font-semibold uppercase tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                    {featuredProject.title}
                  </h3>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-soft)]">
                  {featuredProject.description}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                  {featuredProject.role}
                </p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {featuredProject.outcomes.map((outcome, index) => (
                  <div
                    key={outcome}
                    className={`${index === 0 ? "accent-panel" : "border border-white/8 bg-[var(--color-surface-alt)]"} px-4 py-4 text-sm leading-7 text-[var(--color-muted)]`}
                  >
                    {outcome}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {featuredProject.stack.map((item, index) => (
                  <span
                    key={item}
                    className={`${index === 0 ? "accent-chip" : "pill"} px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[var(--color-soft)]`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/8 p-6 xl:border-l xl:border-t-0 lg:p-8">
              <ProjectVisual project={featuredProject} />
            </div>
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-2">
          {otherProjects.map((project, cardIndex) => (
            <article key={project.slug} className="surface-panel overflow-hidden">
              <div className="border-b border-white/8 p-6">
                <p className="eyebrow text-xs font-medium">{project.label}</p>
                <h3 className="font-display mt-3 text-3xl font-semibold uppercase tracking-[-0.05em] text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[var(--color-soft)]">
                  {project.description}
                </p>
              </div>

              <div className="p-6">
                <ProjectVisual project={project} />
                <div className="mt-6 grid gap-3">
                  {project.outcomes.map((outcome, outcomeIndex) => (
                    <div
                      key={outcome}
                      className={`${cardIndex === 0 && outcomeIndex === 0 ? "accent-panel" : "border border-white/8 bg-[var(--color-surface-alt)]"} px-4 py-3 text-sm leading-7 text-[var(--color-muted)]`}
                    >
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="pill px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-[var(--color-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
