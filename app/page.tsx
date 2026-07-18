import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Footer } from "@/components/layout/Footer";
import { LogoBackdrop } from "@/components/layout/LogoBackdrop";
import { NavBar } from "@/components/layout/NavBar";
import { ScrollIndicator } from "@/components/layout/ScrollIndicator";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-black"
      >
        Aller au contenu
      </a>
      <LogoBackdrop />
      <SmoothScroll />
      <NavBar />
      <ScrollIndicator />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
