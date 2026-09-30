import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Moss: the quiet green of a temple garden (evolved from the old sage)
        primary: {
          50: '#f3f4ef',
          100: '#e3e6dc',
          200: '#c9cfbd',
          300: '#a8b197',
          400: '#86916f',
          500: '#6a7657',
          600: '#556046',
          700: '#444d39',
          800: '#373e2f',
          900: '#2d3327',
          950: '#181c15',
        },
        // Washi paper (light end) to sumi ink (dark end)
        stone: {
          50: '#f7f4ee',
          100: '#f0ece3',
          200: '#e4ded2',
          300: '#d2cabb',
          400: '#aba293',
          500: '#857d71',
          600: '#686257',
          700: '#524d45',
          800: '#3e3a35',
          900: '#2f2c28',
          950: '#1f1d1a',
        },
        // Shu: vermilion, used only as a rare point of warmth (hanko seal, CTA mark)
        shu: {
          300: '#dba58c',
          400: '#c4785a',
          500: '#b0603f',
          600: '#94492c',
        },
      },
      fontFamily: {
        serif: ['var(--font-mincho)', 'Georgia', 'serif'],
        sans: ['var(--font-zen-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.25rem', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.24', letterSpacing: '-0.005em' }],
        'display': ['2.5rem', { lineHeight: '1.3' }],
        'heading-lg': ['2rem', { lineHeight: '1.38' }],
        'heading': ['1.625rem', { lineHeight: '1.45' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.9' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '36': '9rem',
        '44': '11rem',
        '52': '13rem',
      },
      letterSpacing: {
        zen: '0.28em',
      },
      transitionTimingFunction: {
        zen: 'cubic-bezier(.22,.61,.36,1)',
        breath: 'cubic-bezier(.45,0,.25,1)',
      },
      transitionDuration: {
        '600': '600ms',
        '900': '900ms',
        '1200': '1200ms',
        '1600': '1600ms',
      },
      animation: {
        'fade-in': 'fadeIn 1.4s cubic-bezier(.22,.61,.36,1) both',
        'fade-in-up': 'fadeInUp 1.6s cubic-bezier(.22,.61,.36,1) both',
        'fade-in-slow': 'fadeIn 2.4s cubic-bezier(.22,.61,.36,1) both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
