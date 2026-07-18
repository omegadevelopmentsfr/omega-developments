import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  tags: string[];
  icon: "web" | "mobile" | "design" | "backend";
  featured?: boolean;
};

export type TeamMember = {
  name: string;
  role: string;
  initial: string;
  github: string;
  tone: "primary" | "magenta" | "cyan";
};

export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  alt: string;
  href?: string;
  tone: "violet" | "magenta" | "cyan";
};

export type IconMap = Record<ServiceItem["icon"], LucideIcon>;
