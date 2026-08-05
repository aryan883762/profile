import {
  FaBrain,
  FaRocket,
  FaPuzzlePiece,
  FaBullseye,
  FaChalkboardTeacher,
  FaCode,
  FaReact,
  FaMobileAlt,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiOpenai,
} from "react-icons/si";

const values = [
  {
    icon: <FaBrain className="text-3xl text-purple-500" />,
    title: "Problem Solving",
    description:
      "I find practical solutions that work — from building products from scratch to fixing complex performance issues.",
  },
  {
    icon: <FaRocket className="text-3xl text-pink-500" />,
    title: "Full Lifecycle Ownership",
    description:
      "From requirements and architecture to development, code reviews, deployment, and production support.",
  },
  {
    icon: <FaPuzzlePiece className="text-3xl text-blue-500" />,
    title: "Cross-Platform Development",
    description:
      "Comfortable across web and mobile using React, Next.js, Angular, React Native, and Flutter.",
  },
  {
    icon: <FaBullseye className="text-3xl text-emerald-500" />,
    title: "AI-Augmented Workflow",
    description:
      "Using Cursor, Copilot, ChatGPT, and Claude to accelerate development, code reviews, and repetitive work.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-orange-500" />,
    title: "Collaboration",
    description:
      "Working closely with developers, founders, designers, recruiters, and product teams to deliver strong products.",
  },
];

