/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: '#329dfa',
        'black-semi-transparent': 'rgba(0,0,0,0.7)',
        'regal-yellow': '#FFDF3F',
        'regal-purple': '#B2ACF9'
      },
      backgroundImage: {
        test: "url('./assets/image/test.svg')"
      },
      fontSize: {
        vxs: '0.6rem'
      },
      keyframes: {},
      animation: {}
    }
  },
  plugins: [require('daisyui')]
};
