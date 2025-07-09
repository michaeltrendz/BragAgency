/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14ff00',  // neon green
        dark: '#0a0a0a',     // dark background
      },
    },
  },
  plugins: [],
};
