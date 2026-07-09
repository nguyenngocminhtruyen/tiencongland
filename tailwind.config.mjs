/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C1917',
          50: '#F5F4F3',
          100: '#E7E5E4',
          200: '#D6D3D1',
          300: '#A8A29E',
          400: '#78716C',
          500: '#57534E',
          600: '#44403C',
          700: '#292524',
          800: '#1C1917',
          900: '#0C0A09',
        },
        accent: {
          DEFAULT: '#A16207',
          50: '#FBF3E3',
          100: '#F5E4C0',
          200: '#EACB86',
          300: '#DCAE52',
          400: '#C4901F',
          500: '#A16207',
          600: '#845106',
          700: '#653F05',
        },
        surface: {
          DEFAULT: '#FAFAF9',
          card: '#FFFFFF',
          muted: '#F0EEEC',
        },
        border: {
          DEFAULT: '#D6D3D1',
        },
        success: '#166534',
        danger: '#DC2626',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lg: ['1.125rem', { lineHeight: '1.65' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(28,25,23,0.08), 0 1px 2px rgba(28,25,23,0.04)',
        'card-hover': '0 12px 24px -8px rgba(28,25,23,0.16), 0 4px 8px -4px rgba(28,25,23,0.08)',
        subtle: '0 1px 2px rgba(28,25,23,0.06)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '10px',
        lg: '14px',
        xl: '20px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
