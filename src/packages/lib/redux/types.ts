export interface ResumeProfile {
  name: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: string;
}

export interface ResumeWorkExperience {
  company: string;
  jobTitle: string;
  date: string;
  description: string[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  date: string;
  gpa: string;
  description: string[];
}

export interface ResumeProject {
  project: string;
  date: string;
  description: string[];
}

export interface FeaturedSkill {
  skill: string;
  rating: number;
}

export interface ResumeSkills {
  featuredSkills: FeaturedSkill[];
  description: string[];
}

export interface ResumeCustom {
  description: string[];
}

export interface Resume {
  profile: ResumeProfile;
  workExperience: ResumeWorkExperience[];
  education: ResumeEducation[];
  projects: ResumeProject[];
  skills: ResumeSkills;
  custom: ResumeCustom;
}

export type ResumeKey = keyof Resume;
