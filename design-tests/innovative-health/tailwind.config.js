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
          base: '#FFFFFF',
          gradient: {
            start: '#EDE9FE',
            mid: '#DBEAFE',
            end: '#FEF3C7',
          }
        },
        primary: {
          purple: '#7C3AED',
          blue: '#2563EB',
        },
        accent: {
          orange: '#F59E0B',
          pink: '#EC4899',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.65)',
          bgCard: 'rgba(237, 233, 254, 0.5)',
          border: 'rgba(124, 58, 237, 0.2)',
        }
      },
      backdropBlur: {
        'glass': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(124, 58, 237, 0.15)',
        'glass-hover': '0 20px 60px rgba(124, 58, 237, 0.25)',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'mesh-move': 'meshMove 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-rotate': 'gradientRotate 3s linear infinite',
      },
      keyframes: {
        meshMove: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
            backgroundSize: '100% 100%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
            backgroundSize: '120% 120%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientRotate: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      }
    },
  },
  plugins: [],
}
