"use client";

import { motion } from "framer-motion";
import { stats } from "@/config/site";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="site-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="section-kicker">À propos</span>
          <h2 className="section-title mt-5 max-w-xl">Une équipe, une vision</h2>
          <p className="muted-copy mt-6 max-w-xl">
            Fondée par des passionnés de technologie, Omega Developments repousse les limites du
            développement web et mobile avec une approche exigeante, concrète et orientée produit.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl">
            {stats.map((stat, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.7, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px 0px" }}
                key={stat.label} 
                className="surface-panel p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent-magenta/50 hover:shadow-[0_8px_30px_rgba(236,72,153,0.15)]"
              >
                <strong className="block text-3xl font-black text-text-primary sm:text-4xl">
                  {stat.value}
                </strong>
                <span className="mt-2 block text-xs font-medium leading-5 text-text-muted sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px 0px" }}
          className="surface-panel overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b border-border-subtle px-5 py-4">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <pre className="overflow-x-auto p-6 text-sm leading-7 text-text-secondary">
            <code>{`const omega = {
  passion: "infinie",
  qualité: "maximale",
  innovation: true,
  créer() {
    return "excellence";
  }
};`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
