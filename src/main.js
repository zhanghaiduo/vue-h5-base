import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// import Mint from 'mint-ui'
import App from './App.vue'
import store from './store' // vuex
import router from './router' // 路由配置
import '@/styles/index.scss' // 全局样式
import '@/styles/iconfont.scss' // icon样式
import '@/api/interceptor' // axios全局配置
import './prototypeFn' // 注册vue全局方法
// import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
