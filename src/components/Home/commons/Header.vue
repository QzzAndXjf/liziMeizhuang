<template>
	<div class="header">
		<i class="fa fa-user-o" aria-hidden="true" @click="goMy"></i>
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
    	goMy(){
            var storage = window.localStorage;
            let uname = storage.getItem("uname");
    		if(uname){
    			this.$router.push("/mylizi");
    		}else {
    			alert("您还未登陆");
    			this.$router.push("/login");
    		}
    		
    	}
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