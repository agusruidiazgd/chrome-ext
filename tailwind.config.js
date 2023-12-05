/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#3838A5',
        backgroundColor: '#FFFFFF',
        white: '#FFFFFF',
        borderGrey: '#B7B7B7',
        textGrey: '#3C4048',
      },
    },
  },
  plugins: [],
};
