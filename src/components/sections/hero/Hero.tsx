import { FaExternalLinkAlt } from "react-icons/fa";

import ExperienceCloud from "./ExperienceCloud";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section
            id="home"
            className={`${styles.root} relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 font-sans`}
        >
            {/* Background decorations */}
            <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl" />

            <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-purple-300/15 blur-3xl" />

            <div
                className="
          relative mx-auto grid w-full max-w-screen-xl
          items-center gap-8 px-5 pb-10 pt-8
          sm:px-6 sm:pb-14 sm:pt-12
          md:px-12
          lg:min-h-[calc(100vh-64px)]
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-14 lg:px-16 lg:py-16
        "
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                {/* Left content */}
                <div
                    className="relative z-10 mx-auto w-full max-w-xl lg:mx-0"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                >
                    <p className="mb-3 text-sm font-medium text-pink-500 sm:text-base">
                        Hi, I&apos;m Kumar Aryan
                    </p>

                    <h1 className="text-[32px] font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Senior Full-Stack,
                        Mobile Developer
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        7+ years building scalable web and mobile applications with React,
                        Next.js, Angular, Vue.js, React Native, Flutter, and Node.js for
                        startups, agencies, and product teams across SaaS platforms,
                        dashboards, customer portals, and e-commerce solutions.
                    </p>

                    {/* Actions */}
                    <div
                        className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
                        data-aos="zoom-in"
                        data-aos-delay={200}
                    >
                        <a
                            href="https://www.upwork.com/freelancers/~015ed81f3311203b69"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5
                rounded-full bg-pink-500 px-2.5 py-2.5
                text-[9px] font-semibold text-white
                shadow-md
                transition duration-300
                hover:-translate-y-0.5 hover:bg-pink-600
                min-[380px]:px-3 min-[380px]:text-[10px]
                sm:px-7 sm:py-3 sm:text-sm
              "
                        >
                            <span className="truncate">Hire Me on Upwork</span>

                            <FaExternalLinkAlt className="shrink-0 text-[8px] sm:text-xs" />
                        </a>

                        <a
                            href="#projects"
                            className="
                inline-flex min-h-11 min-w-0 items-center justify-center
                rounded-full border border-slate-200
                bg-white/70 px-2.5 py-2.5
                text-[9px] font-semibold text-slate-700
                shadow-sm backdrop-blur-md
                transition duration-300
                hover:-translate-y-0.5
                hover:border-pink-300 hover:text-pink-500
                min-[380px]:px-3 min-[380px]:text-[10px]
                sm:px-7 sm:py-3 sm:text-sm
              "
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Mobile statistics */}
                    <div className="mt-5 lg:hidden">
                        <div className="grid grid-cols-3 divide-x divide-slate-200/80 overflow-hidden rounded-2xl border border-white/80 bg-white/65 shadow-sm backdrop-blur-xl">
                            {/* Experience */}
                            <div className="flex min-h-[82px] flex-col items-center justify-center px-1.5 py-3 text-center">
                                <p className="text-xl font-extrabold leading-none text-slate-900">
                                    7+
                                </p>

                                <p className="mt-1.5 text-[8px] font-medium leading-3 text-slate-500">
                                    Years Experience
                                </p>
                            </div>

                            {/* Companies */}
                            <div className="flex min-h-[82px] flex-col items-center justify-center px-1.5 py-3 text-center">
                                <p className="text-xl font-extrabold leading-none text-slate-900">
                                    5
                                </p>

                                <p className="mt-1.5 text-[8px] font-medium leading-3 text-slate-500">
                                    Companies
                                </p>
                            </div>

                            {/* Web and mobile */}
                            <div className="flex min-h-[82px] flex-col items-center justify-center px-1.5 py-3 text-center">
                                <p className="text-[12px] font-extrabold leading-4 text-slate-900 min-[380px]:text-[13px]">
                                    Web + Mobile
                                </p>

                                <p className="mt-1.5 text-[8px] font-medium leading-3 text-slate-500">
                                    Development
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Desktop statistics */}
                    <div className="mt-10 hidden max-w-lg overflow-hidden rounded-2xl border border-white/70 bg-white/45 shadow-sm backdrop-blur-md lg:block">
                        <div className="grid grid-cols-3 divide-x divide-slate-300/60">
                            <div className="px-4 py-4 text-center">
                                <p className="text-2xl font-extrabold leading-none text-slate-900">
                                    7+
                                </p>

                                <p className="mt-1 text-[11px] font-medium leading-3 text-slate-500">
                                    Years Experience
                                </p>
                            </div>

                            <div className="px-4 py-4 text-center">
                                <p className="text-2xl font-extrabold leading-none text-slate-900">
                                    5
                                </p>

                                <p className="mt-1 text-[11px] font-medium leading-3 text-slate-500">
                                    Companies
                                </p>
                            </div>

                            <div className="px-4 py-4 text-center">
                                <p className="text-xl font-extrabold leading-5 text-slate-900">
                                    Web + Mobile
                                </p>

                                <p className="mt-1 text-[11px] font-medium leading-3 text-slate-500">
                                    Development
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop experience cloud only */}
                <div className="hidden lg:block">
                    <ExperienceCloud />
                </div>
            </div>
        </section>
    );
};

export default Hero;
