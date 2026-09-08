import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageBackground from "@/components/layout/PageBackground";
import ContactSection from "@/components/sections/contact/ContactSection";
import ProjectsSectionV2 from "@/components/sections/projects/ProjectsSectionV2";
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
        <ProjectsSectionV2 />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
