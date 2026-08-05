import Image from "next/image";
import clsx from "clsx";
import { FaExternalLinkAlt } from "react-icons/fa";

import BrowserWindowDots from "./BrowserWindowDots";
import type { CarouselDirection } from "@/hooks/useCarousel";
import { formatCarouselPosition } from "@/utils/format-carousel-position";
import type { Project } from "@/types/project";
import styles from "./Projects.module.css";

interface ProjectShowcaseProps {
  activeIndex: number;
  direction: CarouselDirection;
  onExplore: () => void;
  project: Project;
  projectCount: number;
}

const ProjectShowcase = ({
  activeIndex,
  direction,
  onExplore,
  project,
  projectCount,
}: ProjectShowcaseProps) => {
  const transitionClass =
    direction === "next" ? styles.galleryNext : styles.galleryPrevious;

  return (
    <>
      <article
        key={`mobile-${project.title}`}
        className={clsx(
          styles.gallerySlide,
          transitionClass,
          "overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-2xl shadow-purple-400/15 lg:hidden",
        )}
      >
        <div
          className={clsx(
            "relative h-[225px] overflow-hidden bg-gradient-to-br p-3 sm:h-[280px] sm:p-4",
            project.gradient,
          )}
        >
          <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
          <div className="absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-white/15 blur-2xl" />

          <div className="relative h-full overflow-hidden rounded-[1.3rem] border border-white/40 bg-white/20 p-2 shadow-xl backdrop-blur-md">
            <div className="flex h-7 items-center justify-between px-1 pb-2">
              <div className="flex gap-1.5">
                <BrowserWindowDots />
              </div>

              <div className="rounded-full bg-slate-950/30 px-3 py-1 text-[9px] font-semibold text-white backdrop-blur-md">
                {formatCarouselPosition(activeIndex + 1)}
                <span className="mx-1.5 text-white/50">/</span>
                {formatCarouselPosition(projectCount)}
              </div>
            </div>

            <div className="relative h-[calc(100%-28px)] overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                sizes="100vw"
                className={clsx("object-cover", project.imagePosition ?? "object-top")}
              />
            </div>
          </div>

          <div
            className={clsx(
              styles.galleryProgress,
              "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500",
            )}
          />
        </div>

        <div className="relative p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-pink-500">
            {project.role}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-semibold leading-5 text-purple-600">
            {project.subtitle}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {project.contributions.map((contribution) => (
              <div
                key={contribution}
                className="flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-2.5 py-2"
              >
                <span
                  className={clsx(
                    "h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r",
                    project.gradient,
                  )}
                />
                <span className="text-[10px] font-semibold leading-4 text-slate-600">
                  {contribution}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm"
              >
                <Icon className="text-xs text-purple-600" />
                {name}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onExplore}
            className={clsx(
              "mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-xs font-semibold text-white shadow-lg",
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
          "relative hidden h-[500px] overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 shadow-2xl shadow-purple-400/20 lg:block",
        )}
      >
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          sizes="75vw"
          className={clsx(
            "object-cover transition-transform duration-1000 hover:scale-[1.015]",
            project.imagePosition ?? "object-top",
          )}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/5" />

        <div className="absolute left-6 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-2 backdrop-blur-md">
          <BrowserWindowDots />
        </div>

        <div className="absolute right-6 top-5 z-20 rounded-full border border-white/25 bg-slate-950/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
          {formatCarouselPosition(activeIndex + 1)}
          <span className="mx-2 text-white/40">/</span>
          {formatCarouselPosition(projectCount)}
        </div>

        <div className="absolute bottom-6 left-6 z-20 w-[520px]">
          <div className="rounded-[1.5rem] border border-white/20 bg-slate-950/55 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-300">
              {project.role}
            </p>
            <h3 className="mt-2 text-[28px] font-extrabold leading-tight text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm font-medium leading-5 text-purple-200">
              {project.subtitle}
            </p>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/75">
              {project.description}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-1.5">
              {project.contributions.map((contribution) => (
                <div
                  key={contribution}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-2.5 py-2"
                >
                  <span
                    className={clsx(
                      "h-1.5 w-1.5 rounded-full bg-gradient-to-r",
                      project.gradient,
                    )}
                  />
                  <span className="truncate text-[10px] font-medium text-white/85">
                    {contribution}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.tech.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  title={name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85"
                >
                  <Icon className="text-xs" />
                </div>
              ))}

              <button
                type="button"
                onClick={onExplore}
                className={clsx(
                  "ml-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-xs font-semibold text-white shadow-xl transition hover:-translate-y-0.5",
                  project.gradient,
                )}
              >
                Explore Project
                <FaExternalLinkAlt className="text-[9px]" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/10">
          <div
            className={clsx(
              styles.galleryProgress,
              "h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500",
            )}
          />
        </div>
      </article>
    </>
  );
};

export default ProjectShowcase;
