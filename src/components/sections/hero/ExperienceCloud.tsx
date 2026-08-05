import { experiences } from "@/data/experiences";

import ExperienceCard from "./ExperienceCard";

const ExperienceCloud = () => {
  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:flex lg:min-h-[620px] lg:max-w-none lg:items-center lg:justify-center"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      <div className="relative hidden h-[620px] w-[570px] lg:block">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-300/30 via-purple-300/30 to-cyan-300/30 blur-3xl" />

        {/* Orbits */}
        <div className="hero-orbit-outer absolute left-1/2 top-1/2 h-[470px] w-[470px] rounded-full border border-dashed border-purple-300/50" />
        <div className="hero-orbit-inner absolute left-1/2 top-1/2 h-[335px] w-[335px] rounded-full border border-pink-300/40" />

        {/* Animated connectors */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 570 620"
          fill="none"
          aria-hidden="true"
        >
          {/* Heady to Fig */}
          <g>
            <path
              d="M120 130 C225 65 330 175 450 110"
              className="hero-connector-base"
            />
            <path
              d="M120 130 C225 65 330 175 450 110"
              className="hero-connector-signal hero-signal-pink"
            />
          </g>

          {/* Fig to Mechlin */}
          <g>
            <path
              d="M450 110 C530 220 400 270 450 395"
              className="hero-connector-base"
            />
            <path
              d="M450 110 C530 220 400 270 450 395"
              className="hero-connector-signal hero-signal-orange hero-signal-delay-1"
            />
          </g>

          {/* Mechlin to Technicus */}
          <g>
            <path
              d="M450 395 C350 520 250 410 125 500"
              className="hero-connector-base"
            />
            <path
              d="M450 395 C350 520 250 410 125 500"
              className="hero-connector-signal hero-signal-green hero-signal-delay-2"
            />
          </g>

          {/* Technicus to Heady */}
          <g>
            <path
              d="M125 500 C35 390 185 320 110 220"
              className="hero-connector-base"
            />
            <path
              d="M125 500 C35 390 185 320 110 220"
              className="hero-connector-signal hero-signal-purple hero-signal-delay-3"
            />
          </g>

          {/* Heady to Datetix */}
          <g>
            <path
              d="M110 220 C185 260 225 290 285 310"
              className="hero-connector-base"
            />
            <path
              d="M110 220 C185 260 225 290 285 310"
              className="hero-connector-signal hero-signal-blue hero-signal-delay-1"
            />
          </g>

          {/* Datetix to Mechlin */}
          <g>
            <path
              d="M285 310 C350 325 395 350 450 395"
              className="hero-connector-base"
            />
            <path
              d="M285 310 C350 325 395 350 450 395"
              className="hero-connector-signal hero-signal-cyan hero-signal-delay-2"
            />
          </g>
        </svg>

        {/* Top-left */}
        <div className="absolute left-0 top-16 w-[270px] -rotate-3">
          <div className="hero-card-float-slow">
            <ExperienceCard experience={experiences[0]} index={0} />
          </div>
        </div>

        {/* Top-right */}
        <div className="absolute right-0 top-4 w-[235px] rotate-3">
          <div className="hero-card-float-medium">
            <ExperienceCard experience={experiences[1]} index={1} />
          </div>
        </div>

        {/* Center */}
        <div className="absolute left-1/2 top-[225px] z-20 w-[285px] -translate-x-1/2 rotate-1">
          <div className="hero-card-float-center">
            <ExperienceCard
              experience={experiences[2]}
              index={2}
              featured
            />
          </div>
        </div>

        {/* Bottom-left */}
        <div className="absolute bottom-8 left-3 w-[245px] rotate-3">
          <div className="hero-card-float-medium">
            <ExperienceCard experience={experiences[4]} index={4} />
          </div>
        </div>

        {/* Bottom-right */}
        <div className="absolute bottom-20 right-0 w-[255px] -rotate-3">
          <div className="hero-card-float-slow">
            <ExperienceCard experience={experiences[3]} index={3} />
          </div>
        </div>

        {/* Decorative particles */}
        <div className="hero-particle-one absolute left-6 top-6 h-5 w-5 rounded-full bg-pink-400/70" />
        <div className="hero-particle-two absolute right-8 top-48 h-4 w-4 rounded-full bg-cyan-400/70" />
        <div className="hero-particle-three absolute bottom-14 left-1/2 h-3 w-3 rounded-full bg-purple-500/70" />
        <div className="hero-floating-square absolute right-3 top-1/2 h-12 w-12 rounded-2xl border border-purple-300/60 bg-white/20 backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default ExperienceCloud;
