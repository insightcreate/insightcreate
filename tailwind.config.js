/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lucida: ["Lucida Grande", "Lucida Sans Unicode", "Arial", "sans-serif"],
      },
    },
    colors: {
      icblack: "#1f2d33",
      icdark: "#151514",
      icwhite: "#ffffff",
      icgreen: "#41c47b",
      icred: "#bd5e34",
      icthemeblue: "#ddedfd",
      icthemepink: "#f7e5f3",
      icyellow: "#fef1e9",
      icpista: "#f6fcfa",
      icgrey: "#bababb",
      iccardyellow: "#fbd46c",
      iccardpurple: "#bdb0ed",
      iccardpink: "#ff7c70",
      iccardgreen: "#51ac90",
    },
  },
  plugins: [],
}