	<template>
	<!-- Swiper -->
	<div>
		<div id="navbar">
		  <div class="swiper-container">
		    <div class="swiper-wrapper" id="nav">
			  <router-link :class="swiper_slide" tag="div" to="HomeBody" active-class="sel">丽子</router-link>
		      <router-link 
		      v-for="(item,index) in navlist" :key="index" 
		      tag="div" 
		      v-bind:class="[swiper_slide ? 'swiper-slide swiper-slide-active' : 'swiper_slide']"
		      :path="selInit"  @click.native="toggleNav(item,swiper_slide)"
		      :to="{ path: 'NavList', query: { id: item.id,type:item.type}}"
		      >{{item.title}}</router-link>

		    </div>
		  </div>
		</div>

	</div>
	
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js"></script>
<script>
	import Axios from 'axios';
	import Swiper from 'swiper';
	import NavList from "./NavList.vue";
	export default{
	name:'Nav',
	components:{NavList},
    data(){
    	return {
    		navlist:["丽子","TOP单品"],
    		swiper_slide:false,
    		selInit:"1",
    		selectedId: 0,
    		options: {
		    activeColor: '#1d98bd'
		        // 可在这里指定labelKey为你数据里文字对应的字段名
		      },
    	};
    },
    methods:{
    	addStyle(swiper_slide,$event){
	  		swiper_slide = "swiper-slide swiper-slide-active";
	  		console.log(swiper_slide,$event)

	  	},
	  	toggleNav(item,swiper_slide){
	  		this.selInit =item.title;
	  		swiper_slide = true;
	  	},
	  	toggleList(id,type){
	  		console.log(id);
	  		Axios.get('/qzz/newIndex/getItemDetailList?max=10&url=%2FnewIndex%2FgetItemDetailList',{params:{
	  			id:id,
	 			type:type,
	          	offset:0
         		}
      		})
	        .then((res)=>{
	            
	           console.log(res.data.model.data)
	           // this.navlist=res.data.model.list
	        })
	        .catch((err)=>{
	            console.log(err)
	        })

	       },


	  	getNavList(){
	  		// https://m.lizi.com/newIndex/getItemDetailList?max=10&url=%2FnewIndex%2FgetItemDetailList&id=5767c678e4b0edc8bf0af2c1&type=ITEM&offset=0
	  		// https://m.lizi.com/newIndex/getItemDetailList?max=10&url=%2FnewIndex%2FgetItemDetailList&id=5767c68ce4b0edc8bf0af2d8&type=ITEM&offset=0

	  		Axios.get('/qzz/newIndex/getIndexNavigator',{params:{
          	 __t:new Date().getTime(),
          	page:this.current+1,
          	count:7
         }
      		})
	        .then((res)=>{
	            
	           // console.log(res.data.model.list)
	           this.navlist=res.data.model.list
	        })
	        .catch((err)=>{
	            console.log(err)
	        })
	       }

	  	},

	 created(){
	 	this.getNavList();
	 	
	 },
	 mounted(){

		var mySwiper = new Swiper('.swiper-container',{
			freeMode : true,
			freeModeMomentum : true,
		})


	    },
	destroyed(){
				//实例化用完之后记得移除
				// this.mySwiper=null
				delete this.mySwiper
			}


 }

   
   
</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
@import url("../../../../static/swiper-4.4.2/dist/css/swiper.css");

#navbar{
	position: fixed;
	.top(44);
    z-index:9999;
    border-bottom:2px solid #cac6c6;
    box-shadow: 0 3px 20px -4px;

    .swiper-container{
	background: #fff;
	#nav{
	// overflow-x:auto;
		div{
			.w(76)!important;
			.h(40);
			.lh(40);
			text-align:center;
			.fs(14)
		}
	}

	}

}

.sel{
	color: #e4393c;
	border-bottom:2px solid red;
}

.router-link-exact-active {
	border-bottom:2px solid red;
	color: #e4393c;
}

</style>