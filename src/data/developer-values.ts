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
    iconClassName: "text-3xl text-purple-500",
    title: "Problem Solving",
    description:
      "I find practical solutions that work — from building products from scratch to fixing complex performance issues.",
  },
  {
    icon: FaRocket,
    iconClassName: "text-3xl text-pink-500",
    title: "Full Lifecycle Ownership",
    description:
      "From requirements and architecture to development, code reviews, deployment, and production support.",
  },
  {
    icon: FaPuzzlePiece,
    iconClassName: "text-3xl text-blue-500",
    title: "Cross-Platform Development",
    description:
      "Comfortable across web and mobile using React, Next.js, Angular, React Native, and Flutter.",
  },
  {
    icon: FaBullseye,
    iconClassName: "text-3xl text-emerald-500",
    title: "AI-Augmented Workflow",
    description:
      "Using Cursor, Copilot, ChatGPT, and Claude to accelerate development, code reviews, and repetitive work.",
  },
  {
    icon: FaChalkboardTeacher,
    iconClassName: "text-3xl text-orange-500",
    title: "Collaboration",
    description:
      "Working closely with developers, founders, designers, recruiters, and product teams to deliver strong products.",
  },
] satisfies readonly DeveloperValue[];
