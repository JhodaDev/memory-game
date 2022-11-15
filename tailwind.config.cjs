module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': 'rgb(253, 162, 20)', // #FDA214
        'gray-light': 'rgb(188, 206, 217)', // #BCCED9
        'gray-medium': 'rgb(48, 72, 89)', // #304859
        'gray-dark': 'rgb(21, 41, 56)', // #152938
        'white-light': 'rgb(242, 242, 242)', // #F2F2F2
        'blue-light': 'rgb(113, 145, 165)', // #7191A5
        'blue': 'rgb(99, 149, 184)', // #6395B8
        'white': 'rgb(252, 252, 252)', // #FCFCFC
      },
      fontFamily: {
        'Atkinson': ['Atkinson Hyperlegible', 'sans-serif'],
      },
      fontSize: {
        'base': '0.9375rem', // 15px
        'xs': '1.125rem', // 18px
        'sm': '1.25rem', // 20px
        'lg': '2rem', // 32px
        'xl': '2.75rem', // 44px
        '2xl': '3rem', // 48px
        '3xl': '3.5rem', // 56px
      },
    },
  },
  plugins: [],
}