import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectVisual } from "@/app/_components/project-visual";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import {
  getProjectBySlug,
  projects,
  type ArchiveProjectItem,
  type ProjectItem,
  visibleArchiveProjects,
} from "@/app/_data/portfolio";
import ascendaImage from "@/app/assets/images/projects/ascenda.png";
import ascendaFigmaImage from "@/app/assets/images/projects/ascendafigma.png";
import customshellImage from "@/app/assets/images/projects/customshell.png";
import dishcoverImage from "@/app/assets/images/projects/dishcover.png";
import framerImage from "@/app/assets/images/projects/framer.jpeg";
import furnitectImage from "@/app/assets/images/projects/furnitect.png";
import irisAppMlImage from "@/app/assets/images/projects/irisapp_ml.svg";
import meetproImage from "@/app/assets/images/projects/meetpro.png";
import networkSecurityAiHeatmapImage from "@/app/assets/images/projects/network_security_ai_heatmap.svg";
import planqImage from "@/app/assets/images/projects/planq.png";
import pongImage from "@/app/assets/images/projects/pong.png";
import project93PenguinImage from "@/app/assets/images/projects/project93_penguin.svg";
import rpgImage from "@/app/assets/images/projects/rpg.png";
import soraLandingImage from "@/app/assets/images/projects/sora_landing.png";
import sftpImage from "@/app/assets/images/projects/sftp.png";

const archiveProjectImages: Record<string, StaticImageData> = {
  furnitect: furnitectImage,
  "custom-shell-daemon": customshellImage,
  "hotel-booking-website": ascendaFigmaImage,
  meetpro: meetproImage,
  vibecheck: framerImage,
  irisapp: irisAppMlImage,
  "network-security-ai": networkSecurityAiHeatmapImage,
  planq: planqImage,
  "project-93": project93PenguinImage,
  dishcover: dishcoverImage,
  "ascenda-hotel": ascendaImage,
  notpong: pongImage,
  "sora-landing-page": soraLandingImage,
  "sftp-network-security": sftpImage,
  "text-based-rpg": rpgImage,
};

const whiteFrameArchiveProjects = new Set([
  "custom-shell-daemon",
  "sftp-network-security",
  "text-based-rpg",
  "notpong",
]);

const containArchiveProjects = new Set([
  "irisapp",
  "project-93",
  "network-security-ai",
]);

function getSourceLinkLabel(project: ArchiveProjectItem) {
  if (project.sourceHref?.includes("github.com")) {
    return "Visit GitHub";
  }

  if (project.sourceLabel === "Figma") {
    return "View Figma";
  }

  return project.sourceLabel ?? "View project";
}

