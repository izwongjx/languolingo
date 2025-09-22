/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'memphis-coral': '#FF6F61',
        'memphis-purple': '#6B5B95',
        'memphis-green': '#88B04B',
        'memphis-pink': '#F7CAC9',
        'memphis-yellow': '#FFD23F',
        'memphis-blue': '#4ECDC4',
        'memphis-orange': '#FF8C42',
        'memphis-lavender': '#C7CEEA',
      },
      fontFamily: {
        'baloo': ['Baloo 2', 'cursive'],
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}
