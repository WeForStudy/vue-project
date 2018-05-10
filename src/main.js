// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import myStore from 'store'
import Router from 'vue-router'

import App from './pages/app'
import routes from './router'
import 'common/index.styl'

import Modal from 'components/modal/index'
Vue.use(Vuex)
Vue.use(Router)
Vue.use(Modal)

Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new Vuex.Store(myStore)
const router = new Router(routes)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
