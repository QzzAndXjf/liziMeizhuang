<template>
  <div id="app">
    <Home></Home>
      <router-view></router-view>
  </div>
</template>

<script>

import  Home from './components/Home/Home.vue'

export default {
  name: 'App',
  components:{}
}
</script>

<style>
#app {
 
}
</style>
