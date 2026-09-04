import {
    FaBriefcase,
    FaExternalLinkAlt,
    FaLaptopCode,
    FaMobileAlt,
} from "react-icons/fa";

import ExperienceCloud from "./ExperienceCloud";
import { profileLinks } from "@/constants/navigation";
import styles from "./Hero.module.css";

const impactStats = [
    {
        value: "9+",
        label: "Years Experience",
        icon: FaBriefcase,
        iconColor: "text-violet-500",
    },
    {
        value: "10+",
        label: "Mobile Apps",
        icon: FaMobileAlt,
        iconColor: "text-fuchsia-500",
    },
    {
        value: "20+",
        label: "Web Apps",
        icon: FaLaptopCode,
        iconColor: "text-cyan-500",
    },
] as const;

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
          relative mx-auto grid w-full max-w-[1240px]
          items-center gap-8 px-5 pb-9 pt-8
          sm:px-6 sm:pb-12 sm:pt-10
          md:px-12
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-10 lg:px-12 lg:py-10
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
                    <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-pink-500 sm:text-xs">
                        <span className="h-px w-6 bg-pink-400" aria-hidden="true" />
                        Kumar Aryan
                    </p>

                    <h1 className="mt-3 text-[34px] font-extrabold leading-[1.06] tracking-[-0.035em] text-slate-950 sm:text-[42px] lg:text-[38px] xl:text-[44px]">
                        <span className="block">Senior Full-Stack,</span>
                        <span className="block">
                            React Native &amp;{" "}
                            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                AI
                            </span>{" "}
                            Developer
                        </span>
                    </h1>

                    <div
                        className="mt-4 flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-500 min-[380px]:gap-x-2.5 sm:text-[10px]"
                        aria-label="Core technologies"
                    >
                        {[
                            "React / Next.js",
                            "Node.js",
                            "React Native",
                            "AI / LLMs",
                        ].map((technology, index) => (
                            <span
                                key={technology}
                                className="flex items-center gap-2 min-[380px]:gap-2.5"
                            >
                                {index > 0 && (
                                    <span className="text-pink-400" aria-hidden="true">
                                        |
                                    </span>
                                )}
                                {technology}
                            </span>
                        ))}
                    </div>

                    <div className="mt-5 max-w-lg border-l-2 border-pink-400/80 pl-4">
                        <p className="text-[13px] leading-6 text-slate-700 sm:text-sm">
                            With 9+ years of experience, I design and ship{" "}
                            <span className="font-semibold text-slate-900">
                                production-grade web, React Native, and AI platforms
                            </span>
                            &mdash;from scalable interfaces and Node.js services to LLM
                            workflows and cloud deployment.
                        </p>

                        <div className="mt-2 space-y-0.5 text-[10px] leading-[1.7] text-slate-500 sm:text-[11px]">
                            <p>
                                <span className="font-mono font-bold tracking-wide text-purple-600">
                                    STACK /
                                </span>{" "}
                                TypeScript &middot; React / Next.js &middot; Angular /
                                Vue.js &middot; Node.js / Express &middot; MERN / MEAN /
                                MEVN &middot; React Native / Flutter
                            </p>

                            <p>
                                <span className="font-mono font-bold tracking-wide text-cyan-600">
                                    SYSTEMS /
                                </span>{" "}
                                REST / GraphQL &middot; MongoDB / PostgreSQL &middot;
                                OpenAI / LLMs &middot; DevOps &middot; GitHub Actions
                                CI/CD &middot; Docker / Kubernetes &middot; AWS / Firebase
                                / Supabase
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div
                        className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
                        data-aos="zoom-in"
                        data-aos-delay={200}
                    >
                        <a
                            href={profileLinks.upwork}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex min-h-10 min-w-0 items-center justify-center gap-1.5
                rounded-full bg-pink-500 px-3 py-2
                text-[10px] font-semibold text-white
                shadow-md
                transition duration-300
                hover:-translate-y-0.5 hover:bg-pink-600
                min-[380px]:text-[11px]
                sm:px-6 sm:py-2.5 sm:text-[13px]
              "
                        >
                            <span className="truncate">Hire Me on Upwork</span>

                            <FaExternalLinkAlt className="shrink-0 text-[8px] sm:text-xs" />
                        </a>

                        <a
                            href="#projects"
                            className="
                inline-flex min-h-10 min-w-0 items-center justify-center
                rounded-full border border-slate-200
                bg-white/70 px-3 py-2
                text-[10px] font-semibold text-slate-700
                shadow-sm backdrop-blur-md
                transition duration-300
                hover:-translate-y-0.5
                hover:border-pink-300 hover:text-pink-500
                min-[380px]:text-[11px]
                sm:px-6 sm:py-2.5 sm:text-[13px]
              "
                        >
                            View Projects
                        </a>
                    </div>

                    {/* Engineering impact */}
                    <div className="mt-6 max-w-lg">
                        <div className="flex items-center justify-between gap-4">
                            <p className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-violet-700 sm:text-[10px]">
                                <span className="h-px w-5 bg-violet-500" aria-hidden="true" />
                                Selected impact
                            </p>

                            <p className="text-[9px] font-medium text-slate-500 sm:text-[10px]">
                                Measured in production
                            </p>
                        </div>

                        <dl className="relative mt-3 grid grid-cols-3">
                            <div
                                className="absolute left-[16.66%] right-[16.66%] top-7 h-px bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200"
                                aria-hidden="true"
                            />

                            {impactStats.map(
                                ({ value, label, icon: Icon, iconColor }) => (
                                <div
                                    key={label}
                                    className="relative flex min-w-0 flex-col items-center px-1 text-center"
                                >
                                    <dd className="relative z-10 flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-full border border-violet-200 bg-white/85 font-extrabold tracking-tight shadow-lg shadow-violet-300/20 ring-4 ring-white/45 backdrop-blur-md sm:h-16 sm:w-16">
                                        <Icon
                                            className={`text-xs sm:text-sm ${iconColor}`}
                                            aria-hidden="true"
                                        />

                                        <span className="text-base leading-none text-slate-900 sm:text-lg">
                                            {value}
                                        </span>
                                    </dd>

                                    <dt className="mt-2 whitespace-nowrap text-[8px] font-semibold leading-3 text-slate-600 sm:text-[10px] sm:leading-4">
                                        {label}
                                    </dt>
                                </div>
                                ),
                            )}
                        </dl>
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
