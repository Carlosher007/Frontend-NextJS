import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

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
        background: 'var(--background)',
        backgroundSecondary: 'var(--background-secondary)',
        foreground: 'var(--foreground)',
        foregroundSecondary: 'var(--foreground-secondary)',
        foregroundTertiary: 'var(--foreground-tertiary)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate'), nextui()],
} satisfies Config;

export default config;
