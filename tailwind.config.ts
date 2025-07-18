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
          blumine: "#195E6B", // Blumine
          medium: "#1E3A8A",
          dark: "#081321", // Firefly
          mirage: "#1A1A2E", // Mirage
        },
        green: {
          DEFAULT: "#8CBB4C",
        },
        semantic: {
          DEFAULT: "FFFFFF",
          white: "#FFFFFF", // Used for white backgrounds
          black: "#000000", // Used for black backgrounds
        },
        gray: {
          DEFAULT: "#4B5563", // River Bed Gray
          200: "#F3F4F6", // Athens Gray
          300: "#D1D5DB", // Mischka Gray
          400: "#4B5563", // River Bed Gray
          500: "#A0A9BB", // Gull Gray
          600: "#374151", // Oxford Blue Gray
          700: "#1F2937", // Ebony Clay
        },
        purple: {
          DEFAULT: "#1D066F",
          dark: "#1D066F", // Used for deep purple color
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
