// stuff to be added hai abhi, docker hogya etc
// icons daalne kuch ke proper
// fdading useEffect, so its obvious its a list of projects; test out slinding list in portrait

// content dummy hai jaha bhi paras hai, abhi making the structure only, content khud daalunga, later

// seo krna

// ssr samajhna isska

// button.tsx i dont think kaam ka hai ab, delete

// 

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
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
} from "react-icons/si";
import { motion } from "framer-motion";

const featuredProjects = [
  {
    title: "Insaaf",
    description:
      "Flutter + Firebase platform for legal forums, internships, and networking.",
    link: "https://github.com/shah-rahul/INSAAF",
    thumbnail: "/thumbnails/insaaf.png",
    tech: ["Flutter", "Firebase"],
  },
  {
    title: "MiniGames-Arcade",
    description:
      "Core Java game arcade with 5 mini-games, home and pause screens.",
    link: "https://github.com/saksham069/MiniGames-Arcade",
    thumbnail: "/thumbnails/minigames.png",
    tech: ["Java"],
  },
  {
    title: "Shoes Collection",
    description:
      "Basic Flutter e-commerce demo with Provider-based state management.",
    link: "https://github.com/saksham069/flutter-basic-ecommerce-app",
    thumbnail: "/thumbnails/shoes.png",
    tech: ["Flutter", "Dart"],
  },
];

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
          Hey, I'm Saksham
        </h1>
        <p className="text-muted-foreground max-w-xl text-base sm:text-lg">
          Full-stack web & mobile dev · Game dev on the side · MCA @NIT
          Kurukshetra
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="/saksham-resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 border border-border text-foreground rounded-md hover:bg-muted transition-colors"
          >
            <DownloadIcon />
            Download Résumé
          </a>

          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
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
            <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
              Languages
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <SiJavascript /> JavaScript / TypeScript
              </li>
              <li className="flex items-center gap-2">
                <SiPython /> Python
              </li>
              <li className="flex items-center gap-2">
                <SiCplusplus /> C / C++
              </li>
              <li className="flex items-center gap-2">Java</li>
              <li className="flex items-center gap-2">
                <SiDart /> Dart
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
              Frameworks & Libraries
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <SiReact /> React / Next.js
              </li>
              <li className="flex items-center gap-2">
                <SiExpress /> Express.js
              </li>
              <li className="flex items-center gap-2">
                <SiFlutter /> Flutter
              </li>
              <li className="flex items-center gap-2">
                <SiUnity /> Unity (C#)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-2 flex items-center gap-2">
              Tools & Platforms
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <SiGit /> Git & GitHub
              </li>
              <li className="flex items-center gap-2">
                <SiFirebase /> Firebase
              </li>
              <li className="flex items-center gap-2">
                <SiMongodb /> MongoDB
              </li>
              <li className="flex items-center gap-2">VS Code</li>
              <li className="flex items-center gap-2">
                <SiLinux /> Linux / WSL
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-2">
              Dev Experience
            </h3>
            <ul className="space-y-2 pl-1">
              <li>Full-stack Web Dev</li>
              <li>Mobile App Dev</li>
              <li>Game Dev</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <hr className="w-full border-border" />

      {/* Projects Section */}
      <motion.section {...fadeIn} className="w-full text-left">
        <h2 className="text-xl font-semibold mb-6 text-center text-foreground">
          Featured Projects
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-1 hide-scrollbar -mx-2 px-2 snap-x scroll-smooth">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-muted p-4 rounded-lg border border-border shadow-sm flex-shrink-0 snap-center"
            >
              <Image
                src={project.thumbnail}
                alt={`${project.title} thumbnail`}
                width={400}
                height={200}
                className="rounded mb-3 border"
              />
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 border border-border rounded-md bg-background text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}

          {/* View All Projects Button */}
          <Link
            href="/projects"
            className="flex items-center justify-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] rounded-lg border border-border bg-muted/40 text-primary hover:opacity-100 opacity-50 transition-opacity"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </Link>
        </div>
      </motion.section>
    </section>
  );
}
