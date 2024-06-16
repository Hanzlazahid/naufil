const { Syne } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne","sans-serif"],
      },
      colors: {
        nav: '#77777d',
        dark:'#212121',
        grey:'#d6d6d6',
        darkGrey:'#919191'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
