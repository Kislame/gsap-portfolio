/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-black': '#101720',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/img4.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        heading: 'clamp(3.5rem,12vw + 1rem, 12rem)',
      },
      screens: {
        xs: '445px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
