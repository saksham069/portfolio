"use client";

import Image from "next/image";

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  thumbnail: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  thumbnail,
  link,
}: ProjectProps) {
  return (
    <div className="bg-muted p-4 rounded-lg border border-border shadow-sm flex flex-col justify-between">
      <Image
        src={thumbnail}
        alt={`${title} thumbnail`}
        width={400}
        height={200}
        className="rounded mb-3 border"
      />
      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 border border-border rounded-md bg-background"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
