"use client";

import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Projects" title="Academic & research work" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card group flex flex-col p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-lg bg-accent-2/10 p-2.5 text-accent-2">
                <FlaskConical size={20} />
              </div>
              <span className="text-xs text-muted">{project.period}</span>
            </div>

            <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <p className="mt-3 flex-1 text-sm text-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-border px-2.5 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
