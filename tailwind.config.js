/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins'],
      }
    },
  },
  plugins: [],
}