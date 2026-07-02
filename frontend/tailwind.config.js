/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#e63946',
          dark: '#0d1b2a',
          gold: '#ffd60a',
          light: '#f1faee',
        }
      },
      animation: {
        'shine': 'shine 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 18s linear infinite',
        'pulse-green': 'pulse-green 2s infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-green': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.4)' },
        },
      }
    }
  },
  plugins: [],
}
