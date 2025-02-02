/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"
],
  theme: {
    extend: {
      height: {
        // THERE MUST BE SPACE BETWEEIN THE OPERANDS AND OPERATOR
        'main-height' : 'calc(100vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
}
