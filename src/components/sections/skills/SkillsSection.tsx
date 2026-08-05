"use client";

import clsx from "clsx";

import DesktopSkillsNavigation from "./DesktopSkillsNavigation";
import SkillCategoryNavigation from "./SkillCategoryNavigation";
import SkillsCarouselControls from "./SkillsCarouselControls";
import SkillsFeatureCard from "./SkillsFeatureCard";
import SkillsHeader from "./SkillsHeader";
import { useCarousel } from "@/hooks/useCarousel";
import { skillGroups, skillNavigationGroups } from "@/data/skills";
import styles from "./Skills.module.css";
import performanceStyles from "@/styles/performance.module.css";

const SKILLS_AUTOPLAY_INTERVAL_MS = 5000;
const SKILLS_AUTOPLAY_DISABLED_INDEXES = [0] as const;

const SkillsSection = () => {
  const {
    activeIndex,
    direction,
    selectIndex,
    setIsPaused,
    showNext,
    showPrevious,
  } = useCarousel({
    itemCount: skillNavigationGroups.length,
    intervalMs: SKILLS_AUTOPLAY_INTERVAL_MS,
    autoplayDisabledIndexes: SKILLS_AUTOPLAY_DISABLED_INDEXES,
  });

  const activeGroup = skillNavigationGroups[activeIndex];
  const isAllSelected = activeGroup.id === "all";

  const selectGroupById = (groupId: string) => {
    const index = skillNavigationGroups.findIndex(
      (group) => group.id === groupId,
    );
    selectIndex(index);
  };

  return (
    <section
      id="skills"
      className={clsx(
        performanceStyles.deferredSection,
        "relative overflow-hidden bg-gradient-to-br from-white via-purple-50/70 to-cyan-50",
      )}
    >
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/15 blur-3xl" />
      <div
        className={clsx(styles.sectionGrid, "absolute inset-0 opacity-30")}
      />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-16 md:px-12 lg:px-20">
        <SkillsHeader />
        <SkillCategoryNavigation
          activeIndex={activeIndex}
          groups={skillNavigationGroups}
          onSelect={selectIndex}
        />

        <div
          className="relative mx-auto max-w-5xl lg:h-[450px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute left-3 top-[225px] hidden h-[340px] w-24 -translate-x-10 -translate-y-1/2 -rotate-6 rounded-[2rem] border border-white/70 bg-white/40 shadow-xl backdrop-blur-lg lg:block" />
          <div className="pointer-events-none absolute right-3 top-[225px] hidden h-[340px] w-24 translate-x-10 -translate-y-1/2 rotate-6 rounded-[2rem] border border-white/70 bg-white/40 shadow-xl backdrop-blur-lg lg:block" />

          <SkillsFeatureCard
            activeGroup={activeGroup}
            direction={direction}
            groups={skillGroups}
            isAllSelected={isAllSelected}
            onSelectGroup={selectGroupById}
          />
          <DesktopSkillsNavigation
            onNext={showNext}
            onPrevious={showPrevious}
          />
        </div>

        <SkillsCarouselControls
          activeIndex={activeIndex}
          groups={skillNavigationGroups}
          isAllSelected={isAllSelected}
          onNext={showNext}
          onPrevious={showPrevious}
          onSelect={selectIndex}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
