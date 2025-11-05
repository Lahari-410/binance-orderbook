/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#ffffff',
        'foreground-light': '#171717',
        'background-dark': '#0a0a0a',
        'foreground-dark': '#ededed'
      },
      fontFamily: {
        sans: ['Geist Sans', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['Geist Mono', 'monospace']
      }
    }
  },
  darkMode: 'media',
  plugins: []
};
