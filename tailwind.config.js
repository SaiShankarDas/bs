/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-start': '#1C82A3',
        'primary-end': '#00BAA3',
        'accent-gold': '#FFC700',
        'accent-pink': '#F000B8',
        'text-light': '#FFFFFF',
        'text-muted': '#B2DFDB',
        'dark-bg': '#0A192F',
        'warm-white': '#FFF8E7',

        // New theme colors
        'theme-light-bg': '#EDEDED',
        'theme-text-dark': '#2E2E2E',
        'theme-accent-orange-start': '#FFAA00',
        'theme-accent-orange-end': '#FF6D00',
        
        // User requested colors
        'royal-amber': '#F6A700',
        'warm-wine': '#B23A48',
        'soft-terracotta': '#E26D5A',
        'sky-blue': '#4FD1C5',

        // Registration Page Colors
        'warm-gold-dark': '#b56205',
        'warm-gold-light': '#D97706',
        'warm-bg': '#FDFBF5',
        'warm-text': '#333333',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to bottom right, #1C82A3 0%, #00BAA3 100%)',
        'active-nav-gradient': 'linear-gradient(to bottom right, #FFAA00, #FF6D00)',
        'doodle-pattern': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        'draw-line': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'draw-line': 'draw-line 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