const DeveloperDNAVisual = () => {
  return (
    <div
      className="relative mx-auto flex min-h-[570px] w-full max-w-[530px] items-center justify-center"
      data-aos="fade-right"
      data-aos-duration="1100"
    >
      {/* Large background glow */}
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-300/40 via-purple-300/40 to-cyan-300/40 blur-3xl" />

      {/* Orbit rings */}
      <div className="developer-dna-orbit absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-300/70" />

      <div className="developer-dna-orbit-reverse absolute left-1/2 top-1/2 h-[325px] w-[325px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-300/60" />

      {/* Animated SVG connectors */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 530 570"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="dnaConnector"
            x1="50"
            y1="50"
            x2="480"
            y2="520"
          >
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        <path
          className="developer-dna-path"
          d="M265 285 C210 210 140 170 98 112"
          stroke="url(#dnaConnector)"
          strokeWidth="2"
          strokeDasharray="7 8"
          strokeLinecap="round"
        />

        <path
          className="developer-dna-path developer-dna-path-delay"
          d="M265 285 C330 205 398 170 447 113"
          stroke="url(#dnaConnector)"
          strokeWidth="2"
          strokeDasharray="7 8"
          strokeLinecap="round"
        />

        <path
          className="developer-dna-path"
          d="M265 285 C180 300 118 365 82 431"
          stroke="url(#dnaConnector)"
          strokeWidth="2"
          strokeDasharray="7 8"
          strokeLinecap="round"
        />

        <path
          className="developer-dna-path developer-dna-path-delay"
          d="M265 285 C345 300 415 365 452 435"
          stroke="url(#dnaConnector)"
          strokeWidth="2"
          strokeDasharray="7 8"
          strokeLinecap="round"
        />
      </svg>

      {/* Central code editor */}
      <div className="developer-dna-main-card relative z-20 w-[310px] overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 shadow-2xl shadow-purple-400/20 backdrop-blur-2xl sm:w-[335px]">
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-slate-200/70 bg-white/60 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <FaCode />
            developer-dna.ts
          </div>
        </div>

        {/* Code content */}
        <div className="bg-slate-950 px-5 py-6 font-mono text-xs leading-7 text-slate-300">
          <p>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-cyan-300">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-300">{"{"}</span>
          </p>

          <p className="pl-5">
            <span className="text-purple-300">mindset:</span>{" "}
            <span className="text-green-300">&quot;problem-solver&quot;</span>,
          </p>

          <p className="pl-5">
            <span className="text-purple-300">platforms:</span>{" "}
            <span className="text-blue-300">[&quot;web&quot;, &quot;mobile&quot;]</span>,
          </p>

          <p className="pl-5">
            <span className="text-purple-300">ownership:</span>{" "}
            <span className="text-orange-300">true</span>,
          </p>

          <p className="pl-5">
            <span className="text-purple-300">workflow:</span>{" "}
            <span className="text-green-300">&quot;AI-augmented&quot;</span>,
          </p>

          <p className="pl-5">
            <span className="text-purple-300">collaboration:</span>{" "}
            <span className="text-orange-300">100</span>,
          </p>

          <p>
            <span className="text-yellow-300">{"}"}</span>;
          </p>

          <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-emerald-300">
            <FaCheckCircle />
            <span>Ready to build something meaningful</span>
          </div>
        </div>

        {/* Technology row */}
        <div className="flex items-center justify-between bg-white/80 px-5 py-4">
          <SiNextdotjs className="text-xl text-slate-900" />
          <FaReact className="developer-tech-spin text-2xl text-cyan-500" />
          <SiTypescript className="text-xl text-blue-600" />
          <SiFlutter className="text-xl text-sky-500" />
          <SiOpenai className="text-xl text-emerald-600" />
        </div>
      </div>

      {/* Top-left node */}
      <div className="developer-dna-float-slow absolute left-0 top-12 z-30 w-[155px] -rotate-6 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
            <FaBrain className="text-xl text-purple-500" />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Think</p>
            <p className="text-[10px] text-slate-500">Solve clearly</p>
          </div>
        </div>
      </div>

      {/* Top-right node */}
      <div className="developer-dna-float-medium absolute right-0 top-16 z-30 w-[155px] rotate-6 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100">
            <FaRocket className="text-xl text-pink-500" />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Build</p>
            <p className="text-[10px] text-slate-500">Own delivery</p>
          </div>
        </div>
      </div>

      {/* Bottom-left node */}
      <div className="developer-dna-float-medium absolute bottom-14 left-2 z-30 w-[165px] rotate-5 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
            <FaMobileAlt className="text-xl text-blue-500" />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Cross-Platform</p>
            <p className="text-[10px] text-slate-500">Web + mobile</p>
          </div>
        </div>
      </div>

      {/* Bottom-right node */}
      <div className="developer-dna-float-slow absolute bottom-12 right-0 z-30 w-[165px] -rotate-5 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-xl backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
            <SiOpenai className="text-xl text-emerald-600" />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">AI Workflow</p>
            <p className="text-[10px] text-slate-500">Work smarter</p>
          </div>
        </div>
      </div>

      {/* Side collaboration node */}
      <div className="developer-dna-float absolute right-3 top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white shadow-xl">
        <FaUsers className="text-xl" />
      </div>

      {/* Floating particles */}
      <span className="developer-dna-particle absolute left-20 top-3 h-4 w-4 rounded-full bg-pink-400" />
      <span className="developer-dna-particle-delay absolute right-16 top-4 h-3 w-3 rounded-full bg-purple-500" />
      <span className="developer-dna-particle absolute bottom-6 left-1/2 h-3 w-3 rounded-full bg-cyan-400" />

      <span className="absolute left-1/2 top-10 h-10 w-10 rotate-12 rounded-xl border border-purple-300/60 bg-white/30 backdrop-blur-sm" />
    </div>
  );
};

const DeveloperDNA = () => {
  return (
    <section
      id="developer-dna"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/40 to-white"
    >
      {/* Decorative background glows */}
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute left-1/2 top-12 h-52 w-52 rounded-full bg-purple-300/15 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-screen-xl items-center gap-16 px-6 py-24 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-20">
        {/* Left animated visual */}
        <DeveloperDNAVisual />

        {/* Right content */}
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

          <div className="space-y-5">
            {values.map((item, index) => (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-purple-100 hover:bg-white hover:shadow-lg hover:shadow-purple-200/20"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

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