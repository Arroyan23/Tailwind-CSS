/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        13: "5rem",
      },
      fontFamily: {
        playwrite: ["Playwrite GB S"],
      },
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
