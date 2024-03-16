import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';
import typographyPlugin from '@tailwindcss/typography';
import { shadcnPlugin } from './shadcn-plugin';

export const shadcnPreset = {
  darkMode: ['class'],
  content: [],
  plugins: [animatePlugin, typographyPlugin, shadcnPlugin],
} satisfies Config;
