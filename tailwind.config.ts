import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: { max: "809.98px" },
      "md-tablet": { min: "810px", max: "1199.98px" },
      desktop: { min: "1200px" },
    },
    extend: {
      colors: {
        dark: "#1F1D1C",
        light: "#F9F8F6",
        "accent-terra": "#C86D51",
        "accent-wine": "#8B1E2B",
        sage: "#7A8B7B",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      transitionTimingFunction: {
        spring: "var(--ease-spring)",
      },
    },
  },
  plugins: [],
};

export default config;
