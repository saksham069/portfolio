// seo krna

// ssr samajhna isska

// button.tsx i dont think kaam ka hai ab, delete

// loading from local storage in contact info wala tab, error dont occur

"use client";

import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiDart,
  SiFlutter,
  SiFirebase,
  SiReact,
  SiExpress,
  SiMongodb,
  SiUnity,
  SiGit,
  SiLinux,
  SiNumpy,
  SiTailwindcss,
  SiGnubash,
  SiNodedotjs,
  SiIntellijidea,
  SiDocker,
  SiV
} from "react-icons/si";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

const featuredProjects = projectsData["main"].slice(0, 3);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 flex flex-col items-center text-center gap-16">
      {/* Hero Section */}
      <motion.div {...fadeIn} className="flex flex-col items-center gap-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Hey, I&apos;m Saksham
        </h1>
        <p className="text-muted-foreground max-w-xl text-base sm:text-lg">
          Full-stack Web & Mobile Dev · AI/ML Explorer · Systems & Infra Enthusiast · Game Dev on the Side · MCA @ NIT Kurukshetra
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="/saksham-resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 border border-border text-foreground rounded-md ring-offset-background hover:ring-2 hover:ring-ring hover:ring-offset-0"
          >
            <DownloadIcon />
            Download Résumé
          </a>

          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md ring-offset-background hover:ring-2 hover:ring-ring hover:ring-offset-0"
          >
            Contact Me
          </Link>

        </div>
      </motion.div>

      <hr className="w-full border-border" />

      {/* Tech Section */}
      <motion.section {...fadeIn} className="w-full text-left">
        <h2 className="text-xl font-semibold mb-6 text-center text-foreground">
          Tech I Work With
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm text-muted-foreground">
          <div>
            <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2 underline underline-offset-4">
              Languages
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><SiJavascript /> JavaScript / TypeScript</li>
              <li className="flex items-center gap-2"><SiPython /> Python</li>
              <li className="flex items-center gap-2"><SiCplusplus /> C / C++</li>
              <li className="flex items-center gap-2"><SiIntellijidea /> Java</li>
              <li className="flex items-center gap-2"><SiDart /> Dart</li>
              <li className="flex items-center gap-2"><SiGnubash /> Bash / Shell</li>
            </ul>

          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2 underline underline-offset-4">
              Frameworks & Libraries
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><SiReact /> React / Next.js</li>
              <li className="flex items-center gap-2"><SiNodedotjs /> Node.js</li>
              <li className="flex items-center gap-2"><SiExpress /> Express.js</li>
              <li className="flex items-center gap-2"><SiFlutter /> Flutter</li>
              <li className="flex items-center gap-2"><SiUnity /> Unity (C#)</li>
              <li className="flex items-center gap-2"><SiNumpy /> NumPy, pandas</li>
              <li className="flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</li>
            </ul>

          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2 underline underline-offset-4">
              Tools & Platforms
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><SiGit /> Git & GitHub</li>
              <li className="flex items-center gap-2"><SiFirebase /> Firebase</li>
              <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
              <li className="flex items-center gap-2"><SiDocker /> Docker / LXD</li>
              <li className="flex items-center gap-2"><SiV /> VS Code</li>
              <li className="flex items-center gap-2"><SiLinux /> Linux / WSL</li>
            </ul>

          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-2 underline underline-offset-4">
              Dev Experience
            </h3>
            <ul className="space-y-2 pl-1">
              <li>Full-stack Web Dev</li>
              <li>Mobile App Dev</li>
              <li>Game Dev</li>
              <li>AI/ML Explorations</li>
              <li>REST API Development</li>
              <li>Infra / Containerization (Docker, LXD)</li>
              <li>Basic DevOps & CI/CD (Exploring)</li>
            </ul>

          </div>
        </div>
      </motion.section>

      <hr className="w-full border-border" />

      {/* Projects Section */}
      <motion.section
        {...fadeIn}
        className="w-full text-left"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            Featured Projects
          </h2>
          <div className="invisible sm:visible relative group inline-block">
            <div className="w-5 h-5 rounded-full border border-muted-foreground text-primary italic flex items-center justify-center text-sm font-semibold cursor-default">
              i
            </div>
            <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] px-3 py-2 text-xs text-foreground bg-background border border-border rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md">
              Click on any card and use arrow keys to scroll.
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Left Fade */}
          <div className="pointer-events-none absolute -left-16 top-0 h-full w-28 z-10 bg-gradient-to-r from-background via-background to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute -right-16 top-0 h-full w-40 z-10 bg-gradient-to-l from-background via-background to-transparent" />


          {/* Scrollable Container */}
          <div
            className="flex gap-4 overflow-x-auto px-2 -mx-2 pb-1 scroll-smooth snap-x snap-mandatory hide-scrollbar"
            role="region"
            aria-label="Featured Projects"
            tabIndex={0}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 snap-center"
              >
                <ProjectCard {...project} />
              </div>
            ))}

            {/* View All Projects Button */}
            <Link
              href="/projects"
              className="group w-[260px] sm:w-[280px] md:w-[300px] flex flex-col items-center justify-center gap-2 flex-shrink-0 rounded-lg border border-border bg-muted/40 hover:bg-muted transition-colors snap-center text-muted-foreground hover:text-foreground"
            >
              <div className="text-primary text-lg font-medium transition-transform group-hover:translate-x-1">
                View All Projects →
              </div>
              <div className="text-sm text-muted-foreground">
                Browse all work
              </div>
            </Link>
          </div>
        </div>
      </motion.section>

    </section>
  );
}
