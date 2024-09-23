/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveInHexagon: {
          '0%': { transform: 'translate(0, 0)' },          // Start at the original position
          '25%': { transform: 'translate(10px, -10px)' },  // Move top-right
          '50%': { transform: 'translate(0, -10px)' },    // Move top-left
          '75%': { transform: 'translate(-10px, -10px)' }, // Move bottom-left
          '100%': { transform: 'translate(0, 0)' },        // Return to original position
        },
        moveInX: {
          '0%, 100%': { transform: 'translateX(0)' },        // Start and end at original position
          '50%': { transform: 'translateX(20px)' },          // Move 50px to the right at 50%
        },
        moveInY: {
          '0%, 100%': { transform: 'translateY(0)' },        // Start and end at original position
          '50%': { transform: 'translateY(20px)' },          // Move 50px down at 50%
        },
      },
      animation: {
        moveInX: 'moveInX 5s ease-in-out infinite', // Define the duration and easing function
        moveInY: 'moveInY 5s ease-in-out infinite',
        moveInHexagon: 'moveInHexagon 5s ease-in-out infinite',
      },
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        skyBg: '#F8FBFF',
        sky: '#078DEE',
        black: '#1C252E',
        gray: '#637381',
        slate: '#919EAB',
        white: '#FFFFFF',
        offwhite: '#F4F6F8',
      },
    },
  },
  plugins: [],
};
