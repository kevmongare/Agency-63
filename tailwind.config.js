/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#2DE2C8',
          violet: '#7B5CF6',
          magenta: '#E040FB',
          primary: '#2DE2C8',
        },
        dark: {
          900: '#080808',
          800: '#0f0f0f',
          700: '#161616',
          600: '#1e1e1e',
          500: '#282828',
          400: '#333333',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
