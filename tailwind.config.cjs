/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "820px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Quicksand", "sans-serif"],
      body: ["Quicksand", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
    },
    extend: {
      colors: {
        primary: "#22252A",
        secondary: "#2D3035",
        lighter: "#373A3E",
        darker: "#16181d",
        active: "#373A3E",

        white: "#fff",
        purple: "rgb(129, 21, 218)",
        tomato: "rgb(226, 46, 23)",
        pink: "rgb(208, 20, 214)",
        green: "#0c792d",
        silver: "rgba(167, 177, 191, 1)",
      },
      width: {
        xs: "30px",
        sm: "24rem",
        md: "34rem",
        lg: "40rem",
        xl: "44rem",
      },
      spacing: {
        96: "24rem",
        128: "32rem",
      },
    },
    variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
      margin: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [],
}
