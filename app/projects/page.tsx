"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

// Main Project List
const mainProjects = [
  {
    title: "Insaaf",
    description:
      "Flutter + Firebase platform for legal forums, internships, and networking.",
    tech: ["Flutter", "Firebase"],
    thumbnail: "/thumbnails/insaaf.png",
    link: "https://github.com/shah-rahul/INSAAF",
  },
  {
    title: "MiniGames-Arcade",
    description:
      "Core Java game arcade with 5 mini-games, home and pause screens.",
    tech: ["Java"],
    thumbnail: "/thumbnails/minigames.png",
    link: "https://github.com/saksham069/MiniGames-Arcade",
  },
  {
    title: "Shoes Collection",
    description:
      "Basic Flutter e-commerce demo with Provider-based state management.",
    tech: ["Flutter", "Dart"],
    thumbnail: "/thumbnails/shoes.png",
    link: "https://github.com/saksham069/flutter-basic-ecommerce-app",
  },
  {
    title: "blah blah",
    description:
      "Basic Flutter e-commerce demo with Provider-based state management.",
    tech: ["Flutter", "Dart"],
    thumbnail: "/thumbnails/shoes.png",
    link: "https://github.com/saksham069/flutter-basic-ecommerce-app",
  },
];

// Experimental / Fun Projects
const experiments = [
  {
    title: "Skribbl.io Clone",
    description: "A real-time multiplayer drawing game using WebSockets.",
    tech: ["Socket.io", "JavaScript", "Node.js"],
    thumbnail: "/thumbnails/skribbl.png",
    link: "https://github.com/saksham069/skribbl.io-clone",
  },
  {
    title: "Tic Tac Toe - Sockets",
    description:
      "Multiplayer Tic Tac Toe using sockets, express and vanilla JS.",
    tech: ["JavaScript", "Socket.io"],
    thumbnail: "/thumbnails/tictactoe.png",
    link: "https://github.com/saksham069/tic-tac-toe-sockets.io",
  },
  {
    title: "To-Do App",
    description: "Simple full-stack task management app.",
    tech: ["MERN", "React", "Node.js"],
    thumbnail: "/thumbnails/todo.png",
    link: "https://github.com/saksham069/to-do-app",
  },
];

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filterProjects = (projects: typeof mainProjects) => {
    return projects.filter((project) => {
      const content = `${project.title} ${
        project.description
      } ${project.tech.join(" ")}`.toLowerCase();
      return content.includes(query.toLowerCase());
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-5xl px-4 py-24 text-left"
    >
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground mb-2">Projects</h1>
        <p className="text-muted-foreground max-w-xl">
          A selection of apps, games, tools and experiments I’ve built. Most are
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
        {filterProjects(mainProjects).map((project, idx) => (
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

      {/* Divider before Experiments */}
      <div className="flex items-center gap-4 mb-8">
        <hr className="flex-grow border-border" />
        <span className="text-sm uppercase text-muted-foreground tracking-wider">
          Experiments
        </span>
        <hr className="flex-grow border-border" />
      </div>

      {/* Experiments Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filterProjects(experiments).map((project, idx) => (
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
