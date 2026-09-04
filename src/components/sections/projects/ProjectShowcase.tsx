"use client";

import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { FaExternalLinkAlt } from "react-icons/fa";

import ProjectMediaCarousel from "./ProjectMediaCarousel";
import type { CarouselDirection } from "@/hooks/useCarousel";
import type { Project } from "@/types/project";
import styles from "./Projects.module.css";

const SCREENSHOT_AUTOPLAY_INTERVAL_MS = 3600;

interface ProjectShowcaseProps {
  direction: CarouselDirection;
  onExplore: () => void;
  project: Project;
}

const ProjectShowcase = ({
  direction,
  onExplore,
  project,
}: ProjectShowcaseProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isMediaPaused, setIsMediaPaused] = useState(false);
  const images = project.images ?? (project.image ? [project.image] : []);
  const imageCount = images.length;
  const transitionClass =
    direction === "next" ? styles.galleryNext : styles.galleryPrevious;

  const showNextImage = useCallback(() => {
    setActiveImageIndex((currentIndex) =>
      imageCount > 0 ? (currentIndex + 1) % imageCount : 0,
    );
  }, [imageCount]);

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0 ? Math.max(imageCount - 1, 0) : currentIndex - 1,
    );
  }, [imageCount]);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project.title]);

  useEffect(() => {
    if (imageCount <= 1 || isMediaPaused) return;

    const timer = window.setInterval(
      showNextImage,
      SCREENSHOT_AUTOPLAY_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [imageCount, isMediaPaused, showNextImage]);

  return (
    <>
      <article
        key={`mobile-${project.title}`}
        className={clsx(
          styles.gallerySlide,
          transitionClass,
          "overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-xl shadow-purple-400/15 sm:rounded-[1.75rem] lg:hidden",
        )}
      >
        <div
          className="relative h-[clamp(220px,65vw,300px)] overflow-hidden bg-slate-100 sm:h-[330px]"
          onMouseEnter={() => setIsMediaPaused(true)}
          onMouseLeave={() => setIsMediaPaused(false)}
        >
          <ProjectMediaCarousel
            activeImageIndex={activeImageIndex}
            project={project}
            sizes="100vw"
            imageClassName="object-fill"
            onNext={showNextImage}
            onPrevious={showPreviousImage}
            onSelect={setActiveImageIndex}
          />

          <div
            className={clsx(
              styles.galleryProgress,
              "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500",
            )}
          />
        </div>

        <div className="relative p-[18px] sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-pink-500">
            {project.role}
          </p>
          <h3 className="mt-1.5 line-clamp-2 text-xl font-extrabold leading-tight text-slate-900 sm:mt-2 sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[13px] font-semibold leading-5 text-purple-600 sm:text-sm">
            {project.subtitle}
          </p>
          <p className="mt-2.5 line-clamp-3 text-[13px] leading-[1.375rem] text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">
            {project.description}
          </p>

          <div className="mt-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Key highlights
            </p>
            <div className="mt-2 grid gap-1.5 sm:grid-cols-2 sm:gap-2">
              {project.contributions.slice(0, 2).map((contribution) => (
                <div
                  key={contribution}
                  className="flex min-h-9 items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/90 px-2.5 py-2"
                >
                  <span
                    className={clsx(
                      "h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r",
                      project.gradient,
                    )}
                  />
                  <span className="line-clamp-2 text-[10px] font-semibold leading-4 text-slate-600">
                    {contribution}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm"
              >
                <Icon className="text-xs text-purple-600" />
                {name}
              </div>
            ))}
            {project.tech.length > 4 && (
              <span className="flex items-center rounded-full border border-purple-100 bg-purple-50 px-2.5 py-1.5 text-[10px] font-bold text-purple-600">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onExplore}
            className={clsx(
              "mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-5 py-3 text-xs font-semibold text-white shadow-lg transition active:scale-[0.98] sm:w-auto sm:rounded-full sm:py-2.5",
              project.gradient,
            )}
          >
            Explore Project
            <FaExternalLinkAlt className="text-[9px]" />
          </button>
        </div>
      </article>

      <article
        key={`desktop-${project.title}`}
        className={clsx(
          styles.gallerySlide,
          transitionClass,
          "hidden h-[600px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl shadow-purple-400/20 lg:flex lg:flex-col",
        )}
      >
        <div
          className="relative h-[390px] shrink-0 overflow-hidden bg-slate-100"
          onMouseEnter={() => setIsMediaPaused(true)}
          onMouseLeave={() => setIsMediaPaused(false)}
        >
          <ProjectMediaCarousel
            activeImageIndex={activeImageIndex}
            project={project}
            sizes="75vw"
            imageClassName="object-fill"
            onNext={showNextImage}
            onPrevious={showPreviousImage}
            onSelect={setActiveImageIndex}
          />
          <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-slate-950/10">
            <div
              className={clsx(
                styles.galleryProgress,
                "h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500",
              )}
            />
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_190px] gap-5 p-5">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-500">
              {project.role}
            </p>
            <h3 className="mt-1.5 line-clamp-2 text-2xl font-extrabold leading-tight text-slate-900">
              {project.title}
            </h3>
            <p className="mt-1.5 line-clamp-1 text-xs font-semibold leading-5 text-purple-600">
              {project.subtitle}
            </p>
            <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-slate-600">
              {project.description}
            </p>
          </div>

          <div className="flex min-w-0 flex-col items-end justify-between border-l border-slate-100 pl-4">
            <div className="flex flex-wrap justify-end gap-2">
              {project.tech.slice(0, 6).map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  title={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-purple-600 shadow-sm"
                >
                  <Icon className="text-xs" />
                </div>
              ))}
              {project.tech.length > 6 && (
                <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-slate-200 bg-white px-2 text-[10px] font-bold text-slate-500 shadow-sm">
                  +{project.tech.length - 6}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onExplore}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl",
                project.gradient,
              )}
            >
              Explore Project
              <FaExternalLinkAlt className="text-[9px]" />
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectShowcase;
