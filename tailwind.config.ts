/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
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
        // main: `url('${import.meta.env.VITE_PUBLIC_URL}/main.svg')`
        // test: `url('${process.env.REACT_APP_PUBLIC_URL}/test.svg')`
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