export async function generateStaticParams() {
  return [
    ...projects.map((project) => ({ slug: project.slug })),
    ...visibleArchiveProjects.map((project) => ({ slug: project.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (project) {
    return {
      title: `${project.title} | Harsh Hareendran`,
      description: project.description,
    };
  }

  const archiveProject = getArchiveProjectBySlug(slug);

  if (!archiveProject) {
    return {};
  }

  return {
    title: `${archiveProject.title} | Harsh Hareendran`,
    description: archiveProject.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (project) {
    return <ExperienceProjectPage project={project} />;
  }

  const archiveProject = getArchiveProjectBySlug(slug);

  if (!archiveProject) {
    notFound();
  }

  return <ArchiveProjectPage project={archiveProject} />;
}

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-x-clip bg-black">
      <div className="sticky top-0 h-svh">
        <SiteFooter />
      </div>

      <div className="pointer-events-none relative z-10 -mt-[100svh]">
        <div className="pointer-events-auto min-h-screen bg-[var(--color-canvas)] text-[var(--color-text)]">
          <SiteHeader hrefPrefix="/" />
          {children}
        </div>

        <div id="contact" aria-hidden="true" className="pointer-events-none h-svh" />
      </div>
    </div>
  );
}

function withTrailingPeriod(text: string) {
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function DetailMeta({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
        {label}
      </p>
      <div className="font-semibold text-[1rem] leading-7 text-[var(--color-soft)]">{value}</div>
    </div>
  );
}

function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-black/8 py-12 sm:py-14">
      <div className="grid gap-5 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10">
        <h2 className="pt-2 font-mono text-[0.9rem] font-medium uppercase tracking-[0.24em] text-[var(--color-accent)]">
          /{title}
        </h2>

        <div className="max-w-[21rem] border-l border-black/8 pl-5 sm:max-w-[48rem] sm:pl-8">
          <div className="space-y-4 text-[1rem] leading-8 text-[var(--color-soft)] sm:text-[1.03rem] [&>p:first-child]:font-display [&>p:first-child]:text-[clamp(1.45rem,2vw,1.9rem)] [&>p:first-child]:font-medium [&>p:first-child]:leading-[1.16] [&>p:first-child]:tracking-[-0.05em] [&>p:first-child]:text-[var(--color-ink)]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-t border-black/10 pt-4">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-3 max-w-[22rem] text-[0.95rem] font-medium leading-7 text-[var(--color-soft)]">{value}</p>
    </div>
  );
}

function NarrativeLead({
  eyebrow,
  title,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  meta: Array<{ label: string; value: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="border-y border-black/8 py-12 sm:py-16">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(26rem,0.82fr)] xl:items-start xl:gap-16">
        <div className="space-y-5">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[var(--color-muted)]">
            {eyebrow}
          </p>
          <h2 className="max-w-[9ch] font-display text-[clamp(2.45rem,12vw,6.7rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[var(--color-ink)] sm:max-w-[12ch] sm:leading-[0.86] sm:tracking-[-0.085em]">
            {title}
          </h2>
        </div>

        <div className="space-y-10 xl:pt-11">
          <div className="max-w-[21rem] border-l border-black/10 pl-5 sm:max-w-none sm:pl-8">
            <div className="space-y-5 text-[1.02rem] leading-8 text-[var(--color-soft)] sm:text-[1.08rem] [&>p:first-child]:font-display [&>p:first-child]:text-[clamp(1.55rem,2.1vw,2.15rem)] [&>p:first-child]:font-medium [&>p:first-child]:leading-[1.16] [&>p:first-child]:tracking-[-0.055em] [&>p:first-child]:text-[var(--color-ink)]">
              {children}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {meta.map((item) => (
              <LeadMeta key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const experienceCaseStudyTitles: Record<ProjectItem["slug"], string> = {
  seatrium: "Making Dense Security Data Easier To Read.",
  zhealthy: "One Brand System Across Every Touchpoint.",
  itrust: "Quiet Tools For Precise Technical Work.",
};

const archiveCaseStudyTitles: Record<string, string> = {
  furnitect: "Shaping A Furniture Journey From Room To Checkout.",
  "custom-shell-daemon": "A Terminal Project With Real Systems Weight.",
  "hotel-booking-website": "Making Hotel Search Feel Faster And Clearer.",
  meetpro: "A Meeting Flow Designed Around Less Friction.",
  vibecheck: "A Social Product With A Sharper Visual Pulse.",
  irisapp: "Turning Machine Learning Into A Readable Interface.",
  "network-security-ai": "Making Security Signals Visible At A Glance.",
  planq: "A Planning Tool Built Around Cleaner Decisions.",
  "project-93": "A Small Game With A Stronger Sense Of Character.",
  dishcover: "A Food Discovery Flow With More Appetite.",
  "ascenda-hotel": "A Booking Experience With More Visual Confidence.",
  notpong: "A Familiar Game Rebuilt With A Twist.",
  "sora-landing-page": "A Landing Page Focused On First Impressions.",
  "sftp-network-security": "A Network Tool Framed Around Control.",
  "text-based-rpg": "A Tiny RPG Carried By Interaction And Tone.",
};

function ExperienceProjectPage({ project }: { project: ProjectItem }) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <PageShell>
      <main className="mx-auto w-full max-w-[110rem] px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <section className="flex min-h-[auto] flex-col justify-between gap-10 pt-2 sm:min-h-[55svh]">
          <Link
            href="/#experiences"
            className="inline-flex items-center gap-2 font-medium text-[var(--color-muted)] transition-opacity duration-200 ease-out hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,29rem)] lg:items-end lg:gap-10">
            <h1 className="mb-3 max-w-[10ch] font-display text-[clamp(3rem,17vw,9rem)] font-bold leading-[0.88] tracking-[-0.075em] text-[var(--color-ink)] sm:tracking-[-0.09em]">
              {withTrailingPeriod(project.title)}
            </h1>
            <p className="max-w-[21rem] text-[1rem] font-bold leading-8 text-[var(--color-muted)] sm:max-w-[29rem] sm:text-[1.03rem]">
              {project.heroSummary}
            </p>
          </div>

          <div className="grid gap-8 pt-6 sm:grid-cols-2 xl:grid-cols-4 xl:items-end xl:justify-between">
            <DetailMeta label="Type" value={project.label} />
            <DetailMeta label="Role" value={project.role} />
            <DetailMeta label="Skills" value={project.stack.slice(0, 2).join(", ")} />
            <DetailMeta label="Year" value={project.year} />
          </div>
        </section>

        <section className="pt-4">
          <div className="overflow-hidden">
            <div className="aspect-[1.55/1]">
              <ProjectVisual project={project} />
            </div>
          </div>
        </section>

        <div className="pt-14 sm:pt-24">
          <NarrativeLead
            eyebrow="Case Study"
            title={experienceCaseStudyTitles[project.slug]}
            meta={[
              {
                label: "Focus",
                value: "Hierarchy, usability, and decision-ready interface design.",
              },
              {
                label: "Medium",
                value: "Product UI translated from Figma into production frontend.",
              },
              { label: "Context", value: project.label },
            ]}
          >
            <p>{project.description}</p>
            <p>{project.detailIntro}</p>
          </NarrativeLead>

          <ContentBlock title="challenge">
            <p>{project.challenge}</p>
          </ContentBlock>

          <ContentBlock title="approach">
            {project.approach.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </ContentBlock>

          <ContentBlock title="impact">
            {project.impact.map((item) => (
              <p key={item}>{item}</p>
            ))}
            {project.confidentialityNote ? <p>{project.confidentialityNote}</p> : null}
          </ContentBlock>
        </div>

        <section className="mt-20 border-t border-black/8 pt-8 sm:mt-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div className="space-y-2">
              <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Previous
              </p>
              <Link
                href={`/projects/${previousProject.slug}`}
                className="inline-flex items-center gap-2 text-[clamp(1.6rem,2.8vw,2.8rem)] leading-[0.94] tracking-[-0.05em] text-[var(--color-ink)] transition-opacity duration-200 ease-out hover:opacity-70"
              >
                <ArrowLeft className="h-4 w-4 text-[var(--color-accent)]" />
                {previousProject.title}
              </Link>
            </div>

            <div className="space-y-2 lg:text-right">
              <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Next
              </p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-[clamp(1.6rem,2.8vw,2.8rem)] leading-[0.94] tracking-[-0.05em] text-[var(--color-ink)] transition-opacity duration-200 ease-out hover:opacity-70 lg:ml-auto"
              >
                {nextProject.title}
                <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)]" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function ArchiveProjectHeroImage({ project }: { project: ArchiveProjectItem }) {
  const projectImage = archiveProjectImages[project.slug];

  if (!projectImage) {
    return (
      <div className="relative aspect-[1.48/1] overflow-hidden bg-[linear-gradient(180deg,rgba(124,58,237,0.18),rgba(76,29,149,0.12)_55%,rgba(20,9,36,0.05))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(192,132,252,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.18),transparent_42%)]" />
      </div>
    );
  }

  const isPortrait = projectImage.height > projectImage.width;
  const hasWhiteFrame = whiteFrameArchiveProjects.has(project.slug);
  const shouldContainImage = containArchiveProjects.has(project.slug);

  return (
    <div className={`relative overflow-hidden bg-black/[0.03] p-3 sm:p-4 ${isPortrait ? "mx-auto max-w-[42rem]" : ""}`}>
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${projectImage.width} / ${projectImage.height}` }}
      >
        {hasWhiteFrame ? (
          <div className="absolute inset-0 bg-[#f7f6f2]">
            <div className="absolute inset-5">
              <Image
                src={projectImage}
                alt={`${project.title} project image`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </div>
        ) : (
          <Image
            src={projectImage}
            alt={`${project.title} project image`}
            fill
            className={shouldContainImage ? "object-contain" : "object-cover object-top"}
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        )}
      </div>
    </div>
  );
}

function ArchiveProjectPage({ project }: { project: ArchiveProjectItem }) {
  const projectIndex = visibleArchiveProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const previousProject =
    visibleArchiveProjects[
      (projectIndex - 1 + visibleArchiveProjects.length) %
        visibleArchiveProjects.length
    ];
  const nextProject =
    visibleArchiveProjects[(projectIndex + 1) % visibleArchiveProjects.length];

  return (
    <PageShell>
      <main className="mx-auto w-full max-w-[110rem] px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
        <section className="flex min-h-[auto] flex-col justify-between gap-10 pt-2 sm:min-h-[68svh] sm:gap-14">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-medium text-[var(--color-muted)] transition-opacity duration-200 ease-out hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,29rem)] lg:items-end lg:gap-10">
            <h1 className="max-w-[11ch] font-display text-[clamp(3rem,16vw,9rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-[var(--color-ink)] sm:tracking-[-0.09em]">
              {withTrailingPeriod(project.title)}
            </h1>
            <p className="max-w-[21rem] text-[1rem] leading-8 text-[var(--color-soft)] sm:max-w-[29rem] sm:text-[1.03rem]">
              {project.heroSummary}
            </p>
          </div>

          <div className="grid gap-8 border-t border-black/8 pt-6 sm:grid-cols-2 xl:grid-cols-4 xl:items-end xl:justify-between">
            <DetailMeta
              label="Project"
              value={project.kind}
            />
            <DetailMeta
              label="View"
              value={
                project.sourceHref ? (
                  <Link
                    href={project.sourceHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--color-ink)] transition-opacity duration-200 ease-out hover:opacity-70"
                  >
                    {getSourceLinkLabel(project)}
                    <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)]" />
                  </Link>
                ) : (
                  "Archive"
                )
              }
            />
            <DetailMeta label="Services" value={project.stack.slice(0, 2).join(", ")} />
            <DetailMeta label="Year" value={project.year} />
          </div>
        </section>

        <section className="pt-4">
          <ArchiveProjectHeroImage project={project} />
        </section>

        <div className="pt-14 sm:pt-24">
          <NarrativeLead
            eyebrow="Case Study"
            title={archiveCaseStudyTitles[project.slug] ?? "A Smaller Build With A Clear Point Of View."}
            meta={[
              {
                label: "Focus",
                value: "Execution, clarity, and a distilled expression of the product idea.",
              },
              {
                label: "Medium",
                value: "Smaller-scope interface work shaped through layout, interaction, or system thinking.",
              },
              {
                label: "Context",
                value: project.kind,
              },
            ]}
          >
            <p>{project.description}</p>
            <p>{project.detailIntro}</p>
          </NarrativeLead>

          <ContentBlock title="challenge">
            <p>{project.challenge}</p>
          </ContentBlock>

          <ContentBlock title="approach">
            {project.approach.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </ContentBlock>

          <ContentBlock title="outcome">
            {project.outcomes.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </ContentBlock>
        </div>

        <section className="mt-20 border-t border-black/8 pt-8 sm:mt-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div className="space-y-2">
              <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Previous
              </p>
              <Link
                href={`/projects/${previousProject.slug}`}
                className="inline-flex items-center gap-2 text-[clamp(1.6rem,2.8vw,2.8rem)] leading-[0.94] tracking-[-0.05em] text-[var(--color-ink)] transition-opacity duration-200 ease-out hover:opacity-70"
              >
                <ArrowLeft className="h-4 w-4 text-[var(--color-accent)]" />
                {previousProject.title}
              </Link>
            </div>

            <div className="space-y-2 lg:text-right">
              <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Next
              </p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 text-[clamp(1.6rem,2.8vw,2.8rem)] leading-[0.94] tracking-[-0.05em] text-[var(--color-ink)] transition-opacity duration-200 ease-out hover:opacity-70 lg:ml-auto"
              >
                {nextProject.title}
                <ArrowUpRight className="h-4 w-4 text-[var(--color-accent)]" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}

function getArchiveProjectBySlug(slug: string) {
  return visibleArchiveProjects.find((project) => project.slug === slug);
}
