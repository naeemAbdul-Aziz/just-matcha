/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#13ec37",
        "primary-dark": "#0eb52b", // Unified primary-dark
        "soft-green": "#e3f4d8",
        "cream": "#f8f1e7",
        "cream-accent": "#fdfdfb",
        "background-light": "#f6f8f6",
        "background-dark": "#102213",
        "text-dark": "#1a3c20",
        "text-light": "#5c7a60",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2e1d",
        "brand-dark": "#0d270c",
        "neutral-surface": "#e8ebe8",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "serif": ["Playfair Display", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px",
      },
      boxShadow: {
        "soft": "0 10px 40px -10px rgba(19, 236, 55, 0.1)",
        "glow": "0 0 20px rgba(19, 236, 55, 0.3)",
        "luxury": "0 10px 40px -10px rgba(16, 34, 19, 0.1)",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.33)", opacity: "0" },
          "80%, 100%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.8)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "pulse-dot": "pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite",
      },
    },
  },
  plugins: [],
}
