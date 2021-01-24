module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        28: "28px",
        5: "5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
