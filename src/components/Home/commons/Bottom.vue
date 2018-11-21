<template>
	<div>
		<footer id="footer">
			<div class="userinfo_bar" id="userinfo_bar">
				<a href="/login">登录</a>
				<i class="iconfont"></i>
				<a href="/user/register">注册</a>
				<i class="iconfont"></i>
				<a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.lizi.app">客户端</a>
			</div>
			<section class="copyright">
				<p>丽子客服：0527-80203555</p>
				<p>©2015&nbsp;丽子美妆&nbsp;lizi.com</p>
			</section>
		</footer>
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
@import url('../../../styls/main.less');
	#footer{
		.fs(14);
			text-align:center;
			.lh(20);
			clolr:#999;
		.userinfo_bar{
			a{
				color:#999;
			}

		}
		.copyright{
			color:#999;
		}
		
	}

</style>