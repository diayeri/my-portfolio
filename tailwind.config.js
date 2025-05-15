/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // class 기반 다크모드 설정
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60a5fa', // blue-400
          dark: '#6d28d9', // purple-700
        },
        secondary: {
          light: '#a78bfa', // purple-400
          dark: '#8b5cf6', // violet-500
        },
        background: {
          light: '#f9fafb', // gray-50
          dark: '#1f2937', // gray-800
        },
        text: {
          light: '#111827', // gray-900
          dark: '#f9fafb', // gray-50
        }
      }
    },
  },
  plugins: [],
};
