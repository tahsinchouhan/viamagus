/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        'secondary-text': '#727682',
        'tertiary-text': '#B5C0C8',
        success: '#2DABAD',
        failure: '#FE4190',
        active: '#6231AD',
        'primary-text': '#D2BAF5',
      },
      fontSize: {
        xxs: '10px',
      },
      fontFamily: {
        montserrat: ['Montserrat-Medium'],
      },
    },
  },
  plugins: [],
};
