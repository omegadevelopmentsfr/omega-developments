"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Server } from "lucide-react";
import { services } from "@/config/site";
import type { IconMap } from "@/types/content";
import { cn } from "@/lib/utils";

const icons: IconMap = {
  web: Code2,
  mobile: Smartphone,
  design: Palette,
  backend: Server
};

export function ServicesSection() {
  return (
    <section id="services" className="section-shell">
      <div className="site-container">
        <span className="section-kicker">Services</span>
        <h2 className="section-title mt-5 max-w-2xl">Ce que nous faisons</h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px 0px" }}
                className={cn(
                  "surface-panel flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1",
                  service.featured && "border-accent-primary/40"
                )}
              >
                <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
                <p className="muted-copy text-base">{service.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
