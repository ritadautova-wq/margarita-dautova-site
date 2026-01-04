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
        // New calm, grounded palette - sage green accent
        primary: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c6cfc6',
          300: '#a1afa1',
          400: '#7a8c7a',
          500: '#5f7260', // Main accent - sage green
          600: '#4a5b4b',
          700: '#3d4a3e',
          800: '#333d34',
          900: '#2c332d',
          950: '#161b17',
        },
        // Warm cream/stone neutrals
        stone: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dc',
          300: '#d9d2c7',
          400: '#b8ad9e',
          500: '#9a8d7c',
          600: '#7d7064',
          700: '#665b51',
          800: '#554c44',
          900: '#49423b',
          950: '#27231f',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['2rem', { lineHeight: '1.3' }],
        'heading': ['1.625rem', { lineHeight: '1.35' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
