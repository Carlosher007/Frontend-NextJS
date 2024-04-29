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
        background: '#222',
        foreground: '#fff',

        backgroundSecondary: '#1a1f24',
        foregroundSecondary: '#999',
        foregroundTertiary: '#0f0',

        primary: '#fff',
        primaryForeground: '#222',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate'), nextui()],
};
export default config;
