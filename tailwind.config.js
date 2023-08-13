/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Nunito': ['Nunito', ', sans-serif']
    },
    colors: {
      'red-wine': '#893446',
      'light-yellow': '#FEEF66',
      'lila': '#C9BEDC',
      'purple': '#856888',
      'white': '#ffffff'
    }
  },
  plugins: [],
}

