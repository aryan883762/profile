"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { formatCarouselPosition } from "@/utils/format-carousel-position";
import type { Project } from "@/types/project";

import styles from "./Projects.module.css";

interface DesktopProjectSelectorProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  projects: Project[];
}

const DesktopProjectSelector = ({
  activeIndex,
  onSelect,
  projects,
}: DesktopProjectSelectorProps) => {
  const activeProjectRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [visibleProjectIndexes, setVisibleProjectIndexes] = useState<number[]>(
    [],
  );

  const updateScrollControls = useCallback(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    setCanScrollUp(container.scrollTop > 2);
    setCanScrollDown(
      container.scrollTop + container.clientHeight <
        container.scrollHeight - 2,
    );

    const containerBounds = container.getBoundingClientRect();
    const nextVisibleIndexes = Array.from(
      container.querySelectorAll<HTMLElement>("[data-project-index]"),
    )
      .filter((projectElement) => {
        const projectBounds = projectElement.getBoundingClientRect();

        return (
          projectBounds.bottom > containerBounds.top + 8 &&
          projectBounds.top < containerBounds.bottom - 8
        );
      })
      .map((projectElement) =>
        Number(projectElement.dataset.projectIndex),
      );

    setVisibleProjectIndexes((currentIndexes) =>
      currentIndexes.length === nextVisibleIndexes.length &&
      currentIndexes.every(
        (projectIndex, index) => projectIndex === nextVisibleIndexes[index],
      )
        ? currentIndexes
        : nextVisibleIndexes,
    );
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeProject = activeProjectRef.current;

    if (container && activeProject) {
      const containerBounds = container.getBoundingClientRect();
      const projectBounds = activeProject.getBoundingClientRect();

      if (projectBounds.top < containerBounds.top) {
        container.scrollBy({
          top: projectBounds.top - containerBounds.top,
          behavior: "smooth",
        });
      } else if (projectBounds.bottom > containerBounds.bottom) {
        container.scrollBy({
          top: projectBounds.bottom - containerBounds.bottom,
          behavior: "smooth",
        });
      }
    }

    const frame = window.requestAnimationFrame(updateScrollControls);
    return () => window.cancelAnimationFrame(frame);
  }, [activeIndex, projects.length, updateScrollControls]);

  const scrollProjects = (direction: "up" | "down") => {
    scrollContainerRef.current?.scrollBy({
      top: direction === "up" ? -172 : 172,
      behavior: "smooth",
    });
  };

  const firstVisibleProject = visibleProjectIndexes[0];
  const lastVisibleProject = visibleProjectIndexes.at(-1);

  return (
    <aside className="hidden h-[600px] min-h-0 lg:flex lg:flex-col">
      <div className="mb-2.5 flex shrink-0 items-center justify-between px-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
          Browse projects
        </span>
        <span
          className="rounded-full border border-purple-100 bg-white px-2.5 py-1 text-[10px] font-bold text-purple-600 shadow-sm"
          aria-label={
            firstVisibleProject !== undefined && lastVisibleProject !== undefined
              ? `Showing projects ${firstVisibleProject + 1} through ${lastVisibleProject + 1} of ${projects.length}`
              : `${projects.length} projects`
          }
        >
          {firstVisibleProject !== undefined && lastVisibleProject !== undefined
            ? `${formatCarouselPosition(firstVisibleProject + 1)}–${formatCarouselPosition(lastVisibleProject + 1)}`
            : "--"}
          <span className="mx-1.5 text-slate-300">/</span>
          {formatCarouselPosition(projects.length)}
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[24px_minmax(0,1fr)] gap-3">
        <div
          ref={scrollContainerRef}
          onScroll={updateScrollControls}
          className={clsx(
            styles.selectorScroll,
            "col-start-2 row-start-1 flex h-full min-h-0 flex-col gap-2.5 overflow-y-auto",
          )}
        >
          {projects.map((project, projectIndex) => {
            const isActive = projectIndex === activeIndex;

            return (
              <button
                key={`${project.title}-${projectIndex}`}
                ref={isActive ? activeProjectRef : undefined}
                data-project-index={projectIndex}
                type="button"
                onClick={() => onSelect(projectIndex)}
                aria-label={`Show ${project.title}`}
                aria-pressed={isActive}
                className={clsx(
                  "group relative flex min-h-[76px] shrink-0 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300",
                  isActive
                    ? "border-purple-300 bg-white shadow-xl shadow-purple-300/20"
                    : "border-slate-200 bg-white/60 hover:-translate-y-0.5 hover:border-purple-200 hover:bg-white hover:shadow-lg",
              )}
            >
                {isActive && (
                  <span
                    className={clsx(
                      "absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b",
                      project.gradient,
                    )}
                  />
                )}

                <div className="flex w-full items-center gap-3">
                  <span
                    className={clsx(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-[11px] font-bold text-white shadow-md",
                      project.gradient,
                    )}
                  >
                    {formatCarouselPosition(projectIndex + 1)}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p
                      className={clsx(
                        "truncate text-xs font-bold",
                        isActive ? "text-slate-900" : "text-slate-700",
                      )}
                    >
                      {project.shortTitle}
                    </p>
                    <p className="mt-1 truncate text-[9px] text-slate-500">
                      {project.role}
                    </p>
                  </div>
                </div>

                {isActive && (
                  <span
                    className={clsx(
                      styles.selectorProgress,
                      "absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500",
                    )}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          className={clsx(
            "pointer-events-none col-start-2 row-start-1 z-10 h-10 self-start bg-gradient-to-b from-white/95 via-white/70 to-transparent backdrop-blur-[1px] transition-opacity duration-300",
            canScrollUp ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
        />
        <div
          className={clsx(
            "pointer-events-none col-start-2 row-start-1 z-10 h-10 self-end bg-gradient-to-t from-white/95 via-white/70 to-transparent backdrop-blur-[1px] transition-opacity duration-300",
            canScrollDown ? "opacity-100" : "opacity-0",
          )}
          aria-hidden="true"
        />

        <div className="col-start-1 row-start-1 flex h-56 w-6 self-center justify-self-center flex-col items-center rounded-full border border-purple-100/90 bg-gradient-to-b from-white via-purple-50/90 to-white py-3 shadow-[0_10px_30px_rgba(139,92,246,0.16)] backdrop-blur-md">
          <button
            type="button"
            onClick={() => scrollProjects("up")}
            disabled={!canScrollUp}
            aria-label="Scroll project list up"
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-[7px] text-white shadow-md shadow-purple-300/40 ring-2 ring-white transition hover:scale-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-100 disabled:text-slate-300 disabled:shadow-none disabled:hover:scale-100"
          >
            <FaChevronUp />
          </button>

          <nav
            className="my-4 flex min-h-0 flex-1 flex-col items-center justify-center gap-0.5"
            aria-label="Select a project"
          >
            {projects.map((project, projectIndex) => {
              const isVisible = visibleProjectIndexes.includes(projectIndex);

              return (
                <button
                  key={`project-dot-${project.title}`}
                  type="button"
                  onClick={() => onSelect(projectIndex)}
                  aria-label={`Show ${project.title}`}
                  title={project.shortTitle}
                  className="group flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full"
                >
                  <span
                    className={clsx(
                      "block rounded-full transition-all duration-300",
                      isVisible
                        ? clsx(
                            "h-2 w-2 bg-gradient-to-br opacity-100 shadow-[0_0_7px_rgba(139,92,246,0.55)] ring-1 ring-white",
                            project.gradient,
                          )
                        : "h-1 w-1 bg-slate-300 opacity-45 blur-[0.3px] group-hover:h-1.5 group-hover:w-1.5 group-hover:bg-purple-300 group-hover:opacity-90 group-hover:blur-none",
                    )}
                  />
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => scrollProjects("down")}
            disabled={!canScrollDown}
            aria-label="Scroll project list down"
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-[7px] text-white shadow-md shadow-purple-300/40 ring-2 ring-white transition hover:scale-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-100 disabled:text-slate-300 disabled:shadow-none disabled:hover:scale-100"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DesktopProjectSelector;
