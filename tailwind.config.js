/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Variable', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(rgb(199, 210, 254), rgba(199, 210, 254, 0))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
