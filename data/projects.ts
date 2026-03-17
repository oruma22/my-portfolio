export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  docs?: string;
}

export const projects: Project[] = [
  {
    title: "Recipe API",
    description: "A robust RESTful backend service for managing, creating, and retrieving recipe data. Designed to handle ingredient lists, step-by-step instructions, and optimized data querying.",
    tech: ["Node.js", "Express", "Database", "REST APIs"],
    github: "https://github.com/oruma22/Recipe-API",
    docs: "https://github.com/oruma22/Recipe-API#readme",
  },
  {
    title: "Grace Worship Centre",
    description: "An AI-powered church website prototype featuring automated content generation and a modern UI. Integrated with Google Gemini API to streamline information delivery for the congregation.",
    tech: ["React", "TypeScript", "Vite", "Google Gemini API"],
    github: "https://github.com/oruma22/grace-worhip-center",
  },
];
