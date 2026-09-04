import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBackground from "@/components/layout/PageBackground";
import ContactSection from "@/components/sections/contact/ContactSection";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import SkillsSection from "@/components/sections/skills/SkillsSection";
import DeveloperDNA from "@/components/sections/developer-dna/DeveloperDNA";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <PageBackground />

      <main className="relative z-10 min-h-screen">
        <Header />
        <Hero />
        <DeveloperDNA />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
