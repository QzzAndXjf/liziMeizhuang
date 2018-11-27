<template>
	<div>
        <Banner></Banner>
        <HotActive></HotActive>
    </div>
</template>

<script>

import Banner from './Banner.vue'
import HotActive from './HotActive.vue'


export default{
	name:'Home',
	components:{Banner,HotActive},
    data(){
      return {};
    	
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
div{
     .w(375);
}

</style>