module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx}',
    './src/*.js'

],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsla(32, 100%, 45%, 1)',
        hoe: '#22272e',
        secondary: {
          text: 'hsla(0, 0%, 99%, 0.9)',
          darkmode: '#22272e',
        },
      }
    },
    fontFamily: {
      benPoppins: ['Poppins']
    },
    rotate: {
      '20': '20deg'
    },
    height: {
      85 : '85vh'
    },
    zIndex: {
      '-1': '-1'
    },
    scale: {
      '0, 1': '0, 1',
      '1, 1': '01 1'

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
