/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/login',
    // 元数据
    meta: {
      title: '登录页',
      login_require: false, // 登录限制
      keepAlive: false
    },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index'),
        meta: { title: '登录页', keepAlive: false }
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info/index'),
        meta: { title: '详情页', keepAlive: false }
      },
      {
        path: '/list',
        name: 'List',
        component: () => import('@/views/list/index'),
        meta: { title: '用户列表', keepAlive: false }
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      }
    ]
  }
]
