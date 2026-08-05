"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

import ProjectDetailsModal from "./ProjectDetailsModal";
import type { Project } from "../data/projects";
import { projects } from "../data/projects";

const MAX_VISIBLE_SELECTORS = 5;

const ProjectsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<"next" | "previous">("next");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const activeProject = projects[activeIndex];

    const closeProjectModal = useCallback(() => {
        setSelectedProject(null);
    }, []);

    const showNextProject = useCallback(() => {
        setDirection("next");
        setActiveIndex((current) => (current + 1) % projects.length);
    }, []);

    const showPreviousProject = useCallback(() => {
        setDirection("previous");

        setActiveIndex((current) =>
            current === 0 ? projects.length - 1 : current - 1,
        );
    }, []);

    const selectProject = (index: number) => {
        if (index === activeIndex) return;

        setDirection(index > activeIndex ? "next" : "previous");
        setActiveIndex(index);
    };

    const visibleProjectIndexes = useMemo(() => {
        if (projects.length <= MAX_VISIBLE_SELECTORS) {
            return projects.map((_, index) => index);
        }

        const half = Math.floor(MAX_VISIBLE_SELECTORS / 2);

        let start = activeIndex - half;
        let end = start + MAX_VISIBLE_SELECTORS;

        if (start < 0) {
            start = 0;
            end = MAX_VISIBLE_SELECTORS;
        }

        if (end > projects.length) {
            end = projects.length;
            start = projects.length - MAX_VISIBLE_SELECTORS;
        }

        return Array.from(
            { length: end - start },
            (_, position) => start + position,
        );
    }, [activeIndex]);

    useEffect(() => {
        if (isPaused || projects.length <= 1) return;

        const timer = window.setInterval(showNextProject, 6500);

        return () => window.clearInterval(timer);
    }, [isPaused, showNextProject]);

    if (projects.length === 0) return null;

    return (
        <>
            <section
                id="projects"
                className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-purple-50/60"
            >
                <div className="absolute -left-32 top-24 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
                <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="project-gallery-grid absolute inset-0 opacity-30" />

                <div className="relative z-10 mx-auto w-full max-w-screen-xl px-5 py-14 sm:px-6 md:px-12 lg:px-20 lg:py-16">
                    {/* Header */}
                    <div
                        className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end lg:mb-9"
                        data-aos="fade-up"
                    >
                        <div className="max-w-3xl">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-600 shadow-sm backdrop-blur-md sm:text-xs">
                                <FaRocket />
                                Selected Case Studies
                            </div>

                            <h2 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
                                Products I&apos;ve Helped{" "}
                                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                    Build
                                </span>
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
                                Selected web, mobile, design-system, and enterprise products—from
                                architecture and implementation to integration and delivery.
                            </p>
                        </div>

                        {/* Desktop arrows */}
                        <div className="hidden shrink-0 items-center gap-3 lg:flex">
                            <button
                                type="button"
                                onClick={showPreviousProject}
                                aria-label="Show previous project"
                                className="project-gallery-arrow flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:-translate-y-1 hover:text-purple-600"
                            >
                                <FaArrowLeft />
                            </button>

                            <button
                                type="button"
                                onClick={showNextProject}
                                aria-label="Show next project"
                                className="project-gallery-arrow flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:-translate-y-1 hover:text-purple-600"
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>

                    <div
                        className="lg:grid lg:h-[500px] lg:grid-cols-[220px_1fr] lg:gap-5"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Mobile project */}
                        <article
                            key={`mobile-${activeProject.title}`}
                            className={`project-gallery-slide overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-2xl shadow-purple-400/15 lg:hidden ${direction === "next"
                                ? "project-gallery-next"
                                : "project-gallery-previous"
                                }`}
                        >
                            {/* Mobile screenshot */}
                            <div
                                className={`relative h-[225px] overflow-hidden bg-gradient-to-br ${activeProject.gradient} p-3 sm:h-[280px] sm:p-4`}
                            >
                                <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-white/15 blur-2xl" />
                                <div className="absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-white/15 blur-2xl" />

                                <div className="relative h-full overflow-hidden rounded-[1.3rem] border border-white/40 bg-white/20 p-2 shadow-xl backdrop-blur-md">
                                    <div className="flex h-7 items-center justify-between px-1 pb-2">
                                        <div className="flex gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                                        </div>

                                        <div className="rounded-full bg-slate-950/30 px-3 py-1 text-[9px] font-semibold text-white backdrop-blur-md">
                                            {String(activeIndex + 1).padStart(2, "0")}
                                            <span className="mx-1.5 text-white/50">/</span>
                                            {String(projects.length).padStart(2, "0")}
                                        </div>
                                    </div>

                                    <div className="relative h-[calc(100%-28px)] overflow-hidden rounded-xl bg-slate-100">
                                        <Image
                                            src={activeProject.image}
                                            alt={`${activeProject.title} project screenshot`}
                                            fill
                                            sizes="100vw"
                                            className={`object-cover ${activeProject.imagePosition ?? "object-top"
                                                }`}
                                            priority={activeIndex === 0}
                                        />
                                    </div>
                                </div>

                                <div className="project-gallery-progress absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
                            </div>

                            {/* Mobile details */}
                            <div className="relative p-5 sm:p-6">
                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-pink-500">
                                    {activeProject.role}
                                </p>

                                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900">
                                    {activeProject.title}
                                </h3>

                                <p className="mt-2 text-sm font-semibold leading-5 text-purple-600">
                                    {activeProject.subtitle}
                                </p>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {activeProject.description}
                                </p>

                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    {activeProject.contributions.map((contribution) => (
                                        <div
                                            key={contribution}
                                            className="flex min-h-[42px] items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-2.5 py-2"
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${activeProject.gradient}`}
                                            />

                                            <span className="text-[10px] font-semibold leading-4 text-slate-600">
                                                {contribution}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {activeProject.tech.map(({ name, icon: Icon }) => (
                                        <div
                                            key={name}
                                            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm"
                                        >
                                            <Icon className="text-xs text-purple-600" />
                                            {name}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(activeProject)}
                                    className={`mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${activeProject.gradient} px-5 py-2.5 text-xs font-semibold text-white shadow-lg`}
                                >
                                    Explore Project
                                    <FaExternalLinkAlt className="text-[9px]" />
                                </button>
                            </div>
                        </article>

                        {/* Desktop selector */}
                        <aside className="hidden h-[500px] lg:block">
                            <div className="flex h-full flex-col gap-2.5">
                                {visibleProjectIndexes.map((projectIndex) => {
                                    const project = projects[projectIndex];
                                    const isActive = projectIndex === activeIndex;

                                    return (
                                        <button
                                            key={`${project.title}-${projectIndex}`}
                                            type="button"
                                            onClick={() => selectProject(projectIndex)}
                                            aria-label={`Show ${project.title}`}
                                            aria-pressed={isActive}
                                            className={`group relative flex min-h-[76px] flex-1 overflow-hidden rounded-2xl border p-3 text-left transition-all duration-300 ${isActive
                                                ? "border-purple-300 bg-white shadow-xl shadow-purple-300/20"
                                                : "border-slate-200 bg-white/60 hover:-translate-y-0.5 hover:border-purple-200 hover:bg-white hover:shadow-lg"
                                                }`}
                                        >
                                            {isActive && (
                                                <span
                                                    className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${project.gradient}`}
                                                />
                                            )}

                                            <div className="flex w-full items-center gap-3">
                                                <span
                                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-[11px] font-bold text-white shadow-md ${project.gradient}`}
                                                >
                                                    {String(projectIndex + 1).padStart(2, "0")}
                                                </span>

                                                <div className="min-w-0 flex-1">
                                                    <p
                                                        className={`truncate text-xs font-bold ${isActive ? "text-slate-900" : "text-slate-700"
                                                            }`}
                                                    >
                                                        {project.shortTitle}
                                                    </p>

                                                    <p className="mt-1 truncate text-[9px] text-slate-500">
                                                        {project.role}
                                                    </p>
                                                </div>
                                            </div>

                                            {isActive && (
                                                <span className="project-selector-progress absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </aside>

                        {/* Desktop showcase */}
                        <article
                            key={`desktop-${activeProject.title}`}
                            className={`project-gallery-slide relative hidden h-[500px] overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 shadow-2xl shadow-purple-400/20 lg:block ${direction === "next"
                                ? "project-gallery-next"
                                : "project-gallery-previous"
                                }`}
                        >
                            <Image
                                src={activeProject.image}
                                alt={`${activeProject.title} project screenshot`}
                                fill
                                sizes="75vw"
                                className={`object-cover transition-transform duration-1000 hover:scale-[1.015] ${activeProject.imagePosition ?? "object-top"
                                    }`}
                                priority={activeIndex === 0}
                            />

                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/55 via-slate-950/10 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-white/5" />

                            <div className="absolute left-6 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-2 backdrop-blur-md">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                            </div>

                            <div className="absolute right-6 top-5 z-20 rounded-full border border-white/25 bg-slate-950/45 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                                {String(activeIndex + 1).padStart(2, "0")}
                                <span className="mx-2 text-white/40">/</span>
                                {String(projects.length).padStart(2, "0")}
                            </div>

                            <div className="absolute bottom-6 left-6 z-20 w-[520px]">
                                <div className="rounded-[1.5rem] border border-white/20 bg-slate-950/55 p-5 shadow-2xl backdrop-blur-xl">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-300">
                                        {activeProject.role}
                                    </p>

                                    <h3 className="mt-2 text-[28px] font-extrabold leading-tight text-white">
                                        {activeProject.title}
                                    </h3>

                                    <p className="mt-2 text-sm font-medium leading-5 text-purple-200">
                                        {activeProject.subtitle}
                                    </p>

                                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/75">
                                        {activeProject.description}
                                    </p>

                                    <div className="mt-4 grid grid-cols-2 gap-1.5">
                                        {activeProject.contributions.map((contribution) => (
                                            <div
                                                key={contribution}
                                                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-2.5 py-2"
                                            >
                                                <span
                                                    className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${activeProject.gradient}`}
                                                />
                                                <span className="truncate text-[10px] font-medium text-white/85">
                                                    {contribution}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex flex-wrap items-center gap-2">
                                        {activeProject.tech.map(({ name, icon: Icon }) => (
                                            <div
                                                key={name}
                                                title={name}
                                                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/85"
                                            >
                                                <Icon className="text-xs" />
                                            </div>
                                        ))}

                                        <button
                                            type="button"
                                            onClick={() => setSelectedProject(activeProject)}
                                            className={`ml-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${activeProject.gradient} px-5 py-2.5 text-xs font-semibold text-white shadow-xl transition hover:-translate-y-0.5`}
                                        >
                                            Explore Project
                                            <FaExternalLinkAlt className="text-[9px]" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/10">
                                <div className="project-gallery-progress h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
                            </div>
                        </article>
                    </div>

                    {/* Mobile selector */}
                    <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
                        {projects.map((project, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <button
                                    key={project.title}
                                    type="button"
                                    onClick={() => selectProject(index)}
                                    className={`relative flex min-h-[66px] items-center gap-2 overflow-hidden rounded-2xl border p-2.5 text-left ${isActive
                                        ? "border-purple-300 bg-white shadow-lg"
                                        : "border-slate-200 bg-white/70"
                                        }`}
                                >
                                    {isActive && (
                                        <span
                                            className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${project.gradient}`}
                                        />
                                    )}

                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-[10px] font-bold text-white ${project.gradient}`}
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="min-w-0">
                                        <p className="truncate text-[10px] font-bold text-slate-800">
                                            {project.shortTitle}
                                        </p>

                                        <p className="mt-0.5 truncate text-[8px] text-slate-500">
                                            {project.role}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile navigation */}
                    <div className="mt-5 flex items-center justify-center gap-4 lg:hidden">
                        <button
                            type="button"
                            onClick={showPreviousProject}
                            aria-label="Show previous project"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md"
                        >
                            <FaArrowLeft />
                        </button>

                        <span className="min-w-[64px] text-center text-sm font-semibold text-slate-600">
                            {String(activeIndex + 1).padStart(2, "0")}
                            <span className="mx-2 text-slate-300">/</span>
                            {String(projects.length).padStart(2, "0")}
                        </span>

                        <button
                            type="button"
                            onClick={showNextProject}
                            aria-label="Show next project"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>

            <ProjectDetailsModal
                project={selectedProject}
                onClose={closeProjectModal}
            />
        </>
    );
};

export default ProjectsSection;