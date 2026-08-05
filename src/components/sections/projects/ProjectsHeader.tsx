import clsx from "clsx";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";

import styles from "./Projects.module.css";

interface ProjectsHeaderProps {
  onNext: () => void;
  onPrevious: () => void;
}

const ProjectsHeader = ({ onNext, onPrevious }: ProjectsHeaderProps) => (
  <div
    className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end lg:mb-9"
    data-aos="fade-up"
  >
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md sm:text-xs">
        <FaRocket />
        Selected Case Studies
      </div>

      <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
        Products I&apos;ve Helped{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Build
        </span>
      </h2>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
        Selected web, mobile, design-system, and enterprise products—from
        architecture and implementation to integration and delivery.
      </p>
    </div>

    <div className="hidden shrink-0 items-center gap-3 lg:flex">
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Show previous project"
        className={clsx(
          styles.galleryArrow,
          "flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:-translate-y-1 hover:text-purple-600",
        )}
      >
        <FaArrowLeft />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="Show next project"
        className={clsx(
          styles.galleryArrow,
          "flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:-translate-y-1 hover:text-purple-600",
        )}
      >
        <FaArrowRight />
      </button>
    </div>
  </div>
);

export default ProjectsHeader;
