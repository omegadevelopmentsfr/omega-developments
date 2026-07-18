import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-[100svh] items-center overflow-hidden px-4 pb-20 pt-32"
    >
      <div className="site-container">
        <div className="max-w-4xl">
          <div className="section-kicker">
            <span className="size-2 rounded-full bg-accent-success shadow-[0_0_18px_rgba(34,197,94,0.8)]" />
            Disponible pour nouveaux projets
          </div>

          <Image
            src="/images/omega_logo-no-bg.png"
            alt="Omega Developments"
            width={900}
            height={390}
            priority
            className="mt-8 h-auto w-full max-w-[620px] drop-shadow-[0_0_36px_rgba(139,92,246,0.24)]"
          />

          <h1 className="mt-8 max-w-4xl break-words text-4xl font-black leading-[1.05] tracking-normal text-text-primary sm:text-6xl lg:text-8xl">
            Omega <span className="text-gradient">Developments</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
            Une équipe de développeurs qui transforme vos idées en solutions numériques innovantes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonStyles()}>
              Démarrer un projet
              <ArrowRight size={18} aria-hidden />
            </a>
            <a href="#projects" className={buttonStyles({ variant: "secondary" })}>
              Voir nos réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
