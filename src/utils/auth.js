/**
 * @function
 * @returns {String} 返回token值
 * @description 获取存储在sessionStorage中的token
 */
export function getToken() {
  return sessionStorage.getItem('token')
}

/**
 * @function
 * @param {String} token 用户登录凭证
 * @return {void}
 * @description 保存用户token、
 */
export function setToken(token) {
  return sessionStorage.setItem('token', token)
}

/**
 * @function
 * @returns {void}
 * @description 移除用户token
 */
export function removeToken() {
  return sessionStorage.removeItem('token')
}
