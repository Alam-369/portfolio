"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Experience" title="Where I've made an impact" />

      <div className="space-y-10">
        {experience.map((job, i) => (
          <motion.div
            key={job.company + job.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card relative p-6 sm:p-8"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-accent/10 p-2.5 text-accent">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 text-sm text-muted sm:items-end">
                <span>{job.period}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={13} /> {job.location}
                </span>
              </div>
            </div>

            <ul className="mt-6 space-y-3 border-t border-border pt-6">
              {job.highlights.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
