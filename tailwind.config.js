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
      colors: {
        'indigo-600': 'rgb(79, 70, 229)',
        'indigo-800': 'rgb(55 48 163)',
      },
      textColor: {
        'purple-600': 'rgb(147, 51, 234)',
      },
      backgroundColor: {
        'purple-100': 'rgb(243 232 255)',
      },
      borderColor: {
        'purple-200': 'rgb(233 213 255)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
