import Header from "@/components/Header";
// import BeliefsSection from "@/components/BeliefsSection";
import Footer from "@/components/Footer";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import DeveloperDNA from "@/components/DeveloperDNA";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <>
      {/* Falling Abstract Shapes */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Shape 1 */}
        <div className="absolute top-[-10%] left-1/4 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-fall-slow"></div>
        {/* Shape 2 */}
        <div className="absolute top-[-15%] left-1/2 w-20 h-20 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-lg opacity-40 animate-fall"></div>
        {/* Shape 3 */}
        <div className="absolute top-[-12%] left-[70%] w-14 h-14 bg-yellow-300 rounded-full opacity-30 animate-fall-fast"></div>
      </div>

      <main className="relative z-10 min-h-screen">
        <Header />
        <Hero />
        <DeveloperDNA />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <SkillsSection />
      </main>

      <Footer />
    </>
  );
}
