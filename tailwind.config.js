/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBg: '#0A0C21',
        borderBottom: '#2A313C',
        buttonBorder: '#e9e9e966',
        gradientBtn: 'bg-gradient-to-r from-[#490FF080] to-[#490FF000]'
      }
    },
  },
  plugins: [],
}
