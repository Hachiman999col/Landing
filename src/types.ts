export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectDetails {
  modal: "info" | "onlyInfo";
  languages: string[];
  internal: string[];
  animationType: string;
  gifUrl?: string;
  list?: string[];
}

export interface Project {
  id: string;
  title: string;
  descEn: string[];
  descEs: string[];
  tech: string[];
  featuresEn: string[];
  featuresEs: string[];
  links: ProjectLink[];
  details: ProjectDetails;
}
