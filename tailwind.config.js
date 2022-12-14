/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}" ],
  theme: {
    extend: {
      fontFamily: {
        OutfitR: "Outfit-Regular",
        OutfitM: "Outfit-Medium",
        OutfitB: "Outfit-Bold",
        OutfitEB: "Outfit-ExtraBold",
        MontserratR: "Montserrat-Regular",
        MontserratM: "Montserrat-Medium",
        MontserratB: "Montserrat-Bold",
        MontserratEB: "Montserrat-ExtraBold",
      },
      colors: {
        primaryBlue: "#18A0FB",
        secondaryText: "#534F4F",
        primaryBlack : "#000000",
        primaryGreen: "#0DE302",
      },
      screens: {
        'xs': "360px",
        '2xs': "280px",
        '3xs': "180px",
      },
    },  
  },
  plugins: [],
}
