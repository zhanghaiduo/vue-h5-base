import { req } from '@/api/init'
// 数据概况
export const demoPost = (data) => req({
  url: '/custadmin/custtemplate/list',
  method: 'post',
  data
})
