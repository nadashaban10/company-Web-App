module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Noto Naskh Arabic"', 'serif'], // Add the Arabic font
        sans: ['"Nunito"', 'sans-serif'], // Example for another font
      },
    },
  },
  plugins: []

};
