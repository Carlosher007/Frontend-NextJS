import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/theme';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
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
} satisfies Config;

export default config;
