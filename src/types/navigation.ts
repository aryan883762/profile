import type { IconType } from "react-icons";

export interface NavigationLink {
  href: `#${string}`;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}
