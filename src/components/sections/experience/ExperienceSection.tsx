import { FaBriefcase } from "react-icons/fa";

import Container from "@/components/ui/Container";
import EducationSummary from "./EducationSummary";
import ExperienceTimelineItem from "./ExperienceTimelineItem";
import { experiences } from "@/data/experiences";
import performanceStyles from "@/styles/performance.module.css";

const ExperienceSection = () => (
  <section
    id="experience"
    className={`${performanceStyles.deferredSection} relative scroll-mt-[72px] overflow-hidden bg-gradient-to-b from-white via-pink-50/50 to-purple-50/60`}
  >
    <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
    <div className="absolute -right-28 bottom-40 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

    <Container className="relative z-10 px-6 py-20 md:px-12 lg:px-20 lg:py-24">
      <header className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md">
          <FaBriefcase />
          Experience Journey
        </div>
        <h2 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
          From first interfaces to{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
            scalable products
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          Nine-plus years delivering web, mobile, backend, and AI-enabled
          product experiences for startups, agencies, and distributed teams.
        </p>
      </header>

      <div className="relative mt-14 space-y-8 md:space-y-10">
        <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-pink-300 via-purple-300 to-cyan-300 md:left-1/2 md:-translate-x-1/2" />
        {experiences.map((experience, index) => (
          <ExperienceTimelineItem
            key={`${experience.company}-${experience.period}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      <EducationSummary />
    </Container>
  </section>
);

export default ExperienceSection;
