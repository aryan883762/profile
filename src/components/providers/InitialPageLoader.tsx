"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGo,
  SiGooglemaps,
  SiGraphql,
  SiBootstrap,
  SiExpress,
  SiGithubactions,
  SiLaravel,
  SiLoopback,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { preloadAssetPaths } from "@/constants/preload-assets";
import { withBasePath } from "@/lib/asset-path";
import styles from "./InitialPageLoader.module.css";

const MINIMUM_SEQUENCE_MS = 420;
const EXIT_SEQUENCE_MS = 480;
const PRELOAD_CONCURRENCY = 6;

const loaderSkills = [
  {
    name: "React",
    icon: FaReact,
    color: "#06b6d4",
    x: "-48vw",
    y: "-46vh",
    rotation: "-24deg",
    delay: "40ms",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#2563eb",
    x: "-42vw",
    y: "-52vh",
    rotation: "18deg",
    delay: "110ms",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#0f172a",
    x: "40vw",
    y: "-48vh",
    rotation: "28deg",
    delay: "180ms",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#16a34a",
    x: "48vw",
    y: "-40vh",
    rotation: "-22deg",
    delay: "260ms",
  },
  {
    name: "Vue.js",
    icon: FaVuejs,
    color: "#10b981",
    x: "46vw",
    y: "43vh",
    rotation: "20deg",
    delay: "90ms",
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "#ef4444",
    x: "38vw",
    y: "50vh",
    rotation: "-28deg",
    delay: "210ms",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#f59e0b",
    x: "-38vw",
    y: "50vh",
    rotation: "24deg",
    delay: "150ms",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#3b82f6",
    x: "-48vw",
    y: "40vh",
    rotation: "-20deg",
    delay: "300ms",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#1d4ed8",
    x: "-52vw",
    y: "-34vh",
    rotation: "26deg",
    delay: "200ms",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "#db2777",
    x: "-46vw",
    y: "-42vh",
    rotation: "-18deg",
    delay: "340ms",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#f43f5e",
    x: "50vw",
    y: "-44vh",
    rotation: "22deg",
    delay: "360ms",
  },
  {
    name: "SCSS",
    icon: SiSass,
    color: "#ec4899",
    x: "42vw",
    y: "-52vh",
    rotation: "-26deg",
    delay: "320ms",
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#eab308",
    x: "-38vw",
    y: "48vh",
    rotation: "32deg",
    delay: "390ms",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#f97316",
    x: "-46vw",
    y: "53vh",
    rotation: "-34deg",
    delay: "70ms",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#2563eb",
    x: "42vw",
    y: "50vh",
    rotation: "30deg",
    delay: "410ms",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06b6d4",
    x: "50vw",
    y: "38vh",
    rotation: "-36deg",
    delay: "130ms",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#7c3aed",
    x: "52vw",
    y: "-32vh",
    rotation: "28deg",
    delay: "440ms",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#16a34a",
    x: "44vw",
    y: "46vh",
    rotation: "-30deg",
    delay: "250ms",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#f59e0b",
    x: "-42vw",
    y: "-50vh",
    rotation: "34deg",
    delay: "370ms",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#f97316",
    x: "-50vw",
    y: "-38vh",
    rotation: "-28deg",
    delay: "170ms",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#334155",
    x: "-48vw",
    y: "38vh",
    rotation: "38deg",
    delay: "420ms",
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    color: "#059669",
    x: "-42vw",
    y: "48vh",
    rotation: "-32deg",
    delay: "280ms",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#0284c7",
    x: "42vw",
    y: "46vh",
    rotation: "26deg",
    delay: "460ms",
  },
  {
    name: "Mobile",
    icon: FaMobileAlt,
    color: "#a855f7",
    x: "50vw",
    y: "52vh",
    rotation: "-38deg",
    delay: "230ms",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#0ea5e9",
    x: "-36vw",
    y: "-52vh",
    rotation: "36deg",
    delay: "480ms",
  },
  {
    name: "Go",
    icon: SiGo,
    color: "#06b6d4",
    x: "38vw",
    y: "-54vh",
    rotation: "-24deg",
    delay: "310ms",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#10b981",
    x: "50vw",
    y: "-36vh",
    rotation: "32deg",
    delay: "400ms",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#ec4899",
    x: "-50vw",
    y: "48vh",
    rotation: "-34deg",
    delay: "350ms",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7c3aed",
    x: "-54vw",
    y: "-44vh",
    rotation: "30deg",
    delay: "490ms",
  },
  {
    name: "Material UI",
    icon: SiMui,
    color: "#0284c7",
    x: "-44vw",
    y: "-56vh",
    rotation: "-32deg",
    delay: "430ms",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#334155",
    x: "44vw",
    y: "-56vh",
    rotation: "34deg",
    delay: "510ms",
  },
  {
    name: "LoopBack",
    icon: SiLoopback,
    color: "#dc2626",
    x: "54vw",
    y: "-44vh",
    rotation: "-30deg",
    delay: "450ms",
  },
  {
    name: "Stripe",
    icon: SiStripe,
    color: "#6366f1",
    x: "54vw",
    y: "44vh",
    rotation: "32deg",
    delay: "500ms",
  },
  {
    name: "Google Maps",
    icon: SiGooglemaps,
    color: "#16a34a",
    x: "44vw",
    y: "56vh",
    rotation: "-34deg",
    delay: "470ms",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#0f172a",
    x: "-44vw",
    y: "56vh",
    rotation: "28deg",
    delay: "520ms",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    color: "#2563eb",
    x: "-54vw",
    y: "44vh",
    rotation: "-36deg",
    delay: "460ms",
  },
] as const;

