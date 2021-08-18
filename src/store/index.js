import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger' // 控制台打印
import template from './template' // 模板模块
import zhangqi from './zhangqi/demo' // zhangqi 项目的 store


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    template,
    zhangqi
  },
  plugins: [createLogger()]
})
