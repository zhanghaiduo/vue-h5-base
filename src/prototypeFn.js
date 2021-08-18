import Vue from 'vue'

/**
 * @param {object} form 表单节点
 * @param {fn} success 成功回调
 * @param {fn} fail 失败回调
 * @param {fn} final 总会执行的回调
 * @returns {void}
 * @description 表单验证
  */
Vue.prototype.validForm = ({
  form,
  success,
  fail,
  final
}) => {
  form.validate((valid) => {
    if (valid) {
      if (success) {
        success()
      }
    } else if (fail) {
      fail()
    }
    if (final) {
      final()
    }
  })
}
