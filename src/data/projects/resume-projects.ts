import { FaCode } from "react-icons/fa";
import {
  SiAngular,
  SiGraphql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { Project } from "@/types/project";

export const resumeProjects: Project[] = [
  {
    title: "Booksmart — Multi-Tenant SaaS Platform",
    shortTitle: "Booksmart",
    subtitle:
      "A scalable Angular SaaS platform supporting more than 500 businesses with isolated data and tenant-specific configuration.",
    role: "Senior Frontend Developer",
    description:
      "Architected a modular multi-tenant platform, integrated the Boulevard API with smart caching, introduced optimistic booking updates, and moved sensitive operations behind secure server-side endpoints.",
    overview:
      "Booksmart is a multi-tenant SaaS platform designed to serve more than 500 businesses while preserving isolated tenant data, custom configuration, responsive booking workflows, and secure backend operations.",
    challenges: [
      "Maintaining strict data isolation and configuration across 500+ tenants",
      "Working within third-party API rate limits without slowing bookings",
      "Protecting sensitive operations previously exposed to the client",
    ],
    solutions: [
      "Structured the Angular application around modular tenant boundaries",
      "Added smart Boulevard API caching and optimistic booking updates",
      "Moved more than 25 sensitive endpoints to secure server-side logic",
    ],
    results: [
      "Reduced Boulevard API calls by 70%",
      "Improved booking confirmation time from 2.3 seconds to 0.9 seconds",
      "Maintained 95% API rate-limit compliance",
    ],
    link: "#contact",
    gradient: "from-violet-600 via-fuchsia-500 to-pink-500",
    tech: [
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "REST APIs", icon: FaCode },
    ],
    contributions: [
      "Multi-tenant architecture",
      "API caching",
      "Optimistic UI",
      "Server-side security",
    ],
  },
  {
    title: "IndustryJump — Career & Project Management Platform",
    shortTitle: "IndustryJump",
    subtitle:
      "A career and project platform helping freelance filmmakers manage hiring, payments, and administration.",
    role: "Software Engineer",
    description:
      "Developed responsive Angular interfaces and integrated REST APIs across hiring, payment, and administration workflows while collaborating with cross-functional product teams.",
    overview:
      "IndustryJump connects freelance filmmakers with the operational tools needed to manage project hiring, payments, administration, and related real-time platform workflows.",
    challenges: [
      "Supporting interconnected hiring, payment, and administration modules",
      "Keeping complex operational screens responsive and consistent",
      "Coordinating frontend behavior with multiple REST services",
    ],
    solutions: [
      "Built dynamic interfaces with Angular 4 and PrimeNG",
      "Integrated REST APIs across core product modules",
      "Worked with product and backend teams to align end-to-end workflows",
    ],
    results: [
      "Delivered responsive interfaces for core filmmaker workflows",
      "Improved consistency across hiring, payment, and admin experiences",
      "Established reusable patterns for continued module development",
    ],
    link: "#contact",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    tech: [
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PrimeNG", icon: FaCode },
      { name: "REST APIs", icon: FaCode },
    ],
    contributions: [
      "Hiring workflows",
      "Payment modules",
      "Admin interfaces",
      "REST integrations",
    ],
  },
  {
    title: "NavigateHCR — ACA Compliance Platform",
    shortTitle: "NavigateHCR",
    subtitle:
      "An enterprise platform for managing Affordable Care Act compliance and consulting workflows.",
    role: "Software Engineer",
    description:
      "Built responsive AngularJS interfaces, integrated full CRUD APIs, and delivered the Pre-Prospect module with frontend and backend support for sales and consulting teams.",
    overview:
      "NavigateHCR supports ACA compliance and consulting operations through structured data workflows, reusable enterprise interfaces, and integrated prospect-management capabilities.",
    challenges: [
      "Managing complex compliance and consulting data workflows",
      "Providing consistent CRUD behavior across enterprise modules",
      "Improving sales-team handling of pre-prospect information",
    ],
    solutions: [
      "Created responsive AngularJS and Angular Material interfaces",
      "Integrated APIs supporting complete CRUD workflows",
      "Built the Pre-Prospect module across frontend and backend boundaries",
    ],
    results: [
      "Improved sales data handling and lead conversion by more than 50%",
      "Streamlined consulting workflows through consistent data access",
      "Delivered maintainable UI and API foundations for future modules",
    ],
    link: "#contact",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    tech: [
      { name: "AngularJS", icon: SiAngular },
      { name: "Angular Material", icon: SiAngular },
      { name: "REST APIs", icon: FaCode },
    ],
    contributions: [
      "Pre-Prospect module",
      "CRUD workflows",
      "API integration",
      "Responsive UI",
    ],
  },
  {
    title: "Baton Market — E-Commerce & Content Platform",
    shortTitle: "Baton Market",
    subtitle:
      "A content-driven e-commerce platform built with Next.js, GraphQL, and Contentful CMS.",
    role: "Senior Frontend Developer",
    description:
      "Converted more than 25 Figma designs into responsive Next.js components, integrated Contentful through GraphQL, and applied mobile-first and SEO practices across the platform.",
    overview:
      "Baton Market combines e-commerce experiences with a flexible Contentful publishing workflow, allowing product and content teams to update hundreds of entries without engineering releases.",
    challenges: [
      "Translating a large Figma library into consistent production UI",
      "Managing hundreds of content entries through a headless CMS",
      "Improving organic discovery while maintaining responsive fidelity",
    ],
    solutions: [
      "Built more than 25 reusable Next.js and Tailwind components",
      "Integrated Contentful CMS through typed GraphQL queries",
      "Applied mobile-first layouts and technical SEO practices",
    ],
    results: [
      "Reduced design-to-development time by 40%",
      "Reduced content update time by 60% across 500+ entries",
      "Increased organic traffic by 45% within three months",
    ],
    link: "#contact",
    gradient: "from-orange-500 via-pink-500 to-purple-600",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    contributions: [
      "Figma implementation",
      "Contentful integration",
      "Responsive layouts",
      "Technical SEO",
    ],
  },
];
