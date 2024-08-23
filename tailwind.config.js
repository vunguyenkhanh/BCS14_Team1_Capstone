/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Variable', 'Inter', 'sans-serif'],
      },
      
    },
  },
  plugins: [require('flowbite/plugin')],
};
