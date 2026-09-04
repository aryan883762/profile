import type { IconType } from "react-icons";

export interface ProjectTechnology {
  name: string;
  icon: IconType;
}

export interface Project {
  title: string;
  shortTitle: string;
  subtitle: string;
  role: string;
  description: string;
  image?: string;
  images?: string[];
  imagePosition?: "object-center" | "object-top";
  link: string;
  gradient: string;
  tech: ProjectTechnology[];
  contributions: string[];
  overview?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}
