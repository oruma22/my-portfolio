import React from "react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group p-8 rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <h3 className="text-2xl font-medium mb-3 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded bg-gray-900 border border-gray-800 text-xs text-gray-300 font-medium tracking-wide">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-6 text-sm font-medium mt-auto">
        <a href={project.github} target="_blank" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
          Repository <span className="text-base group-hover:translate-x-0.5 transition-transform duration-300 leading-none">↗</span>
        </a>
        {project.docs && (
          <a href={project.docs} target="_blank" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            Documentation <span className="text-base group-hover:translate-x-0.5 transition-transform duration-300 leading-none">↗</span>
          </a>
        )}
      </div>
    </div>
  );
};
