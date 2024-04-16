/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/components/*.{html,js}",      
    "./src/*.{html,js}"      
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

