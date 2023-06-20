/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "0 0 4px 0px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        16: "16px",
        18: "18px",
        28: "28px",
        30: "30px",
        15: "15px",
      },
      colors: {
        FooterColor: "#212121",
        GreyColor: "#878787",
        primary: "#878787",
        black: "#212121",
        blueColor: "#2874F0",
        GreenColor: "#388E3C",
        lightWhiteColor: "#DBDBDB",
        orangeColor: "#FB641B",
      },
      width: {
        230: "230px",
        200: "200px",
        112: "112px",
        250: "250px",
      },
      height: {
        23: "10rem",
        361: "361px",
        135: "135px",
        200: "200px",
        48: "48px",
        112: "112px",
        30: "30rem",
        51: "51px",
      },
      padding: {
        25: "25px",
        15: "15px",
      },
    },
  },
  plugins: [],
};
