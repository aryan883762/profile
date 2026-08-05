"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";

import {
  FaAndroid,
  FaAngular,
  FaApple,
  FaArrowLeft,
  FaArrowRight,
  FaAws,
  FaBrain,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaGlobe,
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
  FaServer,
  FaVuejs,
} from "react-icons/fa";

import {
  SiBitbucket,
  SiBootstrap,
  SiExpress,
  SiExpo,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiGraphql,
  SiIonic,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNetlify,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillGroup = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: IconType;
  gradient: string;
  accentBackground: string;
  items: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Frameworks",
    shortTitle: "Frontend",
    description:
      "Building scalable, responsive, and reusable frontend applications with modern component architecture.",
    icon: FaReact,
    gradient: "from-cyan-500 via-blue-500 to-violet-600",
    accentBackground: "bg-cyan-100",
    items: [
      { name: "ReactJS", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: FaAngular },
      { name: "Vue.js", icon: FaVuejs },
    ],
  },
  {
    id: "web",
    title: "Web Technologies",
    shortTitle: "Web",
    description:
      "Creating polished and accessible interfaces with modern web standards, styling systems, and strongly typed development.",
    icon: FaCode,
    gradient: "from-pink-500 via-purple-500 to-blue-500",
    accentBackground: "bg-pink-100",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJsSquare },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Material UI", icon: SiMui },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    shortTitle: "Backend",
    description:
      "Developing secure backend services, integrations, and APIs that support scalable web and mobile products.",
    icon: FaServer,
    gradient: "from-emerald-500 via-cyan-500 to-blue-500",
    accentBackground: "bg-emerald-100",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaServer },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Go", icon: SiGo },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    shortTitle: "Data",
    description:
      "Designing and integrating relational and document databases for reliable application data and real-time workflows.",
    icon: FaDatabase,
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    accentBackground: "bg-orange-100",
    items: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firestore", icon: SiFirebase },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    shortTitle: "Mobile",
    description:
      "Building cross-platform mobile applications for iOS and Android with shared architecture and native integrations.",
    icon: FaMobileAlt,
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    accentBackground: "bg-purple-100",
    items: [
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Expo", icon: SiExpo },
      { name: "Ionic", icon: SiIonic },
      { name: "Android Studio", icon: FaAndroid },
      { name: "Xcode", icon: FaApple },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    shortTitle: "DevOps",
    description:
      "Shipping applications with cloud services, containers, source control, and automated deployment pipelines.",
    icon: FaDocker,
    gradient: "from-blue-600 via-indigo-500 to-purple-600",
    accentBackground: "bg-blue-100",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Bitbucket", icon: SiBitbucket },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  },
  {
    id: "ai",
    title: "AI-Assisted Development",
    shortTitle: "AI",
    description:
      "Using AI tools to accelerate implementation, explore solutions, review code, and reduce repetitive engineering work.",
    icon: FaBrain,
    gradient: "from-fuchsia-500 via-purple-500 to-cyan-500",
    accentBackground: "bg-fuchsia-100",
    items: [
      { name: "Cursor", icon: SiOpenai },
      { name: "GitHub Copilot", icon: FaGithub },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "Claude", icon: FaBrain },
      { name: "OpenAI API", icon: SiOpenai },
    ],
  },
];

const allSkillGroup: SkillGroup = {
  id: "all",
  title: "Complete Technology Stack",
  shortTitle: "All",
  description:
    "A complete view of the frontend, backend, mobile, database, cloud, DevOps, and AI tools I use to deliver modern digital products.",
  icon: FaGlobe,
  gradient: "from-pink-500 via-purple-500 to-cyan-500",
  accentBackground: "bg-purple-100",
  items: [],
};

