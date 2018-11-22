<template>
  <div id="mylizi">
      <div class="header">
          <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i>
          <span>我的丽子</span>
          <i class="fa fa-home" aria-hidden="true" @click="goHome"></i>
      </div>
      <div class="bg">
        <div class="tm_bg">
          <div class="yue">
            <span>余额</span>
            <span>￥0.00</span>
          </div>

          <div class="touxiang">
            <div class="pic">
              <img src="../../assets/face.png" height="80" width="80" alt="" />
            </div>
            <p>{{this.$store.state.uname}}</p>
            <span>0/298</span>  
          </div>
    
          <div class="lizibi">
            <span>丽子币</span>
            <span>0</span>
          </div>
        </div>

      </div>

      <div> 
        <ul class="pay">
          <li>
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
              <p>待付款</p>
          </li>
          <li>
              <i class="fa fa-truck" aria-hidden="true"></i>
              <p>待发货</p>
          </li>
          <li>
              <i class="fa fa-dropbox" aria-hidden="true"></i>
              <p>待收货</p>
          </li>
        </ul>
      </div>

      <div class="mylist">
        <ul>
          <li @click="toPay">
            <!-- <a href=""> -->
              <i class="fa fa-sticky-note-o" aria-hidden="true"></i>
              <span>我的订单</span>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href=""> -->
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              <span>我的地址</span>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href=""> -->
              <i class="fa fa-money" aria-hidden="true"></i>
              <span>我的优惠券</span>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href=""> -->
              <i class="fa fa-star-o" aria-hidden="true"></i>
              <span>我的收藏</span>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href=""> -->
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              <span>我的消息</span>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href=""> -->
              <i class="fa fa-book" aria-hidden="true"></i>
              <span>常见购物问题</span>
            <!-- </a> -->
          </li>
          <li>
            <!-- <a href=""> -->
              <i class="fa fa-phone" aria-hidden="true"></i> 
              <span>联系平台</span>
            <!-- </a> -->
          </li>
        </ul>
      </div>

      <div class="quit">
        <p>退出登录</p>
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
  name: 'Mylizi',
  components:{},
  data(){
    return{}
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    goHome(){
      this.$router.push('/home/HomeBody')
    },
    toPay(){
      this.$router.push('/pay')
    }
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
.bg{
  .h(160);
  background: url(../../assets/logo2.png) no-repeat center;
  background-size: cover;
  .tm_bg{
    display: flex;
    .h(160);
    .w(375);
    background:rgba(51,51,51,.36);
    .yue{
      .w(100);
      .fs(14);
      color: #fff;
      .lh(160);
      text-align: center;
      span{
        display: block;
        .h(18);
      }
    }
    .touxiang{
      .w(275);
      .fs(14);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img{
        vertical-align: middle;
      }
      .pic{
        .margin(20,0,0,0);
      }
      p{
        color: #fff;
      }
      span{
        .padding(5,5,5,5);

        background:rgba(51,51,51,.36);
        border-radius: 10px;
        color: #fff;
      }
    }
    .lizibi{
      .w(100);
      .fs(14);
      color: #fff;
      .lh(160);
      text-align: center;
      span{
        display: block;
        .h(18);
      }
    }
  }
}

.pay{
  display: flex;
  .w(375);
  .h(87);
  .padding(20,0,0,0);
  .margin(0,0,20,0);
  li{
    .w(125);
    .h(67);
    text-align: center;
    i{
      .fs(25);
      color: #9a9a9a;
    }
    p{
      .fs(14);
      color: #333;
    }
  }
}
.mylist{
  ul{
    li{
        display:flex;
        .h(60);
        .padding(10,10,10,10);
        box-sizing: border-box;
        i{
          display:inline-block;
          .w(60);
          .h(35);
          .lh(35);
          .fs(28);
          text-align: center;
          color:#9a9a9a;
        }
        span{
          display: inline-block;
          .h(35);
          .lh(35);
          .fs(14);
          color:#333;
        }
    }
  }
}
.quit{
  .margin(10,0,0,0);
  p{
    .w(200);
    .h(40);
    .lh(40);
    border: 1px solid #9a9a9a;
    .fs(14);
    text-align: center;
    margin:0 auto;
    color: #9a9a9a;
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
