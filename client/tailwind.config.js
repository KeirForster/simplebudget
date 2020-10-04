require('dotenv').config();
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
    extend: {},
  },
  variants: {},
  plugins: [],
};
