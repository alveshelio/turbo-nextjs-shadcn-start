import plugin from 'tailwindcss/plugin';

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--accent': '0 0% 96.1%',
        '--accent-foreground': '0 0% 9%',
        '--background': '0 0% 100%',
        '--border': '0 0% 89.8%',
        '--card': '0 0% 100%',
        '--card-foreground': '0 0% 3.9%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--foreground': '0 0% 3.9%',
        '--input': '0 0% 89.8%',
        '--muted': '0 0% 96.1%',
        '--muted-foreground': '0 0% 45.1%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '0 0% 3.9%',
        '--primary': '0 0% 9%',
        '--primary-foreground': '0 0% 98%',
        '--radius': '0.5rem',
        '--ring': '0 0% 3.9%',
        '--secondary': '0 0% 96.1%',
        '--secondary-foreground': '0 0% 9%',
      },
      '.dark': {
        '--accent': '0 0% 14.9%',
        '--accent-foreground': '0 0% 98%',
        '--background': '0 0% 3.9%',
        '--border': '0 0% 14.9%',
        '--card': '0 0% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--foreground': '0 0% 98%',
        '--input': '0 0% 14.9%',
        '--muted': '0 0% 14.9%',
        '--muted-foreground': '0 0% 63.9%',
        '--popover': '0 0% 3.9%',
        '--popover-foreground': '0 0% 98%',
        '--primary': '0 0% 98%',
        '--primary-foreground': '0 0% 9%',
        '--secondary': '0 0% 14.9%',
        '--secondary-foreground': '0 0% 98%',
      },
    });

    addBase({
      '*': {
        '@apply border-border': {},
      },
      body: {
        '@apply bg-background text-foreground': {},
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        colors: {
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          background: 'hsl(var(--background))',
          border: 'hsl(var(--border))',
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          foreground: 'hsl(var(--foreground))',
          input: 'hsl(var(--input))',
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          ring: 'hsl(var(--ring))',
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
      },
    },
  }
);
