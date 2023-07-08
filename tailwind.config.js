/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#00FFFF',
        'second': '#E0A420'
      },
      backgroundImage:{
        'mago':"url('/src/assets/images/mago.png')"
      }
    },
  },
  plugins: [],
}

