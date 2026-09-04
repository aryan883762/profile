import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

import type { NavigationLink, SocialLink } from "@/types/navigation";

export const profileLinks = {
  email: "mailto:aryanlpu@gmail.com",
  github: "https://github.com/kumararyan",
  linkedIn: "https://www.linkedin.com/in/kumar-aryan-18186bb8/",
  upwork: "https://www.upwork.com/freelancers/~015ed81f3311203b69",
} as const;

export const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] satisfies readonly NavigationLink[];

const githubLink: SocialLink = {
  href: profileLinks.github,
  icon: FaGithub,
  label: "GitHub",
};

const linkedInLink: SocialLink = {
  href: profileLinks.linkedIn,
  icon: FaLinkedin,
  label: "LinkedIn",
};

const upworkLink: SocialLink = {
  href: profileLinks.upwork,
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
