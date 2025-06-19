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
    <section className="mx-auto max-w-4xl px-4 py-24 flex flex-col gap-16 text-left text-muted-foreground">
      {/* Header Section */}
      <motion.div
        {...fadeIn}
        className="relative w-full h-56 rounded-lg overflow-hidden bg-muted shadow-md"
      >
        <Image
          src="/cover.jpg" // replace
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute -bottom-10 left-6 w-24 h-24 rounded-full border-4 border-background overflow-hidden shadow-md">
          <Image
            src="/pfp.jpg" // replace
            alt="Saksham"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div {...fadeIn} className="pt-14 text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">About Me</h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg">
          Hey, I'm Saksham — a full-stack web & mobile developer, game dev on
          the side, and a Master's student at NIT Kurukshetra. I'm passionate
          about building smooth, useful, and well-designed digital experiences,
          whether that's a complex web app, a mobile-first tool, or just a fun
          little game.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">My Journey</h2>
        <div className="relative border-l-2 border-border pl-6 space-y-8">
          {/* Entry 1 */}
          <div className="relative">
            <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
            <h3 className="text-foreground font-semibold">
              BSc (Hons) Physics — Manav Rachna University
            </h3>
            <p className="text-sm text-muted-foreground">
              Aug 2020 - June 2023
            </p>
            <p className="text-sm pt-1">
              Explored the analytical depths of Physics while discovering my
              passion for development. Built my foundation here — both in logic
              and in code.
            </p>
          </div>

          {/* Entry 2 */}
          <div className="relative">
            <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
            <h3 className="text-foreground font-semibold">
              MCA — NIT Kurukshetra
            </h3>
            <p className="text-sm text-muted-foreground">July 2023 - Present</p>
            <p className="text-sm pt-1">
              Deep-diving into advanced CS while building full-stack and mobile
              apps. Currently experimenting with AI and DevOps in real-world
              projects.
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
          What I'm Up To
        </h2>
        <p>
          Currently focused on expanding my portfolio, improving my design
          sensibilities, and learning more about DevOps and AI. I'm building
          full-stack apps using the MERN stack, shipping mobile apps with
          Flutter + Firebase, and occasionally tinkering with game engines and
          microcontrollers.
        </p>
        <p>
          I'm open to internship opportunities, collaborations, and freelance
          work that challenges me to grow and contribute meaningfully.
        </p>
      </motion.div>

      {/* What It's Like to Work With Me */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          What It's Like to Work With Me
        </h2>
        <p>
          I'm equal parts builder and debugger — I like things to be smooth,
          intuitive, and solid under the hood. I care a lot about user
          experience, accessibility, and keeping code clean and readable.
          Whether solo or in a team, I bring consistency, clarity, and chill
          energy.
        </p>
      </motion.div>

      {/* Fun Facts */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Fun Facts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>I like designing stuff almost as much as I like building it</li>
          <li>
            I used to contribute digital + traditional art to college events
          </li>
          <li>Mini-games & arcade engines? Yup, made one from scratch</li>
          <li>Love late-night code sprints, good UI, and strong coffee</li>
        </ul>
      </motion.div>

      {/* Certifications - placeholder */}
      <motion.div {...fadeIn} className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Certifications
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Intro to DevOps - Coursera (2024)</li>
          <li>Frontend Development - freeCodeCamp (2023)</li>
          <li>Arduino + IoT Workshop - MRU (2022)</li>
        </ul>
      </motion.div>
    </section>
  );
}
