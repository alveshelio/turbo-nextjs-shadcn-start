import type { Config } from 'tailwindcss';

import { shadcnPreset } from './lib/shadcn-preset';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  presets: [shadcnPreset],
} satisfies Config;

export default config;
