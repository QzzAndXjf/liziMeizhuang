<template>
	<div>
		<footer id="footer">
			<div class="userinfo_bar" id="userinfo_bar">
				<p><i class="fa fa-smile-o" aria-hidden="true"></i>到底啦~</p>
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
		.minh(180);
		.fs(14);
			text-align:center;
			.lh(20);
			clolr:#999;
		.userinfo_bar{
			p{
				color:#999;
				.fs(18);
				.h(30);
			}
			a{
				color:#999;
			}

		}
		.copyright{
			color:#999;
		}
		
	}

</style>