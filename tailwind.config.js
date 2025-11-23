/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3AB0FF', // lighter blue
          DEFAULT: '#008CFF', // main brand color
          dark: '#005BBB', // darker shade
        },
        accent: {
          DEFAULT: '#FF6B6B', // coral red
          dark: '#E63946', // deeper accent
        },
        neutral: {
          light: '#F8F9FA', // background light
          DEFAULT: '#E5E7EB', // gray neutral
          dark: '#1F2937', // dark gray
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};
