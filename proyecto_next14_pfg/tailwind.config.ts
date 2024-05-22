import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    'border-filter-steel',
    'border-filter-grass',
    'border-filter-water',
    'border-filter-bug',
    'border-filter-dragon',
    'border-filter-electric',
    'border-filter-ghost',
    'border-filter-fire',
    'border-filter-fairy',
    'border-filter-ice',
    'border-filter-fighting',
    'border-filter-normal',
    'border-filter-plant',
    'border-filter-psychic',
    'border-filter-rock',
    'border-filter-dark',
    'border-filter-ground',
    'border-filter-poison',
    'border-filter-flying',
    'bg-filter-steel',
    'bg-filter-grass',
    'bg-filter-water',
    'bg-filter-bug',
    'bg-filter-dragon',
    'bg-filter-electric',
    'bg-filter-ghost',
    'bg-filter-fire',
    'bg-filter-fairy',
    'bg-filter-ice',
    'bg-filter-fighting',
    'bg-filter-normal',
    'bg-filter-plant',
    'bg-filter-psychic',
    'bg-filter-rock',
    'bg-filter-dark',
    'bg-filter-ground',
    'bg-filter-poison',
    'bg-filter-flying',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        greenUnify: {
          950: "#010A0C",
          900: "#021115",
          800: "#052B36",
          600: "#084C61",
          500: "#1F677D",
        },
        yellowUnify: {
          800: "#E99000",
          600: "#F9A620",
          500: "#F3B248",
          400: "#EFBE6F",
          200: "#FFEDD0",
          100: "#FFF9F0",
        },
        warningUnify: {
          950: "#4c0519",
          900: "#881337",
          800: "#9f1239",
          700: "#be123c",
          600: "#e11d48",
        },
        filter: {
          steel: "#60A2B9",
          water: "#2481EF",
          bug: "#92A212",
          dragon: "#4F60E2",
          electric: "#FAC000",
          grass: "#3DA224",
          ghost: "#713F71",
          fire: "#E72324",
          fairy: "#EF71EF",
          ice: "#3DD9FF",
          fighting: "#FF8100",
          normal: "#9FA19F",
          plant: "#3DA224",
          psychic: "#EF3F7A",
          rock: "#B0AB82",
          dark: "#4F3F3D",
          ground: "#92501B",
          poison: "#923FCC",
          flying: "#82BAEF",
        },
      },
      backgroundImage: {
        "poke-img": "url('/image/bgProfile.jpg')",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
