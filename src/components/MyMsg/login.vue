<template>
  <div id="login">
      <div class="header">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <span>登录</span>
          <i class="fa fa-home" aria-hidden="true"></i>
      </div>
      <div class="msg">
          <input v-model="user" type="text" class="text" name="username" placeholder="输入手机号/邮箱/用户名" id="username">
          <input type="password" class="text" name="password" placeholder="登录密码">
          <p class="forgot">忘记密码？</p>

          <span @click='goLogin' class="login_btn">登&nbsp;&nbsp;录</span>
          <router-link tag='a' to="/zhuce" class="zhuce_btn">注&nbsp;&nbsp;册</router-link>
            
        <p class="san">
           <span>
              第三方账号登录
          </span> 
        </p>
          <ul>
              <li><i class="fa fa-qq" aria-hidden="true"></i></li>
              <li><i class="fa fa-weibo" aria-hidden="true"></i></li>
              <li><i class="fa fa-weixin" aria-hidden="true"></i></li>
          </ul>
      </div>
      <div class="bottom">
          <p>登录 注册 客户端</p>
          <p>丽子客服: 123456768</p>
          <p>@2018 丽子美妆 lizi.com</p>
      </div>
      {{user}}
  </div>
</template>
<script>

import Vue from 'vue';
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

export default {
  name: 'Login',
  components:{},
  data(){
    return {
        user:''
    }
  },
  methods:{
    goLogin(){
        if(this.user ==''){
            Toast({
                  message: '请输入登录信息',
                  position:'bottom'
                });
        }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styls/main.less');
#login{
   .h(667);
    background: #f5f5f5;
}
.header{
        width: 100%;
        .h(44);
        color:#fff;
        background: #ff666b;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            .h(44);
            .w(44);
            .fs(22);
            .lh(44);
            display: block;
            text-align: center;
        }
        span{
            .fs(16);
        }
    }
.msg{
    background: #fff;
    input{
        .w(335);
        .h(47);
        border: 1px solid #d8d8da;
        .margin(20,20,0,20);
        .padding(12,12,12,12);
        .fs(14);

    }
    .forgot{
        .w(335);
        .lh(14);
        .margin(20,20,0,20);
        .fs(12);
        text-align:right;
        color:#ccc;
    }
    .login_btn{
        display: block;
        .w(335);
        .h(47);
        .fs(18);
        .lh(47);
        text-align: center;
        color: #fff;
        background-color: #ff666b;
        .margin(40,20,0,20);
    }
    .zhuce_btn{
        display: block;
        .w(335);
        .h(47);
        .fs(18);
        .lh(47);
        text-align: center;
        color: #fff;
        background-color: #333;
        .margin(20,20,0,20);
    }
    .san{
        width: 100%;
        text-align:center;
        span{
            display: inline-block;
            .fs(14);
            .padding(0,10,0,10);
            margin:0 auto;
            background: #f5f5f5;
            color: #999;
        }
    }
    ul{
        .w(335);
        .margin(20,20,20,20);
        .padding(0,20,20,20);
        display: flex;
        justify-content: space-between;
        li{
            display: inline-block;
            .w(52);
            .h(52);
            .lh(52);
            text-align: center;
            border: 1px solid #ccc;
            border-radius:50%;
            i{
                display: inline-block;
                .lh(52);
                .fs(30);
               color: #ccc;
            }
        }
    }
    
}
.bottom{
    .padding(20,0,0,0);
    p{
        .h(24);
        color: #999;
        .fs(12);
        text-align: center;
    }
}

</style>
