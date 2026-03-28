/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rap-red': '#FF2D2D',
        'rap-gold': '#FFD200',
      },
    },
  },
  plugins: [],
}