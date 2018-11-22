<template>
  <div id="app">
    <!-- <Home></Home> -->

    <!-- <router-view></router-view> -->

    <router-view></router-view>

  </div>
</template>

<script>

// import Home from './components/Home/Home.vue';
import Mint from 'mint-ui';
import Vue from 'vue';
import Axios from 'axios';
import LyTab from 'ly-tab';

Vue.use(Mint);


export default {
  name: 'App',
  components:{}
}
</script>

<style>
#app {
 
}
</style>
