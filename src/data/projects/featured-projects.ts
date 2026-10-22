import { FaCode, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import {
    SiAngular,
    SiAxios,
    SiCapacitor,
    SiFirebase,
    SiIonic,
    SiLaravel,
    SiMaterialdesign,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiRedux,
    SiSass,
    SiStorybook,
    SiStyledcomponents,
    SiTypescript,
    SiXstate,
} from "react-icons/si";

import type { Project } from "@/types/project";

const projectPipelineImages = [
    "/images/projects/adm-project-pipeline/project-pipeline-funnel.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-001.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-002.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-003.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-004.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-005.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-006.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-007.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-008.webp",
    "/images/projects/adm-project-pipeline/project-pipeline-funnel-009.webp",
];

const socialScrapingImages = [
    "/images/projects/adm-scarpping/scarpping-001.webp",
    "/images/projects/adm-scarpping/scarpping-0012.webp",
    "/images/projects/adm-scarpping/scarpping-0013.webp",
    "/images/projects/adm-scarpping/scarpping-0014.webp",
    "/images/projects/adm-scarpping/scarpping-0015.webp",
    "/images/projects/adm-scarpping/scarpping-0016.webp",
];

const dispatchPortalImages = [
    "/images/projects/AMA-dispatch-portal/ama-ed-hub.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-001.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0012.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0013.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0014.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0015.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0016.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0017.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0018.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-0019.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-00110.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-00111.webp",
    "/images/projects/AMA-dispatch-portal/dispatch-portal-00112.webp",
];

const designSystemImages = [
    "/images/projects/design-system/ds-0001.webp",
    "/images/projects/design-system/ds-00012.webp",
    "/images/projects/design-system/ds-00013.webp",
    "/images/projects/design-system/ds-00014.webp",
    "/images/projects/design-system/ds-00015.webp",
    "/images/projects/design-system/ds-00016.webp",
    "/images/projects/design-system/ds-00017.webp",
    "/images/projects/design-system/ds-00018.webp",
    "/images/projects/design-system/ds-00019.webp",
    "/images/projects/design-system/ds-000110.webp",
];

const digitalLabelImages = [
    "/images/projects/digital-label-mobile/digital-label-01.webp",
    "/images/projects/digital-label-mobile/digital-label-012.webp",
    "/images/projects/digital-label-mobile/digital-label-013.webp",
    "/images/projects/digital-label-mobile/digital-label-014.webp",
    "/images/projects/digital-label-mobile/digital-label-015.webp",
];

const supplyChainKpiImages = [
    "/images/projects/Supply-chain-kpi/kpi.webp",
    "/images/projects/Supply-chain-kpi/kpi_001.webp",
    "/images/projects/Supply-chain-kpi/kpi_0012.webp",
    "/images/projects/Supply-chain-kpi/kpi_0013.webp",
    "/images/projects/Supply-chain-kpi/kpi_0014.webp",
    "/images/projects/Supply-chain-kpi/kpi_0015.webp",
    "/images/projects/Supply-chain-kpi/kpi_0016.webp",
    "/images/projects/Supply-chain-kpi/kpi_0017.webp",
];

export const featuredProjects: Project[] = [
    {
        title: "AESO Market Billing Platform",
        shortTitle: "AESO Billing",
        subtitle:
            "An enterprise workspace for market billing, settlements, validation, payments, and operational oversight.",
        role: "Senior Frontend Developer",
        description:
            "Built data-rich billing experiences that bring statement approvals, settlement periods, validation status, activity, and managed market data into one responsive interface.",
        overview:
            "The AESO market billing platform helps operational teams manage billing cycles, review validation issues, work with settlement periods, and move preliminary statements through approval workflows.",
        challenges: [
            "Presenting dense financial and operational data clearly",
            "Keeping multi-stage billing workflows easy to navigate",
            "Surfacing validation and approval status at a glance",
        ],
        solutions: [
            "Created structured dashboards for billing cycles and settlement periods",
            "Designed reusable data, status, and activity patterns",
            "Built responsive navigation across billing and managed-data modules",
        ],
        results: [
            "Centralized core market-billing workflows",
            "Made validation issues and approval status easier to review",
            "Improved visibility across settlement activity",
        ],
        images: ["/images/projects/aeso.webp"],
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-sky-700 via-blue-600 to-cyan-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "REST APIs", icon: FaCode },
        ],
        contributions: [
            "Billing dashboards",
            "Settlement workflows",
            "Validation experiences",
            "Responsive enterprise UI",
        ],
    },
    {
        title: "ADM Digital Lab Project Pipeline",
        shortTitle: "Project Pipeline",
        subtitle:
            "A configurable innovation pipeline for tracking projects from exploration through launch.",
        role: "Senior Full Stack Developer",
        description:
            "Developed project intake, configurable stages and sub-stages, funnel views, administration tools, and detailed project tracking for ADM's Digital Lab.",
        overview:
            "The Digital Lab Project Pipeline gives teams a shared place to configure innovation stages, create projects, monitor funnel progress, and manage initiatives throughout their lifecycle.",
        challenges: [
            "Representing complex project lifecycles in a clear visual funnel",
            "Supporting configurable stages, keywords, and administration",
            "Keeping project details and status changes easy to maintain",
        ],
        solutions: [
            "Built configurable stage and sub-stage management",
            "Created project funnel and portfolio views",
            "Implemented project creation, editing, filtering, and detail workflows",
        ],
        results: [
            "Centralized innovation-project tracking",
            "Improved portfolio visibility across pipeline stages",
            "Made pipeline configuration manageable by administrators",
        ],
        images: projectPipelineImages,
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-blue-900 via-indigo-700 to-lime-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Node.js", icon: FaNodeJs },
        ],
        contributions: [
            "Project funnel",
            "Pipeline configuration",
            "Project administration",
            "Portfolio filtering",
        ],
    },
    {
        title: "ADM Social Media Scraping Platform",
        shortTitle: "Social Scraping",
        subtitle:
            "A monitoring workspace for collecting, configuring, and analyzing content across digital sources.",
        role: "Senior Full Stack Developer",
        description:
            "Built dashboards, source configuration, keyword management, scrape scheduling, and content analytics across social, video, RSS, blog, and website channels.",
        overview:
            "The social-media scraping platform helps teams configure monitored sources and keywords, review collection health, and understand volume and topic trends across multiple content channels.",
        challenges: [
            "Combining several source types in one workflow",
            "Making scrape configuration safe and understandable",
            "Summarizing large content volumes through useful analytics",
        ],
        solutions: [
            "Built source, keyword, and schedule management experiences",
            "Created collection dashboards and platform breakdowns",
            "Added trend, search, and scraping-status visualizations",
        ],
        results: [
            "Centralized multi-source monitoring",
            "Made scraping activity and failures visible",
            "Simplified recurring content collection setup",
        ],
        images: socialScrapingImages,
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-indigo-900 via-blue-700 to-orange-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Node.js", icon: FaNodeJs },
        ],
        contributions: [
            "Analytics dashboard",
            "Source management",
            "Keyword configuration",
            "Scrape scheduling",
        ],
    },
    {
        title: "ADM Supply Chain KPI Dashboard",
        shortTitle: "Supply Chain KPI",
        subtitle:
            "An end-to-end scorecard for tracking operational KPIs across facilities and reporting periods.",
        role: "Senior Full Stack Developer",
        description:
            "Created dashboard, scorecard, KPI entry, upload, filtering, and performance-status experiences for supply-chain teams operating across multiple locations.",
        overview:
            "The supply-chain KPI dashboard gives teams a consolidated view of performance, critical items, categories, facilities, and reporting periods, with dedicated scorecard and KPI-entry workflows.",
        challenges: [
            "Displaying dozens of KPIs without losing clarity",
            "Supporting facility, category, status, and date-based analysis",
            "Making score entry and bulk uploads efficient",
        ],
        solutions: [
            "Built responsive KPI cards with clear performance states",
            "Added flexible filters and facility navigation",
            "Created scorecard, entry, and file-upload workflows",
        ],
        results: [
            "Improved visibility into critical operational metrics",
            "Made cross-facility performance easier to compare",
            "Streamlined recurring KPI reporting",
        ],
        images: supplyChainKpiImages,
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-blue-950 via-indigo-700 to-emerald-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Node.js", icon: FaNodeJs },
        ],
        contributions: [
            "KPI dashboard",
            "Scorecards",
            "Performance filters",
            "Data upload workflows",
        ],
    },
    {
        title: "ADM Truck Logistics — Facility Operations App",
        shortTitle: "ADM Truck Logistics",
        subtitle:
            "A practical mobile app that helps drivers plan facility visits and spend less time waiting.",
        role: "Mobile App Developer — Native / Ionic / Flutter",
        description:
            "Worked on the mobile experience for drivers visiting ADM facilities. The app brings together live load and unload wait times, plant operating hours, nearby locations, and mobile check-in in one straightforward workflow.",
        overview:
            "ADM Truck Logistics gives drivers useful facility information before they arrive. They can check current wait times, confirm operating hours, find nearby ADM locations with GPS, and join a facility queue while they are still on the way.",
        challenges: [
            "Making facility information easy to scan while a driver is on the move",
            "Supporting location discovery and check-in across a global facility network",
            "Keeping forms, status updates, and translated content consistent across devices",
        ],
        solutions: [
            "Built focused mobile flows with React and Ionic components",
            "Connected wait-time, facility, location, and check-in data through APIs",
            "Used Capacitor to package native mobile capabilities in a shared codebase",
            "Created reusable Material-based UI patterns for settings and driver actions",
        ],
        results: [
            "Put key facility information in drivers' hands before arrival",
            "Made it easier to find ADM locations and plan visits",
            "Supported remote check-in and clearer queue planning",
        ],
        images: ["/images/projects/adm-truc-logistics.webp"],
        imagePosition: "object-top",
        link: "https://play.google.com/store/apps/details?id=com.adm.admoperationsfacilitiesmobile.dev",
        gradient: "from-blue-900 via-indigo-700 to-emerald-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "Ionic", icon: SiIonic },
            { name: "Capacitor", icon: SiCapacitor },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Material UI", icon: SiMaterialdesign },
            { name: "REST APIs", icon: FaCode },
        ],
        contributions: [
            "Facility wait times",
            "Mobile check-in",
            "GPS location discovery",
            "Multilingual mobile UI",
        ],
    },
    {
        title: "PigletNutri — Feeding & Farm Performance App",
        shortTitle: "PigletNutri",
        subtitle:
            "A mobile decision tool for planning piglet feeding and understanding post-weaning growth.",
        role: "Mobile App Developer — Native / Ionic / Flutter",
        description:
            "Built clear, step-by-step mobile screens that turn weaning weight, diet choices, and feed quantities into a practical feeding program. Farmers can also compare growth curves and spot where performance could improve.",
        overview:
            "PigletNutri helps farmers and nutrition teams shape a feeding program around piglet weight at weaning. ADM's modeled growth curves provide a useful benchmark for reviewing farm performance and improving prestarter recommendations.",
        challenges: [
            "Turning specialist nutrition calculations into an approachable mobile flow",
            "Presenting feeding plans and growth curves clearly on smaller screens",
            "Handling numeric farm inputs without making the experience feel technical or heavy",
        ],
        solutions: [
            "Created guided data-entry screens with React and Ionic",
            "Built responsive feeding-plan tables and growth visualizations",
            "Added clear validation and reusable Material-style controls",
            "Used Capacitor to deliver the shared application as a native mobile app",
        ],
        results: [
            "Made feeding recommendations quicker to prepare and easier to understand",
            "Gave farms a visual way to compare growth performance",
            "Created a consistent workflow for reviewing improvement opportunities",
        ],
        images: ["/images/projects/pigletNutri.webp"],
        imagePosition: "object-top",
        link: "https://play.google.com/store/apps/details?id=com.ionicframework.piglets832347",
        gradient: "from-lime-500 via-emerald-500 to-blue-700",
        tech: [
            { name: "React", icon: FaReact },
            { name: "Ionic", icon: SiIonic },
            { name: "Capacitor", icon: SiCapacitor },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Material UI", icon: SiMaterialdesign },
        ],
        contributions: [
            "Feeding-plan workflow",
            "Growth-curve charts",
            "Farm performance inputs",
            "Responsive mobile UI",
        ],
    },
    {
        title: "Royal Horse — Equine Nutrition Companion",
        shortTitle: "Royal Horse",
        subtitle:
            "A mobile companion for managing horses, feed recommendations, weight, rations, and daily care.",
        role: "Mobile App Developer — Native / Ionic / Flutter",
        description:
            "Developed mobile journeys that let owners keep each horse's information in one place, choose suitable feed, track weight and rations, organize diary events, and find nearby Royal Horse distributors.",
        overview:
            "Royal Horse gives horse owners a simple way to manage everyday nutrition and care. Each horse has its own profile, feeding guidance, weight and ration history, diary, and access to nearby product distributors.",
        challenges: [
            "Keeping records clear for owners managing more than one horse",
            "Combining nutrition guidance, tracking, calendar events, and maps in one app",
            "Making detailed horse and feeding information comfortable to use on mobile",
        ],
        solutions: [
            "Built reusable horse-profile and activity flows with React and Ionic",
            "Created clear screens for weight, ration, and event tracking",
            "Integrated location-based distributor discovery",
            "Used Capacitor and Material-based components for a consistent native experience",
        ],
        results: [
            "Brought nutrition guidance and horse records into one mobile experience",
            "Made ongoing weight and ration tracking easier for owners",
            "Provided a quick route to nearby feed distributors",
        ],
        images: ["/images/projects/royal-horse.webp"],
        imagePosition: "object-top",
        link: "https://play.google.com/store/apps/details?id=com.neovia.royalhorse",
        gradient: "from-slate-950 via-cyan-800 to-slate-500",
        tech: [
            { name: "React", icon: FaReact },
            { name: "Ionic", icon: SiIonic },
            { name: "Capacitor", icon: SiCapacitor },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Material UI", icon: SiMaterialdesign },
        ],
        contributions: [
            "Horse profiles",
            "Nutrition and ration tracking",
            "Diary and event workflows",
            "Distributor map",
        ],
    },
    {
        title: "DateTix — On-Demand Dating Platform",
        shortTitle: "DateTix",
        subtitle:
            "A multilingual dating platform delivered across responsive web, iOS, and Android experiences.",
        role: "Web & Mobile Application Developer",
        description:
            "Worked with the product, design, backend, and mobile teams to deliver assigned features across the DateTix web and mobile applications. I built and maintained several modules, connected APIs, fixed production issues, and helped keep the experience consistent across browsers, iOS, and Android.",
        overview:
            "DateTix was an on-demand dating platform where people could discover new matches and arrange dates from their phones. The product included a multilingual web presence alongside iOS and Android applications, with a consistent journey from first discovery through mobile use.",
        challenges: [
            "Keeping the experience consistent across Vue, Angular, and Ionic applications",
            "Supporting multiple languages and regional audiences without making screens feel crowded",
            "Adapting web interactions for touch-based iOS and Android use",
            "Connecting a shared hybrid codebase with native device behavior",
        ],
        solutions: [
            "Built responsive web experiences with Vue and Angular",
            "Developed mobile screens and navigation using Angular with Ionic",
            "Used Capacitor to package the application and access native platform features",
            "Created reusable Material-based UI patterns for forms, actions, and content",
            "Implemented layouts that could accommodate translated content cleanly",
        ],
        results: [
            "Delivered a connected experience across web, iOS, and Android",
            "Reduced visual differences between the web and mobile products",
            "Made the interface usable for audiences across multiple languages",
            "Created a maintainable hybrid-mobile foundation for continued feature work",
        ],
        images: ["/images/projects/datetix.webp"],
        imagePosition: "object-center",
        link: "#contact",
        gradient: "from-fuchsia-600 via-violet-600 to-cyan-500",
        tech: [
            { name: "Vue.js", icon: FaVuejs },
            { name: "Angular", icon: SiAngular },
            { name: "Angular + Ionic", icon: SiIonic },
            { name: "Capacitor", icon: SiCapacitor },
            { name: "Material UI", icon: SiMaterialdesign },
            { name: "TypeScript", icon: SiTypescript },
            { name: "SCSS", icon: SiSass },
        ],
        contributions: [
            "Built web modules and reusable UI using Vue and Angular",
            "Delivered assigned mobile features with Angular and Ionic",
            "Worked closely with the team across development, testing, and bug fixing",
            "Created a customer-support chat flow for easier conversations between clients and the support team",
            "Worked on discovery and matching journeys that helped users find better matches",
            "Connected application screens with backend APIs and mobile services",
            "Used Capacitor for native integration across iOS and Android",
            "Maintained multilingual screens and Material-based UI patterns",
        ],
    },
    {
        title: "My Studio Sessions — Music Studio Booking Platform",
        shortTitle: "My Studio Sessions",
        subtitle:
            "An online portal helping musicians discover studios and book production sessions.",
        role: "Full Stack Developer",
        description:
            "Developed key discovery and booking experiences, including nearby-studio search, detailed studio profiles, interactive map integration, and available-session slot selection.",
        overview:
            "My Studio Sessions is an online music-production platform where musicians can discover recording studios, explore their profiles and availability, and book studio sessions online. Studio owners can also list their spaces and connect with potential clients.",
        challenges: [
            "Helping musicians quickly discover relevant studios near their location",
            "Presenting studio details and availability in a clear booking journey",
            "Connecting location-based search results with an interactive map",
            "Coordinating frontend booking flows with backend studio and slot data",
        ],
        solutions: [
            "Built nearby-studio discovery and location-based search functionality",
            "Developed studio profile experiences for browsing essential information",
            "Integrated map-based studio exploration",
            "Implemented available-slot discovery for online session booking",
        ],
        results: [
            "Enabled musicians to discover and evaluate studios in one place",
            "Created a more direct path from studio search to session availability",
            "Made nearby recording spaces easier to explore through map integration",
            "Supported an end-to-end online studio booking experience",
        ],
        images: ["/images/projects/my-studio-sessions.webp"],
        imagePosition: "object-top",
        link: "https://mystudiosessions.com/",
        gradient: "from-slate-800 via-blue-700 to-cyan-500",
        tech: [
            { name: "Vue.js", icon: FaVuejs },
            { name: "SCSS", icon: SiSass },
            { name: "Laravel", icon: SiLaravel },
        ],
        contributions: [
            "Nearby studio search",
            "Studio profiles",
            "Map integration",
            "Available booking slots",
        ],
    },
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
        images: designSystemImages,
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
        images: digitalLabelImages,
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
        title: "Launch27 — Service Business Platform",
        shortTitle: "Launch27",
        subtitle:
            "Booking and operations software helping local service businesses grow.",
        role: "Full Stack Developer",
        description:
            "Built customer-facing and operational workflows for online booking, scheduling, payments, and service-business management.",
        overview:
            "Launch27 provides booking and business-management software for cleaning and other local service companies, connecting customer acquisition with scheduling and payment workflows.",
        challenges: [
            "Making online service booking fast and approachable",
            "Coordinating schedules, jobs, customers, and payments",
            "Supporting responsive workflows for teams on the move",
        ],
        solutions: [
            "Developed responsive customer-booking experiences",
            "Built reusable scheduling and operations interfaces",
            "Integrated payments and business-management workflows",
        ],
        results: [
            "Created a direct path from visitor to booked service",
            "Reduced manual scheduling work for service teams",
            "Supported day-to-day business operations in one platform",
        ],
        images: ["/images/projects/launch27.webp"],
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
            "Online booking",
            "Service scheduling",
            "Payment workflows",
            "Responsive operations UI",
        ],
    },
    {
        title: "Wooter — Sports Management Platform",
        shortTitle: "Wooter",
        subtitle:
            "Team websites, mobile apps, scheduling, communication, and stats in one sports platform.",
        role: "Frontend Software Engineer",
        description:
            "Developed responsive product experiences for sports organizations to manage teams, schedules, players, media, communication, and performance data.",
        overview:
            "Wooter gives sports organizations a unified digital platform for team websites, mobile experiences, scheduling, chat, media sharing, player management, and statistics.",
        challenges: [
            "Serving administrators, coaches, players, and supporters",
            "Combining team operations and public-facing experiences",
            "Keeping feature-rich workflows usable on different devices",
        ],
        solutions: [
            "Created reusable responsive interfaces",
            "Integrated team, scheduling, statistics, and media services",
            "Built consistent navigation across organization workflows",
        ],
        results: [
            "Centralized everyday team management",
            "Improved communication across sports organizations",
            "Supported consistent web and mobile experiences",
        ],
        images: ["/images/projects/wooter.webp"],
        imagePosition: "object-top",
        link: "#contact",
        gradient: "from-emerald-500 via-cyan-500 to-blue-500",
        tech: [
            { name: "Angular", icon: SiAngular },
            { name: "TypeScript", icon: SiTypescript },
            { name: "REST APIs", icon: FaCode },
        ],
        contributions: [
            "Team management",
            "Scheduling UI",
            "Stats and media",
            "Responsive platform",
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
        images: dispatchPortalImages,
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
