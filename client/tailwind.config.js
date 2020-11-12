require('dotenv').config();
const defaultTheme = require('tailwindcss/defaultTheme');
const enablePurge = process.env.NODE_ENV === 'production';

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
};
