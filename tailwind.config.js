/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        papyrus: ['Papyrus', 'serif'],
        crimson: ['"Crimson Text"', 'serif'],
      },
      colors: {
        primary: '#2A2829',
        accent: '#C17817',
      },
      height: {
        'screen-90': '90vh',
      }
    },
  },
  plugins: [],
};