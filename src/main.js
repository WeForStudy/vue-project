// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import myStore from 'store'
import App from './pages/app'
import router from './router'
import 'common/index.styl'

Vue.use(Vuex)
Vue.config.productionTip = false
/* eslint-disable no-new */
const store = new Vuex.Store(myStore)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
