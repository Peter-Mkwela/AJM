/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ enable dark mode using a 'dark' class
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'church-blue': '#030224',
        'church-purple': '#6B4EFF',
        'church-light': '#F5F6FA',
      },
    },
  },
  plugins: [],
}
