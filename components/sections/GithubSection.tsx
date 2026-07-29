"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";

// Deterministic pseudo-random values for a decorative contribution grid.
// Purely visual — not real GitHub data.
function seeded(i: number) {
  const x = Math.sin(i * 999) * 10000;
  return x - Math.floor(x);
}

export default function GithubSection() {
  const cells = Array.from({ length: 7 * 26 }, (_, i) => seeded(i));

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-base-border bg-base-raised/50 p-10 sm:p-14"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-ink-dim">
                <Github size={13} /> open source
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Most of what I build is public.
              </h2>
              <p className="mt-4 max-w-md text-ink-dim">
                Commit history, side projects, and experiments live on GitHub —
                the most honest changelog of what I&apos;ve been learning.
              </p>
              <div className="mt-8">
                <MagneticButton
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} /> View GitHub Profile <ArrowUpRight size={14} />
                </MagneticButton>
              </div>
            </div>

            <div
              className="grid shrink-0 grid-flow-col grid-rows-7 gap-1"
              aria-hidden
            >
              {cells.map((v, i) => (
                <div
                  key={i}
                  className="h-2.5 w-2.5 rounded-[3px]"
                  style={{
                    background:
                      v > 0.85
                        ? "#5b8cff"
                        : v > 0.65
                        ? "rgba(91,140,255,0.55)"
                        : v > 0.4
                        ? "rgba(91,140,255,0.25)"
                        : "rgba(255,255,255,0.05)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
