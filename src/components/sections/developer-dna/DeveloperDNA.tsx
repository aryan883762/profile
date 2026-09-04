import { FaCode, FaRocket } from "react-icons/fa";

import DeveloperDNAVisual from "./DeveloperDNAVisual";
import DeveloperValues from "./DeveloperValues";
import { profileLinks } from "@/constants/navigation";
import styles from "./DeveloperDNA.module.css";
import performanceStyles from "@/styles/performance.module.css";

const DeveloperDNA = () => {
  return (
    <section
      id="about"
      className={`${styles.root} ${performanceStyles.deferredSection} relative scroll-mt-[72px] overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white`}
    >
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute left-1/2 top-12 h-52 w-52 rounded-full bg-purple-300/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-screen-xl items-center gap-12 px-6 py-16 md:px-12 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
        <DeveloperDNAVisual />

        <div data-aos="fade-left" data-aos-duration="1100">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-purple-600">
            <FaCode />
            How I Work
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
            Engineering Beyond{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Code
            </span>
          </h2>

          <p className="mb-7 mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            I combine product thinking, system design, and hands-on delivery to
            turn ambiguous requirements into reliable software that creates
            measurable value.
          </p>

          <DeveloperValues />

          <div className="mt-8">
            <a
              href={profileLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Let&apos;s Connect
              <FaRocket className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperDNA;
