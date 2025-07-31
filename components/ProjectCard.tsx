"use client";

import Image from "next/image";
import type { Project } from "@/types/project";

type ProjectProps = Project;

export default function ProjectCard({
  title,
  description,
  tags,
  thumbnail,
  links,
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
        {tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 border border-border rounded-md bg-background"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-col flex-wrap gap-2 text-sm text-muted-foreground mt-4">
        {links && Object.keys(links).map((l) => (
          <span key={l}>
            {"🔗 ["}
            <a
              href={links[l]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 text-primary hover:underline transition-all"
            >
              {`${l} →`}
            </a>
            {"]"}
          </span>
        ))}
      </div>
    </div>
  );
}
