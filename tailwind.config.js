module.exports = {
  purge: ['./src/**/*.ejs', './src/**/*.md'],
  theme: {
    fontFamily: {
      sans: ['Sen', 'sans-serif'],
      display: ['Zilla Slab', 'sans-serif'],
      body: ['Nunito', 'sans-serif'],
    },
    listStyleType: {
      none: 'none',
      square: 'square',
      disc: 'disc',
    },
    extend: {
      colors: {
        primary: '#f8f7f5',
      },
    },
  },
  variants: {},
  plugins: [],
};
