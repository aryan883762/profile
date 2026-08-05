import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageBackground from "@/components/layout/PageBackground";
import ProjectsSection from "@/components/sections/projects/ProjectsSection";
import SkillsSection from "@/components/sections/skills/SkillsSection";
import DeveloperDNA from "@/components/sections/developer-dna/DeveloperDNA";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      <PageBackground />

      <main className="relative z-10 min-h-screen">
        <Header />
        <Hero />
        <DeveloperDNA />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <Footer />
    </>
  );
}
