/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl' : '0 0 10px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        norseBold: ['norseBold', 'sans-serif'],
        norseReg: ['norseReg', 'sans-serif'],
      }
    },
  },
  plugins: [],
}