import { FaCode } from "react-icons/fa";

const SkillsHeader = () => (
  <div className="mx-auto mb-8 max-w-3xl text-center" data-aos="fade-up">
    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md">
      <FaCode />
      Technology Stack
    </div>

    <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
      My Tech{" "}
      <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
        Arsenal
      </span>
    </h2>

    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
      A practical toolkit for designing, building, testing, and delivering
      scalable web and mobile products.
    </p>
  </div>
);

export default SkillsHeader;
