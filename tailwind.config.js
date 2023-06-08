/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        12: "12px",
        14: "14px",
      },
      colors: {
        FooterColor: "#212121",
        GreyColor: "#878787",
      },
      height: {
        23: "10rem",
      },
    },
  },
  plugins: [],
};
