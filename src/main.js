// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'

import './styls/reset.less'

import Mint from 'mint-ui';
Vue.use(Mint);


import  Axios from 'axios'
Vue.prototype.$axios=Axios
import qs from 'qs';
Vue.prototype.$qs=qs



Vue.config.productionTip = false

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
