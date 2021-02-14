module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          md: '6rem',
          lg: '10rem',
          xl: '14rem'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
