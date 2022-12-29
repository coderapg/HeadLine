module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, // 如果将来是自己的设计图(750px)，直接写75即可！ 就可以设计图是多少px，css书写就写多少px
      propList: ['*']
    }
  }
}
