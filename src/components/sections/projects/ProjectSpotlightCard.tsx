"use client";

import type { KeyboardEvent, MouseEvent, PointerEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  FaArrowRight,
  FaGlobe,
  FaImages,
  FaLayerGroup,
  FaMobileAlt,
} from "react-icons/fa";

import ProjectMediaCarousel from "./ProjectMediaCarousel";
import type { CarouselDirection } from "@/hooks/useCarousel";
import type { Project } from "@/types/project";
import styles from "./ProjectsSectionV2.module.css";

const SCREENSHOT_AUTOPLAY_INTERVAL_MS = 4600;

interface ProjectSpotlightCardProps {
  direction: CarouselDirection;
  onOpen: () => void;
  project: Project;
}

const getProjectType = (project: Project) => {
  const role = project.role.toLowerCase();

  if (role.includes("full stack")) {
    return { icon: FaLayerGroup, label: "Full stack" };
  }

  if (
    role.includes("mobile") ||
    role.includes("ionic") ||
    role.includes("flutter") ||
    role.includes("react native")
  ) {
    return { icon: FaMobileAlt, label: "Mobile app" };
  }

  return { icon: FaGlobe, label: "Web app" };
};

const ProjectSpotlightCard = ({
  direction,
  onOpen,
  project,
}: ProjectSpotlightCardProps) => {
  const cardRef = useRef<HTMLElement>(null);
  const images = project.images ?? (project.image ? [project.image] : []);
  const imageCount = images.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { icon: ProjectTypeIcon, label: projectTypeLabel } =
    getProjectType(project);

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
    if (isPaused || imageCount <= 1) return;

    const timer = window.setInterval(
      showNextImage,
      SCREENSHOT_AUTOPLAY_INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [imageCount, isPaused, showNextImage]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 3.5;
    const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -3;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
  };

  const resetCardTransform = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
    setIsPaused(false);
  };

  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    onOpen();
  };

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      key={project.title}
      ref={cardRef}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.title} project details`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      onPointerEnter={() => setIsPaused(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetCardTransform}
      className={clsx(
        styles.spotlightCard,
        direction === "next" ? styles.cardNext : styles.cardPrevious,
        "group relative h-[470px] w-full cursor-pointer overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_28px_80px_-32px_rgba(109,40,217,0.48)] outline-none sm:h-[525px] sm:rounded-[2.25rem] lg:h-[560px]",
        "focus-visible:ring-4 focus-visible:ring-purple-300/70",
      )}
    >
      <ProjectMediaCarousel
        activeImageIndex={activeImageIndex}
        counterPosition="left"
        project={project}
        sizes="(max-width: 1023px) 92vw, 820px"
        imageClassName="object-fill"
        onNext={showNextImage}
        onPrevious={showPreviousImage}
        onSelect={setActiveImageIndex}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[58%] bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />

      <div className="pointer-events-none absolute right-4 top-4 z-30 flex items-center gap-2 rounded-full border border-white/35 bg-white/80 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-800 shadow-sm backdrop-blur-xl sm:right-5 sm:top-5 sm:text-[10px]">
        <ProjectTypeIcon className="text-purple-600" />
        {projectTypeLabel}
      </div>

      {imageCount > 1 && (
        <div className="pointer-events-none absolute bottom-[148px] left-5 z-30 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/45 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-lg sm:bottom-[158px] sm:left-6">
          <FaImages className="text-cyan-300" />
          {imageCount} screens
        </div>
      )}

      <div className="absolute inset-x-3 bottom-3 z-40 flex min-h-[122px] items-center justify-between gap-4 rounded-[1.35rem] border border-white/70 bg-white/90 p-4 shadow-xl shadow-slate-950/10 backdrop-blur-2xl sm:inset-x-5 sm:bottom-5 sm:min-h-[128px] sm:rounded-[1.6rem] sm:p-5">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[9px] font-extrabold uppercase tracking-[0.17em] text-pink-500 sm:text-[10px]">
            {project.role}
          </p>
          <h3 className="mt-1.5 line-clamp-2 text-lg font-black leading-tight text-slate-950 sm:text-2xl">
            {project.title}
          </h3>

          <div className="mt-3 flex items-center gap-1.5">
            {project.tech.slice(0, 5).map(({ name, icon: Icon }) => (
              <span
                key={name}
                title={name}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-purple-100 bg-purple-50 text-[10px] text-purple-600 sm:h-8 sm:w-8 sm:text-xs"
              >
                <Icon />
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-slate-900 px-2 text-[8px] font-bold text-white sm:h-8 sm:min-w-8 sm:text-[9px]">
                +{project.tech.length - 5}
              </span>
            )}
          </div>
        </div>

        <span
          className={clsx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm text-white shadow-lg transition duration-300 group-hover:translate-x-1 group-hover:scale-110 sm:h-[52px] sm:w-[52px]",
            project.gradient,
          )}
        >
          <FaArrowRight />
        </span>
      </div>
    </article>
  );
};

export default ProjectSpotlightCard;
