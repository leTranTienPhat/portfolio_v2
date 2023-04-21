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
        'hero-background': "url('/src/common/assets/Images/hero-bg.jpg')",
        'hero-portrait': "url('/src/common/assets/Images/hero-portrait.png')",
        'bubble': "url('/src/common/assets/Images/thought_bubble.svg')",
        'gradient-blue': 'linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(252,252,255,1) 0%, rgba(188,244,255,1) 100%);',
        'gradient-black': 'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);'
      }),
      colors: {
        'primary': '#63C5DA',
        'primary-dark': '#171717',
        'secondary-dark': '#23272f',
        'bg-light': "#f4f4f4",
        'bg-dark': "#0f1922",
        'light-gray': '#f4f4f4',
        'iron': '#777B7E',
        'light-yellow': "#FEF8DD",
        'light-green': "#E1F8DC",
        'light-blue': "#CAF1DE",
        'light-pink': "#fbf7ff",
        'light-brown': "#FDECDC",
        'linkedin': "#6eadd4",
        'github': "#4aada9",
        'gmail': "#e07768",
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(-10%)' },
        },
      },
      animation: {
        'floating': 'floating 1s alternate ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

