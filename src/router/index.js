import Vue from 'vue'
import giftbox from './giftbox'
import {getToken } from '@/utils/auth'
import Router from 'vue-router'
import settings from '@/settings'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
Vue.use(Router)

const router = new Router({
  routes: [
    { // 登录
      path: '/',
      redirect: '/giftbox'
    },
    { // 首页
      path: '/giftbox',
      name: 'giftbox',
      component: (resolve) => require(['@/views/giftbox/home.vue'], resolve)
      // meta: {
      //     requireAuth: true,
      // },
    },
    // { // 登录
    //   path: '/login',
    //   name: 'login',
    //   component: (resolve) => require(['@/views/login/login.vue'], resolve)
    // },
    ...giftbox
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = to.meta.title || settings.title
  if ((to.matched.some((item) => item.meta.requireAuth))) {
    // 判断是否需要登录权限
    if (getToken()) {
      next()
      NProgress.done()
    } else {
      // 没登录则跳转到登录界面
    //   next({
    //     path: '/login',
    //     query: {
    //       redirect: to.fullPath
    //     }
    //   })
    }
  } else {
    next()
    NProgress.done()
  }
})

export default router
