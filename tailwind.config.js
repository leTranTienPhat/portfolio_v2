/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#05b2f0',
        'primary-dark': '#171717',
        'secondary-dark': '#23272f',
        'light-gray': '#f4f4f4',
        'iron': '#777B7E'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        floating: {
          '0%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(-10%)' },
        },
        rotate: {
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0)' },
        },

      },
      animation: {
        'marquee': 'marquee 10s linear infinite',
        'floating': 'floating 1s alternate ease-in-out infinite',
        'rotate': 'rotate 2s linear infinite',
        'rotate-counter': 'rotateReverse 2s linear infinite',
      }
    },
  },
  plugins: [],
}

