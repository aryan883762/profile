"use client";

import Image from "next/image";
import { useRef } from "react";
import clsx from "clsx";
import { FaCheckCircle, FaExternalLinkAlt, FaRocket, FaTimes } from "react-icons/fa";

import BrowserWindowDots from "./BrowserWindowDots";
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
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900">
                {title}
            </h4>

            <ul className="mt-4 space-y-3">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
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

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-md sm:p-5"
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
                    "relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[1.75rem] border border-white/20 bg-white shadow-2xl shadow-purple-950/30 focus:outline-none sm:rounded-[2rem]",
                )}
                onMouseDown={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-slate-950/55 text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-slate-950"
                >
                    <FaTimes />
                </button>

                <div
                    className={clsx(
                        "relative h-[240px] overflow-hidden bg-gradient-to-br sm:h-[360px]",
                        project.gradient,
                    )}
                >
                    <Image
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className={clsx("object-cover", project.imagePosition ?? "object-top")}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/10" />

                    <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-3 py-2 backdrop-blur-md sm:left-6">
                        <BrowserWindowDots />
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 z-20 sm:bottom-7 sm:left-7 sm:right-20">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-pink-300 sm:text-xs">
                            {project.role}
                        </p>

                        <h3
                            id="project-modal-title"
                            className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-4xl"
                        >
                            {project.title}
                        </h3>

                        <p className="mt-2 max-w-3xl text-sm font-medium leading-6 text-purple-100 sm:text-base">
                            {project.subtitle}
                        </p>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-30 h-1 bg-white/10">
                        <div
                            className={clsx(
                                "h-full bg-gradient-to-r",
                                project.gradient,
                            )}
                        />
                    </div>
                </div>

                <div className="p-5 sm:p-7 lg:p-8">
                    <div className="grid gap-7 lg:grid-cols-[1.4fr_0.6fr]">
                        <section>
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-purple-600">
                                <FaRocket />
                                Project Overview
                            </div>

                            <p className="text-sm leading-7 text-slate-600 sm:text-base">
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

                    <div className="mt-7 grid gap-4 md:grid-cols-2">
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

                    <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-purple-100 bg-gradient-to-r from-purple-50 via-white to-cyan-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
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
                            onClick={onClose}
                            className={clsx(
                                "inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:-translate-y-0.5",
                                project.gradient,
                            )}
                        >
                            Contact Me
                            <FaExternalLinkAlt className="text-[9px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsModal;
