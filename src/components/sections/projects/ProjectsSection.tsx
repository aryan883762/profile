"use client";

import { useCallback, useState } from "react";
import clsx from "clsx";

import DesktopProjectSelector from "./DesktopProjectSelector";
import MobileProjectSelectors from "./MobileProjectSelectors";
import ProjectDetailsModal from "./ProjectDetailsModal";
import ProjectShowcase from "./ProjectShowcase";
import ProjectsHeader from "./ProjectsHeader";
import { useCarousel } from "@/hooks/useCarousel";
import type { Project } from "@/types/project";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";
import performanceStyles from "@/styles/performance.module.css";

const PROJECT_AUTOPLAY_INTERVAL_MS = 6500;

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const {
    activeIndex,
    direction,
    selectIndex,
    setIsPaused,
    showNext,
    showPrevious,
  } = useCarousel({
    itemCount: projects.length,
    intervalMs: PROJECT_AUTOPLAY_INTERVAL_MS,
  });

  const closeProjectModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (projects.length === 0) return null;

  const activeProject = projects[activeIndex];
  return (
    <>
      <section
        id="projects"
        className={clsx(
          performanceStyles.deferredSection,
          "relative scroll-mt-[72px] overflow-hidden bg-gradient-to-b from-white via-slate-50 to-purple-50/60",
        )}
      >
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div
          className={clsx(styles.galleryGrid, "absolute inset-0 opacity-30")}
        />

        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-12 sm:px-6 sm:py-14 md:px-12 lg:px-20 lg:py-16">
          <ProjectsHeader onNext={showNext} onPrevious={showPrevious} />

          <div
            className="lg:grid lg:h-[600px] lg:grid-cols-[270px_1fr] lg:gap-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <DesktopProjectSelector
              activeIndex={activeIndex}
              onSelect={selectIndex}
              projects={projects}
            />

            <ProjectShowcase
              direction={direction}
              onExplore={() => setSelectedProject(activeProject)}
              project={activeProject}
            />
          </div>

          <MobileProjectSelectors
            activeIndex={activeIndex}
            onNext={showNext}
            onPrevious={showPrevious}
            onSelect={selectIndex}
            projects={projects}
          />
        </div>
      </section>

      <ProjectDetailsModal
        project={selectedProject}
        onClose={closeProjectModal}
      />
    </>
  );
};

export default ProjectsSection;
