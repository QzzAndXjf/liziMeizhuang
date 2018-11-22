<template>
	<div class="bottom">
		 <div class="bd"> 
		 	<span class="price">￥<b id="s_nowprice">69.00</b></span> 
		 	<a href="javascript:;" class="kefu" onclick="NTKF.im_openInPageChat('lz_1019_9999')">
		 		<i class="fa fa-commenting" aria-hidden="true"></i>客服
		 	</a>  
		 	<a href="javascript:;" class="btn" id="buy_btn">加入购物车</a>  
		 </div> 
	</div>
</template>

<script>

export default{
	name:'Bottom',
	components:{},
    data(){
    	return {};
    },
    methods:{
    	
    }
    
}	

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');
.bottom{
	
	.bd{
		position: fixed;
		background: #fff;
		bottom:0;
		border: 1px solid #ccc;
		display: flex;
		.h(46);
        text-align: center;
		span{
			.w(178);
			.h(45);
			.lh(45);
			.fs(26);
			color:#ff666b;
		}
		a.kefu{
			width: 30px;
		    font-size: 12px;
		    margin: 0 15px;
		    padding-top: 2px;
		    display: block;
    		text-align: center;
    		color:#999;
    		i{
    			.fs(20);
    			color:#ff666b;
    		}
		}
		a.btn{
			display: block;
		    .w(136);
		    .h(45);
		    .lh(45);
		    .padding(11,0,0,0);
		    line-height: 20px;
		    .fs(16);
		    color: #fff;
		    background-color: #ff666b;
		    vertical-align: middle;
		    -webkit-tap-highlight-color: rgba(0,0,0,0);
		    text-align: center;
		}

	}
}
</style>