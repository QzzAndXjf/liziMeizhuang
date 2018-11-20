<template>
	<div class='home'>
		<Header></Header>
    <Nav></Nav>
  </div>
</template>

<script>
	// https://m.maizuo.com/v4/api/film/coming-soon?__t=1542266404759&page=1&count=3
	                    // /api/v4/api/film/now-playing'
import Header from './commons/Header.vue'
import Nav from './commons/Nav.vue'

export default{
	name:'Home',
	components:{Header,Nav},
    data(){
      return ;
    	
    }
    // 计算属性
    // computed:{
    // 	com(){
    //        let  name=this.test
    //        name+='呵呵呵'
    //        return name
    // 	}
    // }
}	

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');

</style>