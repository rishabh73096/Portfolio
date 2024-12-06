export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'fullstack' | 'backend';
  teamSize: string;
  duration: string;
  features: string[];
}