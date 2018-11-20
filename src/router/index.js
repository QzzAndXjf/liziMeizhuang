import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Login  from '../components/MyMsg/login.vue'
import Zhuce  from '../components/MyMsg/zhuce.vue'

const routes = [
  { path: '/login', component: Login ,name:'login'},
  { path: '/zhuce', component: Zhuce  ,name:'zhuce' }
]
const router = new Router({
  routes // (缩写) 相当于 routes: routes
})
 export default router