type LoaderPhase = "loading" | "exiting" | "hidden";

const InitialPageLoader = () => {
  const [phase, setPhase] = useState<LoaderPhase>("loading");
  const [loadedAssetCount, setLoadedAssetCount] = useState(0);
  const progress = Math.round(
    (loadedAssetCount / preloadAssetPaths.length) * 100,
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const minimumDuration = prefersReducedMotion ? 0 : MINIMUM_SEQUENCE_MS;
    const exitDuration = prefersReducedMotion ? 100 : EXIT_SEQUENCE_MS;
    const originalOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;
    let isCancelled = false;
    let exitTimer: number | undefined;
    let handlePageLoad: (() => void) | undefined;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const beginExit = () => {
      setPhase("exiting");
      exitTimer = window.setTimeout(() => {
        document.documentElement.style.overflow = originalOverflow;
        document.body.style.overflow = originalBodyOverflow;
        setPhase("hidden");
      }, exitDuration);
    };

    const waitForPageLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }

      handlePageLoad = resolve;
      window.addEventListener("load", handlePageLoad, { once: true });
    });

    const waitForMinimumDuration = new Promise<void>((resolve) => {
      window.setTimeout(resolve, minimumDuration);
    });

    const preloadImage = (assetPath: string, index: number) =>
      new Promise<void>((resolve) => {
        const image = new window.Image();
        let isSettled = false;

        const settle = () => {
          if (isSettled) return;
          isSettled = true;
          image.onload = null;
          image.onerror = null;
          if (!isCancelled) {
            setLoadedAssetCount((currentCount) => currentCount + 1);
          }
          resolve();
        };

        image.decoding = "async";
        image.fetchPriority = index < PRELOAD_CONCURRENCY ? "high" : "auto";
        image.onload = settle;
        image.onerror = settle;
        image.src = withBasePath(assetPath);

        if (image.complete) settle();
      });

    const preloadAllAssets = async () => {
      let nextAssetIndex = 0;
      const workers = Array.from(
        {
          length: Math.min(PRELOAD_CONCURRENCY, preloadAssetPaths.length),
        },
        async () => {
          while (nextAssetIndex < preloadAssetPaths.length) {
            const assetIndex = nextAssetIndex;
            nextAssetIndex += 1;
            await preloadImage(preloadAssetPaths[assetIndex], assetIndex);
          }
        },
      );

      await Promise.all(workers);
    };

    const preparePortfolio = async () => {
      await Promise.all([
        waitForPageLoad,
        waitForMinimumDuration,
        document.fonts?.ready ?? Promise.resolve(),
        preloadAllAssets(),
      ]);

      if (!isCancelled) beginExit();
    };

    void preparePortfolio();

    return () => {
      isCancelled = true;

      if (handlePageLoad) {
        window.removeEventListener("load", handlePageLoad);
      }

      if (exitTimer !== undefined) {
        window.clearTimeout(exitTimer);
      }

      document.documentElement.style.overflow = originalOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      role="progressbar"
      aria-label="Loading Kumar Aryan's portfolio"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      className={`${styles.loader} ${phase === "exiting" ? styles.exiting : ""}`}
    >
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.skillField} aria-hidden="true">
        {loaderSkills.map(
          ({ name, icon: Icon, color, x, y, rotation, delay }) => (
            <span
              key={name}
              className={styles.skillBadge}
              style={
                {
                  "--skill-color": color,
                  "--start-x": x,
                  "--start-y": y,
                  "--start-rotation": rotation,
                  "--skill-delay": delay,
                } as CSSProperties
              }
            >
              <Icon />
            </span>
          ),
        )}
      </div>

      <div className={styles.logoStage} aria-hidden="true">
        <span className={styles.orbit} />
        <span className={styles.chargeRing} />
        <span className={styles.impactRing} />
        <span className={styles.impactRingSecondary} />

        <span className={styles.logoShell}>
          <Image
            src={withBasePath("/logos/aryan-logo-1.webp")}
            alt=""
            width={112}
            height={112}
            sizes="112px"
            className={styles.logo}
            priority
          />
        </span>

        <span className={styles.sparkOne} />
        <span className={styles.sparkTwo} />
        <span className={styles.sparkThree} />
        <span className={styles.sparkFour} />
      </div>

      <div className={styles.caption}>
        <span className={styles.captionDot} />
        Loading portfolio · {progress}%
        <span className={styles.captionDot} />
      </div>

      <span className="sr-only">Loading portfolio</span>
    </div>
  );
};

export default InitialPageLoader;
