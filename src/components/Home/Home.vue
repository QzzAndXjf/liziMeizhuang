<template>
	<div class='home'>
		<Header></Header>
    <Nav></Nav>
    <router-view></router-view>
    <Bottom></Bottom>
    <GoTop></GoTop>
  </div>
</template>

<script>

import Vue from 'vue';
import Header from './commons/Header.vue'
import Nav from './commons/Nav.vue'
import GoTop from './commons/GoTop.vue'
import Bottom from './commons/Bottom.vue'
import HomeBody from './HomeBody.vue'
// import HotActive from './HotActive.vue'


export default{
	name:'Home',
	components:{Header,Nav,HomeBody,Bottom,GoTop},
    data(){
      return {};
    	
    }
    // 计算属性
    // computed:{
    // 	com(){
    //        let  name=this.test
    //        name+='呵呵呵'
    //        return name
    // 	}
    // }
}	

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');

</style>