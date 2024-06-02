/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xxs': '8px'
    },
    extend: {
      fontFamily: {
        timesNewRoman: ['Times New Roman', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

