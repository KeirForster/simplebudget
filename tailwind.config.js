require('dotenv').config();
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const enablePurge = process.env.NODE_ENV === 'production';

module.exports = {
  purge: {
    enabled: enablePurge,
    content: ['./projects/**/src/**/*.html', './projects/**/src/**/*.scss'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
