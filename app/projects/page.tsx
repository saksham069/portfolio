"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import projectsData from "@/data/projects.json";

interface Project {
  title: string;
  description: string;
  tech: string[];
  thumbnail: string;
  link: string;
  type: string;
}

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const filterProjects = (type: string) => {
    return projects
      .filter((project) => project.type === type)
      .filter((project) => {
        const content = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase();
        return content.includes(query.toLowerCase());
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-5xl px-4 pt-24 text-left"
    >
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-2">Projects</h1>
        <p className="text-muted-foreground max-w-xl">
          A selection of apps, games, tools and experiments I&apos;ve built. Most are
          solo projects — from fun ideas to full-stack systems.
        </p>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-md mx-auto mb-10">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search projects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border-2 border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
        />
      </div>

      {/* Main Project Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-20">
        {filterProjects("main").map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      {filterProjects("exp").length > 0 && (
        <div className="flex items-center gap-4 mb-8">
          <hr className="flex-grow border-border" />
          <span className="text-sm uppercase text-muted-foreground tracking-wider">
            Experiments
          </span>
          <hr className="flex-grow border-border" />
        </div>
      )}

      {/* Experimental Projects */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-20">
        {filterProjects("exp").map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      {filterProjects("acad").length > 0 && (
        <div className="flex items-center gap-4 mb-8">
          <hr className="flex-grow border-border" />
          <span className="text-sm uppercase text-muted-foreground tracking-wider">
            Academic
          </span>
          <hr className="flex-grow border-border" />
        </div>
      )}

      {/* Academic Projects */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-20">
        {filterProjects("acad").map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
