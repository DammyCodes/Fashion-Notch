/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      'xmd': "980px",
      lg: "1024px",
      xl: "1120px",
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [],
}