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
      backgroundImage: (theme) => ({
        'hero-portrait': "url('./src/common/assets/Images/hero-portrait.png')",
        'gradient-blue': 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(252,252,255,1) 0%, rgba(188,244,255,1) 100%);',
        'gradient-black': 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);'
      }),
      colors: {
        'primary': '#63C5DA',
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

