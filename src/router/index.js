import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
Vue.use(Vuex)

import Login  from '../components/MyMsg/login.vue'
import Zhuce  from '../components/MyMsg/zhuce.vue'
import Mylizi  from '../components/MyMsg/mylizi.vue'
import Pay from '../components/MyMsg/pay.vue'
import Collect from '../components/MyMsg/collect.vue'
import Goodlist from '../components/MyMsg/goodlist.vue'


import Home  from '../components/Home/Home.vue'
import HomeBody  from '../components/Home/HomeBody.vue'
import NavList  from '../components/Home/commons/NavList.vue'
import ShopCar  from '../components/Home/commons/ShopCar.vue'
import Details  from '../components/Details/Details.vue'
import riben  from '../components/Home/HotDetails/riben.vue'
import china  from '../components/Home/HotDetails/china.vue'
// const routes = [
//   { path: '/', component: Home ,name:'Home'},
//   { path: '/login', component: Login ,name:'login'},
//   { path: '/zhuce', component: Zhuce  ,name:'zhuce' },
//   { path: '/home', component: Home  ,name:'home' }
// ]


// const routes = [
//   { path: '/login', component: Login,name:'login'},
//   { path: '/zhuce', component: Zhuce,name:'zhuce' },
//   { path: '/mylizi', component: Mylizi,name:'mylizi' }
// ]

const router = new Router({
  // routes // (缩写) 相当于 routes: routes
	routes: [
	  { path: '/', redirect:'/home/HomeBody'},
	  { path: '/login', component: Login ,name:'login'},
	  { path: '/zhuce', component: Zhuce,name:'zhuce' },
	  { path: '/mylizi', component: Mylizi,name:'mylizi' },
	  { path: '/pay', component: Pay,name:'pay' },
	  { path: '/collect', component: Collect,name:'collect' },
	  { path: '/goodlist', component: Goodlist,name:'goodlist' },
	  { path: '/home', component: Home,name:'home' },
	  { path: '/details', component: Details,name:'details' },
	  { path: '/shopcar', component: ShopCar,name:'shopcar' },
	  { path: '/riben', component: riben,name:'riben' },
	  { path: '/china', component: china,name:'china' },
	  
	  { path: '/home', component: Home,
	      children: [
	        {
	          // 当 /user/:id/profile 匹配成功，
	          // UserProfile 会被渲染在 User 的 <router-view> 中
	          path: 'HomeBody',
	          component: HomeBody
	        },
	        {
	          // 当 /user/:id/posts 匹配成功
	          // UserPosts 会被渲染在 User 的 <router-view> 中
	          path: 'NavList',
	          component: NavList
	        },
	        // {
	        //   // 当 /user/:id/posts 匹配成功
	        //   // UserPosts 会被渲染在 User 的 <router-view> 中
	        //   path: 'details',
	        //   component: Details
	        // },
	        
	      ]
	    }
	  ]

})

 export default router
