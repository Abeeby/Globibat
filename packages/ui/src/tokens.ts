/**
 * Design Tokens Globibat
 * Système de design unifié en HSL pour meilleure gestion dark mode
 */

export const colors = {
  // Primary - Bleu professionnel
  primary: {
    50: 'hsl(214, 100%, 97%)',
    100: 'hsl(214, 95%, 93%)',
    200: 'hsl(213, 97%, 87%)',
    300: 'hsl(212, 96%, 78%)',
    400: 'hsl(213, 94%, 68%)',
    500: 'hsl(217, 91%, 60%)', // Base
    600: 'hsl(221, 83%, 53%)',
    700: 'hsl(224, 76%, 48%)',
    800: 'hsl(226, 71%, 40%)',
    900: 'hsl(224, 64%, 33%)',
    950: 'hsl(226, 57%, 21%)',
  },
  
  // Secondary - Vert construction
  secondary: {
    50: 'hsl(138, 76%, 97%)',
    100: 'hsl(141, 84%, 93%)',
    200: 'hsl(141, 79%, 85%)',
    300: 'hsl(142, 77%, 73%)',
    400: 'hsl(142, 69%, 58%)',
    500: 'hsl(142, 71%, 45%)', // Base
    600: 'hsl(142, 76%, 36%)',
    700: 'hsl(142, 72%, 29%)',
    800: 'hsl(143, 64%, 24%)',
    900: 'hsl(144, 61%, 20%)',
    950: 'hsl(145, 80%, 10%)',
  },
  
  // Accent - Orange énergie
  accent: {
    50: 'hsl(33, 100%, 96%)',
    100: 'hsl(34, 100%, 91%)',
    200: 'hsl(32, 98%, 83%)',
    300: 'hsl(31, 97%, 72%)',
    400: 'hsl(27, 96%, 61%)',
    500: 'hsl(25, 95%, 53%)', // Base
    600: 'hsl(21, 90%, 48%)',
    700: 'hsl(17, 88%, 40%)',
    800: 'hsl(15, 79%, 34%)',
    900: 'hsl(15, 75%, 28%)',
    950: 'hsl(13, 81%, 15%)',
  },
  
  // Neutral - Gris élégant
  neutral: {
    50: 'hsl(210, 20%, 98%)',
    100: 'hsl(220, 14%, 96%)',
    200: 'hsl(220, 13%, 91%)',
    300: 'hsl(216, 12%, 84%)',
    400: 'hsl(218, 11%, 65%)',
    500: 'hsl(220, 9%, 46%)',
    600: 'hsl(215, 14%, 34%)',
    700: 'hsl(217, 19%, 27%)',
    800: 'hsl(215, 28%, 17%)',
    900: 'hsl(221, 39%, 11%)',
    950: 'hsl(224, 71%, 4%)',
  },
  
  // Semantic colors
  success: {
    light: 'hsl(142, 76%, 36%)',
    DEFAULT: 'hsl(142, 71%, 45%)',
    dark: 'hsl(142, 71%, 25%)',
  },
  
  warning: {
    light: 'hsl(45, 100%, 60%)',
    DEFAULT: 'hsl(45, 100%, 51%)',
    dark: 'hsl(45, 100%, 35%)',
  },
  
  error: {
    light: 'hsl(0, 84%, 60%)',
    DEFAULT: 'hsl(0, 72%, 51%)',
    dark: 'hsl(0, 72%, 35%)',
  },
  
  info: {
    light: 'hsl(199, 89%, 60%)',
    DEFAULT: 'hsl(199, 89%, 48%)',
    dark: 'hsl(199, 89%, 35%)',
  },
} as const;

export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  11: '2.75rem',   // 44px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

export const boxShadow = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  // Custom shadows pour dark mode
  'dark-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.8)',
  'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.8), 0 2px 4px -1px rgba(0, 0, 0, 0.6)',
  'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.8), 0 4px 6px -2px rgba(0, 0, 0, 0.5)',
} as const;

export const zIndex = {
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  60: '60',   // Modals
  70: '70',   // Popovers
  80: '80',   // Tooltips
  90: '90',   // Notifications
  100: '100', // Top priority
} as const;

export const fontFamily = {
  sans: ['Inter var', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
  mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
  display: ['Work Sans', 'Inter var', 'system-ui', 'sans-serif'],
} as const;

export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],     // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],    // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
  '5xl': ['3rem', { lineHeight: '1' }],         // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],      // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],       // 72px
  '8xl': ['6rem', { lineHeight: '1' }],         // 96px
  '9xl': ['8rem', { lineHeight: '1' }],         // 128px
} as const;

export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const animation = {
  // Durées
  duration: {
    fast: '150ms',
    base: '200ms',
    moderate: '300ms',
    slow: '400ms',
    slower: '500ms',
  },
  // Easing
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// Contraste WCAG AA minimum
export const contrast = {
  // Texte normal (≥ 4.5:1)
  normal: {
    light: colors.neutral[700], // Sur fond blanc
    dark: colors.neutral[100],  // Sur fond sombre
  },
  // Gros texte (≥ 3:1)
  large: {
    light: colors.neutral[600],
    dark: colors.neutral[200],
  },
  // Texte désactivé
  disabled: {
    light: colors.neutral[400],
    dark: colors.neutral[600],
  },
} as const;

// Export pour Tailwind
export const tokens = {
  colors,
  spacing,
  borderRadius,
  boxShadow,
  zIndex,
  fontFamily,
  fontSize,
  fontWeight,
  animation,
  contrast,
} as const;

export type Tokens = typeof tokens;