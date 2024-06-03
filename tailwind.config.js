/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xxs: '8px',
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
    },
    extend: {
      fontFamily: {
        timesNewRoman: ['Times New Roman', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

