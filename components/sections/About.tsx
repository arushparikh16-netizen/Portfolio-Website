"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target } from "lucide-react";
import { about } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Profile"
          title="About"
          description="A quick read on who I am and what I'm building toward."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-dim">
                {p}
              </p>
            ))}

            <div className="!mt-8 flex flex-wrap gap-3">
              {about.goals.map((goal, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-ink-dim"
                >
                  <Target size={13} className="text-accent-blue" />
                  {goal}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GlowCard tilt={false} className="!p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-accent-blue/10 p-2 text-accent-blue">
                  <GraduationCap size={18} />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Education
                </span>
              </div>

              <ol className="relative space-y-8 border-l border-white/10 pl-6">
                {about.education.map((edu, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-signal-gradient shadow-glow" />
                    <div className="font-display text-lg font-medium text-ink">
                      {edu.degree}
                    </div>
                    <div className="mt-1 text-sm text-accent-blue">
                      {edu.institution}
                    </div>
                    <div className="mt-1 font-mono text-xs text-ink-faint">
                      {edu.period}
                    </div>
                    <p className="mt-2 text-sm text-ink-dim">{edu.detail}</p>
                  </li>
                ))}
              </ol>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
