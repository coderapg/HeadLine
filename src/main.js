import Vue from 'vue'
import App from './App.vue'

// 在项目中使用vant组件库
import './plugins/vant'

// 移动端rem适配
import 'amfe-flexible'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
