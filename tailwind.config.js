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
        // CrossFit Leiden brand colors (official)
        cfl: {
          yellow: '#F8E43A',
          orange: '#EF6C00',
          'orange-hover': '#D65F00',
          dark: '#1A1A1A',
          'gray-light': '#F5F5F5',
          'gray-medium': '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        'content': '760px',
      },
    },
  },
  plugins: [],
}
