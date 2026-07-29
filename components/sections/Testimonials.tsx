"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

// Delete this component's usage in app/page.tsx if you'd rather skip
// testimonials entirely — it's optional.
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  if (testimonials.length === 0) return null;

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Word of Mouth"
          title="Testimonials"
          align="center"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-10 text-center"
            >
              <Quote className="mx-auto mb-4 text-accent-blue" size={28} />
              <p className="text-lg leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 font-display text-sm font-medium text-ink">
                {t.name}
              </div>
              <div className="text-xs text-ink-faint">{t.role}</div>
            </motion.div>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                data-cursor-hover
                className="rounded-full border border-white/10 p-2 text-ink-dim transition-colors hover:text-ink"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                data-cursor-hover
                className="rounded-full border border-white/10 p-2 text-ink-dim transition-colors hover:text-ink"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
