<template>
  <div id="zhuce">
      <div class="header">
          <i class="fa fa-arrow-left" aria-hidden="true" @click="back"></i>
          <span>注册</span>
          <i class="fa fa-home" aria-hidden="true" @click="goHome"></i>
      </div>
      <div class="msg">
          <input type="text" class="text" name="username" placeholder="输入邮箱" v-model="email">
          <div>
            <input type="text" class="password" name="password" placeholder="输入验证码" v-model="yzWord">
            <input type="button"  value="发送验证码" :class="send" @click="sendCode"/>
          </div>
          
          <input type="password" class="text" name="setpass" placeholder="请设置密码" v-model="pass">

          <p class="agree">注册即为同意《丽子美妆网络服务协议》</p>

          <button class="zhuce_btn" @click="zhuce">注&nbsp;&nbsp;册</button>   

      </div>
      <div class="bottom">
          <p>登录 注册 客户端</p>
          <p>丽子客服: 123456768</p>
          <p>@2018 丽子美妆 lizi.com</p>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import  Axios from 'axios'
Vue.prototype.$axios=Axios
import qs from 'qs';
Vue.prototype.$qs=qs

export default {
  name: 'Login',
  components:{},
  data(){
    return {
      email:'',
      yzWord:'',
      pass:'',
      code:'',
      panduan:'',
      wait:'',
      send:'send'
    }
  },
  methods:{
    back(){
      this.router.go(-1)
    },
    goHome(){
      this.$router.push('/home/HomeBody')
    },
    //发送验证码
    sendCode(){
    
      let reg = /^[\da-zA-Z][\w\-\.]*@[\da-z\-]{1,63}(\.[a-z]+)+$/;
      if(this.email =='' || !reg.test(this.email)){
            Toast({
                  message: '请输入正确的邮箱号!',
                  position:'bottom'
                });
        }else if(this.email !='' && reg.test(this.email)){
          console.log(this.email)
            this.$axios.post('./api/zhuce/getCode',qs.stringify({name:this.email}))
            .then((res)=>{
              this.code=res.data.data
              console.log(this.code)
            })
            .catch((err) =>{
                console.log(err);
              });
        }
    },
    //注册按钮
    zhuce(){
      if(this.email !=''&& this.yzWord == this.code && this.pass !='' ){
        //判断用户名是否被注册，未注册则插入数据库
        this.$axios.post('./api/zhuce/checkName',qs.stringify({name:this.email}))
              .then((res)=>{
                this.panduan = res.data.data.length

                if(this.panduan==0){

                 this.$axios.post('./api/zhuce/addUse',qs.stringify({name:this.email,pass:this.pass}))
                  .then((res)=>{
                      alert('注册成功')
                      this.$router.push('/login');
                  })
                  .catch((err) =>{
                      console.log(err);
                    });
              }else if(this.panduan>0){
                Toast({
                  message: '该用户已注册!',
                  position:'bottom'
                });
              }

            })
            .catch((err) =>{
                console.log(err);
              });

      }else if(this.email ==''|| this.yzWord == '' || this.pass =='' ){
        Toast({
            message: '请输入注册信息',
            position:'bottom'
          });
      }else{
        Toast({
            message: '注册失败!',
            position:'bottom'
          });
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../styls/main.less');
#zhuce{
    .h(667);
    background: #f5f5f5;
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
.msg{
    background: #fff;
    .h(365);
    .text{
        
        .w(335);
        .h(47);
        border: 1px solid #d8d8da;
        .margin(20,20,0,20);
        .padding(12,12,12,12);
        .fs(14);

    }
    .password{
        .w(201);
        .h(47);
        border: 1px solid #d8d8da;
        .padding(12,12,12,12);
        .fs(14);
        display: inline-block;
        .margin(20,0,0,20);
        
    }
    .send{
        display: inline-block;
        .margin(20,0,0,0);
        .w(98);
        .h(35);
        background: #ff666b;
        color: #fff;
        border: 1px solid #ff666b;
    }
    .sendWait{
        display: inline-block;
        .margin(20,0,0,0);
        .w(98);
        .h(35);
        background: #ff666b;
        color: #fff;
        border: 1px solid #ff666b;
    }
    .agree{
        .w(335);
        .fs(14);
        .margin(20,20,0,20);

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
        border:1px solid #333;
        .margin(20,20,0,20);
    }
} 
    
    .bottom{
        .margin(20,0,0,0);  
        p{

            .h(24);
            color: #999;
            .fs(12);
            text-align: center;
        }
    }

</style>
