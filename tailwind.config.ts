import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        border: "var(--border)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        // From logo: deep indigo-violet (text/symbol)
        primary: "#3A3078",
        "primary-light": "#483D8B",
        // Same as CTA (primary): deep indigo-violet — CTAs, links, focus
        accent: "#3A3078",
        "accent-hover": "#483D8B",
        // From logo orb: purple/magenta — secondary accent
        purple: "#8A2BE2",
        "purple-light": "#E9D2F3",
        // From logo: neutral grey (inner circle)
        grey: "#D3D3D3",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "section-label": ["0.75rem", { letterSpacing: "0.2em", lineHeight: "1.2" }],
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "sponsor-scroll": "sponsorScroll 40s linear infinite",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(58, 48, 120, 0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(58, 48, 120, 0.08) 0%, transparent 50%)",
        "section-gradient":
          "linear-gradient(180deg, rgba(58, 48, 120, 0.03) 0%, transparent 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        sponsorScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
