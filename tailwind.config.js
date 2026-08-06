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
        "primary": "#4a7c59", // Deep matcha green
        "primary-dark": "#3b6318", // Darker matcha green
        "soft-green": "#e9f2d9", // Light matcha for backgrounds
        "cream": "#fdfbf7", // Warm cream
        "cream-accent": "#f4efe6", // Slightly darker cream for contrast
        "background-light": "#fdfbf7",
        "background-dark": "#111111",
        "text-dark": "#1a1a1a",
        "text-light": "#666666",
        "surface-light": "#ffffff",
        "surface-dark": "#1d1d1f",
        "brand-dark": "#111111",
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
