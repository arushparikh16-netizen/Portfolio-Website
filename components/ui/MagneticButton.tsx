"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  as?: "a" | "button";
  target?: string;
  rel?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.35, y: relY * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const styles = {
    solid:
      "bg-signal-gradient text-black font-medium shadow-glow hover:shadow-glow-violet",
    outline:
      "border border-white/15 text-ink hover:border-white/30 hover:bg-white/5",
    ghost: "text-ink-dim hover:text-ink",
  }[variant];

  const Comp = href ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
      data-cursor-hover
    >
      <Comp
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-colors duration-200",
          styles,
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
