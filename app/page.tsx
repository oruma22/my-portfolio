import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProjectCard } from "../components/ProjectCard";
import { SkillBadge } from "../components/SkillBadge";
import { Footer } from "../components/Footer";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen relative text-gray-200 antialiased`}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-32">
        <Hero />

        {/* --- PROJECTS SECTION --- */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Selected Works</h2>
            <div className="h-[1px] bg-gray-800 flex-1 mt-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
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
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
