<template>
	<div class="header">
		  <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <span>商品详情</span>
          <i class="fa fa-home" aria-hidden="true"></i>
	</div>
</template>

<script>

export default{
	name:'Header',
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

</style>