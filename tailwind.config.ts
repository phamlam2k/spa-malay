import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff3f34'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontSize: {
        xs: '.75rem', // 12px
        sm: '.875rem', // 14px
        tiny: '.875rem' // Example custom size
      },
      screens: {
        xxs: '380px',
        xs: '576px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920',
        'max-1920': { max: '1920px' },
        'max-1440': { max: '1440px' },
        'max-1366': { max: '1366px' },
        'max-xl': { max: '1280px' },
        'max-lg': { max: '1024px' },
        'max-md': { max: '768px' },
        'max-sm': { max: '640px' },
        'max-xs': { max: '576px' },
        'max-xxs': { max: '375px' },

        'min-1920': { min: '1920px' },
        'min-1440': { min: '1440px' },
        'min-1366': { min: '1366px' },
        'min-xl': { min: '1280px' },
        'min-lg': { min: '1024px' },
        'min-md': { min: '768px' },
        'min-sm': { min: '640px' },
        'min-xs': { min: '576px' },
        'min-xxs': { min: '375px' }
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))'
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none'
          }
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0'
          },
          '100%': {
            backgroundPosition: '700px 0'
          }
        }
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
export default config
