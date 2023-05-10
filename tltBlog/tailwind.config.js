/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Qicksand : ["Qicksand","arial","sans","selrif"] ,
        PlayfairDisplay : ['"Playfair Display"',"arial","sans"]
      },
      colors : {
        BgGrey : '#f2f3f7',
        textBlack :'rgba(0, 0, 0, 0.7);'
      },
    },
  },
  plugins: [],
} 