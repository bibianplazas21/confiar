/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryDark: "rgb(var(--primary-dark) / <alpha-value>)",
      secondaryDark: "rgb(var(--secondary-dark) / <alpha-value>)",
      primaryPink: "rgb(var(--primary-pink) / <alpha-value>)",
      primaryPurple: "rgb(var(--primary-purple) / <alpha-value>)",
      white: "rgb(256 256 256 / <alpha-value>)",
    },
    extend: {

      backgroundImage: {
        'saltando': "url('/images/p1.jpg')",
      }
    },
  },
  plugins: [],
}
