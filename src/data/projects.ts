import type { IconType } from "react-icons";
import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiAngular,
    SiAxios,
    SiFirebase,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiRedux,
    SiStorybook,
    SiStyledcomponents,
    SiTypescript,
    SiXstate,
} from "react-icons/si";

export type Project = {
    title: string;
    shortTitle: string;
    subtitle: string;
    role: string;
    description: string;
    image: string;
    imagePosition?: string;
    link: string;
    gradient: string;
    tech: {
        name: string;
        icon: IconType;
    }[];
    contributions: string[];
    overview?: string;
    challenges?: string[];
    solutions?: string[];
    results?: string[];
};

export const projects: Project[] = [
    {
        title: "Mobile & Web Design System",
        shortTitle: "Design System",
        subtitle:
            "A shared component foundation for consistent web and mobile products.",
        role: "Senior Frontend Developer",
        description:
            "Designed and developed a reusable UI system for React and React Native applications using shared design tokens, accessible components, theming, responsive behavior, and Storybook documentation.",
        overview:
            "Created a shared design-system foundation used across web and mobile applications. The system standardized visual behavior, interaction patterns, accessibility, responsive layouts, and reusable component development across product teams.",
        challenges: [
            "Maintaining visual consistency across web and mobile applications",
            "Supporting accessible interactions and responsive behavior",
            "Keeping reusable components flexible without increasing complexity",
            "Documenting component usage for designers and developers",
        ],
        solutions: [
            "Created shared design tokens for typography, spacing, color, and themes",
            "Built reusable React and React Native component patterns",
            "Added accessibility standards and responsive component behavior",
            "Documented components, states, and usage examples in Storybook",
        ],
        results: [
            "Improved consistency across product experiences",
            "Reduced repeated UI implementation",
            "Made component adoption easier for engineering teams",
            "Created a scalable foundation for future product development",
        ],
        image: "/images/projects/adm-scrapping.png",
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-violet-600 via-purple-500 to-pink-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "React Native", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Storybook", icon: SiStorybook },
            { name: "Styled Components", icon: SiStyledcomponents },
        ],
        contributions: [
            "Component architecture",
            "Design tokens",
            "Accessibility",
            "Storybook documentation",
        ],
    },
    {
        title: "Digital Labeling Application",
        shortTitle: "Labeling App",
        subtitle:
            "A cross-platform mobile workflow for warehouse labeling operations.",
        role: "React Native Developer",
        description:
            "Built a mobile application for warehouse labeling and inventory processes, including barcode scanning, digital label generation, reusable components, and predictable state-driven workflows.",
        overview:
            "Developed a cross-platform mobile application that supported warehouse employees with barcode scanning, digital label generation, inventory-related activities, and predictable step-by-step workflows.",
        challenges: [
            "Supporting reliable barcode-based warehouse workflows",
            "Managing complex multi-step mobile application states",
            "Creating reusable interfaces for different labeling scenarios",
            "Integrating application data with Firebase services",
        ],
        solutions: [
            "Implemented barcode scanning and digital label generation workflows",
            "Used XState to manage predictable workflow transitions",
            "Created reusable React Native components with TypeScript",
            "Integrated Firebase for application services and data workflows",
        ],
        results: [
            "Simplified warehouse labeling activities",
            "Improved workflow consistency and maintainability",
            "Reduced duplicated mobile UI implementation",
            "Provided a scalable base for additional inventory capabilities",
        ],
        image: "/images/projects/datetix.png",
        imagePosition: "object-center",
        link: "#contact",
        gradient: "from-cyan-500 via-blue-500 to-violet-600",
        tech: [
            { name: "React Native", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "XState", icon: SiXstate },
            { name: "Firebase", icon: SiFirebase },
        ],
        contributions: [
            "Barcode scanning",
            "Label generation",
            "XState workflows",
            "Reusable mobile UI",
        ],
    },
    {
        title: "Cross-Platform Product Suite",
        shortTitle: "Product Suite",
        subtitle:
            "Scalable web and mobile products built with shared architecture.",
        role: "Senior Frontend Developer",
        description:
            "Contributed to production applications across React, Next.js, and React Native with shared architecture, authentication, real-time data, analytics, messaging, and automated deployment workflows.",
        overview:
            "Contributed to a suite of production web and mobile applications using shared frontend architecture. The products supported authentication, real-time communication, analytics, messaging, and automated delivery workflows.",
        challenges: [
            "Sharing architecture across web and mobile products",
            "Supporting secure authentication and real-time features",
            "Maintaining consistent behavior across multiple applications",
            "Automating reliable build and deployment workflows",
        ],
        solutions: [
            "Built shared React, Next.js, and React Native architecture",
            "Implemented authentication and reusable application services",
            "Integrated real-time data, analytics, and messaging capabilities",
            "Supported automated CI/CD workflows for consistent delivery",
        ],
        results: [
            "Improved reuse across product applications",
            "Reduced repeated development across platforms",
            "Supported scalable delivery of new product features",
            "Improved application consistency and deployment reliability",
        ],
        image: "/images/projects/launch27.png",
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-pink-500 via-rose-500 to-orange-400",
        tech: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React Native", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Firebase", icon: SiFirebase },
        ],
        contributions: [
            "Shared architecture",
            "Authentication",
            "Real-time integrations",
            "CI/CD automation",
        ],
    },
    {
        title: "Enterprise Operations Platform",
        shortTitle: "Enterprise App",
        subtitle:
            "A responsive platform supporting complex business operations.",
        role: "Frontend Software Engineer",
        description:
            "Developed enterprise interfaces for administration, hiring, payments, approvals, sales, and operations using reusable Angular components and multiple REST API integrations.",
        overview:
            "Developed responsive enterprise interfaces supporting administration, hiring, payments, approvals, sales, and operational workflows. The application connected multiple business processes through reusable Angular components and REST APIs.",
        challenges: [
            "Supporting several complex enterprise workflows in one platform",
            "Integrating frontend screens with multiple REST services",
            "Maintaining reusable behavior across administration modules",
            "Providing responsive interfaces for operational users",
        ],
        solutions: [
            "Created reusable Angular and TypeScript components",
            "Integrated frontend workflows with REST APIs",
            "Implemented responsive layouts for business applications",
            "Structured UI modules around maintainable enterprise patterns",
        ],
        results: [
            "Improved consistency across operational workflows",
            "Reduced duplication through reusable Angular components",
            "Created maintainable integrations with backend services",
            "Supported users across administration and business operations",
        ],
        image: "/images/projects/wooter.png",
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-emerald-500 via-cyan-500 to-blue-500",
        tech: [
            { name: "Angular", icon: SiAngular },
            { name: "TypeScript", icon: SiTypescript },
            { name: "REST APIs", icon: FaCode },
        ],
        contributions: [
            "Angular development",
            "Reusable components",
            "REST integrations",
            "Responsive workflows",
        ],
    },
    {
        title: "AMA Content Dispatch Platform",
        shortTitle: "Content Dispatch",
        subtitle:
            "A full-stack content dispatch platform enabling administrators to manage customer agreements, dispatch SCORM courses, and provide secure customer downloads.",
        role: "Senior Full Stack Developer",
        description:
            "Designed and developed the Dispatch Portal and Customer Dispatch Portal using React, Redux, LoopBack 4, TypeScript, and PostgreSQL. Built secure end-to-end workflows for customer agreement management, SCORM course dispatching, access code validation, downloadable learning packages, and third-party integrations with SCORM Cloud, EDHUB, and Notification services.",
        overview:
            "Designed and developed the Dispatch Portal and Customer Dispatch Portal for managing customer agreements, dispatching SCORM learning content, validating secure access codes, and delivering downloadable course packages.",
        challenges: [
            "Coordinating customer agreements across multiple systems",
            "Securely distributing downloadable SCORM learning packages",
            "Managing access-code validation, expiration, and download limits",
            "Integrating SCORM Cloud, EDHUB, and notification services",
        ],
        solutions: [
            "Built React portals using Redux Toolkit and Redux Saga",
            "Developed LoopBack 4 REST APIs backed by PostgreSQL",
            "Integrated SCORM Cloud APIs for course dispatch and ZIP downloads",
            "Implemented secure authorization and customer access workflows",
        ],
        results: [
            "Created secure end-to-end content dispatch workflows",
            "Reduced manual administration for course distribution",
            "Provided customers with a streamlined download experience",
            "Established reusable full-stack architecture for future features",
        ],
        image: "/images/projects/ama-ed-hub.png",
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-blue-600 via-cyan-500 to-indigo-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Redux Toolkit", icon: SiRedux },
            { name: "Redux Saga", icon: SiRedux },
            { name: "LoopBack 4", icon: SiNodedotjs },
            { name: "Node.js", icon: FaNodeJs },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Styled Components", icon: SiStyledcomponents },
            { name: "Axios", icon: SiAxios },
        ],
        contributions: [
            "Architected and developed full-stack Dispatch Portal and Customer Portal",
            "Built secure agreement management and customer onboarding workflows",
            "Integrated SCORM Cloud APIs for destination management, course dispatching, and ZIP downloads",
        ],
    },
];
