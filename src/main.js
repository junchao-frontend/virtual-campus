import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/global.less'
Vue.config.productionTip = false
// 初始化vue-amap
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
