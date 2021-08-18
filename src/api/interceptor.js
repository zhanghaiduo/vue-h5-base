import axios from 'axios'
import { Toast } from 'mint-ui'
import { getToken, removeToken } from '@/utils/auth'
import router from '@/router'
// const ENV = process.env.NODE_ENV
axios.interceptors.request.use(
  (req) => {
    req.headers.token = getToken()
    // req.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    // if (req.params) {
    // req.params = req.data;
    // }
    // if (ENV !== 'develop') {
    //   req.url = '/test' + req.url
    // }
    return req
  },
  (err) => Promise.reject(err)
)

let unLoginMsgBtn = true

// http response 拦截器
axios.interceptors.response.use(
  (res) => {
    if (!res.config.headers.noHandleErr) {
      const SUCCESS = 0 // 成功
      //     const FAILED = -1; // 失败
      const NO_LOGIN = '0002' // 登录失效
      //     const NO_JURISDICTION = -403; // 没权限
      switch (res.data.code) {
        case SUCCESS: // 成功
          return res.data
        case NO_LOGIN: // 登录失效
          res.data.failed = true
          if (unLoginMsgBtn) {
            unLoginMsgBtn = false
            Toast('登录信息失效，请重新登录')
          }
          removeToken()
          router.push('/login')
          return res.data
        default:
          if (unLoginMsgBtn) {
            Toast(res.data.msg)
          }
          res.data.failed = true
          return res.data
      }
    } else {
      return res
    }
  },
  (error) => {
    Toast('网络错误，请稍后重试')
    return Promise.reject(error.response.data)
  }
)
