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
  label: string;
  description: string;
  role: string;
  outcomes: string[];
  stack: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Harsh Hareendran Kallinkeel",
  title: "Frontend Engineer & UI/UX Designer",
  intro:
    "I design thoughtful digital products and build them into production-ready interfaces with the same level of care they had in Figma.",
  location: "Singapore",
  subtitle:
    "SUTD student focused on UI systems, polished frontend architecture, and product experiences that feel clear, fast, and intentional on every screen.",
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
    title: "Cybersecurity Control Tower",
    label: "Capstone Project",
    description:
      "A data-dense monitoring dashboard designed to help users understand threats, assets, and security posture without getting lost in complexity.",
    role: "Owned UI/UX direction and frontend implementation.",
    outcomes: [
      "Turned dense cybersecurity information into a calmer, scannable interface.",
      "Built reusable UI patterns that kept the dashboard consistent across views.",
      "Connected research, visual hierarchy, and code quality into one end-to-end workflow.",
    ],
    stack: ["Figma", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "zhealthy",
    title: "Z Healthy Foods Digital Ecosystem",
    label: "Startup Product Work",
    description:
      "A multi-surface product system covering kiosk, POS, mobile, branding, and web experiences for a health-focused food startup.",
    role: "Designed core customer touchpoints and built the website.",
    outcomes: [
      "Created a unified visual language across physical and digital product surfaces.",
      "Designed interfaces that balanced clarity, speed, and brand friendliness.",
      "Translated real business needs into practical product decisions.",
    ],
    stack: ["UI/UX Design", "Frontend", "Branding", "Responsive Design"],
  },
  {
    slug: "itrust",
    title: "Research Workflow Interfaces",
    label: "Usability-Focused Tooling",
    description:
      "Internal GUI tools for research environments where precision, speed, and trust in the interface are critical.",
    role: "Built the interfaces and refined them for practical day-to-day use.",
    outcomes: [
      "Focused on usable workflows rather than just technical functionality.",
      "Simplified repetitive research tasks through clearer interaction design.",
      "Applied product thinking inside a specialist technical context.",
    ],
    stack: ["Python", "Tkinter", "UX Thinking", "Interaction Design"],
  },
];

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
