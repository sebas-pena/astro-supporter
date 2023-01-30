/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "75%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          }
        }
      },
      animation: {
        "fade-in": 'fade-in .5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
