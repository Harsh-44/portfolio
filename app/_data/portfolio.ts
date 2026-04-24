export type ExperienceItem = {
  company: string;
  context: string;
  title: string;
  period: string;
  summary: string;
  impact: string[];
  tags: string[];
};

export type ProjectItem = {
  slug: "seatrium" | "zhealthy" | "itrust";
  title: string;
  year: string;
  label: string;
  description: string;
  role: string;
  outcomes: string[];
  stack: string[];
  detailIntro: string;
  challenge: string;
  approach: string[];
  impact: string[];
  confidentialityNote?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ArchiveProjectItem = {
  title: string;
  kind: "Course" | "Hackathon" | "Template" | "Learning" | "Side Project";
  year: string;
  description: string;
  stack: string[];
  sourceLabel?: string;
  sourceHref?: string;
};

export type AchievementItem = {
  title: string;
  result: string;
  context: string;
  description: string;
};

export type CreativePracticeItem = {
  title: string;
  tools: string;
  description: string;
};

export const profile = {
  name: "Harsh Hareendran Kallinkeel",
  title: "Frontend Engineer & UI/UX Designer",
  intro:
    "I design thoughtful digital products and build them into production-ready interfaces with the same level of care they had in Figma.",
  location: "Singapore",
  subtitle:
    "SUTD graduate focused on UI systems, polished frontend architecture, and product experiences that feel clear, fast, and intentional on every screen.",
  availability:
    "Open to frontend engineering, product design, and UI/UX-focused internship or early-career roles.",
};

export const heroMetrics = [
  {
    value: "3",
    label: "Applied product environments",
    note: "capstone, startup, research",
  },
  {
    value: "E2E",
    label: "Workflow ownership",
    note: "research to shipped UI",
  },
  {
    value: "Pixel",
    label: "Implementation standard",
    note: "design intent preserved in code",
  },
] as const;

export const strengths = [
  "UI/UX design with strong systems thinking",
  "React, Next.js, TypeScript, and Tailwind CSS",
  "Design-to-code execution with pixel-perfect detail",
  "Responsive interfaces built for real product constraints",
  "Clean, scalable frontend architecture",
] as const;

export const experiences: ExperienceItem[] = [
  {
    company: "Seatrium",
    context: "Industry Capstone",
    title: "UI/UX Lead & Frontend Lead",
    period: "Cybersecurity dashboard",
    summary:
      "Led the product and frontend direction for a cybersecurity dashboard that had to make dense operational data feel usable, structured, and decision-ready.",
    impact: [
      "Designed information architecture around threat models, assets, and monitoring workflows.",
      "Took the product from research and Figma explorations into a React, TypeScript, and Tailwind implementation.",
      "Balanced visual clarity with technical complexity so the dashboard stayed legible under real-world data density.",
    ],
    tags: ["Research", "Figma", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    company: "Z Healthy Foods",
    context: "Startup",
    title: "Product Designer & Frontend Builder",
    period: "Retail and digital touchpoints",
    summary:
      "Worked across brand, product, and implementation to shape a consistent customer experience from kiosk flows to marketing surfaces.",
    impact: [
      "Designed kiosk UI, POS flows, and mobile app experiences with a practical product lens.",
      "Built the website and broader digital presence, aligning interface design with the brand system.",
      "Gained hands-on startup experience designing for speed, clarity, and business constraints.",
    ],
    tags: ["Branding", "Kiosk UI", "POS", "Mobile UX", "Frontend"],
  },
  {
    company: "iTrust Research Centre",
    context: "SUTD",
    title: "GUI Tool Builder",
    period: "Research usability tooling",
    summary:
      "Built internal Python interfaces for research workflows, focusing on usability in environments where clarity and efficiency matter more than ornament.",
    impact: [
      "Designed GUI tools in Python with Tkinter for researchers working with operational and technical tasks.",
      "Improved usability in specialist environments by reducing friction in repetitive flows.",
      "Strengthened my product instincts around edge cases, constraints, and user trust.",
    ],
    tags: ["Python", "Tkinter", "Usability", "Research Tools"],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "seatrium",
    title: "Shield360",
    year: "2026",
    label: "Industry Capstone Project",
    description:
      "A cybersecurity data-dense monitoring dashboard designed to help users understand threats, assets, and security posture without getting lost in complexity.",
    role: "Owned UI/UX direction and frontend implementation.",
    outcomes: [
      "Turned dense cybersecurity information into a calmer, scannable interface.",
      "Built reusable UI patterns that kept the dashboard consistent across views.",
      "Connected research, visual hierarchy, and code quality into one end-to-end workflow.",
    ],
    stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    detailIntro:
      "Shield360 was built to make operational cybersecurity information feel navigable instead of overwhelming. The work focused on building clarity into a technically dense environment without flattening the complexity that users actually needed to act on.",
    challenge:
      "The core problem was density. Threat models, assets, and monitoring signals had to live in the same system, but the interface still needed to stay calm enough for people to scan, compare, and decide quickly.",
    approach: [
      "Mapped the information architecture around the way users reason about threats, assets, and monitoring workflows.",
      "Designed the visual system in Figma with reusable patterns that could survive real data variation.",
      "Translated the design into a React, TypeScript, and Tailwind codebase with the same emphasis on hierarchy and consistency.",
    ],
    impact: [
      "Created a clearer decision-making surface for complex cybersecurity information.",
      "Established reusable UI patterns that reduced visual noise across views.",
      "Carried the work from research to shipped frontend with design intent preserved in code.",
    ],
  },
  {
    slug: "zhealthy",
    title: "ZHealthyFoods",
    year: "2024",
    label: "Startup Company Internship",
    description:
      "A multi-surface product system covering kiosk, POS, mobile, branding, and web experiences for a health-focused food startup.",
    role: "Designed core customer touchpoints and built the website.",
    outcomes: [
      "Created a unified visual language across physical and digital product surfaces.",
      "Designed interfaces that balanced clarity, speed, and brand friendliness.",
      "Translated real business needs into practical product decisions.",
    ],
    stack: ["UI/UX Design", "Frontend", "Branding", "Responsive Design"],
    detailIntro:
      "Z Healthy Foods was a broader product and brand exercise, spanning customer-facing touchpoints across kiosk, POS, mobile, and web. The work demanded consistency across very different interaction environments.",
    challenge:
      "The challenge was not just designing one interface well, but making an entire customer-facing system feel cohesive while still adapting to different screens, contexts, and business needs.",
    approach: [
      "Designed kiosk, POS, and mobile touchpoints with a focus on straightforward flows and friendly brand expression.",
      "Built the website and digital presence so the implementation matched the same design language.",
      "Balanced brand, usability, and speed of execution in a real startup setting.",
    ],
    impact: [
      "Unified multiple physical and digital touchpoints under one visual direction.",
      "Built a clearer, more usable customer journey across different product surfaces.",
      "Strengthened the connection between brand thinking, UX, and production-ready frontend work.",
    ],
  },
  {
    slug: "itrust",
    title: "PAS System",
    year: "2024",
    label: "Part-time Internship",
    description:
      "Internal GUI tools for research environments where precision, speed, and trust in the interface are critical.",
    role: "Built the interfaces and refined them for practical day-to-day use.",
    outcomes: [
      "Focused on usable workflows rather than just technical functionality.",
      "Simplified repetitive research tasks through clearer interaction design.",
      "Applied product thinking inside a specialist technical context.",
    ],
    stack: ["Python", "Tkinter", "UX Thinking", "Interaction Design"],
    detailIntro:
      "This work involved internal interface tooling for research environments where trust, efficiency, and practical usability mattered more than surface-level polish. The emphasis was on dependable day-to-day use.",
    challenge:
      "Because the system was internal and specialist, the real challenge was reducing friction in repeated operational tasks while keeping the interface precise and trustworthy for technical users.",
    approach: [
      "Designed and built internal Python interfaces with Tkinter for research workflows.",
      "Refined the usability of repeated tasks so the tools felt faster and more dependable in practice.",
      "Applied product thinking inside a highly contextual environment where edge cases mattered.",
    ],
    impact: [
      "Made internal workflows easier to navigate and less repetitive to execute.",
      "Improved day-to-day usability in a technical research context.",
      "Reinforced my approach to designing for clarity, trust, and operational precision.",
    ],
    confidentialityNote:
      "Screens and interaction details are not publicly shareable due to confidentiality constraints, so this case study focuses on context, role, and outcomes.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Frontend Architecture",
    ],
  },
  {
    title: "Design & Product",
    items: [
      "UI/UX Design",
      "Figma",
      "Design Systems",
      "User Flows",
      "Information Architecture",
      "Interaction Design",
    ],
  },
  {
    title: "Adjacent Strengths",
    items: [
      "Python",
      "NumPy",
      "Pandas",
      "Keras",
      "Firebase",
      "Node.js",
      "Databases",
      "Cybersecurity Context",
    ],
  },
];

export const archiveProjects: ArchiveProjectItem[] = [
  {
    title: "Dishcover",
    kind: "Course",
    year: "2024",
    description:
      "Android mobile app developed as a final second-year group project, focused on product clarity and usable mobile flows.",
    stack: ["Android Studio", "Java", "Mobile UX"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/Dishcover",
  },
  {
    title: "C5G5 Ascenda",
    kind: "Course",
    year: "2024",
    description:
      "SUTD 50.003 group repository exploring a broader product build with collaborative implementation and frontend problem-solving.",
    stack: ["JavaScript", "Group Project", "Frontend"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/100sonly/C5G5Ascenda",
  },
  {
    title: "SaaS Landing Page",
    kind: "Learning",
    year: "2025",
    description:
      "AI video editing landing page built while learning and sharpening Next.js, Tailwind, and modern frontend layout patterns.",
    stack: ["Vite", "React", "Tailwind CSS"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/SaaS-Landing-Page",
  },
  {
    title: "NotPong",
    kind: "Side Project",
    year: "2024",
    description:
      "A Python and pygame twist on Pong used to explore gameplay logic, interaction feedback, and responsive game-state systems.",
    stack: ["Python", "pygame", "Game Logic"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/NotPong",
  },
  {
    title: "Hackathon Build",
    kind: "Hackathon",
    year: "2025",
    description:
      "Fast-turnaround hackathon concept built under tight constraints, with the focus on shipping a complete interaction idea quickly.",
    stack: ["Rapid Prototyping", "UI/UX", "Frontend"],
  },
  {
    title: "Figma Template 01",
    kind: "Template",
    year: "2025",
    description:
      "Design template built for reusability, hierarchy, and visual polish, intended as a ready-to-adapt interface starting point.",
    stack: ["Figma", "Design Systems", "Template Design"],
  },
  {
    title: "Figma Template 02",
    kind: "Template",
    year: "2025",
    description:
      "A second reusable Figma system focused on cleaner component thinking, layout rhythm, and presentation-ready UI.",
    stack: ["Figma", "Components", "UI Systems"],
  },
  {
    title: "Framer Template",
    kind: "Template",
    year: "2025",
    description:
      "Website template created in Framer with attention to pacing, visual storytelling, and polished interaction behavior.",
    stack: ["Framer", "Motion", "Visual Design"],
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "System Security CTF",
    result: "Second Prize",
    context: "Awarded as the second group to complete the CTF challenge.",
    description:
      "Recognized for solving the system security challenge quickly and effectively as part of a group effort.",
  },
  {
    title: "DSO CTF",
    result: "Prize Winner",
    context: "Awarded for completing the DSO CTF challenge.",
    description:
      "Demonstrated applied security problem-solving under time pressure in a competitive challenge environment.",
  },
  {
    title: "Tarang Arts Competition 2026",
    result: "Winner",
    context: "Won as part of the SUTD band against teams from NTU, NUS, SMU, and LASALLE.",
    description:
      "Performed as lead vocalist in a university band that went on to win the competition in a multi-school arts and sports festival.",
  },
];

export const creativePractices: CreativePracticeItem[] = [
  {
    title: "Live Performance & Vocals",
    tools: "Band / Live Performance / Karaoke",
    description:
      "Lead vocalist in a university band, with multiple live performances and a growing performance practice beyond formal competitions.",
  },
  {
    title: "Chinese Lyrical Arts Cover",
    tools: "BandLab / YouTube",
    description:
      "Produced and published a Chinese song cover for a lyrical arts course using more deliberate vocal recording and music production techniques.",
  },
  {
    title: "Photography & Image Making",
    tools: "Lightroom / Photo Editing",
    description:
      "Interested in framing, mood, and post-processing, with photography and editing as a parallel visual practice outside interface design.",
  },
  {
    title: "Video Editing & Motion",
    tools: "Editing / Storytelling",
    description:
      "Exploring pacing, cuts, and visual storytelling through video editing as another way of thinking about rhythm and presentation.",
  },
  {
    title: "Modelling & Camera Presence",
    tools: "Presentation / Performance",
    description:
      "Interested in presentation, visual identity, and the performance side of image-making in front of the camera as well as behind it.",
  },
  {
    title: "Gaming & Systems Literacy",
    tools: "Play / Analysis",
    description:
      "Strong interest in games as systems, interfaces, and feedback loops, which connects naturally to the way I think about product interaction.",
  },
];
