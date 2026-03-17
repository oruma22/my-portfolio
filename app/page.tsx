import { Inter } from "next/font/google";

// Standardizing typography scaling
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projects = [
    {
      title: "Recipe API",
      description: "A robust RESTful backend service for managing, creating, and retrieving recipe data. Designed to handle ingredient lists, step-by-step instructions, and optimized data querying.",
      tech: ["Node.js", "Express", "Database", "REST APIs"],
      github: "https://github.com/oruma22/Recipe-API",
      docs: "https://github.com/oruma22/Recipe-API#readme",
    }
  ];

  const skills = [
    "Node.js", "TypeScript", "PostgreSQL",
    "MongoDB", "version control",
  ];

  return (
    <main className={`${inter.className} min-h-screen relative text-gray-200 antialiased`}>
      {/* --- NAVBAR --- */}
      <nav className="flex justify-between items-center p-6 md:px-16 md:py-8 max-w-7xl mx-auto">
        <span className="text-xl font-medium tracking-wide text-white">LEMUEL ORUMA.</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="https://github.com/oruma22" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:your@email.com" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-32">
        {/* --- HERO SECTION --- */}
        <header className="mb-32">
          <p className="text-gray-400 font-medium mb-4 tracking-wider uppercase text-sm">
            Software Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-white max-w-4xl">
            Backend Developer
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            I build scalable APIs, optimize complex databases, and architect reliable system infrastructure.
          </p>
        </header>

        {/* --- PROJECTS SECTION --- */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Selected Works</h2>
            <div className="h-[1px] bg-gray-800 flex-1 mt-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-lg bg-[#0a0a0a] border border-gray-800 hover:border-gray-600 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
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
                  <a href={project.docs} target="_blank" className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
                    Documentation <span className="text-base group-hover:translate-x-0.5 transition-transform duration-300 leading-none">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Core Stack</h2>
            <div className="h-[1px] bg-gray-800 flex-1 mt-1"></div>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-lg text-sm md:text-base border border-gray-800 text-gray-300 bg-[#0a0a0a] hover:border-gray-500 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Oruma. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="mailto:your@email.com" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </footer>

      </div>
    </main>
  );
}