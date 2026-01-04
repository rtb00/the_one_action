/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          base: '#FAFBFC',
          gradient: {
            start: '#F5F3FF',
            end: '#EFF6FF',
          }
        },
        primary: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
        },
        accent: {
          lavender: '#C4B5FD',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(139, 92, 246, 0.15)',
        }
      },
      backdropBlur: {
        'glass': '12px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(139, 92, 246, 0.1)',
        'glass-hover': '0 12px 48px rgba(139, 92, 246, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 8s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
