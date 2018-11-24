// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
Vue.prototype.$qzzrouter=router

import './styls/reset.less'

import 'mint-ui/lib/style.css';
import Mint from 'mint-ui';
Vue.use(Mint);

import VueResource from 'vue-resource'
Vue.use(VueResource)  //读取json文件

import LyTab from 'ly-tab';//滑动导航
Vue.use(LyTab)


import  Axios from 'axios'
Vue.prototype.$axios=Axios

import qs from 'qs';
Vue.prototype.$qs=qs //qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库。

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
