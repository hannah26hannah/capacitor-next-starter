/**
 * @overview tailwind styles configuration file
 * Please use extend object when you want to add new properties instead of theme object.
 * This might remove all built-in tailwind styles
 */

module.exports = {
  content: ['./pages/**/*.{js,ts,tsx,jsx}'],

  darkMode: 'media',
  theme: {
    color: {},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
