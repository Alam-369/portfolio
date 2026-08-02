"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon, Sparkles, TrendingUp, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { languages, personal } from "@/data/resume";

const stats = [
  { icon: TrendingUp, label: "Years of Experience", value: "4+" },
  { icon: Sparkles, label: "Enterprise Platforms Delivered", value: "3" },
  { icon: Users, label: "End Users Impacted", value: "Millions" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="About Me" title="Turning complex problems into reliable systems" />

      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted"
        >
          <p>{personal.summary}</p>
          <p>
            Based in {personal.location}, I focus on backend engineering with C# and .NET,
            designing resilient architectures — from monoliths to microservices — that scale
            to serve millions of end users.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm"
              >
                <LanguagesIcon size={14} className="text-accent" />
                {lang.name} <span className="text-muted">— {lang.level}</span>
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-1"
        >
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="card flex items-center gap-4 p-5">
              <div className="rounded-lg bg-accent/10 p-3 text-accent">
                <Icon size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-muted">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
