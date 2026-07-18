"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/config/site";
import { cn } from "@/lib/utils";

const toneBorderClasses = {
  violet: "hover:border-accent-primary/50",
  magenta: "hover:border-accent-magenta/50",
  cyan: "hover:border-accent-cyan/50"
} as const;

const toneBgClasses = {
  violet: "bg-accent-primary/[0.06]",
  magenta: "bg-accent-magenta/[0.06]",
  cyan: "bg-accent-cyan/[0.06]"
} as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="site-container">
        <span className="section-kicker">Projets</span>
        <h2 className="section-title mt-5 max-w-2xl">Nos réalisations</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px 0px" }}
              className={cn(
                "surface-panel relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1",
                toneBorderClasses[project.tone]
              )}
            >
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">Voir {project.title}</span>
                </a>
              )}

              <div
                className={cn(
                  "relative flex aspect-[16/10] w-full items-center justify-center p-8",
                  toneBgClasses[project.tone]
                )}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={320}
                  height={200}
                  className="h-full w-full object-contain"
                />
                {project.href && (
                  <span className="pointer-events-none absolute right-3 top-3 z-20 flex size-8 items-center justify-center rounded-full bg-bg-primary/80 text-text-muted">
                    <ArrowUpRight size={16} aria-hidden />
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-text-primary">{project.title}</h3>
                </div>

                <p className="muted-copy text-sm">{project.description}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
