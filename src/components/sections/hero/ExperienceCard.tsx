import clsx from "clsx";

import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
    experience: Experience;
    index: number;
    featured?: boolean;
}

const ExperienceCard = ({
    experience,
    index,
    featured = false,
}: ExperienceCardProps) => {
    return (
        <article
            className={clsx(
                "group relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-4 shadow-xl shadow-purple-300/20 backdrop-blur-xl transition-all duration-500 hover:z-40 hover:-translate-y-3 hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-purple-400/30",
                featured && "p-5 shadow-2xl",
            )}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
        >
            <div
                className={clsx(
                    "absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br opacity-15 blur-2xl transition-opacity group-hover:opacity-30",
                    experience.gradient,
                )}
            />

            <div className="relative flex items-start gap-3">
                <div
                    className={clsx(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-lg font-bold text-white shadow-lg",
                        experience.gradient,
                    )}
                >
                    {experience.initials}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <div>
                            <h3 className="text-sm font-bold leading-tight text-slate-900">
                                {experience.role}
                            </h3>

                            <p className="mt-1 text-xs font-medium text-slate-600">
                                {experience.company}
                            </p>
                        </div>

                        {experience.current && (
                            <span className="relative flex h-3 w-3 shrink-0">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                            </span>
                        )}
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span
                            className={clsx(
                                "rounded-full bg-gradient-to-r px-2.5 py-1 text-[10px] font-semibold text-white",
                                experience.gradient,
                            )}
                        >
                            {experience.period}
                        </span>

                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                            {experience.type}
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                    <span
                        key={item}
                        className={clsx(
                            "h-1.5 rounded-full",
                            item <= 5 - index
                                ? clsx("w-6 bg-gradient-to-r", experience.gradient)
                                : "w-2 bg-slate-200",
                        )}
                    />
                ))}
            </div>

            {experience.current && (
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Current Position
                </p>
            )}
        </article>
    );
};

export default ExperienceCard;
