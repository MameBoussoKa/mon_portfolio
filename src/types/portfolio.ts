export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'Mobile' | 'Web App' | 'E-commerce' | 'API' | 'Backend' | 'Frontend';
  githubLink?: string;
  liveLink?: string;
  tutor: string;
  tutorContact: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}
