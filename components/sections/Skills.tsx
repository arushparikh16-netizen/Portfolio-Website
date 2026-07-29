"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills"
          description="What I reach for when building — grouped by where it fits in the stack."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, ci) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (ci % 3) * 0.08 }}
            >
              <GlowCard>
                <h3 className="font-display text-base font-medium text-ink">
                  {category.label}
                </h3>
                <div className="mt-5 space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-ink-dim">{skill.name}</span>
                        <span className="font-mono text-ink-faint">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: skill.level / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformOrigin: "left" }}
                          className="h-full rounded-full bg-signal-gradient"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
