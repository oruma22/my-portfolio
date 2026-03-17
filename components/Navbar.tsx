import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 md:px-16 md:py-8 max-w-7xl mx-auto">
      <span className="text-xl font-medium tracking-wide text-white">LEMUEL ORUMA.</span>
      <div className="flex gap-6 text-sm text-gray-400">
        <a href="https://github.com/oruma22" target="_blank" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="mailto:your@email.com" className="hover:text-white transition-colors">Contact</a>
      </div>
    </nav>
  );
};
