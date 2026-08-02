"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card flex items-start gap-4 p-6"
          >
            <div className="rounded-lg bg-accent/10 p-3 text-accent">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted">{edu.school}</p>
              <p className="mt-1 text-sm text-accent">{edu.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
