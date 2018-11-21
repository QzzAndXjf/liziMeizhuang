<template>
	<div class="details">
         <Header></Header>  
         <Bottom></Bottom>
         <GoTop></GoTop>
    </div>
</template>

<script>

import Vue from 'vue';
import Header from './Header.vue';
import Bottom from './Bottom.vue';
import GoTop from '../../components/Home/commons/GoTop.vue'


export default{
	name:'Details',
	components:{Header,Bottom,GoTop},
    data(){
      return {};
    	
    }
    
}	

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');


</style>