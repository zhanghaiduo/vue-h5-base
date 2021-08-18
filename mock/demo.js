const Mock = require('mockjs')

const WORKFLOW = {
  'POST /api/test/post': {
    code: 0,
    data: null,
    msg: '成功'
  },
  'GET /api/test/get': (req, res) => {
    res.send(Mock.mock({
      code: 0,
      msg: '@word(10)',
      data: {
        a: '@name'
      }
    }))
  }
}

module.exports = WORKFLOW
