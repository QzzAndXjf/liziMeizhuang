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

    
    <div id="box" v-show='show'>
      <div>
        <i class="fa fa-shopping-bag" aria-hidden="true" @click="goShopCar"></i>
      </div>
    </div>

	</div>
</template>

<script>
import router from '../../../router/index.js'
export default{
	name:'gotop',
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
      },
      goShopCar(){
          router.push({ path: '/shopcar' })
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

div#box{
    position:fixed;
    .left(10);
    .bottom(20);
    border-radius: 50%;
    opacity: 0.8;
    .w(50);
    .h(50);
    // .lh(40);
    text-align: center;
    background: #ff666b;
    div{
      .lh(36);
      i{
        .fs(26);
        color:#fff;
      }

    }
  }


</style>