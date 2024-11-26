/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purp: "#6703c4",

        // hsl(271, 97%, 39%)
        // rgb(103, 3, 196)
      },
      fontFamily: {
        rlway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
