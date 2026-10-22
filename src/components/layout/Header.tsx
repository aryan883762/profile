"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  FaAngular,
  FaAws,
  FaDocker,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

import Container from "@/components/ui/Container";
import SocialLinks from "./SocialLinks";
import { headerSocialLinks, navigationLinks } from "@/constants/navigation";
import { withBasePath } from "@/lib/asset-path";
import styles from "./Header.module.css";

const fallingTechnologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-500",
    start: "-90px",
    mid: "-55px",
    curve: "-24px",
    duration: "7.2s",
    delay: "-1.1s",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-600",
    start: "-60px",
    mid: "-20px",
    curve: "16px",
    duration: "8.1s",
    delay: "-4.8s",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-slate-800",
    start: "-28px",
    mid: "-40px",
    curve: "-18px",
    duration: "7.5s",
    delay: "-2.7s",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-emerald-600",
    start: "18px",
    mid: "34px",
    curve: "18px",
    duration: "8.6s",
    delay: "-5.6s",
  },
  {
    name: "Angular",
    icon: FaAngular,
    color: "text-red-500",
    start: "54px",
    mid: "26px",
    curve: "-12px",
    duration: "7.8s",
    delay: "-3.5s",
  },
  {
    name: "Vue.js",
    icon: FaVuejs,
    color: "text-emerald-500",
    start: "88px",
    mid: "62px",
    curve: "24px",
    duration: "8.9s",
    delay: "-6.3s",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-500",
    start: "122px",
    mid: "58px",
    curve: "-18px",
    duration: "8.3s",
    delay: "-2s",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-500",
    start: "156px",
    mid: "86px",
    curve: "16px",
    duration: "9.2s",
    delay: "-7s",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
    start: "-120px",
    mid: "-72px",
    curve: "-30px",
    duration: "7.9s",
    delay: "-1.8s",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-blue-700",
    start: "180px",
    mid: "110px",
    curve: "30px",
    duration: "8.4s",
    delay: "-4s",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-amber-500",
    start: "210px",
    mid: "130px",
    curve: "-26px",
    duration: "9s",
    delay: "-6.8s",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    color: "text-pink-600",
    start: "240px",
    mid: "148px",
    curve: "20px",
    duration: "8s",
    delay: "-3s",
  },
] as const;

const TechRain = () => (
  <div className={styles.techRain} aria-hidden="true">
    {fallingTechnologies.map(
      ({ name, icon: Icon, color, start, mid, curve, duration, delay }) => (
        <span
          key={name}
          className={`${styles.fallingIcon} ${color}`}
          style={
            {
              "--start-x": start,
              "--mid-x": mid,
              "--curve-x": curve,
              "--fall-duration": duration,
              "--fall-delay": delay,
            } as CSSProperties
          }
        >
          <Icon />
        </span>
      ),
    )}
  </div>
);

const Header = () => {
  const [activeHref, setActiveHref] = useState("#home");
  const clickedHrefRef = useRef<string | null>(null);
  const clickLockTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      if (clickedHrefRef.current) {
        return;
      }

      const marker = window.scrollY + window.innerHeight * 0.3;
      let currentHref = navigationLinks[0].href;

      navigationLinks.forEach(({ href }) => {
        const section = document.querySelector<HTMLElement>(href);

        if (section && section.offsetTop <= marker) {
          currentHref = href;
        }
      });

      setActiveHref(currentHref);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);

      if (clickLockTimerRef.current !== null) {
        window.clearTimeout(clickLockTimerRef.current);
      }
    };
  }, []);

  const handleNavigationClick = (href: string) => {
    clickedHrefRef.current = href;
    setActiveHref(href);

    if (clickLockTimerRef.current !== null) {
      window.clearTimeout(clickLockTimerRef.current);
    }

    clickLockTimerRef.current = window.setTimeout(() => {
      clickedHrefRef.current = null;
      window.dispatchEvent(new Event("scroll"));
    }, 1000);
  };

  return (
    <header
      className={`${styles.header} sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur`}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <TechRain />
      </div>

      <Container className="relative z-10 grid grid-cols-[1fr_auto] items-center px-6 py-4 md:grid-cols-[1fr_auto_1fr] md:px-20">
        <a
          href="#home"
          className={`${styles.brand} group relative flex h-10 w-14 items-center justify-center md:w-16`}
          aria-label="Kumar Aryan - Home"
        >
          <span
            className={`${styles.logoGlow} absolute h-11 w-11 translate-y-3 rounded-full bg-gradient-to-br from-pink-400/30 via-purple-400/30 to-cyan-400/30 blur-md md:h-16 md:w-16 md:translate-y-8 md:blur-lg`}
            aria-hidden="true"
          />

          <span
            className={`${styles.absorbRing} pointer-events-none absolute h-14 w-14 translate-y-3 rounded-full border border-purple-300/70 md:h-20 md:w-20 md:translate-y-8`}
            aria-hidden="true"
          />

          <Image
            src={withBasePath("/logos/aryan-logo-1.webp")}
            alt="Kumar Aryan logo"
            width={80}
            height={80}
            className="relative z-10 h-11 w-11 translate-y-3 drop-shadow-md transition-transform duration-300 group-hover:scale-105 md:h-16 md:w-16 md:translate-y-8 md:drop-shadow-lg"
            priority
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden gap-8 text-sm font-medium md:flex"
        >
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={
                activeHref === href
                  ? "text-pink-500 transition-colors"
                  : "text-gray-600 transition-colors hover:text-pink-500"
              }
              aria-current={activeHref === href ? "page" : undefined}
              onClick={() => handleNavigationClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <SocialLinks
          className="flex items-center justify-self-end gap-4 text-lg text-gray-600"
          links={headerSocialLinks}
        />
      </Container>
    </header>
  );
};

export default Header;
