import Image from "next/image";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

import { education } from "@/data/experiences";
import { withBasePath } from "@/lib/asset-path";

const EducationSummary = () => (
  <div
    className="mt-16 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-xl shadow-purple-300/10 backdrop-blur-xl sm:p-8"
    data-aos="fade-up"
    data-aos-duration="900"
  >
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 text-lg text-white shadow-lg">
        <FaGraduationCap />
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-500">
          Academic foundation
        </p>
        <h3 className="mt-1 text-xl font-extrabold text-slate-900">
          Education
        </h3>
      </div>
    </div>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {education.map((item) => (
        <article
          key={`${item.qualification}-${item.period}`}
          className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/80 p-5"
        >
          <div className="pointer-events-none absolute right-4 top-4 flex h-10 w-16 items-center justify-center opacity-90">
            <Image
              src={withBasePath(item.logoUrl)}
              alt=""
              width={80}
              height={48}
              className="h-full w-full object-contain"
              aria-hidden="true"
            />
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.12em] text-pink-500">
            {item.period}
          </p>
          <h4 className="mt-2 max-w-[calc(100%-7rem)] text-sm font-bold leading-6 text-slate-900 sm:text-base">
            {item.qualification}
          </h4>
          <p className="mt-2 text-sm font-semibold text-purple-600">
            {item.institution}
          </p>
          <p className="mt-2 flex items-center gap-2 text-xs text-slate-500">
            <FaMapMarkerAlt className="text-pink-500" />
            {item.location}
          </p>
        </article>
      ))}
    </div>
  </div>
);

export default EducationSummary;