const SkillsSection = () => {
  const navigationGroups = useMemo(
    () => [allSkillGroup, ...skillGroups],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const activeGroup = navigationGroups[activeIndex];
  const ActiveIcon = activeGroup.icon;
  const isAllSelected = activeGroup.id === "all";

  const showNextGroup = useCallback(() => {
    setDirection("next");

    setActiveIndex((currentIndex) => {
      return (currentIndex + 1) % navigationGroups.length;
    });
  }, [navigationGroups.length]);

  const showPreviousGroup = useCallback(() => {
    setDirection("previous");

    setActiveIndex((currentIndex) => {
      return currentIndex === 0
        ? navigationGroups.length - 1
        : currentIndex - 1;
    });
  }, [navigationGroups.length]);

  const selectGroup = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? "next" : "previous");
    setActiveIndex(index);
  };

  useEffect(() => {
    if (isPaused || isAllSelected) {
      return;
    }

    const timer = window.setInterval(() => {
      showNextGroup();
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isAllSelected, isPaused, showNextGroup]);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/70 to-cyan-50"
    >
      {/* Background decorations */}
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/15 blur-3xl" />

      <div className="skills-section-grid absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-screen-xl px-6 py-16 md:px-12 lg:px-20">
        {/* Header */}
        <div
          className="mx-auto mb-8 max-w-3xl text-center"
          data-aos="fade-up"
        >
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

        {/* Category navigation */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {navigationGroups.map((group, index) => {
            const GroupIcon = group.icon;
            const isActive = activeIndex === index;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => selectGroup(index)}
                aria-label={`Show ${group.title}`}
                aria-pressed={isActive}
                className={`group flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${isActive
                  ? `border-transparent bg-gradient-to-r ${group.gradient} text-white shadow-lg`
                  : "border-slate-200 bg-white/75 text-slate-600 shadow-sm backdrop-blur-md hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-600"
                  }`}
              >
                <GroupIcon
                  className={
                    isActive
                      ? "text-sm text-white"
                      : "text-sm text-slate-500 group-hover:text-purple-600"
                  }
                />

                {group.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Fixed-height desktop carousel */}
        <div
          className="relative mx-auto max-w-5xl lg:h-[450px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Decorative stacked cards */}
          <div className="pointer-events-none absolute left-3 top-[225px] hidden h-[340px] w-24 -translate-x-10 -translate-y-1/2 -rotate-6 rounded-[2rem] border border-white/70 bg-white/40 shadow-xl backdrop-blur-lg lg:block" />

          <div className="pointer-events-none absolute right-3 top-[225px] hidden h-[340px] w-24 translate-x-10 -translate-y-1/2 rotate-6 rounded-[2rem] border border-white/70 bg-white/40 shadow-xl backdrop-blur-lg lg:block" />

          <article
            key={activeGroup.id}
            className={`skills-feature-card relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/75 shadow-2xl shadow-purple-400/20 backdrop-blur-2xl lg:absolute lg:inset-0 ${direction === "next"
              ? "skills-slide-next"
              : "skills-slide-previous"
              }`}
          >
            {isAllSelected ? (
              <div className="grid h-full lg:grid-cols-[0.3fr_0.7fr]">
                {/* All-skills visual */}
                <div
                  className={`relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br ${activeGroup.gradient} p-6 lg:min-h-0`}
                >
                  <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/15 blur-2xl" />

                  <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/15 blur-2xl" />

                  <div className="skills-orbit-outer absolute left-1/2 top-1/2 h-[260px] w-[260px] rounded-full border border-dashed border-white/35" />

                  <div className="skills-orbit-inner absolute left-1/2 top-1/2 h-[185px] w-[185px] rounded-full border border-white/25" />

                  <div className="skills-center-icon relative z-20 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/50 bg-white/90 text-purple-600 shadow-2xl backdrop-blur-xl">
                    <FaGlobe className="text-5xl" />
                  </div>

                  {skillGroups.slice(0, 4).map((group, index) => {
                    const GroupIcon = group.icon;

                    const positions = [
                      "left-5 top-10 -rotate-6",
                      "right-5 top-12 rotate-6",
                      "bottom-10 left-6 rotate-5",
                      "bottom-10 right-6 -rotate-5",
                    ];

                    return (
                      <div
                        key={group.id}
                        className={`skills-floating-node absolute z-30 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/90 shadow-xl backdrop-blur-xl ${positions[index]}`}
                        style={{
                          animationDelay: `${index * -1.1}s`,
                        }}
                      >
                        <GroupIcon className="text-xl text-slate-700" />
                      </div>
                    );
                  })}
                </div>

                {/* All skill groups */}
                <div className="flex h-full flex-col justify-center p-5 sm:p-6 lg:p-7">
                  <div className="mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-purple-500">
                      Complete Stack
                    </p>

                    <h3 className="mt-1 text-2xl font-extrabold text-slate-900 lg:text-3xl">
                      All Technologies
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-slate-600">
                      Explore the complete set of technologies used across web,
                      mobile, backend, cloud, database, and AI development.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {skillGroups.map((group) => {
                      const GroupIcon = group.icon;

                      return (
                        <button
                          key={group.id}
                          type="button"
                          onClick={() => {
                            const index = navigationGroups.findIndex(
                              (item) => item.id === group.id,
                            );

                            selectGroup(index);
                          }}
                          className="group flex min-h-[54px] items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:bg-white hover:shadow-md"
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${group.gradient} text-white shadow-sm`}
                          >
                            <GroupIcon className="text-sm" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-bold text-slate-800">
                              {group.title}
                            </p>

                            <div className="mt-1 flex flex-wrap gap-x-1 text-[9px] leading-3 text-slate-500">
                              {group.items.slice(0, 4).map((skill, index) => (
                                <span key={skill.name}>
                                  {skill.name}
                                  {index <
                                    Math.min(group.items.length, 4) - 1 && " • "}
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
            ) : (
              <div className="grid h-full lg:grid-cols-[0.42fr_0.58fr]">
                {/* Animated category visual */}
                <div
                  className={`relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br ${activeGroup.gradient} p-5 lg:min-h-0`}
                >
                  <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/15 blur-2xl" />

                  <div className="absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-white/15 blur-2xl" />

                  <div className="skills-orbit-outer absolute left-1/2 top-1/2 h-[290px] w-[290px] rounded-full border border-dashed border-white/35" />

                  <div className="skills-orbit-inner absolute left-1/2 top-1/2 h-[205px] w-[205px] rounded-full border border-white/25" />

                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 420 450"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      className="skills-connector-line"
                      d="M210 225 C145 170 105 115 72 72"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6 10"
                      opacity="0.45"
                    />

                    <path
                      className="skills-connector-line skills-connector-delay"
                      d="M210 225 C280 168 330 115 360 72"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6 10"
                      opacity="0.45"
                    />

                    <path
                      className="skills-connector-line"
                      d="M210 225 C145 285 100 340 72 390"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6 10"
                      opacity="0.45"
                    />

                    <path
                      className="skills-connector-line skills-connector-delay"
                      d="M210 225 C285 285 330 340 360 390"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6 10"
                      opacity="0.45"
                    />
                  </svg>

                  <div className="skills-center-icon relative z-20 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/40 bg-white/90 text-slate-800 shadow-2xl backdrop-blur-xl">
                    <ActiveIcon className="text-5xl" />
                  </div>

                  {activeGroup.items.slice(0, 4).map((skill, index) => {
                    const SkillIcon = skill.icon;

                    const positions = [
                      "left-4 top-10 -rotate-6",
                      "right-4 top-12 rotate-6",
                      "bottom-10 left-5 rotate-5",
                      "bottom-10 right-4 -rotate-5",
                    ];

                    return (
                      <div
                        key={skill.name}
                        className={`skills-floating-node absolute z-30 flex w-[132px] items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 p-2.5 shadow-xl backdrop-blur-xl ${positions[index]}`}
                        style={{
                          animationDelay: `${index * -1.1}s`,
                        }}
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${activeGroup.accentBackground}`}
                        >
                          <SkillIcon className="text-lg text-slate-700" />
                        </div>

                        <span className="truncate text-[11px] font-bold text-slate-800">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Category information */}
                <div className="flex h-full flex-col justify-center p-6 lg:p-7">
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${activeGroup.gradient} text-white shadow-lg`}
                  >
                    <ActiveIcon className="text-xl" />
                  </div>

                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-purple-500">
                    Skill Category
                  </p>

                  <h3 className="text-2xl font-extrabold text-slate-900 lg:text-3xl">
                    {activeGroup.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-600">
                    {activeGroup.description}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {activeGroup.items.map((skill, index) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="skills-item-card group flex min-h-[66px] flex-col items-center justify-center gap-1.5 rounded-2xl border border-slate-100 bg-slate-50/80 p-2 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:bg-white hover:shadow-lg"
                          style={{
                            animationDelay: `${index * 70}ms`,
                          }}
                        >
                          <SkillIcon className="text-xl text-slate-700 transition duration-300 group-hover:scale-110 group-hover:text-purple-600" />

                          <span className="text-[10px] font-semibold leading-3 text-slate-600">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* Fixed desktop navigation */}
          <button
            type="button"
            onClick={showPreviousGroup}
            aria-label="Show previous skill category"
            className="skills-navigation-button absolute left-0 top-[225px] z-40 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-xl backdrop-blur-md transition hover:scale-110 hover:text-purple-600 lg:flex"
          >
            <FaArrowLeft />
          </button>

          <button
            type="button"
            onClick={showNextGroup}
            aria-label="Show next skill category"
            className="skills-navigation-button absolute right-0 top-[225px] z-40 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-slate-700 shadow-xl backdrop-blur-md transition hover:scale-110 hover:text-purple-600 lg:flex"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Bottom navigation */}
        <div className="mt-6 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5">
            {navigationGroups.map((group, index) => (
              <button
                key={group.id}
                type="button"
                onClick={() => selectGroup(index)}
                aria-label={`Show ${group.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${activeIndex === index
                  ? "w-14 bg-slate-200"
                  : "w-2.5 bg-slate-300 hover:bg-purple-300"
                  }`}
              >
                {activeIndex === index && !isAllSelected && (
                  <span className="skills-carousel-progress absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
                )}

                {activeIndex === index && isAllSelected && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile navigation */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={showPreviousGroup}
              aria-label="Show previous skill category"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:text-purple-600"
            >
              <FaArrowLeft />
            </button>

            <span className="min-w-16 text-center text-sm font-semibold text-slate-600">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-slate-300">/</span>
              {String(navigationGroups.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={showNextGroup}
              aria-label="Show next skill category"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition hover:text-purple-600"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="hidden text-sm font-medium text-slate-500 sm:block">
            <span className="font-bold text-purple-600">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="mx-2">/</span>

            <span>{String(navigationGroups.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;