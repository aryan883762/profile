import clsx from "clsx";

import { formatCarouselPosition } from "@/utils/format-carousel-position";
import type { Project } from "@/types/project";

import styles from "./Projects.module.css";

interface DesktopProjectSelectorProps {
  activeIndex: number;
  onSelect: (index: number) => void;
  projects: Project[];
  visibleIndexes: number[];
}

const DesktopProjectSelector = ({
  activeIndex,
  onSelect,
  projects,
  visibleIndexes,
}: DesktopProjectSelectorProps) => (
  <aside className="hidden h-[500px] lg:block">
    <div className="flex h-full flex-col gap-2.5">
      {visibleIndexes.map((projectIndex) => {
        const project = projects[projectIndex];
        const isActive = projectIndex === activeIndex;

        return (
          <button
            key={`${project.title}-${projectIndex}`}
            type="button"
            onClick={() => onSelect(projectIndex)}
            aria-label={`Show ${project.title}`}
            aria-pressed={isActive}
            className={clsx(
              "group relative flex min-h-[76px] flex-1 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300",
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
  </aside>
);

export default DesktopProjectSelector;
