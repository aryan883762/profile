"use client";

import { useCallback, useState } from "react";
import clsx from "clsx";

import DesktopProjectSelector from "./DesktopProjectSelector";
import MobileProjectSelectors from "./MobileProjectSelectors";
import ProjectDetailsModal from "./ProjectDetailsModal";
import ProjectShowcase from "./ProjectShowcase";
import ProjectsHeader from "./ProjectsHeader";
import { useCarousel } from "@/hooks/useCarousel";
import { getVisibleProjectIndexes } from "./project-carousel";
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
  const visibleProjectIndexes = getVisibleProjectIndexes(
    activeIndex,
    projects.length,
  );

  return (
    <>
      <section
        id="projects"
        className={clsx(
          performanceStyles.deferredSection,
          "relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-purple-50/60",
        )}
      >
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div
          className={clsx(styles.galleryGrid, "absolute inset-0 opacity-30")}
        />

        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 py-14 sm:px-6 md:px-12 lg:px-20 lg:py-16">
          <ProjectsHeader onNext={showNext} onPrevious={showPrevious} />

          <div
            className="lg:grid lg:h-[500px] lg:grid-cols-[220px_1fr] lg:gap-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <DesktopProjectSelector
              activeIndex={activeIndex}
              onSelect={selectIndex}
              projects={projects}
              visibleIndexes={visibleProjectIndexes}
            />

            <ProjectShowcase
              activeIndex={activeIndex}
              direction={direction}
              onExplore={() => setSelectedProject(activeProject)}
              project={activeProject}
              projectCount={projects.length}
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
