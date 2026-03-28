import type { Config } from 'tailwindcss';
import { theme } from './src/config/theme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: theme.colors.background,
        surface: theme.colors.surface,
        'surface-hover': theme.colors.surfaceHover,
        border: theme.colors.surfaceBorder,
        accent: theme.colors.accent,
        'accent-hover': theme.colors.accentHover,
        'accent-muted': theme.colors.accentMuted,
        'text-primary': theme.colors.textPrimary,
        'text-muted': theme.colors.textMuted,
        'text-subtle': theme.colors.textSubtle,
      },
      fontFamily: {
        sans: theme.fonts.sans.split(',').map((f: string) => f.trim()),
        mono: theme.fonts.mono.split(',').map((f: string) => f.trim()),
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
