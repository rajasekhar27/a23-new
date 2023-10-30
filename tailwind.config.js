/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
          'sm': {'max': '767px'},
          // => @media (max-width: 767px) { ... }

          'sm-md': {'max': '991px'},
          // => @media (max-width: 991px) { ... }

          'md' : '768px',
          // => @media (min-width: 768px) { ... }

          'md-lg': {'min': '768px', 'max': '991px'},
          // => @media (min-width: 768px and max-width: 991px) { ... }

          'lg': '992px',
          // => @media (min-width: 992px) { ... }

          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
       
      }
    },
  },
  plugins: [],
}

