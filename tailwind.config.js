/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'orange': '#FCAB3F',
        'yellow': '#FDC963',
        'dark': '#4D4D4D',
        'mint': '#A1D2CE',
        'magenta': '#f49897',
        'gray': '#e4e4e4',
        'pink': '#fef2f1',
    }
  },
  plugins: [],
}
