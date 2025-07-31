"use client";

import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types/project";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [projectsm, setProjectsm] = useState<Project[]>([]);
  const [projectsa, setProjectsa] = useState<Project[]>([]);
  const [projectse, setProjectse] = useState<Project[]>([]);

  useEffect(() => {
    setProjectsm(projectsData["main"]);
    setProjectsa(projectsData["academic"]);
    setProjectse(projectsData["experimental"]);
  }, []);

  const filterProjects = (type: string) => {
    let projects;
    if (type === "main") projects = projectsm;
    if (type === "academic") projects = projectsa;
    if (type === "experimental") projects = projectse;
    return projects?.filter((project) => {
      const content = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase();
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
        <p className="text-muted-foreground max-w-2xl">
          A selection of apps, games, tools and experiments I&apos;ve built. Most are solo projects.<br />From fun ideas to full-stack well-architechtured systems...
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
        {filterProjects("main")?.map((project, idx) => (
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
      {filterProjects("academic")!.length > 0 && (
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
        {filterProjects("academic")?.map((project, idx) => (
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
      {filterProjects("experimental")!.length > 0 && (
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
        {filterProjects("experimental")?.map((project, idx) => (
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
