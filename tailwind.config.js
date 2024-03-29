/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/index.html", 
    "./pages/register.html"
  ],
  theme: {
    extend: {
      /* our custom styles go here */
      fontFamily: {
        body: ['Nunito']
      },
      
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },

    },

    /* this is where we configure our breakpoints */

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
  },
  plugins: [],
}

