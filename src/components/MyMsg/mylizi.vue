<template>
  <div id="mylizi">
      <div class="header">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <span>我的丽子</span>
          <i class="fa fa-home" aria-hidden="true"></i>
      </div>
      <div class="bg">
        <div class="yue">
          <span>余额</span>
          <span>￥0.00</span>
        </div>

        <div class="touxiang">
          <div class="pic">
            <img src="../../assets/face.png" height="80" width="80" alt="" />
            <span>普通</span>
          </div>
          <p>账户</p>
          <span>0/298</span>  
        </div>
  
        <div class="lizibi">
          <span>丽子币</span>
          <span>0.00</span>
        </div>
      </div>
      
  </div>   
</template>

<script>

export default {
  name: 'Mylizi',
  components:{}
}
</script>

<style lang="less" scoped>
@import url('../../styls/main.less');
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
  display: flex;
  .h(160);
  background: url(../../assets/logo2.png) no-repeat center rgba(51,51,51,.36);
}
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img{
    vertical-align: middle;
  }
  .pic{
    .margin(20,0,0,0);
    span{
      color: red;
      position: absolute;
      right:300;
      top:0;
    }
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


</style>
