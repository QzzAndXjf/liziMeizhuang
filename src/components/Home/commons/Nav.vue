<template>
	<!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper" id="nav">
      <div class="swiper-slide" @click="addStyle" v-for="item in navlist">{{item}}</div>
      
    </div>

  </div>

</template>

<script>
	import Swiper from 'swiper';
	export default{
	name:'Nav',
	components:{},
    data(){
    	return {
    		navlist:["丽子","TOP单品","潮流新品","防晒美白","补水保湿","底妆隔离","底妆隔离","底妆隔离","底妆隔离"]
    	};
    },
    methods:{
    	addStyle(){
	  	
	  	}
    	
    },
    mounted(){
	  // var swiper = new Swiper('.swiper-container');

    }
    
}	




</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
@import url("../../../../static/swiper-4.4.2/dist/css/swiper.css");
.swiper-container{
	.swiper-wrapper{
		.swiper-slide{
			.w(76);
			.h(40);
			.lh(40);
			text-align:center;
			.fs(14)
		}
	}
}

#nav{
	overflow-x:auto;
	.swiper-slide{
			.w(76)!important;
			.h(40);
			.lh(40);
			text-align:center;
			.fs(14)
		}
}

</style>