import { AchievementsSection } from "@/app/_components/achievements-section";
import { ArchiveProjectsSection } from "@/app/_components/archive-projects-section";
import { AboutSection } from "@/app/_components/about-section";
import { Hero } from "@/app/_components/hero";
import { ProjectsSection } from "@/app/_components/projects-section";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { SkillsSection } from "@/app/_components/skills-section";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-black">
      <div className="sticky top-0 h-svh">
        <SiteFooter />
      </div>

      <div className="relative z-10 -mt-[100svh]">
        <div className="bg-[var(--color-canvas)]">
          <SiteHeader />
          <main className="mx-auto flex min-h-screen w-full max-w-[110rem] flex-col px-4 pb-20 pt-4 sm:px-6 lg:px-8">
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <ArchiveProjectsSection />
            <AchievementsSection />
            <SkillsSection />
          </main>
        </div>

        <div id="contact" aria-hidden="true" className="h-svh" />
      </div>
    </div>
  );
}
