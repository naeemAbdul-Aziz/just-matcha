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
        "primary": "#000000", // Apple-style flat black
        "primary-dark": "#1d1d1f", // Apple text dark gray
        "soft-green": "#f5f5f7", // Apple signature light gray
        "cream": "#ffffff",
        "cream-accent": "#ffffff",
        "background-light": "#ffffff",
        "background-dark": "#000000",
        "text-dark": "#1d1d1f",
        "text-light": "#86868b", // Apple secondary text
        "surface-light": "#ffffff",
        "surface-dark": "#1d1d1f",
        "brand-dark": "#000000",
        "neutral-surface": "#f5f5f7",
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
        "soft": "none",
        "glow": "none",
        "luxury": "none",
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
