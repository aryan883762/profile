"use client";

import clsx from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ProjectVisual from "./ProjectVisual";
import type { Project } from "@/types/project";
import styles from "./Projects.module.css";

interface ProjectMediaCarouselProps {
  activeImageIndex: number;
  counterPosition?: "left" | "right";
  imageClassName?: string;
  layout?: "single" | "collage";
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
  project: Project;
  sizes: string;
}

const ProjectMediaCarousel = ({
  activeImageIndex,
  counterPosition = "right",
  imageClassName,
  layout = "single",
  onNext,
  onPrevious,
  onSelect,
  project,
  sizes,
}: ProjectMediaCarouselProps) => {
  const images = project.images ?? (project.image ? [project.image] : []);
  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeImageIndex] ?? images[0];
  const collageImageIndexes = Array.from(
    { length: Math.min(images.length, 3) },
    (_, offset) => (activeImageIndex + offset) % images.length,
  );
  const showCollage = layout === "collage" && hasMultipleImages;

  return (
    <div
      className={clsx(
        styles.mediaEdgeShadow,
        "absolute overflow-hidden bg-slate-100",
        layout === "collage"
          ? "inset-x-0 top-0 bottom-[140px] sm:bottom-[148px]"
          : "inset-0",
        showCollage && styles.collageStage,
      )}
    >
      {showCollage ? (
        <div
          key={`${project.title}-collage-${activeImageIndex}`}
          className={styles.collageCanvas}
        >
          {collageImageIndexes.map((imageIndex, position) => (
            <div
              key={`${images[imageIndex]}-${position}`}
              className={clsx(
                styles.collageTile,
                position === 0 && styles.collageTilePrimary,
                position === 1 && styles.collageTileSecondary,
                position === 2 && styles.collageTileTertiary,
                images.length === 2 && styles.collageTilePair,
              )}
            >
              <ProjectVisual
                image={images[imageIndex]}
                project={project}
                sizes={position === 0 ? sizes : "(max-width: 639px) 48vw, 300px"}
                imageClassName="object-contain"
              />
              <span className={styles.collageScreenNumber}>
                {String(imageIndex + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div
          key={`${project.title}-${activeImageIndex}`}
          className={clsx(styles.screenshotSlide, styles.singleScreenshotFrame)}
        >
          <ProjectVisual
            image={activeImage}
            project={project}
            sizes={sizes}
            imageClassName={imageClassName}
          />
        </div>
      )}

      {hasMultipleImages && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            aria-label={`Show previous ${project.shortTitle} screenshot`}
            className="absolute left-2 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-slate-950/55 text-[10px] text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-slate-950/75 sm:left-3 sm:h-9 sm:w-9"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label={`Show next ${project.shortTitle} screenshot`}
            className="absolute right-2 top-1/2 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-slate-950/55 text-[10px] text-white shadow-lg backdrop-blur-md transition hover:scale-105 hover:bg-slate-950/75 sm:right-3 sm:h-9 sm:w-9"
          >
            <FaChevronRight />
          </button>

          <div className="absolute bottom-2 left-1/2 z-30 flex max-w-[72%] -translate-x-1/2 items-center gap-1 rounded-full border border-white/30 bg-slate-950/55 px-2.5 py-1.5 shadow-lg backdrop-blur-md sm:bottom-3">
            {images.map((imagePath, index) => (
              <button
                key={imagePath}
                type="button"
                onClick={() => onSelect(index)}
                aria-label={`Show screenshot ${index + 1} of ${images.length}`}
                aria-current={index === activeImageIndex ? "true" : undefined}
                className={clsx(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === activeImageIndex
                    ? "w-5 bg-white"
                    : "w-1.5 bg-white/45 hover:bg-white/80",
                )}
              />
            ))}
          </div>

          <span
            className={clsx(
              "absolute top-2 z-30 rounded-full border border-white/30 bg-slate-950/55 px-2.5 py-1 text-[9px] font-bold text-white backdrop-blur-md sm:top-3",
              counterPosition === "left" ? "left-2 sm:left-3" : "right-2 sm:right-3",
            )}
          >
            {activeImageIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
};

export default ProjectMediaCarousel;
