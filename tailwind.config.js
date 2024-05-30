import { nextui } from '@nextui-org/react'



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: 'var(--primary-color)',
            secondary: 'var(--secondary-color)',
            tertiary: 'var(--tertiary-color)',
          },
        },
      },
    }),
  ],
  darkMode: 'class',
};