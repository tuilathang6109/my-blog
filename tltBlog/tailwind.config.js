/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      's': {'max':'575px'},
      'sm': {'min': '576px', 'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
    },
    extend: {
      fontFamily : {
        Qicksand : ["Qicksand","arial","sans","selrif"] ,
        PlayfairDisplay : ['"Playfair Display"',"arial","sans"],
        Kanit : ["Kanit","arial","sans"]
      },
      colors : {
        BgGrey : '#f2f3f7',
        textBlack :'rgba(0, 0, 0, 0.7);'
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.7s ease-in',
        slideOut: 'slideOut 0.7s ease-out',
      },
    },
  },
  plugins: [
],
} 
