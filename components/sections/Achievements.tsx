"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { achievements } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import Counter from "@/components/ui/Counter";

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proof of Work"
          title="Achievements"
          description="Certifications, hackathons, and the numbers behind the practice."
        />

        <div className="mb-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {achievements.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="mt-1 text-xs text-ink-dim">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            {achievements.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <GlowCard tilt={false} className="flex items-center justify-between !py-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-accent-blue/10 p-2 text-accent-blue">
                      <Award size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink">{item.title}</div>
                      <div className="text-xs text-ink-faint">
                        {item.issuer} · {item.date}
                      </div>
                    </div>
                  </div>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="text-ink-faint transition-colors hover:text-accent-blue"
                      aria-label={`View ${item.title}`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlowCard tilt={false} className="!p-6">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Coding Profiles
              </div>
              <div className="mt-4 space-y-3">
                {achievements.codingProfiles
                  .filter((p) => p.url)
                  .map((p) => (
                    <a
                      key={p.platform}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex items-center justify-between rounded-lg border border-white/5 px-3 py-2.5 text-sm transition-colors hover:border-white/15 hover:bg-white/[0.03]"
                    >
                      <span className="text-ink">{p.platform}</span>
                      <span className="font-mono text-xs text-ink-faint">{p.stat}</span>
                    </a>
                  ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
