// ============================================================
// THEME CONFIGURATION
// Edit this file to change all visual settings site-wide.
// Colors here feed into tailwind.config.ts automatically.
// ============================================================

export const theme = {
  colors: {
    // Page backgrounds
    background: '#0A0A0F',
    surface: '#12121A',
    surfaceHover: '#1A1A24',
    surfaceBorder: '#1E1E2E',

    // Accent — change this one value to re-theme the whole site
    accent: '#FF6B35',
    accentHover: '#FF8C5A',
    accentMuted: 'rgba(255, 107, 53, 0.12)',

    // Text
    textPrimary: '#E8E8F0',
    textMuted: '#8888A0',
    textSubtle: '#555568',

    // Semantic
    success: '#22D3A5',
    warning: '#F5A623',
    error: '#FF4B6E',
  },

  fonts: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
  },

  // Controls all GSAP scroll animations — change here, applies everywhere
  animation: {
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrubSpeed: 1,
    triggerOffset: '80%',
    counterDuration: 2,
  },

  // Three.js hero particle mesh
  particles: {
    count: 80,
    size: 2,
    connectionDistance: 120,
    mouseInfluence: 150,
    speed: 0.3,
  },
} as const;

export type Theme = typeof theme;
