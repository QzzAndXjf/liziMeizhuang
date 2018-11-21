<template>
	<div id="NavList">
		<ul class="items_list">  
			<li v-for="(item,index) in navlist" :key="index"> 
				<a href="/product-30183090.html"> 
					<img :src="'https://images.weserv.nl/?url='+item.pic"> <div class="content"> 
						<h2>{{item.title}}</h2> 
						<p class="s cle"> 
							<span class="sale-count gray">已售出：{{item.salesCount}}件</span> 
							<span class="old gray">市场价:￥{{item.marketPrice}}</span> 
						</p> 
						<div class="cle"> 
							<p class="now-price"> 
								<span class="now">￥<em>{{item.liziPrice}}</em></span> 
								<span class="bag">
									<i class="fa fa-shopping-bag" aria-hidden="true"></i>
								</span>
							</p> 
						</div> 
					</div>     
				</a> 
			</li>  
		</ul>
	</div>
</template>
<script>
	import Axios from 'axios';


	export default{
	name:'Nav',
	props:["path"],
	components:{},
    data(){
    	return {
    		id:"",
    		type:"",
    		navlist:[]
    	};
    },
    methods:{
    	
	  	toggleNav(id,type){
	  		
	  		Axios.get('/api/newIndex/getItemDetailList?max=10&url=%2FnewIndex%2FgetItemDetailList',{params:{
	  			id:id,
	 			type:type,
	          	offset:0
         		}
      		})
	        .then((res)=>{ 
	           this.navlist=res.data.model.data;
	            console.log(this.navlist)
	        })
	        .catch((err)=>{
	            console.log(err)
	        })

	       }
  	}, 
  	created(){
	 	this.toggleNav(this.$route.query.id,this.$route.query.type);
	 },
	mounted(){
		 
 	},
 	updated(){
 		
 	},
 	watch:{
 		$route(New,old){
 			console.log(New.query.id,New.query.type)
 			this.toggleNav(New.query.id,New.query.type);

 		}
 		
 	}


}
    

</script>


<style lang="less" scoped>
@import url('../../../styls/main.less');
@import url("../../../../static/swiper-4.4.2/dist/css/swiper.css");
#NavList{
	.margin(84,0,0,0);
	.minh(500);
	.items_list{
		li{
			.w(355);
			margin:5px auto;
		    .padding(5,0,0,0);
		    background: #fff;
		    box-shadow: 0 0 3px 0 rgba(0,0,0,.1);
		    border-radius: 2px;
		    border: 1px solid #fff;
		    a{
		    	display: flex;
    			position: relative;
    			text-decoration: none;
    			color: #222;
			    img{
			    	.w(100);
				    .h(100);
			    }
			    .content{
			    	flex: 1;
    				.padding(5,5,5,5);
    				h2{
    					.h(45);
					    overflow: hidden;
					    .padding(10,0,10,0);
					    .fs(12);
    				}
    				>p{
					    	.fs(12);
					    	color: #999;
					    	span.gray{
							    // float: left;
							    .fs(12);
							    .margin(5,5,5,2);
							}
							.gray {
    							color: #999;
    						}
					    }
					 div{
					 	width: 90%;
					 	p{
					 		overflow: hidden;
					 		.fs(16);
					 		.now{
					 		color:#fd686e;
					 		
					 		float: left;
					 	}
					 	.bag{
					 		float: right;
					 	}
					 	}
					 	
					 }
			    }
		}
	}
	}
}

.sel{
	border-bottom:2px solid red;
}

</style>