<template>
  <div id="app">
    <!-- <Home></Home> -->
    <router-view>
    	
    </router-view>
  </div>
</template>

<script>

import Home from './components/Home/Home.vue'
import Mint from 'mint-ui';
import Vue from 'vue';
import Axios from 'axios';
Vue.use(Mint);


export default {
  name: 'App',
  components:{Home}
}
</script>

<style>
#app {
 
}
</style>
