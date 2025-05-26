/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scrollText: "scrollText 15s linear infinite",
      },
      fontFamily: {
        // Primary body text
        sans: ["Inter", "sans-serif"],

        // Display/headings
        display: ["Playfair Display", "serif"],

        // Alternative headings
        heading: ["Poppins", "sans-serif"],

        // Monospaced for code snippets
        mono: ["Fira Code", "monospace"],
      },
      keyframes: {
        scrollText: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: "all",
  },
};
