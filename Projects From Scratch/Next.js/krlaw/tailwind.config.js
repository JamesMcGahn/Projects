module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#2b2d42'
        },
        offWhite: {
          DEFAULT: '#edf2f4'
        },
        greyBlue: {
          DEFAULT: '#8d99ae'
        },
        lightRed: {
          DEFAULT: '#ef233c'
        },
        darkRed: {
          DEFAULT: '#d90429'
        },
        white: {
          DEFAULT: '#fff'
        }
      },
      fontFamily: {
        'andada': ['"Andada Pro"', 'serif']
      },
    },


  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
