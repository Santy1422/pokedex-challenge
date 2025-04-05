/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pokemon-solid': ['Pokemon Solid', 'system-ui', 'sans-serif'],
        pokemon: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'pokemon-red': '#E3350D',
        'pokemon-blue': '#0A285F',
        'pokemon-yellow': '#FFCB05',
        'pokemon-black': '#1B1B1B',
        'pokemon-gray': '#F4F5F7',
        'pokemon-light': '#F8F9FA',
      },
      boxShadow: {
        'pokemon': '0 2px 10px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        'pokemon-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'pokemon-bg': "url('/assets/images/bg.jpg')",
      }
    },
  },
  plugins: [],
} 