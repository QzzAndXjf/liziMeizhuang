<template>
  <div id="zhuce">
      <div class="header">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <span>注册</span>
          <i class="fa fa-home" aria-hidden="true"></i>
      </div>
      <div class="msg">
          <input type="text" class="text" name="username" placeholder="输入手机号">
          <div>
              <input type="password" class="password" name="password" placeholder="输入验证码">
            <input type="button"  value="发送验证码" class="send"/>
          </div>
          
          <input type="text" class="text" name="setpass" placeholder="请设置密码">

          <p class="agree">注册即为同意《丽子美妆网络服务协议》</p>

          <a href="" class="zhuce_btn">注&nbsp;&nbsp;册</a>

            
      </div>
      <div class="bottom">
          <p>登录 注册 客户端</p>
          <p>丽子客服: 123456768</p>
          <p>@2018 丽子美妆 lizi.com</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components:{}
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
