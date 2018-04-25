import Vue from 'vue'
import Router from 'vue-router'
import App from 'pages/app'
import UserRoute from './user'
Vue.use(Router)

// 通过...运算符把所有的路由拼接
export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    ...UserRoute
  ]
})
