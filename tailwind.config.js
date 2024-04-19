/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      'primary': '#533f81',
      'background-color': '#0e0e0c',
      'light-purple-100': '#e7dee8',
      'light-purple-200': '#c7bcde',
      'light-purple-300': '#806ea6',
      'dark-purple-100': '#1b1434',
    },
    extend: {

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'four-color-gradient': 'linear-gradient(to bottom, #c7bcde 15%, #533f81, #1b1434, #0e0e0c)',
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
