 #!/bin/bash
cat > .env.staging << EOF
NODE_ENV = stage
# just a flag
ENV = 'stage'

#页面路径前缀
VUE_APP_Public_Path = '/'

#Auth系统 api
VUE_APP_AUTH_BASE_API = '/api-auth'

#本系统api请求前缀
VUE_APP_API_PREFIX = '/custshop-admin'
VUE_APP_DELIVERY_API_PREFIX = '/delivery-admin'

#是否进行鉴权
VUE_APP_PERMISSION = true

VUE_APP_FINANCE_OPEN_API = "http://stage-finance-api-open.wangjiahuan.net/WapInvoice"
EOF
