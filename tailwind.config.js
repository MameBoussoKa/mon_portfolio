/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#064420',
          50: '#e6f4ed',
          100: '#ccead9',
          200: '#99d5b3',
          300: '#66c08d',
          400: '#33ab67',
          500: '#064420',
          600: '#053a1a',
          700: '#042f14',
          800: '#03250e',
          900: '#021a08',
        },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
