"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, TrendingUp } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="Real problems, the approach I took, and the measurable outcome."
        />

        <div className="space-y-8">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-base-border bg-base-raised/50 lg:grid-cols-2"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-base-soft lg:aspect-auto ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-blue">
                    0{i + 1} · Case Study
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-dim">{project.summary}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                        Problem
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                        Solution
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink-dim">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                        Impact
                      </div>
                      <ul className="mt-1.5 space-y-1.5">
                        {project.impact.map((line, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-ink"
                          >
                            <TrendingUp
                              size={14}
                              className="mt-0.5 shrink-0 text-accent-cyan"
                            />
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-ink-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <MagneticButton href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-xs">
                        <ArrowUpRight size={14} /> Live Demo
                      </MagneticButton>
                    )}
                    {project.githubUrl && (
                      <MagneticButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outline"
                        className="px-5 py-2.5 text-xs"
                      >
                        <Github size={14} /> Source
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
        </div>

        {projects.some((p) => !p.featured) && (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <motion.a
                  key={project.slug}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group rounded-2xl border border-base-border bg-base-raised/40 p-6 transition-colors hover:border-white/15"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-base font-medium text-ink">
                      {project.title}
                    </h4>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-blue"
                    />
                  </div>
                  <p className="mt-2 text-sm text-ink-dim">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-wide text-ink-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
