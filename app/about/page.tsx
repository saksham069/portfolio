// Later, we can add a little timeline UI for the "Journey" section

// Or use subtle fade-in animations via Framer Motion or Intersection Observer

// Could also pull in your GitHub stats/activity using an API later

// add quotes/ refs

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-16 pb-24 flex flex-col gap-16 text-left text-muted-foreground">
      {/* Header Section */}
      <motion.div
        {...fadeIn}
        className="relative w-full h-56 rounded-lg bg-muted shadow-md"
      >
        <div className="relative w-full h-56 rounded-lg overflow-hidden bg-muted shadow-md">
          <Image
            src="/cover.jpg"
            alt="Cover"
            fill
            className="object-cover"
          /></div>

        <div className="absolute -bottom-10 left-6 h-24 w-24 rounded-full border-4 border-background overflow-hidden shadow-md">
          <Image
            src="/pfp.jpg"
            alt="Saksham"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>


      <motion.div {...fadeIn} className="pt-14 text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">About Me</h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-justify">
          Hey, I&apos;m Saksham. A full-stack web & mobile developer, AI/ML enthusiast, and game dev on the side. I&apos;m currently pursuing my Master&apos;s at NIT Kurukshetra. I enjoy building clean, efficient, and well-architectured systems. Whether it&apos;s a responsive web app, a Flutter-based mobile UI, a real-time multiplayer game, or even a distributed compute backend using LXD.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">My Journey</h2>
        <div className="relative border-l-2 border-border pl-6 space-y-8">
          <div className="relative">
            <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
            <h3 className="text-foreground font-semibold">
              BSc (Hons) Physics — Manav Rachna University
            </h3>
            <p className="text-sm text-muted-foreground">
              Aug 2020 - June 2023
            </p>
            <p className="text-sm pt-1">
              Explored the analytical depths of Physics while discovering my passion for development. Built my foundation here, both in logic and in code. Built physics simulations using Python.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
            <h3 className="text-foreground font-semibold">
              MCA — NIT Kurukshetra
            </h3>
            <p className="text-sm text-muted-foreground">July 2023 - Present</p>
            <p className="text-sm pt-1">
              Deep-diving into advanced CS while building full-stack and mobile apps. Currently experimenting with AI and DevOps in real-world projects.
            </p>
          </div>

          {/* Placeholder */}
          <div className="relative opacity-40 select-none">
            <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-muted border-2 border-background" />
            <h3 className="text-muted-foreground font-medium italic">
              ...more to come
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Current Focus */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          What I&apos;m Up To
        </h2>
        <p>
          I&apos;m currently working on polishing my full-stack portfolio, refining my system design and DevOps skills, and diving deeper into applied AI/ML. I&apos;ve been building production-ready web platforms using the MERN stack, experimenting with scalable backend infra using Docker, and crafting cross-platform apps in Flutter + Firebase.
        </p>
        <p>
          On the side, I still enjoy game dev, hardware tinkering with ESP32/Arduino, and building fun utilities that solve small but annoying problems.
        </p>
        <p>
          I&apos;m open to internships, freelance gigs, or collaborative projects, especially ones that push me out of my comfort zone and let me ship meaningful stuff.
        </p>
      </motion.div>

      {/* What It&apos;s Like to Work With Me */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          What It&apos;s Like to Work With Me
        </h2>
        <p>
          I care a lot about how things feel to build and to use. My focus is on writing clean, maintainable code, creating smooth UX, and making sure the final product doesn&apos;t just work... it makes sense, and solves a real-world problem. I&apos;m organized, easy to sync with, and genuinely love solving problems.
        </p>
        <p>
          Whether it&apos;s shipping solo or syncing up with a team, I bring a thoughtful approach, a good eye for detail, and a steady, unflustered energy to the table.
        </p>
      </motion.div>

      {/* Fun Facts */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Fun Facts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>I like designing stuff almost as much as I like building it</li>
          <li>I used to make digital and traditional artwork for college events</li>
          <li>I prefer building 2-D games from scratch (without a game engine)... it&apos;s more fun that way :P</li>
          <li>I enjoy late-night build sessions, a sleek UI, and bitter coffee that hits hard</li>
          <li>Sometimes I dive into microcontroller projects...<br />just cuz making things beep and blink scratches this specific itch in my brain</li>
        </ul>
      </motion.div>
    </section >
  );
}
