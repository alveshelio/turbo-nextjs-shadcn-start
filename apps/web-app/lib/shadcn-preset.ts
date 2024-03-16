import type { Config } from 'tailwindcss';

import typographyPlugin from '@tailwindcss/typography';
import animatePlugin from 'tailwindcss-animate';

import { shadcnPlugin } from './shadcn-plugin';

export const shadcnPreset = {
  content: [],
  darkMode: ['class'],
  plugins: [animatePlugin, typographyPlugin, shadcnPlugin],
} satisfies Config;
