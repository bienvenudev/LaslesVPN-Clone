/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"],
      },
      colors: {
        primary: {
          100: "#4F5665",
          200: "#0B132A",
          300: "#F53855",
          border: '#DDDDDD',
        },
        btn: {
          100: "#F53838",
        },
      },
    },
  },
  plugins: [],
};
