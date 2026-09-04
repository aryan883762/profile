import type { IconType } from "react-icons";
import {
  FaBrain,
  FaBullseye,
  FaChalkboardTeacher,
  FaPuzzlePiece,
  FaRocket,
} from "react-icons/fa";

interface DeveloperValue {
  icon: IconType;
  iconClassName: string;
  title: string;
  description: string;
}

export const developerValues = [
  {
    icon: FaBrain,
    iconClassName: "text-xl text-purple-500",
    title: "Product-Focused Problem Solving",
    description:
      "Turn ambiguous requirements into pragmatic, maintainable solutions tied to user and business outcomes.",
  },
  {
    icon: FaRocket,
    iconClassName: "text-xl text-pink-500",
    title: "End-to-End Ownership",
    description:
      "Own architecture, implementation, reviews, automated delivery, observability, and production support.",
  },
  {
    icon: FaPuzzlePiece,
    iconClassName: "text-xl text-blue-500",
    title: "Cross-Platform Systems",
    description:
      "Build shared foundations across web and mobile while preserving platform-specific quality and experience.",
  },
  {
    icon: FaBullseye,
    iconClassName: "text-xl text-emerald-500",
    title: "AI-Accelerated Engineering",
    description:
      "Use AI for exploration, implementation, and review while keeping technical judgment and quality human-led.",
  },
  {
    icon: FaChalkboardTeacher,
    iconClassName: "text-xl text-orange-500",
    title: "Clear Collaboration",
    description:
      "Align founders, designers, product managers, and engineers through clear tradeoffs and dependable delivery.",
  },
] satisfies readonly DeveloperValue[];
