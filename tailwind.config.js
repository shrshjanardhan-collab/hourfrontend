/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fbfbe2",
        "surface-container-low": "#f5f5dc",
        "surface-container-highest": "#e4e4cc",
        "surface-container": "#efefd7",
        primary: "#735c00",
        "primary-container": "#d4af37",
        secondary: "#5f5e5e",
        "on-surface": "#1b1d0e",
        "on-surface-variant": "#4d4635",
      },
      fontFamily: {
        headline: ["Noto Serif"],
        body: ["Inter"],
      },
    },
  },
  plugins: [],
};