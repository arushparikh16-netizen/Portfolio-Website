export const profile = {
  name: "Arush Parikh",
  initials: "AP",
  role: "AI/ML Engineer",
  rotatingRoles: [
    "AI/ML Enginner",
    "Software Developer",
    "Front End Developer",
    "Problem Solver",
  ],
  tagline:
    "Software Engineer focused on DSA, AI/ML, and impactful product development.",
  location: "Bengaluru, India", 
  email: "arushparikh16@gmail.com",
  resumeUrl: "/resume.pdf", // TODO: drop your resume PDF into /public/resume.pdf
  availability: "Open to SDE & AI/ML roles",
  avatarUrl: "/images/avatar.jpg", // TODO: add a photo to /public/images/avatar.jpg
  social: {
    github: "https://github.com/TODO",
    linkedin: "https://www.linkedin.com/in/arush-parikh-a19313329",
    leetcode: "https://leetcode.com/u/arushh_1608/",
    gfg:"https://www.geeksforgeeks.org/profile/arushpas03i",
    codeforces: "https://codeforces.com/profile/TODO",
  },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a 2nd year Computer Science student specializing in AI & Machine Learning at Ramaiah Institute of Technology, drawn to the point where clean engineering meets applied intelligence.",
    "My default mode is build-first: try it, break it, understand why, rebuild it better.",
    "I'm looking for an SDE / AI-ML role where I can ship real systems, learn from strong engineers, and keep compounding.",
  ],
  education: [
    {
      degree: "B.E. in Computer Science & Engineering (AI & ML)",
      institution: "Ramaiah Institute of Technology",
      period: "2025-2029",
      detail: "CGPA-9.52(1st Year)",
    },
  ],
  goals: [
    "Land an SDE / AI-ML new-grad role at a product company",
    "Grow into a role building ML systems at production scale",
  ],
};

export type SkillCategory = {
  label: string;
  skills: { name: string; level: number }[]; // level 0-100
};

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "FastAPI", level: 75 },
      { name: "REST / GraphQL", level: 75 },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "PyTorch", level: 80 },
      { name: "scikit-learn", level: 85 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "LLM Tooling", level: 70 },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Git / GitHub", level: 90 },
      { name: "CI/CD", level: 65 },
      { name: "Linux", level: 75 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string; // path in /public/images
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "TODO Project Name",
    summary: "TODO one-line summary of what it does and for whom.",
    problem: "TODO — the real problem this addressed.",
    solution:
      "TODO — how you solved it, and the interesting engineering decisions.",
    impact: [
      "TODO metric, e.g. Reduced inference latency by 40%",
      "TODO metric, e.g. Used by 200+ active users",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "",
    githubUrl: "https://github.com/TODO/project-one",
    image: "/images/project-one.png",
    featured: true,
  },
  {
    slug: "project-two",
    title: "TODO Project Name",
    summary: "TODO one-line summary.",
    problem: "TODO",
    solution: "TODO",
    impact: ["TODO metric", "TODO metric"],
    stack: ["Python", "PyTorch", "FastAPI"],
    liveUrl: "",
    githubUrl: "https://github.com/TODO/project-two",
    image: "/images/project-two.png",
    featured: true,
  },
  {
    slug: "project-three",
    title: "TODO Project Name",
    summary: "TODO one-line summary.",
    problem: "TODO",
    solution: "TODO",
    impact: ["TODO metric"],
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "https://github.com/TODO/project-three",
    image: "/images/project-three.png",
    featured: false,
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  type: "Internship" | "Freelance" | "Leadership" | "Project";
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "TODO Role",
    org: "TODO Company / Team",
    period: "TODO — TODO",
    type: "Internship",
    points: [
      "TODO responsibility / achievement with a metric",
      "TODO responsibility / achievement with a metric",
    ],
  },
  {
    role: "Member",
    org: "Team A3H2 — Interdisciplinary Project-Based Learning",
    period: "TODO — TODO",
    type: "Project",
    points: [
      "TODO — what the team built and your specific contribution",
    ],
  },
];

export const achievements = {
  stats: [
    { label: "TODO e.g. LeetCode Problems", value: 0, suffix: "+" },
    { label: "TODO e.g. Hackathons", value: 0, suffix: "" },
    { label: "TODO e.g. Certifications", value: 0, suffix: "" },
    { label: "TODO e.g. GitHub Repos", value: 0, suffix: "" },
  ],
  items: [
    {
      title: "TODO Achievement / Hackathon / Certification",
      issuer: "TODO Issuer",
      date: "TODO",
      url: "",
    },
  ],
  codingProfiles: [
    { platform: "LeetCode", url: "https://leetcode.com/TODO", stat: "TODO rating / problems" },
    { platform: "Codeforces", url: "", stat: "" },
    { platform: "GitHub", url: "https://github.com/TODO", stat: "TODO contributions" },
  ],
};

export const testimonials = [
  {
    quote:
      "TODO — a short line someone said about working with you (mentor, professor, teammate). Delete this section in components/sections/Testimonials.tsx if unused.",
    name: "TODO Name",
    role: "TODO Role, Organization",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
