/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lavender spectrum
        lavender: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Periwinkle spectrum
        periwinkle: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        background: {
          base: '#FFFFFF',
          subtle: '#FAFBFC',
          gradient: {
            start: '#F8F7FF',
            end: '#F7FBFF',
          }
        },
        primary: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
        },
        accent: {
          purpleLight: '#DDD6FE',
          blueLight: '#DBEAFE',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.75)',
          bgSubtle: 'rgba(248, 247, 255, 0.8)',
          border: 'rgba(139, 92, 246, 0.12)',
        }
      },
      backdropBlur: {
        'glass': '20px',
        'xs': '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 20px 60px rgba(139, 92, 246, 0.08)',
        'lavender': '0 8px 32px rgba(167, 139, 250, 0.15)',
        'periwinkle': '0 8px 32px rgba(147, 197, 253, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.02em',
        'tighter': '-0.01em',
      },
      animation: {
        'breathe-subtle': 'breatheSubtle 12s ease-in-out infinite',
        'first': 'moveVertical 30s ease infinite',
        'second': 'moveInCircle 20s reverse infinite',
        'third': 'moveInCircle 40s linear infinite',
        'fourth': 'moveHorizontal 40s ease infinite',
        'fifth': 'moveInCircle 20s ease infinite',
        'gradient-flow': 'gradientFlow 25s ease infinite',
        'shine': 'shine 2s infinite',
      },
      keyframes: {
        breatheSubtle: {
          '0%, 100%': {
            opacity: '0.05',
            transform: 'scale(1) translateY(0)',
          },
          '50%': {
            opacity: '0.08',
            transform: 'scale(1.02) translateY(-5px)',
          },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        gradientFlow: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
        shine: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(200%)',
          },
        },
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
