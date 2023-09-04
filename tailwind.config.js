/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // استبدل هذا باللون الذي ترغب في استخدامه
      },
    },
  },
  plugins: [],
}