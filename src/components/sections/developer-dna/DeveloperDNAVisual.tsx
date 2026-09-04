import {
  FaBrain,
  FaCheckCircle,
  FaCode,
  FaMobileAlt,
  FaReact,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import {
  SiFlutter,
  SiNextdotjs,
  SiOpenai,
  SiTypescript,
} from "react-icons/si";

const deliveryStages = [
  {
    step: "01",
    title: "Discover",
    detail: "Goals · users · constraints",
    accent: "text-pink-300",
  },
  {
    step: "02",
    title: "Architect",
    detail: "Systems · data · interfaces",
    accent: "text-purple-300",
  },
  {
    step: "03",
    title: "Build",
    detail: "Web · mobile · AI",
    accent: "text-cyan-300",
  },
  {
    step: "04",
    title: "Ship & Improve",
    detail: "CI/CD · metrics · iteration",
    accent: "text-emerald-300",
  },
] as const;

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
            delivery-system.ts
          </div>
        </div>

        {/* Delivery pipeline */}
        <div className="bg-slate-950 px-5 py-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Product delivery loop
            </p>

            <span className="flex items-center gap-1.5 text-[9px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>

          <div className="space-y-2">
            {deliveryStages.map(({ step, title, detail, accent }) => (
              <div
                key={step}
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 transition-colors hover:bg-white/[0.07]"
              >
                <span
                  className={`font-mono text-[10px] font-bold ${accent}`}
                >
                  {step}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold text-white">{title}</p>
                  <p className="mt-0.5 text-[9px] text-slate-400">{detail}</p>
                </div>

                <FaCheckCircle className="text-[10px] text-emerald-400/80" />
              </div>
            ))}
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
            <p className="text-sm font-bold text-slate-900">Architecture</p>
            <p className="text-[10px] text-slate-500">Built for scale</p>
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
            <p className="text-sm font-bold text-slate-900">Delivery</p>
            <p className="text-[10px] text-slate-500">Idea to production</p>
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
            <p className="text-sm font-bold text-slate-900">Web + Native</p>
            <p className="text-[10px] text-slate-500">Shared foundations</p>
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
            <p className="text-sm font-bold text-slate-900">AI + Cloud</p>
            <p className="text-[10px] text-slate-500">Applied automation</p>
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

export default DeveloperDNAVisual;
