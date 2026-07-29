import { Github, Linkedin, Code2, Mail, Terminal, Braces } from "lucide-react";
import { nav, profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-base-border">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="font-display text-xl font-semibold text-ink">
              {profile.initials}
              <span className="text-accent-blue">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">
              {profile.tagline}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Navigate
              </div>
              <ul className="mt-4 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-ink-dim transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                Elsewhere
              </div>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
                    <Github size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </li>
                <li>
  <a href={profile.social.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
    <Code2 size={14} /> LeetCode
  </a>
</li>
{profile.social.codeforces && (
  <li>
    <a href={profile.social.codeforces} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
      <Terminal size={14} /> Codeforces
    </a>
  </li>
)}
{profile.social.gfg && (
  <li>
    <a href={profile.social.gfg} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
      <Braces size={14} /> GeeksforGeeks
    </a>
  </li>
)}
<li>
  <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink">
    <Mail size={14} /> Email
  </a>
</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-base-border pt-8 text-xs text-ink-faint md:flex-row">
          <span>© {year} {profile.name}. Built from scratch.</span>
          <span className="font-mono">Next.js · TypeScript · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
