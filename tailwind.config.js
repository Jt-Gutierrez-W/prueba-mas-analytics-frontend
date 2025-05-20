/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'company-primary': '#5F4EFC',
        'company-secondary': '#02A8E1',
        'company-accent': '#5EEEC1',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
