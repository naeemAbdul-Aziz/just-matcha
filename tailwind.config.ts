import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Just Matcha Brand Colors
        canvas: "#F8F1E7",
        primary: "#0D270C",
        secondary: "#6F8F6A",
        matcha: "#E3F4D8",
        citrus: "#F2C94C",
        berry: "#E8B7C8",
        border: "rgba(13, 39, 12, 0.1)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "40px",
      },
      boxShadow: {
        "soft": "0 4px 24px rgba(13, 39, 12, 0.08)",
        "soft-lg": "0 8px 32px rgba(13, 39, 12, 0.12)",
        "glow-matcha": "0 4px 24px rgba(227, 244, 216, 0.4)",
        "glow-citrus": "0 4px 24px rgba(242, 201, 76, 0.3)",
        "glow-berry": "0 4px 24px rgba(232, 183, 200, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
