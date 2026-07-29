"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-signal-gradient"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            data-cursor-hover
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            {profile.initials}
            <span className="text-accent-blue">.</span>
          </a>

          <nav
            className={`hidden items-center gap-1 rounded-full px-2 py-2 md:flex ${
              scrolled ? "glass" : ""
            }`}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-cursor-hover
                className="rounded-full px-4 py-1.5 text-sm text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href={profile.resumeUrl} variant="outline" className="px-5 py-2.5 text-xs">
              Resume
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/10 p-2 text-ink md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-base/98 p-6 md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-2"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="mt-12 flex flex-col gap-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-display text-3xl font-medium text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
