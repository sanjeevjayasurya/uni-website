const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen: {
        xs: '320px',
      },
      colors: {
        'uni-hero-black': '#121212',
        'tx-black-primary': '#232323',
        'tx-black-secondary': '#000000',
        'black-primary': '#161616',
        'black-secondary': '#202020',
        'black-tertiary': '#303030',
        'tx-green-primary': '#31B4A1',
        'tx-red-primary': '#ED7C5A',
        'tx-gray': '#6D6D6D',
        'tx-dark-gray': '#9F9F9F',
        positive: '#34A955',
        'gray-4': '#8E9393',
        'gray-1': '#E0E0E0',
        'grey-1': '#F6F9F9',
        'grey-dark': '#8D8D95',
        'black-12': '#121212',
        'black-2': '#222222',
        'black-3': '#333333',
      },
      fontFamily: {
        sans: ["'Matter'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
