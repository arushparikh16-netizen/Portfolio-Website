"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, Code2 } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";
import AmbientBackground from "@/components/ui/AmbientBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.rotatingRoles.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      {profile.rotatingRoles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 top-0 whitespace-nowrap text-gradient"
          initial={false}
          animate={
            i === index
              ? { y: 0, opacity: 1 }
              : { y: i < index ? -28 : 28, opacity: 0 }
          }
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {role}
        </motion.span>
      ))}
      {/* keeps layout width stable using the longest role, invisibly */}
      <span className="invisible">
        {profile.rotatingRoles.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <AmbientBackground variant="hero" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-ink-dim"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent-cyan" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name.replace("TODO ", "")} —
            <br />
            <RotatingRole />
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-dim sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href={profile.resumeUrl}>
              <Download size={16} /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Mail size={16} /> Get in Touch
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
           {[
           { href: profile.social.github, icon: Github, label: "GitHub" },
           { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
           { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
           { href: profile.social.codeforces, icon: Terminal, label: "Codeforces" },
           { href: profile.social.gfg, icon: Braces, label: "GeeksforGeeks" },
          ]
  .filter((s) => s.href)
  .map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label={label}
                className="text-ink-faint transition-colors hover:text-accent-blue"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-signal-gradient opacity-25 blur-2xl" />
          <div className="glass relative h-full w-full overflow-hidden rounded-[2rem]">
            {profile.avatarUrl ? (
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                sizes="384px"
                className="object-cover"
                priority
              />
            ) : null}
          </div>
          <div className="glass absolute -bottom-5 -left-5 rounded-xl px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-faint">
              Based in
            </div>
            <div className="text-sm text-ink">{profile.location}</div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor-hover
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint transition-colors hover:text-ink"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
