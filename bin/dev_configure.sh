 #!/bin/bash
cat > .env.development << EOF
# just a flag
ENV = 'development'

# base api
VUE_APP_BASE_API = '/'

#页面路径前缀
VUE_APP_Public_Path = '/'

#Auth系统 api
VUE_APP_AUTH_BASE_API = '/api-auth'

#本系统api请求前缀
VUE_APP_API_PREFIX = '/custshop-admin'
VUE_APP_DELIVERY_API_PREFIX = '/delivery-admin'

#是否进行鉴权
VUE_APP_PERMISSION = true
VUE_CLI_BABEL_TRANSPILE_MODULES = true

VUE_APP_FINANCE_OPEN_API = "http://dev-finance-api-open.wangjiahuan.net/WapInvoice"
EOF

cat > node_modules\_vxe-table@1.14.14@vxe-table\lib\v-x-e-table\src\interceptor.js << EOF
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Interceptor = void 0;

var _xeUtils = _interopRequireDefault(require("xe-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _storeMap = {
  // 清除激活单元格之前触发，允许返回 false 阻止默认行为
  'event.clear_actived': [],
  // 清除筛选面板之前触发，允许返回 false 阻止默认行为
  'event.clear_filter': [],
  // 显示快捷菜单之前触发
  'event.show_menu': [],
  // 键盘按下时触发
  'event.keydown': []
};
var Interceptor = {
  mixin: function mixin(map) {
    _xeUtils.default.each(map, function (callback, type) {
      return Interceptor.add(type, callback);
    });

    return Interceptor;
  },
  get: function get(type) {
    return _storeMap[type] || [];
  },
  add: function add(type, callback) {
    var eList = _storeMap[type];

    if (eList && callback && eList.indexOf(callback) === -1) {
      eList.push(callback);
    }

    return Interceptor;
  },
  delete: function _delete(type, callback) {
    var eList = _storeMap[type];

    if (eList) {
      _xeUtils.default.remove(eList, function (cb) {
        return cb === callback;
      });
    }

    return Interceptor;
  }
};
exports.Interceptor = Interceptor;
var _default = Interceptor;
exports.default = _default;
EOF
