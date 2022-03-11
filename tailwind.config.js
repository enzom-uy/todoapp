module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-green': '#101F25',
        'fg-white': '#EFEFEF'
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
    },
  },
  plugins: [
    // @ts-ignore
    require('tailwind-scrollbar-hide')
  ],
}
