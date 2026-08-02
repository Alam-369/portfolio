"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { personal } from "@/data/resume";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl animate-blob" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Available for new opportunities
        </span>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {personal.name}
        </h1>

        <p className="mt-4 bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
          {personal.title} &middot; {personal.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-balance text-muted">
          {personal.summary}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={16} className="text-accent" /> {personal.location}
          </span>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Mail size={16} className="text-accent" /> {personal.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={16} className="text-accent" /> {personal.phone}
          </span>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="#experience"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Contact me
          </a>
        </div>
      </motion.div>

      <a
        href="#about"
        className="absolute bottom-8 z-10 text-muted transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
