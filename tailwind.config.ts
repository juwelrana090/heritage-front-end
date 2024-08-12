import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        poppins: ['var(--font-poppins)']
      },
      colors: {
        'blue-50': '#E9EBF8',
        'blue-100': '#B0CCE7',
        'blue-200': '#8AB3DB',
        'blue-300': '#5490CB',
        'blue-400': '#337AC1',
        'blue-500': '#0059B1',
        'blue-600': '#0051A1',
        'blue-700': '#003F7E',
        'blue-800': '#003161',
        'blue-900': '#00254A',
        'orange-50': '#FDF0E7',
        'orange-100': '#FAD0B5',
        'orange-200': '#F7B992',
        'orange-300': '#F49860',
        'orange-400': '#F18541',
        'orange-500': '#EE6611',
        'orange-600': '#D95D0F',
        'orange-700': '#A9480C',
        'orange-800': '#833809',
        'orange-900': '#642B07'
      }
    }
  },
  plugins: [require('daisyui')]
};
export default config;
