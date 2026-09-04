"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { FaImages } from "react-icons/fa";

import ProjectMediaCarousel from "./ProjectMediaCarousel";
import type { Project } from "@/types/project";
import styles from "./Projects.module.css";

const MODAL_GALLERY_INTERVAL_MS = 4800;

interface ProjectModalGalleryProps {
  project: Project;
}

const ProjectModalGallery = ({ project }: ProjectModalGalleryProps) => {
  const images = project.images ?? (project.image ? [project.image] : []);
  const imageCount = images.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
    if (imageCount <= 1 || isPaused) return;

    const timer = window.setInterval(
      showNextImage,
      MODAL_GALLERY_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [imageCount, isPaused, showNextImage]);

  return (
    <div className="bg-white">
      <div
        className={clsx(
          "relative h-[210px] overflow-hidden bg-gradient-to-br sm:h-[350px]",
          project.gradient,
        )}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ProjectMediaCarousel
          activeImageIndex={activeImageIndex}
          counterPosition="left"
          project={project}
          sizes="(max-width: 1024px) 100vw, 1024px"
          imageClassName="object-fill"
          onNext={showNextImage}
          onPrevious={showPreviousImage}
          onSelect={setActiveImageIndex}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1 bg-white/10">
          <div
            className={clsx("h-full bg-gradient-to-r", project.gradient)}
          />
        </div>
      </div>

      {imageCount > 1 && (
        <div className="border-b border-slate-100 bg-slate-50/90 px-4 py-3 sm:px-6 sm:py-4">
          <div className="mb-2.5 flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
              <FaImages className="text-purple-500" />
              Project gallery
            </p>
            <span className="text-[10px] font-semibold text-slate-400">
              {imageCount} screenshots
            </span>
          </div>

          <div
            className={clsx(
              styles.thumbnailScroll,
              "flex snap-x gap-2.5 overflow-x-auto pb-1",
            )}
            aria-label={`${project.shortTitle} screenshot thumbnails`}
          >
            {images.map((imagePath, index) => {
              const isActive = index === activeImageIndex;

              return (
                <button
                  key={imagePath}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show screenshot ${index + 1} of ${imageCount}`}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(
                    styles.thumbnailEnter,
                    "relative h-14 w-24 shrink-0 snap-start overflow-hidden rounded-lg border-2 bg-white shadow-sm transition sm:h-[68px] sm:w-[116px]",
                    isActive
                      ? "border-purple-500 ring-2 ring-purple-200"
                      : "border-white opacity-65 hover:border-purple-200 hover:opacity-100",
                  )}
                  style={{ animationDelay: `${Math.min(index * 35, 280)}ms` }}
                >
                  <Image
                    src={imagePath}
                    alt=""
                    fill
                    sizes="116px"
                    className="object-cover object-top"
                  />
                  <span className="absolute bottom-1 right-1 flex h-4 min-w-4 items-center justify-center rounded bg-slate-950/65 px-1 text-[8px] font-bold text-white">
                    {index + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModalGallery;
