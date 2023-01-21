/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      mono: ['Martian Mono'],
      serif: ['Schoolbell'],
    },
    fontSize: {
      base: ['16px'],
      l: ['18px'],
      xl: ['26px'],
      '2xl': ['32px'],
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      bg1: '#14110F',
      bg2: '#34312D',
      text1: '#F3F3F4',
      primary: '#D9C5B2',
      secondary: '7E7F83',
    },
    extend: {},
  },
  plugins: [],
}
