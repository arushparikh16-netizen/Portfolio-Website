# Portfolio — Software Engineer / AI-ML Engineer

A production-ready portfolio built with Next.js 15 (App Router), TypeScript,
Tailwind CSS, and Framer Motion. Dark by default, glassmorphic, animated,
and structured for recruiters to get the full picture in under 10 seconds.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires internet access on first build (Google
Fonts are fetched at build time).

## 2. Edit your content — one file

Everything you need to personalize lives in **`data/content.ts`**:

- `profile` — name, role, rotating role words, tagline, resume path, social links
- `about` — story paragraphs, education, goals
- `skills` — categories and proficiency levels (0–100)
- `projects` — case-study format: problem / solution / impact, stack, links
- `experience` — timeline entries (internships, freelance, leadership, projects)
- `achievements` — stat counters, certifications/hackathons, coding profile links
- `testimonials` — optional; delete the `<Testimonials />` line in
  `app/page.tsx` if you don't want this section
- `nav` — navbar links

Search the file for `TODO` — every one marks something to replace with your
real information. Nothing else in the codebase needs to change for a content
update.

## 3. Add your assets

Drop these into `public/`:

- `resume.pdf` — your resume (linked from the Resume buttons)
- `images/avatar.jpg` — your photo, square, 800×800+
- `images/og-image.png` — 1200×630 social share image
- `images/project-one.png`, `project-two.png`, `project-three.png` —
  project screenshots/mockups (16:10 works well)

## 4. Wire up the contact form

The form posts to `app/api/contact/route.ts`, which currently just logs the
submission — no emails actually send yet. Two easy options:

1. **Resend** (recommended) — add the SDK, get an API key, send the email
   from the route handler. A few lines.
2. **Formspree** — skip the API route; point the form's `action` at your
   Formspree endpoint instead.

## 5. Deploy

Push to GitHub, then import the repo on [vercel.com](https://vercel.com) —
zero config needed. Update `metadataBase` in `app/layout.tsx` and the URLs in
`app/robots.ts` / `app/sitemap.ts` to your real domain once deployed.

## Stack

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

## Structure

```
app/
  layout.tsx        — fonts, SEO metadata, global providers
  page.tsx           — assembles all sections
  globals.css         — base styles, glass/gradient utilities
  api/contact/         — contact form endpoint (stub)
  robots.ts, sitemap.ts

components/
  layout/    — Navbar, Footer, LoadingScreen, CustomCursor, SmoothScroll
  sections/  — Hero, About, Skills, Projects, Experience, Achievements,
               GithubSection, Testimonials, Contact
  ui/        — MagneticButton, GlowCard, SectionHeading, Counter,
               AmbientBackground

data/content.ts  — all real content lives here
lib/utils.ts     — cn() helper, lerp()
```

## Notes

- Custom cursor and parallax float effects are disabled automatically on
  touch devices and when the OS-level "reduce motion" setting is on.
- The GitHub contribution-style grid in the GitHub section is a decorative
  visual (deterministic pseudo-random), not live data from the API.
- Everything is a single source of truth in `data/content.ts` — swap it out
  and the whole site updates.
