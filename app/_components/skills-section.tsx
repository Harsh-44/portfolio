import { SectionShell } from "@/app/_components/section-shell";

type SkillIconCard = {
  name: string;
  icon: React.ReactNode;
};

const iconClassName =
  "flex h-18 w-18 items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/3 text-[var(--color-cream)]";

const skills: SkillIconCard[] = [
  {
    name: "Figma",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="8" y="4" width="10" height="10" rx="5" fill="#A259FF" />
        <rect x="18" y="4" width="10" height="10" rx="5" fill="#F3F0EA" />
        <rect x="8" y="14" width="10" height="10" rx="5" fill="#F3F0EA" />
        <circle cx="23" cy="19" r="5" fill="#8B5CF6" />
        <rect x="8" y="24" width="10" height="10" rx="5" fill="#8B5CF6" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <ellipse cx="18" cy="18" rx="13" ry="5.5" stroke="#A78BFA" strokeWidth="2" />
        <ellipse
          cx="18"
          cy="18"
          rx="13"
          ry="5.5"
          transform="rotate(60 18 18)"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <ellipse
          cx="18"
          cy="18"
          rx="13"
          ry="5.5"
          transform="rotate(120 18 18)"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <circle cx="18" cy="18" r="3" fill="#F3F0EA" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="15" stroke="#F3F0EA" strokeWidth="2" />
        <path
          d="M12 24V12L24 24V12"
          stroke="#A78BFA"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="26" height="26" rx="5" fill="#8B5CF6" />
        <path d="M11 13H21" stroke="#F3F0EA" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M16 13V23" stroke="#F3F0EA" strokeWidth="2.6" strokeLinecap="round" />
        <path
          d="M22.5 18.5C23.2 17.7 24 17.3 25.1 17.3C26.5 17.3 27.4 18 27.4 19.1C27.4 20.1 26.8 20.6 25.3 21.1C23.8 21.6 23.1 22.2 23.1 23.4C23.1 24.6 24.1 25.5 25.7 25.5C26.8 25.5 27.7 25.1 28.4 24.3"
          stroke="#F3F0EA"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M10 15.5C11.6 12.7 13.9 11.3 17 11.3C21.6 11.3 22.2 15 24.7 15C26.3 15 27.6 14.2 28.5 12.5C26.9 15.3 24.6 16.7 21.5 16.7C16.9 16.7 16.3 13 13.8 13C12.2 13 10.9 13.8 10 15.5Z" fill="#A78BFA" />
        <path d="M7.5 23.5C9.1 20.7 11.4 19.3 14.5 19.3C19.1 19.3 19.7 23 22.2 23C23.8 23 25.1 22.2 26 20.5C24.4 23.3 22.1 24.7 19 24.7C14.4 24.7 13.8 21 11.3 21C9.7 21 8.4 21.8 7.5 23.5Z" fill="#F3F0EA" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M10 27L18 6L26 27L18 31L10 27Z" fill="#8B5CF6" />
        <path d="M14 18L18 6L22 18L18 31L14 18Z" fill="#F3F0EA" fillOpacity="0.85" />
      </svg>
    ),
  },
];

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      index="04"
      title="Tools"
      description="A quick icon-based scan of the tools I use most often."
    >
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="surface-panel flex flex-col items-center gap-4 rounded-[1.1rem] p-5 text-center"
          >
            <div className={iconClassName}>{skill.icon}</div>
            <p className="text-sm font-medium text-[var(--color-soft)]">
              {skill.name}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
