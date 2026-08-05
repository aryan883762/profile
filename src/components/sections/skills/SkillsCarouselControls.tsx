import clsx from "clsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { formatCarouselPosition } from "@/utils/format-carousel-position";
import type { SkillGroup } from "@/types/skill";

import styles from "./Skills.module.css";

interface SkillsCarouselControlsProps {
  activeIndex: number;
  groups: SkillGroup[];
  isAllSelected: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
}

const SkillsCarouselControls = ({
  activeIndex,
  groups,
  isAllSelected,
  onNext,
  onPrevious,
  onSelect,
}: SkillsCarouselControlsProps) => (
  <div className="mt-6 flex flex-col items-center justify-between gap-5 sm:flex-row">
    <div className="flex items-center gap-2.5">
      {groups.map((group, index) => (
        <button
          key={group.id}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Show ${group.title}`}
          aria-current={activeIndex === index ? "true" : undefined}
          className={clsx(
            "relative h-2.5 overflow-hidden rounded-full transition-all duration-500",
            activeIndex === index
              ? "w-14 bg-slate-200"
              : "w-2.5 bg-slate-300 hover:bg-purple-300",
          )}
        >
          {activeIndex === index && !isAllSelected && (
            <span
              className={clsx(
                styles.carouselProgress,
                "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500",
              )}
            />
          )}
          {activeIndex === index && isAllSelected && (
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
          )}
        </button>
      ))}
    </div>

    <div className="flex items-center gap-3 lg:hidden">
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Show previous skill category"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:text-purple-600"
      >
        <FaArrowLeft />
      </button>

      <span className="min-w-16 text-center text-sm font-semibold text-slate-600">
        {formatCarouselPosition(activeIndex + 1)}
        <span className="mx-2 text-slate-300">/</span>
        {formatCarouselPosition(groups.length)}
      </span>

      <button
        type="button"
        onClick={onNext}
        aria-label="Show next skill category"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:text-purple-600"
      >
        <FaArrowRight />
      </button>
    </div>

    <div className="hidden text-sm font-medium text-slate-500 sm:block">
      <span className="font-bold text-purple-600">
        {formatCarouselPosition(activeIndex + 1)}
      </span>
      <span className="mx-2">/</span>
      <span>{formatCarouselPosition(groups.length)}</span>
    </div>
  </div>
);

export default SkillsCarouselControls;
