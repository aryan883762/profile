"use client";

import {
    FaReact,
    FaAngular,
    FaVuejs,
    FaNodeJs,
    FaAws,
    FaDocker,
    FaMobileAlt,
    FaShoppingCart,
    FaRobot,
    FaBriefcase,
} from "react-icons/fa";
import {
    SiFlutter,
    SiNextdotjs,
    SiTypescript,
    SiGraphql,
    SiMongodb,
    SiPostgresql,
    SiOpenai,
} from "react-icons/si";

// NOTE: This section is built from Kumar's bio/summary rather than a
// company-by-company timeline. Swap in real client/company names and
// dates below if you'd like a traditional chronological work history.
const experiences = [
    {
        company: "Freelance Full-Stack & Mobile Developer",
        role: "Upwork · Startups, Agencies & Product Teams",
        period: "7+ years",
        icon: FaBriefcase,
        tech: [FaReact, SiNextdotjs, FaAngular, FaVuejs, FaNodeJs, SiTypescript],
        details: [
            "Built web and mobile applications using React, Next.js, Angular, Vue.js, Node.js, React Native, Flutter, JavaScript, and TypeScript for startups, agencies, and product teams.",
            "Worked on SaaS platforms, admin dashboards, business applications, customer portals, e-commerce solutions, and mobile apps.",
            "Comfortable jumping into existing codebases as well as building from scratch — fixing bugs, improving performance, integrating APIs, and modernizing older code."
        ]
    },
    {
        company: "SaaS Platforms & Business Dashboards",
        role: "Web Application Development",
        period: "Ongoing",
        icon: FaReact,
        tech: [FaReact, SiNextdotjs, FaNodeJs, SiPostgresql, SiMongodb],
        details: [
            "Designed and built business dashboards and SaaS platforms with React and Next.js on the frontend and Node.js on the backend.",
            "Developed REST and GraphQL APIs, integrated third-party services, and optimized performance for growing applications.",
            "Worked with MySQL, PostgreSQL, and MongoDB depending on project needs."
        ]
    },
    {
        company: "Customer Portals & E-Commerce",
        role: "Full-Stack Development",
        period: "Ongoing",
        icon: FaShoppingCart,
        tech: [FaReact, FaNodeJs, SiGraphql, FaAws, FaDocker],
        details: [
            "Built customer portals and e-commerce applications end-to-end, from UI to backend services.",
            "Deployed and maintained applications using AWS and Docker, with CI/CD via GitHub Actions.",
            "Focused on keeping applications easy to maintain and extend as they grow."
        ]
    },
    {
        company: "Mobile App Development",
        role: "React Native & Flutter",
        period: "Ongoing",
        icon: FaMobileAlt,
        tech: [FaReact, SiFlutter, FaNodeJs],
        details: [
            "Built cross-platform mobile apps using React Native and Flutter, backed by Node.js APIs.",
            "Handled the full mobile development cycle from planning through release."
        ]
    },
    {
        company: "AI-Powered Feature Integration",
        role: "LLMs & AI-Assisted Development",
        period: "Ongoing",
        icon: FaRobot,
        tech: [SiOpenai, FaReact, FaNodeJs],
        details: [
            "Uses Cursor, GitHub Copilot, ChatGPT, and Claude regularly to speed up development, review code, generate tests, and cut down repetitive work.",
            "Integrates LLMs and OpenAI APIs into applications to add real, practical value for users."
        ]
    }
];

const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100"
        >
            <div className="w-full max-w-screen-xl py-20 mx-auto px-6 md:px-20 relative z-10">
                {/* Title & Subtitle */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient">
                        📌 Experience & Focus Areas
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                        7+ years building web and mobile applications for startups, agencies, and product teams —
                        from SaaS platforms to customer portals, e-commerce, and AI-powered features.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            {/* Company & Role */}
                            <div className="flex items-center gap-5 mb-5">
                                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-tr from-pink-100 via-purple-100 to-cyan-100 p-2 shadow-inner">
                                    <exp.icon className="text-3xl text-pink-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {exp.company}
                                    </h3>
                                    <p className="text-sm text-pink-600 font-medium">
                                        {exp.role}
                                    </p>
                                    <p className="text-xs text-gray-500">{exp.period}</p>
                                </div>
                            </div>

                            {/* Details */}
                            <ul className="space-y-2 border-l-2 border-purple-200 pl-4 text-gray-700 text-sm">
                                {exp.details.map((line, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {line}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech Icons */}
                            <div className="flex flex-wrap gap-3 mt-6">
                                {exp.tech.map((Icon, i) => (
                                    <div
                                        key={i}
                                        className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-pink-50 via-purple-50 to-cyan-50 rounded-full shadow hover:from-pink-100 hover:via-purple-100 hover:to-cyan-100 transition-colors duration-300"
                                    >
                                        <Icon className="text-xl text-gray-600" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient Animation */}
            <style jsx>{`
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 6s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default ExperienceSection;

