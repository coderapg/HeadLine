import Vue from 'vue'
import App from './App.vue'

// 在项目中使用vant组件库
import './plugins/vant'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
