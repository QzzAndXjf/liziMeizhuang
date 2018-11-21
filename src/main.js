// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'

import './styls/reset.less'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.config.productionTip = false


import  Axios from 'axios'
Vue.prototype.$axios=Axios  // 使用的时候  this.$axios

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
