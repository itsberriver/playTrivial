module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{

      'Guy': ['Luckiest Guy','cursive'],
      'Mont': ['Montserrat','sans-serif'],
      'Poppins': [],

      extend: {},
    },

    fontWeight:{   //<-no funciona :< 
      'extra-bold': 800,
    },

    colors: {
      'white': '#FDFFF3',
      'bgpurple': '#080B24',
      
      'sports': '#39A2DE',
      'art': '#FF80A9',
      'tv': '#C93F6B',
      'science': '#8BD048',
      'geography': '#1F6A1C',
      'history': '#F8623F',
      'general': '#FFC466',
      'random': '#5E1BEE',
      
      'correct':'#6EB628',
      'wrong':'#F83F3F',
    }
    },
plugins: [],
}
