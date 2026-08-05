import clsx from "clsx";

import type { SkillGroup } from "@/types/skill";

interface SkillCategoryNavigationProps {
  activeIndex: number;
  groups: SkillGroup[];
  onSelect: (index: number) => void;
}

const SkillCategoryNavigation = ({
  activeIndex,
  groups,
  onSelect,
}: SkillCategoryNavigationProps) => (
  <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
    {groups.map((group, index) => {
      const Icon = group.icon;
      const isActive = activeIndex === index;

      return (
        <button
          key={group.id}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Show ${group.title}`}
          aria-pressed={isActive}
          className={clsx(
            "group flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300",
            isActive
              ? clsx(
                  "border-transparent bg-gradient-to-r text-white shadow-lg",
                  group.gradient,
                )
              : "border-slate-200 bg-white/75 text-slate-600 shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-600",
          )}
        >
          <Icon
            className={
              isActive
                ? "text-sm text-white"
                : "text-sm text-slate-500 group-hover:text-purple-600"
            }
          />
          {group.shortTitle}
        </button>
      );
    })}
  </div>
);

export default SkillCategoryNavigation;
