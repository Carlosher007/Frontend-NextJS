import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        //Dark Mode
        darkBackground: '#222',
        darkForeground: '#fff',

        darkHover: '#999',
        darkHighlightedForeground: '#76ABAE',

        darkButtonBackground: '#fff',
        darkButtonForeground: '#000',

        //Light Mode
        lightBackground: '#fff',
        lightForeground: '#000',

        lightHover: '#31363F',
        lightHighlightedForeground: '#153448',

        lightButtonBackground: '#000',
        lightButtonForeground: '#fff',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate'), nextui()],
};
export default config;
