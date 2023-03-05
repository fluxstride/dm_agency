/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        peach: { dark: "#FF5670", light: "#A68A8A" },
        blue: "#3641B7",
        yellow: { light: "#FDB400", deep: "#FFA028" },
        gray: { 100: "#DCDCDC", 200: "#F9FAFB", 300: "#8C93A4" },
        black: "#000000",
        light: "#E1E1E1",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
