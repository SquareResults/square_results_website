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
          DEFAULT: "#1E3A8A",
          light: "#4DCCE6",
          medium: "#1E3A8A",
          dark: "#081321",
        },
        semantic: {
          DEFAULT: "FFFFFF",
          white: "#FFFFFF", // Used for white backgrounds
          black: "#000000", // Used for black backgrounds
        },
        purple: {
          DEFAULT: "1D066F",
          dark: "#1D066F", // Used for deep purple color
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
