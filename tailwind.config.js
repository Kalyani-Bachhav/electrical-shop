/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E53935',
          blue: '#1565C0',
          yellow: '#FBC02D',
          green: '#25D366',
          midnight: '#0B132B',
          steel: '#1E2A4A',
          mist: '#F7F8FB',
        },
      },
      boxShadow: {
        glow: '0 20px 50px -30px rgba(21, 101, 192, 0.6)',
      },
      fontFamily: {
        display: ['"Trebuchet MS"', '"Segoe UI"', 'sans-serif'],
        body: ['"Segoe UI"', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
