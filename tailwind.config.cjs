/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.tsx"],

  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.8125rem",
      base: "0.9375rem",
      lg: "1.125rem",
      xl: "1.6rem",
    },

    fontFamily: {
      "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
    },

    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        200: "#F4F7FD",
        300: "#E4EBFA",
        500: "#828FA3",
        600: "#3E3F4E",
        700: "#2B2C37",
        800: "#20212C",
        900: "#000112",
      },
      purple: {
        300: "#A8A4FF",
        500: "#635FC7",
      },
      red: {
        300: "#FF9898",
        500: "#EA5555",
      },
    },

    extend: {},
  },

  plugins: [require("prettier-plugin-tailwindcss")],
};
