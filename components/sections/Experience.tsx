"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles, Code, Users } from "lucide-react";
import { experience } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

const iconFor = {
  Internship: Briefcase,
  Freelance: Sparkles,
  Leadership: Users,
  Project: Code,
};

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Track Record"
          title="Experience"
          description="Where I've worked, built, and led — in order."
        />

        <div className="relative border-l border-base-border pl-8">
          {experience.map((exp, i) => {
            const Icon = iconFor[exp.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-base-border bg-base-raised text-accent-blue">
                  <Icon size={14} />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-medium text-ink">
                    {exp.role} · <span className="text-accent-blue">{exp.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-ink-faint">{exp.period}</span>
                </div>
                <span className="mt-1 inline-block rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                  {exp.type}
                </span>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-sm leading-relaxed text-ink-dim">
                      — {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
