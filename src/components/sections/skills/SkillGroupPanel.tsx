import clsx from "clsx";

import type { SkillGroup } from "@/types/skill";

import { SKILL_NODE_POSITIONS } from "./skill-positions";
import styles from "./Skills.module.css";

interface SkillGroupPanelProps {
  group: SkillGroup;
}

const SkillGroupPanel = ({ group }: SkillGroupPanelProps) => {
  const ActiveIcon = group.icon;

  return (
    <div className="grid h-full lg:grid-cols-[0.42fr_0.58fr]">
      <div
        className={clsx(
          "relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br p-5 lg:min-h-0",
          group.gradient,
        )}
      >
        <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-white/15 blur-2xl" />
        <div
          className={clsx(
            styles.orbitOuter,
            "absolute left-1/2 top-1/2 h-[290px] w-[290px] rounded-full border border-dashed border-white/35",
          )}
        />
        <div
          className={clsx(
            styles.orbitInner,
            "absolute left-1/2 top-1/2 h-[205px] w-[205px] rounded-full border border-white/25",
          )}
        />

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 420 450"
          fill="none"
          aria-hidden="true"
        >
          <path
            className={styles.connectorLine}
            d="M210 225 C145 170 105 115 72 72"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 10"
            opacity="0.45"
          />
          <path
            className={clsx(styles.connectorLine, styles.connectorDelay)}
            d="M210 225 C280 168 330 115 360 72"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 10"
            opacity="0.45"
          />
          <path
            className={styles.connectorLine}
            d="M210 225 C145 285 100 340 72 390"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 10"
            opacity="0.45"
          />
          <path
            className={clsx(styles.connectorLine, styles.connectorDelay)}
            d="M210 225 C285 285 330 340 360 390"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 10"
            opacity="0.45"
          />
        </svg>

        <div
          className={clsx(
            styles.centerIcon,
            "relative z-20 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/40 bg-white/90 text-slate-800 shadow-2xl backdrop-blur-xl",
          )}
        >
          <ActiveIcon className="text-5xl" />
        </div>

        {group.items.slice(0, 4).map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className={clsx(
                styles.floatingNode,
                "absolute z-30 flex w-[132px] items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 p-2.5 shadow-xl backdrop-blur-xl",
                SKILL_NODE_POSITIONS[index],
              )}
              style={{ animationDelay: `${index * -1.1}s` }}
            >
              <div
                className={clsx(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
                  group.accentBackground,
                )}
              >
                <Icon className="text-lg text-slate-700" />
              </div>
              <span className="truncate text-[11px] font-bold text-slate-800">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex h-full flex-col justify-center p-6 lg:p-7">
        <div
          className={clsx(
            "mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
            group.gradient,
          )}
        >
          <ActiveIcon className="text-xl" />
        </div>
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-500">
          Skill Category
        </p>
        <h3 className="text-2xl font-extrabold text-slate-900 lg:text-3xl">
          {group.title}
        </h3>
        <p className="mt-2 text-sm leading-5 text-slate-600">
          {group.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {group.items.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className={clsx(
                  styles.itemCard,
                  "group flex min-h-[66px] flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-white hover:shadow-lg",
                )}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <Icon className="text-xl text-slate-700 transition duration-300 group-hover:scale-110 group-hover:text-purple-600" />
                <span className="text-[10px] font-semibold leading-3 text-slate-600">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillGroupPanel;
