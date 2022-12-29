module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 配置按需引入vant
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
