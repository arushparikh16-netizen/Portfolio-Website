"use client";

import { useRef, MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function GlowCard({
  children,
  className,
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    ref.current.style.setProperty("--mx", `${px}px`);
    ref.current.style.setProperty("--my", `${py}px`);
    if (!tilt) return;
    mx.set(px / rect.width);
    my.set(py / rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={tilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-base-border bg-base-raised/60 p-6",
        "transition-colors duration-300 hover:border-white/15",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(91,140,255,0.12), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
