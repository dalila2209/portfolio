/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#ffe4e6',
          DEFAULT: '#ff6b81',
          dark: '#ff1744',
        },
        gray: {
          dark: '#2d2d2d',
          light: '#f5f5f5',
        },
      },
    },
  },
  plugins: [],
}

