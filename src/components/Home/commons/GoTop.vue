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

        <transition
            leave-active-class="animated fadeOut"
            enter-active-class="animated slideInLeft">
        <span>{{shopNum}}</span>
      </transition>
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
         distance:200,
         shopNum:""
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
      let storage = window.localStorage;
      this.shopNum = storage.getItem("goods")?JSON.parse(storage.getItem("goods")).length:0;

      window.addEventListener('scroll',()=>{

      this.shopNum = storage.getItem("goods")?JSON.parse(storage.getItem("goods")).length:0;
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
      span{
        display: block;
        position: absolute;
        .top(-5);
        .right(-5);
        font-weight: bold;
        .w(25);
        .h(25);
        color:#e4393c;
        .lh(25);
        border: 1px solid #ccc;
        border-radius: 50%;
        .fs(12);
        background: #fff;
      }

    }
  }


</style>