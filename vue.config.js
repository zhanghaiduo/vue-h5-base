const path = require('path')
const apiMocker = require('mocker-api')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

/**
 * @function
 * @param {String} dir 路径名
 * @returns {String} 处理好的绝对路径
 * @description 将相对路径转为绝对路径
 */
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      sass: {
        data: '@import "@/styles/mixins.scss";'
      }
    }
  },
  devServer: {
    before(app) {
      apiMocker(app, path.resolve('./mock/index.js'))
    }
    // proxy: {

    // }
  }
}
