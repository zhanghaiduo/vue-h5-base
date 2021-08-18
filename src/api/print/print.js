import { req } from '@/api/init'
// 数据概况
// 获取打印数据
export function getPrintData(param) {
    return req({
        url: process.env.VUE_APP_API_PREFIX + '/detail/getPrintData',
        method: 'post',
        data: param
    })
}