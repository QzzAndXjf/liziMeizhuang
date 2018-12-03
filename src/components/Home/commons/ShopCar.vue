<template>
	<div id="shopcar">
		<div class="header">
		  <i class="fa fa-arrow-left" aria-hidden="true" @click="goBack"></i>
          <span>购物车</span>
          <i class="fa fa-home" aria-hidden="true" @click="gohome"></i>
		</div>

		<div class="shop_line"> 
			<div class="allShopItems"> 
				<ul>
					<li v-for="(item,index) in shopcarData" :key="index">
						<p class="hd">
							<i :class="fa?'fa fa-check-circle-o':'fa fa-check-circle-o sel'" aria-hidden="true" @click="selectGood(fa)"></i>
							<!-- <i class="fa fa-check-circle" aria-hidden="true"></i> -->
							<span>艾斯臣旗舰店</span>
							<i class="fa fa-commenting" aria-hidden="true"></i>
						</p>
						<div class="bd">
							<i :class="fa?'fa fa-check-circle-o':'fa fa-check-circle-o sel'" aria-hidden="true"></i>
							<img :src="'https://images.weserv.nl/?url='+(item.picUrl?item.picUrl:item.pic)" alt="">
							<div>
								<p>
									<span>{{item.name}}</span>
									<i class="fa fa-trash" aria-hidden="true"></i>
								</p>
								<div class="num">
									<p>
										<span>规格：</span>
										<span class="price">￥<em>{{item.liziPrice}}</em></span>
									</p>
									<div>
										<i class="fa fa-minus" aria-hidden="true"></i>
										<input type="text" :value="item.num">
										<i class="fa fa-plus" aria-hidden="true"></i>	
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>     

			</div> 
		</div>

		<div class="bottom">
			<i class="fa fa-check-circle-o" aria-hidden="true"></i>
			<div class="sum">
				<span>
					共有<em>0</em>件商品
				</span>
				<p>总计：<span>￥<em>0.00</em></span></p>
			</div>
			<div class="jiesuan">
				去结算
			</div>
		</div>

	</div>
</template>
<script>
	import router from '../../../router/index.js'
	export default{
		name:"ShopCar",
		data(){
			return {
				shopcarData:[],
				fa:false
			}
		},
		methods:{
			selectGood(fa){
				this.fa  = !this.fa;
				console.log(this.fa)
			},
			addNum(){
				alert(12)
				// let num = this.$emit("Num");
				// num++;
				// console.log(num);
			},
			goBack(){
    			router.go(-1);
    		},
    		gohome(){
    			console.log(444)
            	this.$qzzrouter.push("/");
        	},
        	getShopcarData(){
        		var storage = window.localStorage;
      			let goodsArr = JSON.parse(storage.getItem("goods"));
      			console.log(goodsArr)

        		this.shopcarData = 	goodsArr;
        	},
        	changeNum(num){
        		return num;
        	}
		},
			
		created(){
		      this.getShopcarData();
    	},
	}
</script>
<style lang="less" scoped>
	@import url('../../../styls/main.less');
	#shopcar{

		background: #fff;
		.w(375);
		.minh(800);
		.header{
			position: fixed;
			z-index:9999;
			top:0;
			width: 100%;
			.h(44);
			.lh(44);
			color:#fff;
			background: #ff666b;
			display: flex;
			justify-content: space-between;
			align-items: center;
			i{
				.fs(18);
				display: block;
				.w(44);
				.h(44);
				.lh(44);
				text-align: center;
			}

			span{
				.fs(18);
				font-style: normal;
			}
		}
		.allShopItems{
		 .margin(50,0,0,0);
		  ul{
		  	li{
		  		.w(360);
		  		border:1px solid #999;
		  		margin:5px auto;
		  		.padding(5,5,5,5);
		  		p.hd{
		  			display: flex;
		  			justify-content: center;
		  			align-items: center;
		  			color:#666;

		  			i{
		  				.w(30);
		  				.h(30);
		  				.lh(30);
		  				.fs(22);
		  			}
		  			i.fa-check-circle-o{
		  				color:#999;
		  			}
		  			i.fa-commenting{
		  				color: #ff666b;

		  			}

					i.sel{
						color: #ff666b;
					}
		  			span{
		  			.padding(0,0,0,10);
		  			.w(285);
		  			.fs(16);
		  			}
		  		}

		  		div.bd{
		  			.h(100);
		  			display: flex;
		  			align-items: center;
		  			>i{
		  				.w(30);
		  				.h(30);
		  				.lh(30);
		  				.fs(22);
		  			}
		  			>i.fa-check-circle-o{
		  				color:#999;
		  			}
		  			>i.sel{
						color: #ff666b;
					}
		  			img{
		  				.w(74);
		  				.h(74);
		  				vertical-align: middle;
		  				.margin(0,15,0,5);
		  				border:1px solid #ddd;

		  			}
		  			>div{
		  				.fs(14);
		  				.w(229);
		  				>p{
		  					width: 100%;
		  					.padding(0,5,0,5);
		  					.fs(12);
		  					i{
		  						float: right;
		  						.fs(22);
		  						color: #666;
		  					}

		  				}
		  				div.num{
		  					display: flex;
		  					justify-content: space-between;
		  					p{
		  						.margin(10,0,0,0);
		  						display: flex;
		  						flex-direction: column;
		  						span{
		  							.fs(12);
		  						}
		  						span.price{
		  							color: #ff666b;
		  							em{
		  								font-style: normal;
		  								.fs(20);
		  							}
		  						}
		  					}
		  					>div{
		  						color: #333;
		  						.margin(10,0,0,10);
			  					.w(78);
			  					.h(26);	
			  					i{
			  						float: left;
			  						.w(26);
			  						.h(26);	
			  						border:1px solid #ddd;
			  						text-align: center;
			  						.lh(26);
			  						.fs(16);
			  						color: #666;
			  					}
			  					input{
			  						float: left;
			  						.w(26);
			  						.h(26);	
			  						border:1px solid #ddd;
			  					}
		  					}
		  					

		  				}
		  			}
		  		}


		  	}
		  }

		}

		.bottom{
			.w(375);
			position: fixed;
			background: #fff;
			bottom:0;
			border: 1px solid #ccc;
			.h(50);
			display: flex;
			i{
				.fs(22);
				color:#999;
				display: block;
				.w(44);
				.h(44);
				.lh(44);
				text-align: center;
			}
			div.sum{
				.fs(14);
				.w(215);
				display: flex;
				flex-direction: column;
				em{
					color: #ff666b;
					.fs(18);
					font-style: normal;
				}
				span{
					em{
						
					}
				}
				p{
					
				}
			}
			div.jiesuan{

				flex: 1;
				text-align: center;
				float: right;
				height: 100%;
				display: block;
				.padding(12,12,12,13);
				.fs(18);
			    background-color: #ddd;
			    color: #999;
			}
		}

	}
	
	
</style>                                          