/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.html"
  ],
  theme: {
    extend: {
      /* our custom styles go here */
      fontFamily: {
        body: ['Nunito']
      }     

    },

    /* this is where we configure our breakpoints */
    
  },
  plugins: [],
}

