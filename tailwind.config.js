/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        LogoFont: [
          "IBM Plex Sans",
          "Work Sans",
          "sans-serif",
          "Rancho",
          "cursive",
        ],
        LogoFont1: ["Alegreya Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
