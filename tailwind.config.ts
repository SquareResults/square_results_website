import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E3A8A", // Jacksons Purple
          light: "#4DCCE6", // Picton blue
          medium: "#1E3A8A",
          dark: "#081321", // Firefly
          mirage: "#1A1A2E", // Mirage
        },
        semantic: {
          DEFAULT: "FFFFFF",
          white: "#FFFFFF", // Used for white backgrounds
          black: "#000000", // Used for black backgrounds
        },
        gray: {
          DEFAULT: "#4B5563", // River Bed Gray
          200: "#Athens Gray", // Silver Sand Gray
          300: "#D1D5DB", // Mischka Gray
          400: "#4B5563", // River Bed Gray
          500: "#6B7280", // Pale Sky Gray
          600: "#374151", // Oxford Blue Gray
          700: "#1F2937", // Ebony Clay
        },
        purple: {
          DEFAULT: "#1D066F",
          dark: "#1D066F", // Used for deep purple color
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
