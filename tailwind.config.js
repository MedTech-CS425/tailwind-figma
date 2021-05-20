module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#EB5757"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
