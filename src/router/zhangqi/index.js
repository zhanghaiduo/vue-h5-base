const routes = [
  {
    path: '/zhangqi',
    component: (resolve) => require(['@/views/zhangqi'], resolve),
    redirect: '/zhangqi/demo',
    children: [
      {
        path: 'demo',
        name: 'zhangqiDemo',
        component: (resolve) => require(['@/views/zhangqi/demo'], resolve),
        meta: {title: 'zhangqiDemo' }
      }
    ]
  }
]

export default routes

