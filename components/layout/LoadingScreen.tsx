"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setVisible(false);
      return;
    }
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + (100 - p) * 0.18 + 1;
        return next >= 100 ? 100 : next;
      });
    }, 60);
    const timeout = setTimeout(() => setVisible(false), 1200);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-base"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
            booting portfolio
          </div>
          <div className="mt-4 font-display text-2xl font-semibold text-ink">
            {Math.round(progress)}%
          </div>
          <div className="mt-6 h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-signal-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
