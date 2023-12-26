/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          900: '#FBFBFB',
          800: '#DFDFDF',
        },
        dark: {
          900: '#e5a961',
          800: '#0e2a54',
          700: '#e5a961',
          600: '#4D66A0',
          500: '#3F4756',
          400: '#1e293b'
        },
        btn:{
          900 : '#3E2938',
          800 : '#414B59',
          700: '#675E7D'
        },
        darkTheme: {
          900 : '#141C29'
        }
      },
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'quote': ["'Indie Flower'", 'cursive'],

      },
      boxShadow: {
        'profile': ' 0 0 0 7px rgb(255, 255, 225 );',
      }
      
    },
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // #4D66A0
    // // },
  },
  plugins: [require("daisyui")],

}

