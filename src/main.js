// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
Vue.prototype.$qzzrouter=router

import './styls/reset.less'

import Mint from 'mint-ui';

import 'mint-ui/lib/style.css';
Vue.use(Mint);

import VueResource from 'vue-resource'
Vue.use(VueResource)  //读取json文件

import LyTab from 'ly-tab';//滑动导航
Vue.use(LyTab)


import  Axios from 'axios'
Vue.prototype.$axios=Axios

import qs from 'qs';
Vue.prototype.$qs=qs



Vue.config.productionTip = false


// import  Axios from 'axios'
// Vue.prototype.$axios=Axios  // 使用的时候  this.$axios

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
