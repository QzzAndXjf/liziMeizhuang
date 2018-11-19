import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Home from '../components/Home/Home'
import My from '../components/My/My'

export default new Router({
  routes: [
    {path: '/home', component: Home ,name:'home'}
  ]
})
