/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'rock-salt': ['Rock Salt', 'cursive'],
      },
      animation: {
        'fadein': 'fadeIn 0.6s ease-in',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }

      },
    },
  },
  plugins: [],
}
