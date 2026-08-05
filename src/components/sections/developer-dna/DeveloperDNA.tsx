import { FaCode, FaRocket } from "react-icons/fa";

import DeveloperDNAVisual from "./DeveloperDNAVisual";
import DeveloperValues from "./DeveloperValues";
import styles from "./DeveloperDNA.module.css";
import performanceStyles from "@/styles/performance.module.css";

const DeveloperDNA = () => {
  return (
    <section
      id="developer-dna"
      className={`${styles.root} ${performanceStyles.deferredSection} relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white`}
    >
      {/* Decorative background glows */}
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute left-1/2 top-12 h-52 w-52 rounded-full bg-purple-300/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-screen-xl items-center gap-16 px-6 py-24 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
        <DeveloperDNAVisual />

        <div data-aos="fade-left" data-aos-duration="1100">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
            <FaCode />
            Developer DNA
          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Beyond the{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Code
            </span>
          </h2>

          <p className="mb-10 mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            More than languages and frameworks — these are the principles that
            define how I solve problems, collaborate with teams, and deliver
            meaningful products.
          </p>

          <DeveloperValues />

          <div className="mt-10">
            <a
              href="https://www.linkedin.com/in/kumar-aryan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
