/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B4C7B', // dark purple
          50: '#FAF3E0', // light cream
          100: '#D9B9D9', // light lavender
          200: '#C1A3D6', // medium lavender
          300: '#6B4C7B', // dark purple
          400: '#6B4C7B',
          500: '#6B4C7B',
          600: '#5A3D6A',
          700: '#4A2E59',
          800: '#391F48',
          900: '#291037',
        },
        accent: '#D9B9D9', // light lavender
        cream: '#FAF3E0', // light cream
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
