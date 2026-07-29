"use client";

import { useEffect } from "react";

/**
 * Native CSS smooth scrolling is enabled globally (see globals.css).
 * This component only ensures we respect the user's reduced-motion
 * preference by stripping the smooth behavior when set.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      document.documentElement.style.scrollBehavior = query.matches
        ? "auto"
        : "smooth";
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return null;
}
