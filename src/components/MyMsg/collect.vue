<template>
  <div id="collect">
      <div class="header">
          <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i>
          <span>我的收藏</span>
          <i class="fa fa-home" aria-hidden="true" @click="goHome"></i>
      </div>
   
      <div class="list">
        <ul>
          <li v-for="(item,index) in mygoodslist" :key="index">
            <img :src="'https://images.weserv.nl/?url='+item.pic" alt="" />
          </li>
        </ul>
      </div>
     

      <!-- <div class="goodsContent">
        <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
        <p>暂无收藏信息</p>
      </div> -->

      <div class="bottom">
          <p>丽子客服: 123456768</p>
          <p>@2018 丽子美妆 lizi.com</p>
      </div>
      
  </div>   
</template>

<script>
import Vue from 'vue';
export default {
  name: 'Collect',
  components:{},
  data(){
    return{
      mygoodslist:[]
    }
  },
  methods:{
       back(){
        this.$router.go(-1)
      },
      goHome(){
        this.$router.push('/home/HomeBody')
      },
      getMygoods(){
        var storage = window.localStorage;
        this.mygoodslist = [JSON.parse(storage.getItem("mygoods"))];
      console.log(this.mygoodslist)

      }
    },
    created(){
      this.getMygoods();
    }
}
</script>

<style lang="less" scoped>
@import url('../../styls/main.less');
#mylizi{
  background: #fff;
}
.header{
  width: 100%;
  .h(44);
  .lh(44);
  color:#fff;
  background: #ff666b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i{
      .fs(22);
      display: block;
      .w(44);
      .h(44);
      .lh(44);
      text-align: center;
  }
  span{
      .fs(16);
  }
}

.goodsContent{
  .h(400);
  text-align:center;
  background: #fff;
  i{
    .margin(50,0,0,0);
    .fs(100);
    color: #9a9a9a;
  }
  p{
    .margin(20,0,0,0);
    .fs(14);
    color:#9a9a9a;
  }
}
.bottom{  
  .h(118);
  background: #f5f5f5;
  .padding(20,0,0,0);
  p{ 
    .h(24);
    color: #999;
    .fs(12);
    text-align: center;
  }
}

</style>
