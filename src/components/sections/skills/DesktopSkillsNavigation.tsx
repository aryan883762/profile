import clsx from "clsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styles from "./Skills.module.css";

interface DesktopSkillsNavigationProps {
  onNext: () => void;
  onPrevious: () => void;
}

const DesktopSkillsNavigation = ({
  onNext,
  onPrevious,
}: DesktopSkillsNavigationProps) => (
  <>
    <button
      type="button"
      onClick={onPrevious}
      aria-label="Show previous skill category"
      className={clsx(
        styles.navigationButton,
        "absolute left-0 top-[225px] z-40 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-xl backdrop-blur-md transition hover:scale-110 hover:text-purple-600 lg:flex",
      )}
    >
      <FaArrowLeft />
    </button>

    <button
      type="button"
      onClick={onNext}
      aria-label="Show next skill category"
      className={clsx(
        styles.navigationButton,
        "absolute right-0 top-[225px] z-40 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-xl backdrop-blur-md transition hover:scale-110 hover:text-purple-600 lg:flex",
      )}
    >
      <FaArrowRight />
    </button>
  </>
);

export default DesktopSkillsNavigation;
