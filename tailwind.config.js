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
        "primary": "#00FF41", // Striking stark green
        "primary-dark": "#00CC33",
        "soft-green": "#e3f4d8",
        "cream": "#f8f1e7",
        "cream-accent": "#ffffff",
        "background-light": "#ffffff", // Pure white
        "background-dark": "#000000", // Pure black
        "text-dark": "#000000", // Pure black
        "text-light": "#666666", // Sharp gray
        "surface-light": "#ffffff",
        "surface-dark": "#111111",
        "brand-dark": "#000000",
        "neutral-surface": "#f5f5f5",
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
        "soft": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "glow": "0 0 0 1px rgba(0, 0, 0, 0.1)",
        "luxury": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
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
