import Image from "next/image";
import clsx from "clsx";
import { FaCode } from "react-icons/fa";

import { withBasePath } from "@/lib/asset-path";
import type { Project } from "@/types/project";

interface ProjectVisualProps {
  image?: string;
  imageClassName?: string;
  project: Project;
  sizes: string;
}

const ProjectVisual = ({
  image,
  imageClassName,
  project,
  sizes,
}: ProjectVisualProps) => {
  const projectImage = image ?? project.images?.[0] ?? project.image;

  if (projectImage) {
    return (
      <Image
        src={withBasePath(projectImage)}
        alt={`${project.title} project screenshot`}
        fill
        sizes={sizes}
        className={clsx(
          imageClassName,
          project.imagePosition ?? "object-top",
        )}
      />
    );
  }

  const PrimaryIcon = project.tech[0]?.icon ?? FaCode;

  return (
    <div
      role="img"
      aria-label={`${project.title} case study illustration`}
      className={clsx(
        "absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br p-6",
        project.gradient,
      )}
    >
      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-slate-950/20 blur-3xl" />
      <div className="absolute inset-6 rounded-[2rem] border border-white/20" />

      <div className="relative w-full max-w-md rounded-[1.75rem] border border-white/30 bg-slate-950/25 p-5 text-white shadow-2xl backdrop-blur-xl sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
            Selected case study
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-white/15">
            <PrimaryIcon className="text-xl" />
          </span>
        </div>

        <p className="mt-8 text-2xl font-extrabold leading-tight sm:text-3xl">
          {project.shortTitle}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map(({ name }) => (
            <span
              key={name}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/85"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectVisual;
