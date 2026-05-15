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
  heroSummary: string;
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
  slug: string;
  title: string;
  kind: "Course Project" | "Hackathon" | "Template" | "Learning" | "Side Project";
  year: string;
  description: string;
  heroSummary: string;
  stack: string[];
  sourceLabel?: string;
  sourceHref?: string;
  hidden?: boolean;
  detailIntro: string;
  challenge: string;
  approach: string[];
  outcomes: string[];
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
    heroSummary:
      "Cybersecurity dashboard focused on turning dense monitoring data into clearer operational decisions.",
    role: "UI/UX Lead and Frontend Engineer.",
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
    heroSummary:
      "Startup product work spanning kiosk, POS, mobile, branding, and a production-facing website.",
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
    heroSummary:
      "Internal research tooling designed around precision, clarity, and dependable day-to-day usability.",
    role: "Frontend Engineer",
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
  {
    title: "Soft Skills",
    items: [
      "Curiosity",
      "Adaptability",
      "Systems Thinking",
      "Communication",
      "Cross Functional Collaboration",
      "Detail Orientation",
    ],
  },
];

export const archiveProjects: ArchiveProjectItem[] = [
  {
    slug: "planq",
    title: "PlanQ",
    kind: "Course Project",
    year: "2025",
    description:
      "Planning app concept focused on clean task structure, interface clarity, and practical mobile-friendly interaction flows.",
    heroSummary:
      "Planning app concept built around calmer scheduling flows and a cleaner mobile task structure.",
    stack: ["UI Design", "Product Thinking", "App Design"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/PlanQ",
    detailIntro:
      "PlanQ was approached as a planning product that needed to feel calm and useful before it felt feature-heavy. The focus was on giving tasks, schedules, and reminders a clearer visual rhythm.",
    challenge:
      "The main challenge was reducing planning friction. The interface needed to hold calendar structure, task detail, and progress cues without feeling cluttered or intimidating.",
    approach: [
      "Mapped the product around simple planning moments like adding, viewing, and rescheduling tasks.",
      "Used a cleaner UI language with strong spacing and hierarchy so the product felt lightweight rather than crowded.",
      "Focused on a mobile-friendly structure that could scale into a fuller productivity system later.",
    ],
    outcomes: [
      "Created a calmer foundation for a planning app concept.",
      "Established a clearer information structure around tasks and scheduling.",
      "Strengthened the product direction through interface-focused iteration.",
    ],
  },
  {
    slug: "dishcover",
    title: "Dishcover",
    kind: "Course Project",
    year: "2024",
    description:
      "Android mobile app developed as a final second-year group project, focused on product clarity and usable mobile flows.",
    heroSummary:
      "Android food discovery app shaped around clearer browsing, selection, and mobile-first product flow.",
    stack: ["Android Studio", "Java", "Mobile UX"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/Dishcover",
    detailIntro:
      "Dishcover was built as a course project with a clear product focus: helping users discover food options through a cleaner mobile browsing experience.",
    challenge:
      "The challenge was making discovery feel engaging without making the app busy. Search, browsing, and restaurant exploration all had to feel straightforward on smaller screens.",
    approach: [
      "Structured the mobile flows around discovery, selection, and action rather than cramming too much into the first screen.",
      "Used visual hierarchy and familiar interaction patterns to keep the app immediately understandable.",
      "Balanced product thinking with the constraints of a student-built Android implementation.",
    ],
    outcomes: [
      "Produced a clearer and more usable food discovery concept.",
      "Improved confidence in mobile information hierarchy and flow design.",
      "Connected product intent with practical Java/Android implementation.",
    ],
  },
  {
    slug: "ascenda-hotel",
    title: "Ascenda Hotel",
    kind: "Course Project",
    year: "2024",
    description:
      "SUTD 50.003 group repository exploring a broader product build with collaborative implementation and frontend problem-solving.",
    heroSummary:
      "Hospitality-style product build exploring booking clarity, frontend collaboration, and interface polish.",
    stack: ["JavaScript", "Group Project", "Frontend"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/100sonly/C5G5Ascenda",
    detailIntro:
      "Ascenda Hotel was treated as a hospitality-style interface exercise, with emphasis on cleaner booking journeys and a polished first impression.",
    challenge:
      "Hospitality interfaces tend to carry a lot of information at once. The goal was to make availability, room choices, and decision-making feel more refined and less overwhelming.",
    approach: [
      "Framed the screens around booking confidence, visual clarity, and a more premium sense of browsing.",
      "Used stronger spacing and content grouping to separate search, room detail, and supporting information.",
      "Worked within a group implementation context while maintaining a cohesive frontend direction.",
    ],
    outcomes: [
      "Created a stronger hospitality-focused product feel.",
      "Improved clarity across a more content-heavy booking interface.",
      "Built experience in balancing collaboration with interface consistency.",
    ],
  },
  {
    slug: "sora-landing-page",
    title: "Sora Landing Page",
    kind: "Learning",
    year: "2025",
    description:
      "AI video editing landing page built while learning and sharpening Next.js, Tailwind, and modern frontend layout patterns.",
    heroSummary:
      "Marketing landing page study focused on layout rhythm, responsive polish, and product-led presentation.",
    stack: ["Vite", "React", "Tailwind CSS"],
    sourceLabel: "GitHub",
    sourceHref: "https://harsh-44.github.io/SaaS-Landing-Page/",
    detailIntro:
      "Sora Landing Page was a learning build used to sharpen modern marketing-page execution through composition, pacing, and section transitions.",
    challenge:
      "The core challenge was making a product-led landing page feel polished enough to read as a real brand surface rather than a tutorial result.",
    approach: [
      "Focused on strong section rhythm, generous spacing, and cleaner conversion hierarchy.",
      "Used the project as a way to practice frontend polish with responsive behavior and layout precision.",
      "Refined the visual flow to make the page feel more product-facing and presentable.",
    ],
    outcomes: [
      "Strengthened frontend implementation polish on marketing surfaces.",
      "Improved section hierarchy and pacing in landing-page work.",
      "Turned a learning project into a more portfolio-ready artifact.",
    ],
  },
  {
    slug: "notpong",
    title: "NotPong",
    kind: "Side Project",
    year: "2024",
    description:
      "A Python and pygame twist on Pong used to explore gameplay logic, interaction feedback, and responsive game-state systems.",
    heroSummary:
      "Playful Pong variation used to explore interaction feel, game logic, and responsive feedback loops.",
    stack: ["Python", "pygame", "Game Logic"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/NotPong",
    detailIntro:
      "NotPong was a playful game project used to explore how simple mechanics can still benefit from careful timing, feedback, and interaction tuning.",
    challenge:
      "Even with a familiar game format, the experience depends on feel. The challenge was making collisions, pacing, and user control read clearly and feel responsive.",
    approach: [
      "Built the core loop around movement, collision logic, and score feedback.",
      "Used pygame to iterate quickly on interaction feel and state updates.",
      "Treated the interface and moment-to-moment responsiveness as part of the design problem, not just the code problem.",
    ],
    outcomes: [
      "Improved understanding of interaction feel in game systems.",
      "Built confidence in state-driven gameplay logic.",
      "Created a small but memorable side project with a clear personality.",
    ],
  },
  {
    slug: "furnitect",
    title: "Furnitect",
    kind: "Hackathon",
    year: "2026",
    description:
      "Hackathon project where I designed the UI for the interface, focusing on clarity, speed, and a presentation-ready product surface under time pressure.",
    heroSummary:
      "Hackathon UI designed for speed, clarity, and a strong demo-ready product impression.",
    stack: ["UI/UX Design", "Hackathon", "Interface Design"],
    sourceLabel: "Hugging Face",
    sourceHref:
      "https://huggingface.co/spaces/RainbowUniCat/Furniture_Newest/tree/main",
    detailIntro:
      "Furnitect was built in a hackathon setting, which meant the interface had to communicate the idea quickly while still feeling coherent enough for judging and demo.",
    challenge:
      "The challenge was time pressure. The product needed to look believable, support the core idea clearly, and stay visually controlled despite a compressed build cycle.",
    approach: [
      "Designed the UI around the main use case first so the product concept was understandable at a glance.",
      "Kept the interface language cleaner and more focused to support fast team execution.",
      "Prioritized presentation readiness so the project could communicate well in a hackathon context.",
    ],
    outcomes: [
      "Produced a sharper UI direction under tight time constraints.",
      "Made the hackathon concept easier to present and understand.",
      "Reinforced fast decision-making in collaborative product work.",
    ],
  },
  {
    slug: "hotel-booking-website",
    title: "Hotel Booking Website",
    kind: "Template",
    year: "2024",
    description:
      "Design template built for reusability, hierarchy, and visual polish, intended as a ready-to-adapt interface starting point.",
    heroSummary:
      "Reusable hospitality template balancing booking clarity, hierarchy, and a polished starting-point system.",
    stack: ["Figma", "Design Systems", "Template Design"],
    sourceLabel: "Figma",
    sourceHref:
      "https://www.figma.com/community/file/1429845628830978013/ascenda-hotel-booking-website?q_id=0f21b0ce-2a92-4bb1-ba5f-31664f8ad3fb",
    detailIntro:
      "This template was designed as a reusable hospitality starting point, with the intent of balancing elegance, booking clarity, and straightforward adaptation.",
    challenge:
      "Template work needs to be flexible without becoming generic. The challenge was creating a polished booking interface that could still serve as a base for different brands.",
    approach: [
      "Built the layout around familiar hospitality patterns like search, room discovery, and supporting trust cues.",
      "Focused on reusable sections and a clearer visual system rather than one-off decorative screens.",
      "Used the template to explore how far polish and flexibility can coexist in a starting point file.",
    ],
    outcomes: [
      "Created a more reusable hospitality design system starter.",
      "Improved consistency across sections intended for adaptation.",
      "Strengthened template thinking as a productized design practice.",
    ],
  },
  {
    slug: "meetpro",
    title: "MeetPro",
    kind: "Template",
    year: "2025",
    description:
      "A second reusable Figma system focused on cleaner component thinking, layout rhythm, and presentation-ready UI.",
    heroSummary:
      "Component-led Figma template focused on cleaner systems thinking and stronger presentation rhythm.",
    stack: ["Figma", "Components", "UI Systems"],
    sourceLabel: "Figma",
    sourceHref:
      "https://www.figma.com/community/file/1465764504857113183/saas-video-conferencing-platform-landing-page?q_id=bc26c743-af99-432a-8737-c4322523581a",
    detailIntro:
      "MeetPro was developed as a reusable Figma template with more attention on components, consistency, and a clearer UI rhythm.",
    challenge:
      "The aim was to avoid a template that feels static or one-note. It needed enough structure to be reusable while still feeling deliberate and visually strong.",
    approach: [
      "Organized the design around components and repeatable blocks rather than isolated screens.",
      "Refined spacing, alignment, and text rhythm to make the template presentation-ready.",
      "Used it as an exercise in cleaner systems thinking inside a design-first workflow.",
    ],
    outcomes: [
      "Built a more disciplined component-driven template.",
      "Improved visual rhythm and presentation quality in Figma work.",
      "Expanded a reusable UI library that could support future concepts.",
    ],
  },
  {
    slug: "vibecheck",
    title: "VibeCheck",
    kind: "Template",
    year: "2025",
    description:
      "Website template created in Framer with attention to pacing, visual storytelling, and polished interaction behavior.",
    heroSummary:
      "Framer template built around motion, pacing, and a more editorial sense of website identity.",
    stack: ["Framer", "Motion", "Visual Design"],
    detailIntro:
      "VibeCheck was created as a Framer template with a stronger emphasis on tone, motion, and how a site carries an identity through interaction.",
    challenge:
      "The goal was not just to make a template that looked good in a static frame, but one that felt complete once motion and pacing were added.",
    approach: [
      "Built the template around visual storytelling, page rhythm, and interaction polish.",
      "Used Framer to shape the motion layer as part of the design system instead of an afterthought.",
      "Refined the overall composition so it could feel more premium and more instantly usable.",
    ],
    outcomes: [
      "Created a stronger motion-led template piece.",
      "Improved confidence in designing for Framer as a product medium.",
      "Built a portfolio project that better represents visual pacing and polish.",
    ],
  },
  {
    slug: "irisapp",
    title: "Irisapp",
    kind: "Learning",
    year: "2026",
    description:
      "Streamlit app that predicts iris flower species using an SVM classifier and interactive measurement inputs.",
    heroSummary:
      "Interactive Streamlit app that makes an iris species classifier readable through direct input and output.",
    stack: ["Python", "Streamlit", "Machine Learning"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/irisapp",
    hidden: true,
    detailIntro:
      "Irisapp was a small machine-learning interface project focused on making a simple classifier understandable through direct user input and immediate feedback.",
    challenge:
      "The challenge was translating a classroom-style ML exercise into something that behaved like a usable mini product instead of just notebook code.",
    approach: [
      "Built a Streamlit interface around the model so users could test measurements interactively.",
      "Kept the flow simple: input values, run prediction, and view an interpretable result.",
      "Used the project as a way to connect machine-learning logic with interface presentation.",
    ],
    outcomes: [
      "Turned a basic classifier into a more approachable interactive app.",
      "Improved confidence in presenting ML outputs through UI.",
      "Connected model experimentation to practical product framing.",
    ],
  },
  {
    slug: "project-93",
    title: "Project 93",
    kind: "Learning",
    year: "2026",
    description:
      "Penguin species prediction app comparing SVM, Logistic Regression, and Random Forest models through a Streamlit interface.",
    heroSummary:
      "Machine-learning comparison app showing multiple penguin classifiers through one simple interface.",
    stack: ["Python", "Streamlit", "Model Comparison"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/Project-93",
    hidden: true,
    detailIntro:
      "Project 93 expanded a simple prediction interface into a comparison tool, making it easier to understand how different classifiers perform on the same task.",
    challenge:
      "The project needed to avoid feeling like a raw model demo. The interface had to communicate comparison and output clearly without becoming technical clutter.",
    approach: [
      "Structured the UI around model selection, input control, and result feedback.",
      "Used multiple classifiers to make the app more instructive than a single-model predictor.",
      "Focused on making the comparison legible for someone interacting with the app rather than reading code.",
    ],
    outcomes: [
      "Built a more informative machine-learning demo experience.",
      "Practiced communicating model comparison through interface structure.",
      "Strengthened the bridge between data tooling and front-end presentation.",
    ],
  },
  {
    slug: "network-security-ai",
    title: "Network Security AI",
    kind: "Course Project",
    year: "2026",
    description:
      "Security-focused ML project on malicious network traffic detection using CICIDS2017 and model comparison across DNN, Random Forest, and SVM.",
    heroSummary:
      "Applied security ML study comparing intrusion-detection models on the CICIDS2017 traffic dataset.",
    stack: ["TensorFlow", "CICIDS2017", "Security ML"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/Network-Security-AI",
    detailIntro:
      "This project explored how machine learning could be applied to intrusion detection by working with the CICIDS2017 dataset and comparing multiple models.",
    challenge:
      "The difficulty was not just training models, but organizing the data story clearly enough to make the security relevance understandable and the results interpretable.",
    approach: [
      "Used the CICIDS2017 dataset as the foundation for modeling malicious traffic classes.",
      "Compared multiple models to understand trade-offs in performance and classification behavior.",
      "Framed the outputs around security relevance rather than treating it as a purely abstract ML exercise.",
    ],
    outcomes: [
      "Produced a more grounded security-and-ML case study.",
      "Built familiarity with dataset preparation and classification comparison.",
      "Connected technical modeling work to a clearer applied-security context.",
    ],
  },
  {
    slug: "custom-shell-daemon",
    title: "Custom Shell Daemon",
    kind: "Course Project",
    year: "2025",
    description:
      "Systems programming project implementing shell behavior, built-in commands, process handling, and resource reporting.",
    heroSummary:
      "Custom shell project exploring command parsing, process control, and terminal-facing systems behavior.",
    stack: ["C Programming", "Operating Systems", "CLI"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/CustomShell-Daemon",
    detailIntro:
      "Custom Shell Daemon was built as a systems project centered on process control, command execution, and implementing shell behavior from scratch.",
    challenge:
      "The main challenge was building command-line behavior that felt coherent while handling parsing, built-ins, process spawning, and resource usage details correctly.",
    approach: [
      "Implemented shell input parsing, built-in command handling, and fork/exec behavior.",
      "Worked through execution flow and resource reporting to make the shell more informative.",
      "Treated the project as both a systems exercise and an interface problem inside the terminal.",
    ],
    outcomes: [
      "Built stronger confidence in low-level systems behavior.",
      "Improved understanding of process management and shell execution flow.",
      "Created a terminal project with both technical depth and presentable structure.",
    ],
  },
  {
    slug: "sftp-network-security",
    title: "SFTP Network Security",
    kind: "Course Project",
    year: "2025",
    description:
      "Secure file transfer project focused on network security concepts, system setup, and safer communication practices.",
    heroSummary:
      "Secure transfer project applying network-security concepts to a more practical systems workflow.",
    stack: ["C Programming", "Network Security", "Systems"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/SFTP-Network_Security",
    detailIntro:
      "SFTP Network Security explored secure communication and file transfer from a systems and security perspective, with a stronger focus on protocol thinking than surface-level UI.",
    challenge:
      "The challenge was understanding how security principles translate into implementation choices while still keeping the overall system flow understandable.",
    approach: [
      "Worked through secure transfer concepts, network communication, and system-side behavior.",
      "Used the project as a way to connect theory-heavy security ideas with implementation detail.",
      "Focused on reliability and correctness over decorative presentation.",
    ],
    outcomes: [
      "Improved confidence in applying security concepts within systems projects.",
      "Built a stronger practical understanding of secure transfer workflows.",
      "Expanded low-level technical breadth beyond interface work alone.",
    ],
  },
  {
    slug: "text-based-rpg",
    title: "Text Based RPG",
    kind: "Course Project",
    year: "2025",
    description:
      "A command-driven RPG exploring narrative flow, branching interaction, and game-state logic.",
    heroSummary:
      "Terminal RPG built around branching interaction, narrative pacing, and event-driven game logic.",
    stack: ["C Programming", "Game Logic", "Interaction Design"],
    sourceLabel: "GitHub",
    sourceHref: "https://github.com/Harsh-44/Text-based-RPG",
    detailIntro:
      "Text Based RPG was an experiment in interactive storytelling through code, using command-driven mechanics and branching flow instead of visual-heavy game systems.",
    challenge:
      "The interesting part was making a text-only experience still feel structured, readable, and responsive enough to keep the player engaged.",
    approach: [
      "Organized the game around state changes, player input, and branching outcomes.",
      "Treated pacing and clarity of feedback as part of the experience design.",
      "Used the terminal format as a constraint that sharpened logic and narrative flow.",
    ],
    outcomes: [
      "Strengthened event-driven logic and state management thinking.",
      "Explored interaction design in a very stripped-back medium.",
      "Built a project with personality despite minimal visual affordances.",
    ],
  },
];

export const visibleArchiveProjects = archiveProjects.filter(
  (project) => !project.hidden,
);

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
