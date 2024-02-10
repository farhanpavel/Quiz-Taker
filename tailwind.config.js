/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
        'poppins': ['Poppins'],
      },
      animation: {
        'text':'text 5s ease infinite',
    },
    keyframes: {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
        "typing": {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
    }
    ,
    "blink": {
      "50%": {
        borderColor: "transparent"
      },
      "100%": {
        borderColor: "white"
      }  
    }
    },
    animation: {
      typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
    }
  },
  plugins: [],
}
}