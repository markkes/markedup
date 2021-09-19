const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.black,
      secondary: colors.yellow,
      neutral: colors.gray,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
