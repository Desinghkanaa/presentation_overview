/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: {
          DEFAULT: '#0d0d0d',
          light: '#181818',
          dark: '#080808',
          card: '#121212',
          glass: 'rgba(255, 255, 255, 0.05)',
          'glass-border': 'rgba(255, 255, 255, 0.2)',
        },
        brand: {
          white: '#ffffff',
          silver: '#e2e8f0',
          platinum: '#cbd5e1',
          slate: '#94a3b8',
          dark: '#121212',
          blue: '#3b82f6',
          cyan: '#38bdf8',
          teal: '#2dd4bf',
          green: '#22c55e',
          mint: '#4ade80',
          spring: '#52ffa8',
          ice: '#f1f5f9',
          lime: '#a3e635',
          red: '#f43f5e',
          orange: '#fb923c',
          purple: '#a855f7',
          pink: '#f472b6',
        },
        text: {
          primary: '#ffffff',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
          accent: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'glow-white': '0 0 35px rgba(255, 255, 255, 0.35)',
        'glow-silver': '0 0 35px rgba(203, 213, 225, 0.3)',
        'glow-green': '0 0 35px rgba(34, 197, 94, 0.35)',
        'glow-cyan': '0 0 35px rgba(56, 189, 248, 0.35)',
        'glow-blue': '0 0 35px rgba(59, 130, 246, 0.35)',
        'glow-purple': '0 0 35px rgba(168, 85, 247, 0.35)',
        'glow-orange': '0 0 35px rgba(251, 146, 60, 0.35)',
        'glow-hero': '0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(255, 255, 255, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite alternate',
        'aurora': 'aurora 15s ease infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 25px rgba(32, 223, 137, 0.4))' },
          '100%': { transform: 'scale(1.03)', filter: 'drop-shadow(0 0 45px rgba(32, 223, 137, 0.8))' }
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
