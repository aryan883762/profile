import clsx from "clsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { formatCarouselPosition } from "@/utils/format-carousel-position";
import type { Project } from "@/types/project";

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
  <>
    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
      {projects.map((project, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={project.title}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show ${project.title}`}
            aria-pressed={isActive}
            className={clsx(
              "relative flex min-h-[66px] items-center gap-2 overflow-hidden rounded-2xl border p-2.5 text-left",
              isActive
                ? "border-purple-300 bg-white shadow-lg"
                : "border-slate-200 bg-white/70",
            )}
          >
            {isActive && (
              <span
                className={clsx(
                  "absolute inset-y-0 left-0 w-1 bg-gradient-to-b",
                  project.gradient,
                )}
              />
            )}

            <span
              className={clsx(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-[10px] font-bold text-white",
                project.gradient,
              )}
            >
              {formatCarouselPosition(index + 1)}
            </span>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold text-slate-800">
                {project.shortTitle}
              </p>
              <p className="mt-0.5 truncate text-[8px] text-slate-500">
                {project.role}
              </p>
            </div>
          </button>
        );
      })}
    </div>

    <div className="mt-5 flex items-center justify-center gap-4 lg:hidden">
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Show previous project"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md"
      >
        <FaArrowLeft />
      </button>

      <span className="min-w-[64px] text-center text-sm font-semibold text-slate-600">
        {formatCarouselPosition(activeIndex + 1)}
        <span className="mx-2 text-slate-300">/</span>
        {formatCarouselPosition(projects.length)}
      </span>

      <button
        type="button"
        onClick={onNext}
        aria-label="Show next project"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md"
      >
        <FaArrowRight />
      </button>
    </div>
  </>
);

export default MobileProjectSelectors;
