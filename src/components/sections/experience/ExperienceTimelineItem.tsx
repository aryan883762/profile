import clsx from "clsx";
import Image from "next/image";
import { FaCheck, FaMapMarkerAlt } from "react-icons/fa";

import type { Experience } from "@/types/experience";

interface ExperienceTimelineItemProps {
  experience: Experience;
  index: number;
}

const ExperienceTimelineItem = ({
  experience,
  index,
}: ExperienceTimelineItemProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid pl-16 md:grid-cols-[1fr_64px_1fr] md:pl-0">
      <div
        className={clsx(
          "md:row-start-1",
          isEven ? "md:col-start-1" : "md:col-start-3",
        )}
        data-aos={isEven ? "fade-right" : "fade-left"}
        data-aos-duration="900"
      >
        <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-xl shadow-purple-300/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-300/20 sm:p-6">
          <div
            className={clsx(
              "pointer-events-none absolute right-5 top-16 z-0 flex h-14 w-24 rotate-2 items-center justify-center overflow-hidden rounded-2xl border p-2.5 opacity-80 shadow-lg shadow-slate-200/70 transition duration-300 group-hover:opacity-95",
              experience.logoPanelClassName,
            )}
          >
            <Image
              src={experience.logoUrl}
              alt=""
              width={160}
              height={96}
              className={clsx(
                "h-full w-full object-contain",
                experience.logoImageClassName,
              )}
              aria-hidden="true"
            />
          </div>

          <div
            className={clsx(
              "absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br opacity-10 blur-3xl transition-opacity group-hover:opacity-20",
              experience.gradient,
            )}
          />

          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-500">
                  {experience.period}
                </p>
                <h3 className="mt-2 text-xl font-extrabold leading-tight text-slate-900 sm:text-2xl">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm font-bold text-purple-600">
                  {experience.company}
                </p>
              </div>

              <span
                className={clsx(
                  "rounded-full bg-gradient-to-r px-3 py-1.5 text-[10px] font-semibold text-white shadow-md",
                  experience.gradient,
                )}
              >
                {experience.type}
              </span>
            </div>

            <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-pink-500" />
              {experience.location}
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {experience.summary}
            </p>

            <ul className="mt-5 space-y-2.5">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2.5 text-xs leading-5 text-slate-600"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-50 text-[8px] text-purple-600">
                    <FaCheck />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      <div className="absolute left-0 top-5 flex h-12 w-12 items-center justify-center md:static md:col-start-2 md:row-start-1 md:mx-auto md:mt-5">
        <span
          className={clsx(
            "relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br text-sm font-extrabold text-white shadow-lg",
            experience.gradient,
          )}
        >
          {experience.initials}
        </span>
      </div>
    </div>
  );
};

export default ExperienceTimelineItem;
