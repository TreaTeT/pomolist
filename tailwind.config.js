module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      ringWidth: {
        10: "10px",
        12: "12px",
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
      },
      borderWidth: {
        28: "28px",
        3: "3px",
        5: "5px",
        6: "6px",
        10: "10px",
        18: "18px",
      },

      fontFamily: {
        roboto: "Roboto",
        trocchi: "Trocchi",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
