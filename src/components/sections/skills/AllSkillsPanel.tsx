import clsx from "clsx";
import { FaArrowRight, FaGlobe } from "react-icons/fa";

import type { SkillGroup } from "@/types/skill";

import { ALL_SKILL_NODE_POSITIONS } from "./skill-positions";
import styles from "./Skills.module.css";

interface AllSkillsPanelProps {
  allSkillsGroup: SkillGroup;
  groups: SkillGroup[];
  onSelectGroup: (groupId: string) => void;
}

const AllSkillsPanel = ({
  allSkillsGroup,
  groups,
  onSelectGroup,
}: AllSkillsPanelProps) => (
  <div className="grid h-full lg:grid-cols-[0.3fr_0.7fr]">
    <div
      className={clsx(
        "relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br p-6 lg:min-h-0",
        allSkillsGroup.gradient,
      )}
    >
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/15 blur-2xl" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/15 blur-2xl" />
      <div
        className={clsx(
          styles.orbitOuter,
          "absolute left-1/2 top-1/2 h-[260px] w-[260px] rounded-full border border-dashed border-white/35",
        )}
      />
      <div
        className={clsx(
          styles.orbitInner,
          "absolute left-1/2 top-1/2 h-[185px] w-[185px] rounded-full border border-white/25",
        )}
      />
      <div
        className={clsx(
          styles.centerIcon,
          "relative z-20 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/50 bg-white/90 text-purple-600 shadow-2xl backdrop-blur-xl",
        )}
      >
        <FaGlobe className="text-5xl" />
      </div>

      {groups.slice(0, 4).map((group, index) => {
        const Icon = group.icon;

        return (
          <div
            key={group.id}
            className={clsx(
              styles.floatingNode,
              "absolute z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/90 shadow-xl backdrop-blur-xl",
              ALL_SKILL_NODE_POSITIONS[index],
            )}
            style={{ animationDelay: `${index * -1.1}s` }}
          >
            <Icon className="text-xl text-slate-700" />
          </div>
        );
      })}
    </div>

    <div className="flex h-full flex-col justify-center p-5 sm:p-6 lg:p-7">
      <div className="mb-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-500">
          Complete Stack
        </p>
        <h3 className="mt-1 text-2xl font-extrabold text-slate-900 lg:text-3xl">
          All Technologies
        </h3>
        <p className="mt-2 text-sm leading-5 text-slate-600">
          Explore the complete set of technologies used across web, mobile,
          backend, cloud, database, and AI development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {groups.map((group) => {
          const Icon = group.icon;

          return (
            <button
              key={group.id}
              type="button"
              onClick={() => onSelectGroup(group.id)}
              className="group flex min-h-[54px] items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:bg-white hover:shadow-md"
            >
              <div
                className={clsx(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-sm",
                  group.gradient,
                )}
              >
                <Icon className="text-sm" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-slate-800">
                  {group.title}
                </p>
                <div className="mt-1 flex flex-wrap gap-x-1 text-[9px] leading-3 text-slate-500">
                  {group.items.slice(0, 4).map((skill, index) => (
                    <span key={skill.name}>
                      {skill.name}
                      {index < Math.min(group.items.length, 4) - 1 && " • "}
                    </span>
                  ))}
                  {group.items.length > 4 && (
                    <span>+{group.items.length - 4}</span>
                  )}
                </div>
              </div>

              <FaArrowRight className="text-[10px] text-slate-300 transition group-hover:translate-x-1 group-hover:text-purple-500" />
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

export default AllSkillsPanel;
