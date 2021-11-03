import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/global.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// 初始化vue-amap
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
