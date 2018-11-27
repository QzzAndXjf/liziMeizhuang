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
            <div class="desc">
              <p class="name">
                {{item.title}}
                <i class="fa fa-trash-o" aria-hidden="true" @click="clear(item.id)"></i>
              </p>
              <p class="price">￥{{item.price}}.0</p>
              <p class="salesCount">
                {{item.salesCount}}人已经购买 
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              </p>     
            </div> 
          </li>
        </ul>
      </div>
     

      <div class="goodsContent" v-if="show">
        <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
        <p>暂无收藏信息</p>
      </div>

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
      mygoodslist:[],
      show:true,
      newgoods:[]
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
        this.mygoodslist = JSON.parse(storage.getItem("mygoods"));
        
      
      },
      clear(id){
        var storage = window.localStorage;
        if(storage.getItem("mygoods")!=''){
        
        let goodsArr = JSON.parse(storage.getItem("mygoods"));

            for(var i=0;i<goodsArr.length;i++){
              if(goodsArr[i].id==id){
                goodsArr.splice(i,1);
                break;
              }
          }
         
         storage.setItem("mygoods",JSON.stringify(goodsArr));
        this.$store.commit('myCollect'); 
           
          console.log(goodsArr) 
          this.mygoodslist = goodsArr
          if(goodsArr.length==0){
            storage.removeItem("mygoods");
            this.mygoodslist = ''
          }

        } 

      },
      noshow(){
        var storage = window.localStorage;
        let goods = JSON.parse(storage.getItem("mygoods"));
        if(goods){
          this.show = false;
        }
      }
    },
    created(){
      this.getMygoods();
      this.noshow();
    }
}
</script>

<style lang="less" scoped>
@import url('../../styls/main.less');
#collect{
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
.list{
  ul{
      background:#fff;
    li{
      display: flex;
      .h(120);
      .padding(10,10,10,10);
      box-sizing:border-box;
      img{
        .w(80);
        .h(80);
      }
      .desc{
        .name{
          .fs(14);
          .margin(0,0,15,0);
          position:relative;
          i{
            position: absolute;
            right:0;
            bottom:-20px;
            .w(34);
            .h(34);
            .lh(34);
            .fs(20);
            text-align: center;
            background: #fff;
            border-radius:20px;

          }
        }
        .price{
          .fs(16);
          border-bottom: 1px solid #333;
        }
        .salesCount{
          .fs(14);
          color:#ccc;
          position:relative;
          i{
            position: absolute;
            right:0;
            top:-17px;
            .w(34);
            .h(34);
            .lh(34);
            text-align: center;
            background: #333;
            color: #ccc;
            border-radius:20px;

          }
        }
        
      }
      
    }
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
