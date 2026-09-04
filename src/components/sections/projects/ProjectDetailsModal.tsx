"use client";

import { useRef } from "react";
import clsx from "clsx";
import { FaCheckCircle, FaExternalLinkAlt, FaRocket, FaTimes } from "react-icons/fa";

import ProjectModalGallery from "./ProjectModalGallery";
import { useDialogAccessibility } from "@/hooks/useDialogAccessibility";
import type { Project } from "@/types/project";
import styles from "./Projects.module.css";

type ProjectDetailListProps = {
    title: string;
    items?: string[];
    gradient: string;
};

const ProjectDetailList = ({
    title,
    items,
    gradient,
}: ProjectDetailListProps) => {
    if (!items?.length) return null;

    return (
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900">
                {title}
            </h4>

            <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] leading-[1.375rem] text-slate-600 sm:gap-3 sm:text-sm sm:leading-6"
                    >
                        <span
                            className={clsx(
                                "mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r",
                                gradient,
                            )}
                        />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

type ProjectModalProps = {
    project: Project | null;
    onClose: () => void;
};

const ProjectDetailsModal = ({ project, onClose }: ProjectModalProps) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    useDialogAccessibility({
        dialogRef,
        isOpen: project !== null,
        onClose,
    });

    if (!project) return null;

    const isExternalProjectLink = project.link.startsWith("http");

    return (
        <div
            className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/75 pt-4 backdrop-blur-md sm:items-center sm:p-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={onClose}
        >
            <div
                ref={dialogRef}
                tabIndex={-1}
                className={clsx(
                    styles.gallerySlide,
                    styles.modalScroll,
                    "relative max-h-[95dvh] w-full max-w-5xl overflow-y-auto rounded-t-[1.75rem] border border-white/20 bg-white shadow-2xl shadow-purple-950/30 focus:outline-none sm:max-h-[92vh] sm:rounded-[2rem]",
                )}
                onMouseDown={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute right-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-slate-950/60 text-sm text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-slate-950 sm:right-4 sm:top-4 sm:h-11 sm:w-11"
                >
                    <FaTimes />
                </button>

                <ProjectModalGallery project={project} />

                <div className="p-[18px] sm:p-7 lg:p-8">
                    <header className="border-b border-slate-100 pb-5 sm:pb-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-500 sm:text-xs">
                            {project.role}
                        </p>
                        <h3
                            id="project-modal-title"
                            className="mt-2 text-[1.35rem] font-extrabold leading-tight text-slate-900 sm:text-4xl"
                        >
                            {project.title}
                        </h3>
                        <p className="mt-2 max-w-3xl text-sm font-semibold leading-6 text-purple-600 sm:text-base">
                            {project.subtitle}
                        </p>
                    </header>

                    <div className="mt-5 grid gap-5 sm:mt-7 sm:gap-7 lg:grid-cols-[1.4fr_0.6fr]">
                        <section>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-600">
                                <FaRocket />
                                Project Overview
                            </div>

                            <p className="text-[13px] leading-6 text-slate-600 sm:text-base sm:leading-7">
                                {project.overview ?? project.description}
                            </p>
                        </section>

                        <section>
                            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900">
                                Technology Stack
                            </h4>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map(({ name, icon: Icon }) => (
                                    <div
                                        key={name}
                                        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm"
                                    >
                                        <Icon className="text-sm text-purple-600" />
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="mt-5 grid gap-3 sm:mt-7 sm:gap-4 md:grid-cols-2">
                        <ProjectDetailList
                            title="Key Contributions"
                            items={project.contributions}
                            gradient={project.gradient}
                        />

                        <ProjectDetailList
                            title="Project Challenges"
                            items={project.challenges}
                            gradient={project.gradient}
                        />

                        <ProjectDetailList
                            title="Solutions Delivered"
                            items={project.solutions}
                            gradient={project.gradient}
                        />

                        <ProjectDetailList
                            title="Project Results"
                            items={project.results}
                            gradient={project.gradient}
                        />
                    </div>

                    <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50 via-white to-cyan-50 p-4 sm:mt-7 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                        <div className="flex items-start gap-3">
                            <span
                                className={clsx(
                                    "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
                                    project.gradient,
                                )}
                            >
                                <FaCheckCircle />
                            </span>

                            <div>
                                <p className="text-sm font-bold text-slate-900">
                                    Interested in this project experience?
                                </p>
                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Let&apos;s discuss the architecture, implementation, and delivery approach.
                                </p>
                            </div>
                        </div>

                        <a
                            href={project.link}
                            target={isExternalProjectLink ? "_blank" : undefined}
                            rel={isExternalProjectLink ? "noreferrer" : undefined}
                            onClick={onClose}
                            className={clsx(
                                "inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:-translate-y-0.5 sm:w-auto sm:rounded-full",
                                project.gradient,
                            )}
                        >
                            {isExternalProjectLink ? "View Live Project" : "Contact Me"}
                            <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
