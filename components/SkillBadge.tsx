import React from "react";

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="px-4 py-2 rounded-lg text-sm md:text-base border border-gray-800 text-gray-300 bg-[#0a0a0a] hover:border-gray-500 hover:text-white transition-colors cursor-default">
      {skill}
    </span>
  );
};
