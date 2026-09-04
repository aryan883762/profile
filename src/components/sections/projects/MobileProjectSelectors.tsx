import clsx from "clsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { formatCarouselPosition } from "@/utils/format-carousel-position";
import type { Project } from "@/types/project";
import styles from "./Projects.module.css";

interface MobileProjectSelectorsProps {
  activeIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
  projects: Project[];
}

const MobileProjectSelectors = ({
  activeIndex,
  onNext,
  onPrevious,
  onSelect,
  projects,
}: MobileProjectSelectorsProps) => (
  <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/80 p-2.5 shadow-lg shadow-purple-300/10 backdrop-blur-md sm:mt-5 sm:px-4 lg:hidden">
    <button
      type="button"
      onClick={onPrevious}
      aria-label="Show previous project"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm transition active:scale-95 sm:rounded-full"
    >
      <FaArrowLeft />
    </button>

    <div className="min-w-0 flex-1 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
        Project {formatCarouselPosition(activeIndex + 1)}
        <span className="mx-1.5 text-slate-300">/</span>
        {formatCarouselPosition(projects.length)}
      </p>

      <nav
        className="mt-2 flex items-center justify-center gap-1.5"
        aria-label="Select a project"
      >
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={project.title}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Show ${project.title}`}
              aria-current={isActive ? "true" : undefined}
              className={clsx(
                "relative h-2.5 overflow-hidden rounded-full transition-all duration-300",
                isActive
                  ? "w-8 bg-slate-200 sm:w-10"
                  : "w-2.5 bg-slate-300 hover:bg-purple-300",
              )}
            >
              {isActive && (
                <span
                  className={clsx(
                    styles.selectorProgress,
                    "absolute inset-0 bg-gradient-to-r",
                    project.gradient,
                  )}
                />
              )}
            </button>
          );
        })}
      </nav>
    </div>

    <button
      type="button"
      onClick={onNext}
      aria-label="Show next project"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-sm text-slate-700 shadow-sm transition active:scale-95 sm:rounded-full"
    >
      <FaArrowRight />
    </button>
  </div>
);

export default MobileProjectSelectors;
