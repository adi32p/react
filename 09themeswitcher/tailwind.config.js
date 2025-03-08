/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enables dark mode (using the "class" strategy)
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Matches all your Vite React component files
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  