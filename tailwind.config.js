const { fontFamily, colors } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...fontFamily.sans]
      }
    },
    colors: {
      ...colors,
      brand: {
        dark: '#03030f',
        blue: '#26a0f8'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
