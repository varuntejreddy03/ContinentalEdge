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
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        surfaceLight: "rgb(var(--color-surface-light) / <alpha-value>)",
        surfaceDark: "rgb(var(--color-surface-dark) / <alpha-value>)",
        studioDark: "rgb(var(--color-studio-dark) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
    },
  },
  plugins: [],
}
