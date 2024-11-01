"use client";

import { Project } from "@/lib/data";
import { ExternalLink, Github, Link } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <div
      // onClick={() => {
      //   window.open(project.link);
      // }}
      className="rounded-xl border bg-card text-card-foreground shadow  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
    >
      <div className="space-y-2 p-6">
        <div className="flex space-x-3">
          <h3 className="font-semibold leading-none tracking-tight">
            {project.title}
          </h3>

          <Github
            onClick={() => {
              window.open(project.github);
            }}
            className="cursor-pointer"
            height={15}
            width={15}
          />

          <Link
            onClick={() => {
              window.open(project.link);
            }}
            className="cursor-pointer"
            height={15}
            width={15}
          />
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
    </div>
  );
}
