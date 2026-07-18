import type { NavItem, ProjectItem, ServiceItem, StatItem, TeamMember } from "@/types/content";

export const siteConfig = {
  name: "Omega Developments",
  url: "https://omegadevelopments.fr",
  liveUrl: "https://omegadevelopmentsfr.dpdns.org/",
  description:
    "Omega Developments est une équipe de développement innovante spécialisée dans les solutions web modernes, les applications mobiles et le UI/UX design.",
  keywords: [
    "développement web",
    "applications mobiles",
    "UI/UX design",
    "API",
    "backend",
    "Omega Developments",
    "création site web",
    "développeur web",
    "Paris",
    "France",
    "Unity",
    "React",
    "Kotlin",
    "innovation numérique"
  ],
  email: "omegadevelopmentsfr@gmail.com",
  location: "Paris, France",
  googleVerification: "1Drfifjmcqa2Q_ssrp4xlUt7x8hyoYoz5rlA1xp5mDk",
  social: {
    github: "https://github.com/omegadevelopmentsfr"
  }
} as const;

export const navItems: NavItem[] = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Équipe", href: "#team" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const stats: StatItem[] = [
  { value: "5+", label: "Projets réalisés" },
  { value: "7+", label: "Clients satisfaits" },
  { value: "7+", label: "Années d'expérience" }
];

export const services: ServiceItem[] = [
  {
    title: "Développement Web",
    description: "Sites vitrines et applications web avec des technologies modernes et des performances optimales.",
    tags: ["React", "Vue.js", "Node.js"],
    icon: "web"
  },
  {
    title: "Applications Mobiles",
    description: "Applications Android pensées pour une expérience utilisateur fluide et intuitive.",
    tags: ["React Native", "Flutter", "Swift"],
    icon: "mobile",
    featured: true
  },
  {
    title: "UI/UX Design",
    description: "Interfaces élégantes et ergonomiques, design systems et prototypes interactifs.",
    tags: ["Figma", "Prototyping", "Motion"],
    icon: "design"
  },
  {
    title: "API & Backend",
    description: "Architectures robustes, scalables et prêtes pour accompagner la croissance des produits.",
    tags: ["Python", "Go", "PostgreSQL"],
    icon: "backend"
  }
];

export const team: TeamMember[] = [
  {
    name: "Dragonart53",
    role: "Lead Developer",
    initial: "D",
    github: "https://github.com/Dragonart53",
    tone: "primary"
  },
  {
    name: "Mtbr29",
    role: "Developer",
    initial: "M",
    github: "https://github.com/mtbr29",
    tone: "magenta"
  },
  {
    name: "ANTONG443",
    role: "3D animator and Developer",
    initial: "A",
    github: "https://github.com/antongdream-arch",
    tone: "cyan"
  }
];

export const projects: ProjectItem[] = [
  {
    title: "Warfare Nexus",
    category: "PC Game",
    description: "Jeu de tir à la première personne en cours de développement.",
    tech: ["Unity", "C#"],
    image: "/images/warfare_nexus_logo.png",
    alt: "Logo Warfare Nexus",
    tone: "violet"
  },
  {
    title: "Fencing Data",
    category: "Mobile App",
    description: "Application de collecte et d'analyse des données de match d'escrime.",
    tech: ["Android Studio", "Kotlin"],
    image: "/images/fencing_data_logo.png",
    alt: "Logo Fencing Data",
    tone: "magenta"
  },
  {
    title: "NovexOS",
    category: "Operating System",
    description: "Système d'exploitation en cours de développement.",
    tech: ["C", "Assembly"],
    image: "/images/novex_logo.png",
    alt: "Logo NovexOS",
    href: "https://novexos.dpdns.org",
    tone: "cyan"
  },
  {
    title: "Structura",
    category: "Windows Tool",
    description: "Un outil Python puissant, modulaire et léger qui convertit par lots des fichiers Word (.docx), Excel (.xlsx) et texte (.txt) au format PDF.",
    tech: ["Python"],
    image: "/images/structura.png",
    alt: "Logo structra",
    href: "https://antongdream-arch.github.io/Convertisseur-d-arborescence-en-pdf/",
    tone: "violet"
  }
];
