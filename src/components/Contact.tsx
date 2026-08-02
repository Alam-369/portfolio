"use client";

import { motion } from "framer-motion";
import { Link2, Mail, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personal } from "@/data/resume";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "Connect with me",
    href: personal.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="Contact" title="Let's build something together" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-xl text-center text-muted"
      >
        I&apos;m open to new opportunities and interesting backend / full-stack
        challenges. Feel free to reach out through any of the channels below.
      </motion.p>

      <div className="grid gap-5 sm:grid-cols-3">
        {contacts.map(({ icon: Icon, label, value, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target={label === "LinkedIn" ? "_blank" : undefined}
            rel={label === "LinkedIn" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card flex flex-col items-center gap-3 p-6 text-center transition-colors hover:border-accent/50"
          >
            <div className="rounded-full bg-accent/10 p-3 text-accent">
              <Icon size={20} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
              <div className="mt-1 text-sm font-medium">{value}</div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
