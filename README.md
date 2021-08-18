# h5
## UI 框架
使用的是饿了么的移动端Mint UI框架 http://mint-ui.github.io/#!/zh-cn  , 亦可按需引入element UI 组件
## 项目访问地址
开发环境 http://dev-h5-admin.wangjiahuan.net/#/
测试环境 http://stage-h5-admin.wangjiahuan.net/#/
正式环境 h5-admin.wangjiahuan.com
## 目录结构
```bash
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── constants              # 常量文件(权限编码)
│   ├── directive              # 自定义指令(按钮权限控制v-has)
│   ├── filters                # 全局 filter
│   ├── router                 # 路由
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── store                  # 全局 store管理
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   │   ├── zhangqi            # 文件夹按项目名去区分
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── .env.development           # 开发变量配置
├── .env.production            # 生产变量配置
├── .env.staging               # 测试变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── vue.config.js              # vue-cli 配置
├── postcss.config.js          # postcss 配置
└── package.json               # package.json  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
