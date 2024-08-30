/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Variable', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial-1':
          'radial-gradient(rgb(199, 210, 254), rgba(199, 210, 254, 0))',
        'gradient-radial-2':
          'radial-gradient(rgb(233, 213, 255), rgba(233, 213, 255, 0))',
        'gradient-radial-3':
          'radial-gradient(rgb(224, 231, 255), rgba(224, 231, 255, 0))',
        'gradient-radial-4':
          'radial-gradient(rgb(243, 232, 255), rgba(243, 232, 255, 0))',
      },
      colors: {
        'indigo-100': '#e0e7ff',
        'indigo-600': 'rgb(79, 70, 229)',
        'indigo-700': '#4338ca',
        'indigo-800': 'rgb(55 48 163)',
        'indigo-900': '#312e81',
        'purple-100': 'rgb(243 232 255)',
        'purple-200': 'rgb(233 213 255)',
        'purple-600': 'rgb(147, 51, 234)',
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(calc(-100% - 2.5rem))' },
        },
      },
    },
  },
  plugins: [],
};
