/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14b4a0',
        borderColor: '#e6e6e6',
        textColor: '#1f1f1f'
      },
      spacing: {
        navbarHeight: '4rem',
        sectionGap: '1rem'
      }
    },
  },
  plugins: [],
}

