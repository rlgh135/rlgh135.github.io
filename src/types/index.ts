export interface Skill {
  category: string;
  items: string[];
}

export interface WorkProject {
  title: string;
  period: string;
  description: string;
  tags: string[];
  responsibilities: string[];
  outcomes: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  details?: string[];
  note?: string;
  label?: string;
  projects?: WorkProject[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
