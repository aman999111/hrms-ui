/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}", 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {
      gridTemplateColumns: {
        "customerCardGrid": 'repeat(auto-fit, minmax(12rem, 1fr))', 
      }
    },
  },
  plugins: [require("preline/plugin"), require("@tailwindcss/forms")],
};
