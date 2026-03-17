import { JetBrains_Mono } from "next/font/google";

// Bringing in a slick terminal font
const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  // ---------------------------------------------------------
  // EDIT YOUR PROJECTS & SKILLS HERE
  // ---------------------------------------------------------
  const projects = [
    {
      title: "Recipe API",
      description: "A robust RESTful backend service for managing, creating, and retrieving recipe data. Designed to handle ingredient lists, step-by-step instructions, and optimized data querying.",
      tech: ["Node.js", "Express", "Database", "REST APIs"], // <-- Change these to match your actual stack!
      github: "https://github.com/oruma22/Recipe-API",
      docs: "https://github.com/oruma22/Recipe-API#readme", // Linking to your Readme for docs
      architecture: "Client -> API Routing -> Database"
    }
    // When you build your next project, just copy the block above and paste it right below!
  ];

  const skills = [
    "Node.js", "JavaScript/TypeScript", "Python", "SQL",
    "NoSQL", "RESTful APIs", "Git", "Postman", "Backend Architecture"
  ];

  return (
    <main className={`${mono.className} min-h-screen p-6 md:p-16 max-w-4xl mx-auto selection:bg-green-500 selection:text-black`}>

      {/* --- HERO SECTION --- */}
      <header className="mb-16">
        <p className="text-gray-500 mb-2">// INIT SEQUENCE STARTED...</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 glow-text">
          <span className="text-green-700">guest@portfolio:~$</span> whoami
        </h1>
        <div className="mt-6 border-l-2 border-green-500 pl-4">
          {/* I updated your name here based on your GitHub! */}
          <p className="text-xl mb-2 text-gray-200">Hi, I'm Oruma.</p>
          <p className="text-lg text-gray-400">
            A Backend Developer focused on building scalable APIs, optimizing database queries, and connecting the dots behind the scenes.
          </p>
        </div>
      </header>

      {/* --- SKILLS SECTION --- */}
      <section className="mb-16">
        <h2 className="text-2xl mb-6 border-b border-green-900 pb-2 glow-text">
          <span className="text-green-700">./</span>skills.sh
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border border-green-800 bg-green-950/30 text-green-400 text-sm hover:bg-green-900/50 hover:border-green-500 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="mb-16">
        <h2 className="text-2xl mb-6 border-b border-green-900 pb-2 glow-text">
          <span className="text-green-700">ls -la</span> ./projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="border border-green-900 p-6 bg-[#050505] hover:border-green-600 transition-colors group">
              <h3 className="text-2xl font-bold mb-2 group-hover:glow-text">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="mb-4 text-sm text-gray-500 font-mono">
                <span className="text-green-700">Architecture:</span> {project.architecture}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-green-300 bg-green-900/20 px-2 py-1 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors underline decoration-green-800 underline-offset-4">
                  [ GitHub ]
                </a>
                <a href={project.docs} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors underline decoration-green-800 underline-offset-4">
                  [ API Docs / Readme ]
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <footer className="mt-24 border-t border-green-900 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500">System status: <span className="text-green-500">Online</span></p>
        <div className="flex gap-6">
          <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">email.sh</a>
          {/* Be sure to add your actual LinkedIn below! */}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">linkedin.sh</a>
          {/* Updated with your GitHub URL */}
          <a href="https://github.com/oruma22" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">github.sh</a>
        </div>
      </footer>

    </main>
  );
}