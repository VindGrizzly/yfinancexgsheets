/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1A9B5B",
        accent: "#5D1E93",
        yahoo: "#7D2EFF",
        dark: "#1F1F1F",
        navy: "#1F3356"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}