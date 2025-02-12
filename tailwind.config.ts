import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      onyx: "#181818",
      gray: {
        dark: "#808080",
        medium: "rgba(128, 128, 128, 0.5)",
        light: "#C5C5C5",
      },
      blue: "rgba(63, 100, 234, 0.43)",
      red: "rgba(233, 63, 64, 0.43)",
      yellow: "rgba(255, 184, 0, 0.43)",
      white: {
        DEFAULT: "#FFFFFF",
        10: "#FAFAFA",
        25: "#F5F5F5",
        70: "#B9BBBE",
        faint: "#EDEDED",
      },
      black: {
        DEFAULT: "#0D0D0D",
        50: "#0D0D0D",
        10: "#1F1F1F",
      },
      card: {
        border: "var(--card-border)",
        background: "var(--card-background)",
      },

      background: "var(--background)",
    },
    fontSize: {
      10: "10px",
      11: "11px",
      12: "12px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      32: "32px",
      40: "40px",
      48: "48px",
      60: "60px",
      80: "80px",
    },
    fontFamily: {
      inter: ["var(--font-inter)", "Inter", "sans-serif"],
      nanum: ["var(--font-nanum)"],
    },
    extend: {
      backgroundImage: {
        "dark-gradient":
          "linear-gradient(90deg, rgba(26,26,26,1) 0%, rgba(19,19,19,1) 100%)",
      },
      dropShadow: {
        button: "0px 7px 4px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
