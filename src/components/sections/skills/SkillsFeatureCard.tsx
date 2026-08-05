import clsx from "clsx";

import AllSkillsPanel from "./AllSkillsPanel";
import SkillGroupPanel from "./SkillGroupPanel";
import type { CarouselDirection } from "@/hooks/useCarousel";
import type { SkillGroup } from "@/types/skill";
import styles from "./Skills.module.css";

interface SkillsFeatureCardProps {
  activeGroup: SkillGroup;
  direction: CarouselDirection;
  groups: SkillGroup[];
  isAllSelected: boolean;
  onSelectGroup: (groupId: string) => void;
}

const SkillsFeatureCard = ({
  activeGroup,
  direction,
  groups,
  isAllSelected,
  onSelectGroup,
}: SkillsFeatureCardProps) => (
  <article
    key={activeGroup.id}
    className={clsx(
      styles.featureCard,
      direction === "next" ? styles.slideNext : styles.slidePrevious,
      "relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/75 shadow-2xl shadow-purple-400/20 backdrop-blur-2xl lg:absolute lg:inset-0",
    )}
  >
    {isAllSelected ? (
      <AllSkillsPanel
        allSkillsGroup={activeGroup}
        groups={groups}
        onSelectGroup={onSelectGroup}
      />
    ) : (
      <SkillGroupPanel group={activeGroup} />
    )}
  </article>
);

export default SkillsFeatureCard;
