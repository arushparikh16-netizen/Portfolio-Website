"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { profile } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import AmbientBackground from "@/components/ui/AmbientBackground";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formspree.io/f/xojgbdvk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-28">
      <AmbientBackground />
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Get in touch"
          description="Have a role, a project, or just want to say hi? My inbox is open."
          align="center"
        />

        <div className="glass rounded-3xl p-8 sm:p-10">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-10 text-center"
              >
                <CheckCircle2 className="text-accent-cyan" size={40} />
                <p className="font-display text-lg font-medium text-ink">
                  Message sent
                </p>
                <p className="text-sm text-ink-dim">
                  Thanks for reaching out — I&apos;ll reply as soon as I can.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue/60"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue/60"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-blue/60"
                    placeholder="What's on your mind?"
                  />
                </div>

                <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <MagneticButton>
                    {status === "loading" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </MagneticButton>
                  <a
                    href={`mailto:${profile.email}`}
                    data-cursor-hover
                    className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink"
                  >
                    <Mail size={15} /> {profile.email}
                  </a>
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-400 sm:col-span-2">
                    Something went wrong — email me directly instead.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
