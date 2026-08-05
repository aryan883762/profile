import type { IconType } from "react-icons";

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: IconType;
  gradient: string;
  accentBackground: string;
  items: SkillItem[];
}
