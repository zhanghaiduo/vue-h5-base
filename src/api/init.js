import axios from 'axios'
export const req = (config) => {
  if (config.config) {
    const outConfig = config.config // 取出调用时候传进来的配置
    delete config.config // config现在只剩api文件中的配置
    if (config.data && outConfig.data) {
      config.data = { // 合并两个config的data
        ...config.data,
        ...outConfig.data
      }
      delete outConfig.data // 调用时传进来的config现在只剩除data之外的配置
    } else if (outConfig.data) {
      config.data = outConfig.data
      delete outConfig.data // 调用时传进来的config现在只剩除data之外的配置
    }
    config = { // 合并两个config
      ...config,
      ...outConfig
    }
  }
  return axios({...config })
}
