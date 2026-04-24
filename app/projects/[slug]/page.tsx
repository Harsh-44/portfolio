import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/app/_components/project-visual";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { getProjectBySlug, projects } from "@/app/_data/portfolio";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Harsh Hareendran`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--color-canvas)] text-[var(--color-text)]">
      <SiteHeader hrefPrefix="/" />

      <main className="mx-auto flex w-full max-w-[110rem] flex-col gap-18 px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <section className="space-y-8 pt-12 sm:space-y-10 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:items-start lg:gap-10">
            <div className="space-y-6 sm:space-y-8">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-[0.16em] text-[var(--color-muted)] transition-opacity duration-200 ease-out hover:opacity-60"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>

              <div className="space-y-4">
                <p className="font-mono text-[0.82rem] uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {project.label}
                </p>
                <h1 className="max-w-[11ch] font-display text-[clamp(3.8rem,6.8vw,8rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-[var(--color-ink)]">
                  {project.title}
                </h1>
              </div>

              <p className="max-w-[52rem] text-[1.02rem] leading-8 text-[var(--color-soft)] sm:text-[1.1rem] sm:leading-9">
                {project.detailIntro}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="pill rounded-full px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="surface-panel p-4">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Year
                </p>
                <p className="mt-2 font-display text-[1.5rem] font-bold uppercase tracking-[-0.05em] text-[var(--color-soft)]">
                  {project.year}
                </p>
              </div>
              <div className="surface-panel p-4 sm:col-span-2 lg:col-span-1">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Role
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-soft)] sm:text-base">
                  {project.role}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-[#0d0f13] p-2 sm:p-3">
            <div className="aspect-[1.4/1]">
              <ProjectVisual project={project} />
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,1fr)] lg:gap-12">
          <div className="space-y-2">
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Challenge
            </p>
            <div className="section-rule max-w-[9rem]" />
          </div>
          <div className="surface-panel p-6 sm:p-8">
            <p className="max-w-[56rem] text-[1rem] leading-8 text-[var(--color-soft)] sm:text-[1.06rem] sm:leading-9">
              {project.challenge}
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,1fr)] lg:gap-12">
          <div className="space-y-2">
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Approach
            </p>
            <div className="section-rule max-w-[9rem]" />
          </div>
          <div className="grid gap-4">
            {project.approach.map((item, index) => (
              <article key={item} className="surface-panel p-6 sm:p-8">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-accent-strong)]">
                  0{index + 1}
                </p>
                <p className="mt-3 text-[1rem] leading-8 text-[var(--color-soft)] sm:text-[1.04rem] sm:leading-9">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,1fr)] lg:gap-12">
          <div className="space-y-2">
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Impact
            </p>
            <div className="section-rule max-w-[9rem]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.impact.map((item) => (
              <article key={item} className="surface-panel p-5 sm:p-6">
                <p className="text-sm leading-7 text-[var(--color-soft)] sm:text-base sm:leading-8">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        {project.confidentialityNote ? (
          <section className="grid gap-6 lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,1fr)] lg:gap-12">
            <div className="space-y-2">
              <p className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Visibility
              </p>
              <div className="section-rule max-w-[9rem]" />
            </div>
            <div className="accent-panel p-6 sm:p-8">
              <p className="max-w-[48rem] text-[1rem] leading-8 text-[var(--color-soft)] sm:text-[1.04rem] sm:leading-9">
                {project.confidentialityNote}
              </p>
            </div>
          </section>
        ) : null}

        <section className="border-t border-black/8 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <p className="font-mono text-[0.78rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Next Project
              </p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="font-display text-[clamp(2rem,4vw,4.4rem)] font-black uppercase leading-[0.92] tracking-[-0.07em] text-[var(--color-ink)] transition-opacity duration-200 ease-out hover:opacity-60"
              >
                {nextProject.title}
              </Link>
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 font-mono text-[0.86rem] uppercase tracking-[0.14em] text-[var(--color-soft)] transition-opacity duration-200 ease-out hover:opacity-60"
            >
              View Project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
