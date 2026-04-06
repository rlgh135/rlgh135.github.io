export interface TroubleShooting {
  problem: string;
  solution: string;
}

export interface ProjectDetail {
  overview: string;
  images?: string[];
  troubleshooting?: TroubleShooting[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  year: string;
  detail?: ProjectDetail;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface WorkProject {
  title: string;
  description: string;
  tags: string[];
  impact?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  projects?: WorkProject[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
