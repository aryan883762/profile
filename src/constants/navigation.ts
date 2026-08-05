import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

import type { NavigationLink, SocialLink } from "@/types/navigation";

export const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
] satisfies readonly NavigationLink[];

const githubLink: SocialLink = {
  href: "https://github.com/kumararyan",
  icon: FaGithub,
  label: "GitHub",
};

const linkedInLink: SocialLink = {
  href: "https://www.linkedin.com/in/kumar-aryan/",
  icon: FaLinkedin,
  label: "LinkedIn",
};

const upworkLink: SocialLink = {
  href: "https://www.upwork.com/freelancers/~015ed81f3311203b69",
  icon: SiUpwork,
  label: "Upwork",
};

export const headerSocialLinks = [
  linkedInLink,
  githubLink,
  upworkLink,
] as const;

export const footerSocialLinks = [
  githubLink,
  linkedInLink,
  upworkLink,
] as const;
