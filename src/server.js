
  const express=require('express');
  const app=express();
  const bodyParser=require('body-parser');
  const email=require('./sendMail.js');
  const path=require('path');
  const db=require('./mongo/mongoose.js');

  //跨域问题要加上
  app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    // console.log('拦截处理');
    // 可以用作拦截器做拦截处理
    next();//是否执行继续
  })


  //连接数据库
  app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname,'./components')));
  //路由
  const zhuceRouter = require('./router/zhuce.js');

  app.use('/zhuce',zhuceRouter);

  app.listen(8088,()=>{
    console.log('server start in port'+8088);
})
