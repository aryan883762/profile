"use client";

import { useCallback, useState } from "react";
import clsx from "clsx";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaLayerGroup,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

import ProjectDetailsModal from "./ProjectDetailsModal";
import ProjectSpotlightCard from "./ProjectSpotlightCard";
import ProjectVisual from "./ProjectVisual";
import { projects } from "@/data/projects";
import { useCarousel } from "@/hooks/useCarousel";
import type { Project } from "@/types/project";
import performanceStyles from "@/styles/performance.module.css";
import styles from "./ProjectsSectionV2.module.css";

const PROJECT_AUTOPLAY_INTERVAL_MS = 7200;

const getProjectTypeIcon = (project: Project) => {
  const role = project.role.toLowerCase();

  if (role.includes("full stack")) return FaLayerGroup;
  if (
    role.includes("mobile") ||
    role.includes("ionic") ||
    role.includes("flutter") ||
    role.includes("react native")
  ) {
    return FaMobileAlt;
  }

  return FaGlobe;
};

interface ProjectPreviewProps {
  className: string;
  onOpen: () => void;
  project: Project;
  side: "left" | "right";
}

const ProjectPreview = ({
  className,
  onOpen,
  project,
  side,
}: ProjectPreviewProps) => {
  const image = project.images?.[0] ?? project.image;
  const ProjectTypeIcon = getProjectTypeIcon(project);

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${project.title} project details`}
      className={clsx(
        "group absolute top-1/2 z-10 hidden h-[380px] w-[330px] overflow-hidden rounded-[2rem] border border-white/90 bg-white text-left opacity-75 shadow-[0_24px_60px_-34px_rgba(76,29,149,0.45)] transition-[opacity,filter] duration-500 hover:z-40 hover:opacity-100 hover:brightness-105 md:block lg:h-[420px] lg:w-[370px]",
        side === "left" ? "-left-20 lg:-left-12" : "-right-20 lg:-right-12",
        className,
      )}
    >
      <ProjectVisual
        image={image}
        project={project}
        sizes="370px"
        imageClassName="object-fill transition-transform duration-[1800ms] group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-xs text-white backdrop-blur-xl">
        <ProjectTypeIcon />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-cyan-300">
          {side === "left" ? "Previous project" : "Next project"}
        </p>
        <p className="mt-1 line-clamp-2 text-base font-extrabold leading-tight">
          {project.title}
        </p>
      </div>
    </button>
  );
};

const ProjectsSectionV2 = () => {
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

  const closeModal = useCallback(() => setSelectedProject(null), []);

  if (projects.length === 0) return null;

  const activeProject = projects[activeIndex];
  const previousProject =
    projects[(activeIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(activeIndex + 1) % projects.length];

  return (
    <>
      <section
        id="projects"
        className={clsx(
          performanceStyles.deferredSection,
          "relative scroll-mt-[72px] overflow-hidden bg-gradient-to-br from-white via-purple-50/65 to-cyan-50/70",
        )}
      >
        <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-pink-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/15 blur-3xl" />
        <div className={clsx(styles.sectionGrid, "pointer-events-none absolute inset-0")} />

        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-20 lg:py-20">
          <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl" data-aos="fade-up">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/75 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-purple-600 shadow-sm backdrop-blur-md sm:text-[10px]">
                <FaRocket />
                Selected product work
              </div>
              <h2 className="text-[1.9rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Products I&apos;ve Helped{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Build
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-sm md:text-base">
                Explore web, mobile, and full-stack products. Every card opens a
                focused case study with the complete screenshot gallery.
              </p>
            </div>

            <div className="flex items-center justify-between gap-5 lg:justify-end">
              <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-slate-400">
                <span className="text-purple-600">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>{" "}
                / {String(projects.length).padStart(2, "0")}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Show previous project"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white bg-white/80 text-sm text-slate-700 shadow-lg shadow-purple-300/15 backdrop-blur transition hover:-translate-y-1 hover:border-purple-200 hover:text-purple-600 sm:h-12 sm:w-12"
                >
                  <FaArrowLeft />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Show next project"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-sm text-white shadow-lg shadow-purple-400/30 transition hover:-translate-y-1 hover:shadow-xl sm:h-12 sm:w-12"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </header>

          <div
            className="relative mt-8 h-[510px] sm:h-[565px] lg:mt-10 lg:h-[610px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 sm:h-[580px] sm:w-[580px]">
              <div className={clsx(styles.orbit, "absolute inset-0 rounded-full border border-dashed border-purple-300/45")}>
                <span className="absolute left-[12%] top-[9%] h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,0.8)]" />
                <span className="absolute bottom-[15%] right-[8%] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
              </div>
              <div className={clsx(styles.orbitReverse, "absolute inset-[14%] rounded-full border border-purple-200/55")}>
                <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-purple-500" />
              </div>
            </div>

            <span className={clsx(styles.floatingOrb, "pointer-events-none absolute left-[5%] top-[12%] hidden h-16 w-16 rounded-2xl border border-white/90 bg-white/55 shadow-xl shadow-purple-300/20 backdrop-blur-xl sm:block")} />
            <span className={clsx(styles.floatingOrbDelayed, "pointer-events-none absolute bottom-[10%] right-[4%] hidden h-12 w-12 rotate-12 rounded-full border border-white/90 bg-gradient-to-br from-pink-300/60 to-cyan-300/60 shadow-xl backdrop-blur-xl sm:block")} />

            <ProjectPreview
              key={`previous-${previousProject.title}`}
              className={styles.previewLeft}
              onOpen={() => setSelectedProject(previousProject)}
              project={previousProject}
              side="left"
            />

            <div className="absolute inset-x-0 top-1/2 z-30 mx-auto w-full max-w-[820px] -translate-y-1/2 [perspective:1200px] sm:w-[86%] lg:w-[72%]">
              <div
                className={clsx(
                  "absolute -inset-1 rounded-[2rem] bg-gradient-to-r opacity-50 blur-lg sm:rounded-[2.5rem]",
                  activeProject.gradient,
                )}
              />
              <ProjectSpotlightCard
                direction={direction}
                onOpen={() => setSelectedProject(activeProject)}
                project={activeProject}
              />
            </div>

            <ProjectPreview
              key={`next-${nextProject.title}`}
              className={styles.previewRight}
              onOpen={() => setSelectedProject(nextProject)}
              project={nextProject}
              side="right"
            />
          </div>

          <div className="mx-auto mt-2 flex max-w-3xl items-center gap-3 sm:mt-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous project"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white text-[10px] text-purple-600 shadow-sm transition hover:scale-105"
            >
              <FaArrowLeft />
            </button>

            <nav className="flex min-w-0 flex-1 items-center justify-center gap-1 sm:gap-1.5" aria-label="Choose project">
              {projects.map((project, projectIndex) => {
                const isActive = projectIndex === activeIndex;

                return (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => selectIndex(projectIndex)}
                    aria-label={`Show ${project.title}`}
                    aria-current={isActive ? "true" : undefined}
                    className={clsx(
                      "relative h-2 overflow-hidden rounded-full transition-all duration-500",
                      isActive
                        ? "w-8 bg-purple-100 sm:w-12"
                        : "w-2 bg-slate-300/80 hover:bg-purple-300",
                    )}
                  >
                    {isActive && (
                      <span
                        key={`progress-${activeIndex}`}
                        className={clsx(
                          styles.autoplayProgress,
                          "absolute inset-0 origin-left bg-gradient-to-r",
                          project.gradient,
                        )}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next project"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-100 bg-white text-[10px] text-purple-600 shadow-sm transition hover:scale-105"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      <ProjectDetailsModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default ProjectsSectionV2;
