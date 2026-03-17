import React from "react";

export const Footer = () => {
  return (
    <footer className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Oruma. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="mailto:your@email.com" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
      </div>
    </footer>
  );
};
