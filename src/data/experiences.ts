import type { Education, Experience } from "@/types/experience";

export const experiences = [
  {
    company: "Heady",
    role: "Senior Frontend Developer",
    period: "April 2021 — Present",
    type: "Full-time",
    location: "Remote",
    initials: "H",
    logoAlt: "Heady logo",
    logoPanelClassName: "border-purple-100 bg-white",
    logoUrl: "/images/company/heady.png",
    gradient: "from-violet-600 to-purple-500",
    current: true,
    summary:
      "Building scalable web and mobile products end to end across React, Next.js, Angular, React Native, Node.js, and third-party integrations.",
    highlights: [
      "Built 5+ scalable applications using clean architecture and reusable UI structures",
      "Reduced development time by 25% through 40+ shared components and consistent theming",
      "Automated deployments with GitHub Actions, reducing manual release steps by more than 90%",
      "Enabled CodePush OTA delivery, improving mobile release time by 70%",
      "Integrated Firebase, Stripe, Google Maps, and Twilio across production products",
    ],
  },
  {
    company: "Launch27",
    role: "Full-Stack Developer",
    period: "April 2020 — April 2021",
    type: "Contract",
    location: "Remote",
    initials: "L",
    logoAlt: "Launch27 logo",
    logoPanelClassName: "border-orange-100 bg-white",
    logoUrl: "/images/company/Launch27_logo.png",
    gradient: "from-pink-500 to-rose-400",
    summary:
      "Delivered responsive booking and scheduling experiences for Launch27 while working directly with the client.",
    highlights: [
      "Built booking and scheduling interfaces with React and Tailwind CSS",
      "Owned feature delivery and issue resolution across the contract lifecycle",
    ],
  },
  {
    company: "Digigini",
    role: "Software Engineer",
    period: "January 2020 - April 2020",
    type: "Full-time",
    location: "Remote",
    initials: "D",
    logoAlt: "Digigini logo",
    logoPanelClassName: "border-indigo-100 bg-white",
    logoUrl: "/images/company/digigini_logo.webp",
    gradient: "from-indigo-500 to-blue-500",
    summary:
      "Worked on frontend product interfaces and implementation support for business web applications.",
    highlights: [
      "Built responsive UI features with reusable frontend patterns",
      "Supported production fixes, interface improvements, and client-facing delivery",
    ],
  },
  {
    company: "Datetix Limited",
    role: "Full-Stack Developer",
    period: "May 2019 — April 2020",
    type: "Contract",
    location: "Hong Kong SAR · Remote",
    initials: "D",
    logoAlt: "Datetix Limited logo",
    logoPanelClassName: "border-slate-800 bg-slate-950",
    logoUrl: "/images/company/datetixlogo_w.png",
    gradient: "from-cyan-500 to-blue-500",
    summary:
      "Built customer-facing React interfaces and payment workflows for a Hong Kong-based product team.",
    highlights: [
      "Developed React interfaces integrated with payment gateway services",
      "Coordinated directly with the client on requirements, delivery, and timelines",
    ],
  },
  {
    company: "Mechlin Technologies",
    role: "Full-Stack Developer",
    period: "June 2017 — January 2020",
    type: "Full-time",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India",
    initials: "M",
    logoAlt: "Mechlin Technologies logo",
    logoImageClassName: "object-right",
    logoPanelClassName: "border-indigo-100 bg-white",
    logoUrl: "/images/company/mechlin-technology.webp",
    gradient: "from-orange-500 to-amber-400",
    summary:
      "Developed enterprise Angular applications supporting administration, hiring, payments, approvals, and sales workflows.",
    highlights: [
      "Built responsive interfaces serving more than 10,000 active users",
      "Integrated REST APIs across 5+ operational modules",
      "Improved lead conversion by more than 50% through the Pre-Prospect module",
      "Reduced QA cycle time by 30% with Protractor end-to-end testing",
    ],
  },
  {
    company: "Technicus Infotech LLP",
    role: "Frontend Web Developer",
    period: "March 2015 — June 2017",
    type: "Part-time",
    location: "Madhubani, Bihar, India · Remote",
    initials: "T",
    logoAlt: "Technicus Infotech LLP logo",
    logoImageClassName: "origin-left object-left scale-x-[0.9] scale-y-[1.25]",
    logoPanelClassName: "border-slate-800 bg-slate-950",
    logoUrl: "/images/company/technicus-logo.png",
    gradient: "from-emerald-500 to-teal-400",
    summary:
      "Started the professional journey building and maintaining websites while completing engineering studies.",
    highlights: [
      "Built and maintained web pages with HTML5, CSS, and JavaScript",
      "Developed a strong foundation in frontend engineering and cross-browser compatibility",
    ],
  },
] satisfies readonly Experience[];

export const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    logoAlt: "Lovely Professional University logo",
    logoPanelClassName: "border-slate-100 bg-white",
    logoUrl: "/images/company/lpu-logo.png",
    qualification: "Bachelor of Technology in Computer Science and Engineering",
    period: "2014 — 2017",
  },
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    logoAlt: "Lovely Professional University logo",
    logoPanelClassName: "border-slate-100 bg-white",
    logoUrl: "/images/company/lpu-logo.png",
    qualification: "Diploma in Computer Science and Engineering",
    period: "2011 — 2013",
  },
] satisfies readonly Education[];

