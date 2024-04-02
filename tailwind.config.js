/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans-serif': 'League Spartan'
      },
      colors: {
        primary: {
          'very-dark-gray': 'hsl(0, 0%, 27%)',
          'dark-gray': 'hsl(0, 0%, 63%)',
          'black': 'hsl(0, 0%, 0%)',
          'white': 'hsl(0, 0%, 100%)'
        }
      }
    },
  },
  plugins: [],
}