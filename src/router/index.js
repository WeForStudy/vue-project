import App from 'pages/app'
import UserRoute from './user'

// 通过...运算符把所有的路由拼接
export default {
  routes: [
    {
      path: '/',
      component: App
    },
    ...UserRoute
  ]
}
