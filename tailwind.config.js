/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CrossFit Leiden brand colors
        cfl: {
          orange: '#FF6B35',
          'orange-dark': '#E55A2B',
          yellow: '#FFD23F',
          'yellow-dark': '#E5BC38',
          dark: '#1A1A1A',
          gray: '#2D2D2D',
          'gray-light': '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '800px',
      },
    },
  },
  plugins: [],
}
