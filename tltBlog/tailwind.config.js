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
      'lg': {'min': '992px', 'max': '1335px'},
      'xl': {'min': '1336px', },
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
      backgroundImage: {
        'bgHome-1': "url('./images/BG-Home-2.jpg')",
        'bgHome-2': "url('./images/BG-Home-3.jpg')",
      },
      letterSpacing: {
        '2': '2px',
        '4': '4px',
        '6': '6px',
      },
      transitionProperty: {
        'height': 'height'
      }
      
    },
    variants: {
      height: ['responsive', 'hover', 'focus']
    }
  },
  plugins: [
],
} 
