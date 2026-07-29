"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div className="mb-3 flex items-center gap-3 text-xs">
        <span className="h-px w-8 bg-gradient-to-r from-accent-blue to-accent-violet" />
        <span className="font-mono uppercase tracking-[0.25em] text-accent-blue">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-dim">
          {description}
        </p>
      )}
    </motion.div>
  );
}
