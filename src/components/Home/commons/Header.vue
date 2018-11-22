<template>
	<div class="header">
		<router-link tag="i" to="/login" class="fa fa-user-o" aria-hidden="true">

		</router-link>
		<h1>丽子美妆</h1>
		<i class="fa fa-search" aria-hidden="true"></i>
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
@import url('../../../styls/main.less');
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
		h1{
			.fs(22);
		}
	}

</style>