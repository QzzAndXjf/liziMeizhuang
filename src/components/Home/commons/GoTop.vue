<template>
	<div class='backtop' @click='goTop'>
    <transition
      enter-active-class='animated fadeIn'
      leave-active-class='animated fadeOut'
    >
      <div class='contain' v-show='show'>
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </div>
    </transition>
	</div>
</template>

<script>

export default{
	name:'movie',
	components:{},
    data(){
    	return {
         show:false,
         distance:200
    	}
    },
    methods:{
      goTop(){
        
        window.scrollTo(0,0);
      }
    },
    computed:{

    },
    created(){
      window.addEventListener('scroll',()=>{
 
        let y=window.scrollY
        if (y>=this.distance) {
          if (this.show==false) {
            this.show=true
          }
          
        }else{
          if (this.show==true) {
              this.show=false
          }
          
        }
      })
    },
    updated(){
      console.log(11111)
    }
}	

</script>
<style lang="less" scoped>
@import url('../../../styls/main.less');
.contain{
  font-size: 16px;
  position: fixed;
  bottom: 30px;
  right: 20px;
  .w(40);
  .h(40);
  border-radius: 50%;
  background: #cecdcd;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items:center;

}

</style>