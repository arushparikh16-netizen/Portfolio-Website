import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#050505",
          soft: "#0a0a0c",
          raised: "#101014",
          border: "#1c1c22",
        },
        ink: {
          DEFAULT: "#f4f4f6",
          dim: "#a1a1aa",
          faint: "#6b6b76",
        },
        accent: {
          blue: "#5b8cff",
          violet: "#8b5cf6",
          cyan: "#38e0d8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "signal-gradient":
          "linear-gradient(135deg, #5b8cff 0%, #8b5cf6 55%, #38e0d8 100%)",
        "radial-fade":
          "radial-gradient(circle at center, rgba(91,140,255,0.15), transparent 70%)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 1.5s",
        marquee: "marquee 28s linear infinite",
        blink: "blink 1.1s step-end infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(91,140,255,0.45)",
        "glow-violet": "0 0 60px -15px rgba(139,92,246,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
