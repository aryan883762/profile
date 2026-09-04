export interface Experience {
  company: string;
  current?: boolean;
  gradient: string;
  highlights: readonly string[];
  initials: string;
  location: string;
  logoAlt: string;
  logoImageClassName?: string;
  logoPanelClassName: string;
  logoUrl: string;
  period: string;
  role: string;
  summary: string;
  type: string;
}

export interface Education {
  institution: string;
  location: string;
  logoAlt: string;
  logoPanelClassName: string;
  logoUrl: string;
  period: string;
  qualification: string;
}
