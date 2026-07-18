"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { team } from "@/config/site";
import { cn } from "@/lib/utils";

const toneClasses = {
  primary: "bg-accent-primary/10 text-accent-primary",
  magenta: "bg-accent-magenta/10 text-accent-magenta",
  cyan: "bg-accent-cyan/10 text-accent-cyan"
} as const;

export function TeamSection() {
  return (
    <section id="team" className="section-shell bg-bg-secondary/60">
      <div className="site-container">
        <span className="section-kicker">Équipe</span>
        <h2 className="section-title mt-5 max-w-2xl">Des passionnés au service de vos projets</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.a
              key={member.name}
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px 0px" }}
              className="surface-panel flex flex-col items-center gap-4 p-8 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <span
                className={cn(
                  "flex size-16 items-center justify-center rounded-full text-2xl font-black",
                  toneClasses[member.tone]
                )}
                aria-hidden
              >
                {member.initial}
              </span>
              <div>
                <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{member.role}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary">
                <Github size={16} aria-hidden />
                GitHub
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
