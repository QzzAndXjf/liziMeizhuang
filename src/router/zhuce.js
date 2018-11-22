
  const express=require('express');
  const app=express();
  const bodyParser=require('body-parser');
  const email=require('../sendMail.js');
  const User=require('../mongo/model/user.js');

  app.use(bodyParser.urlencoded({ extended: false }));
  console.log(email);

  let check={};
  //获取验证码
   /**
 * @api {post} /zhuce/getCode/getCode
 * @apiName getCode
 * @apiGroup zhuce

 * @apiParam {String} name 邮箱地址.
 * @apiParam {String} pass 密码.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
  app.post("/getCode",(req,res)=>{
    
    let mail=req.body.name;
    console.log(mail)
    if (!mail) {return res.send('参数错误')}
    let code=parseInt(Math.random(0,1)*10000);
    check[mail]=code
    //发送邮件是异步操作
     email.sendMail(mail,code,(state)=>{
            if (state) {
                res.send('验证码错误');
            }else{
               res.send({err:0,data:code,msg:"ok"})
            }           
      })
  })

  
 // 验证码注册
 /**
 * @api {post} /zhuce/addUse/addUse
 * @apiName addUse
 * @apiGroup zhuce
 *
 * @apiParam {String} name 邮箱地址.
 * @apiParam {String} pass 密码.

 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
 app.post("/addUse",(req,res)=>{
   let {name,pass}=req.body;

   User.insertMany({name,pass})
   .then((data)=>{
  res.send({err:0,msg:'插入成功',data:null})
  })
  .catch((err)=>{

  console.log(err)
    res.send({err:-1,msg:'插入失败',data:null})
  })

 })


//查询数据库
 /**
 * @api {post} /zhuce/check/check
 * @apiName check
 * @apiGroup zhuce
 *
 * @apiParam {String} name 邮箱地址.
 * @apiParam {String} pass 密码.

 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
 app.post("/check",(req,res)=>{
   let {name,pass}=req.body;
   console.log({name,pass})
   User.find()
   .then((data)=>{
    
   return User.find({$and:[{name:{$regex:name}},{pass:{$regex:pass}}]})
  })
   .then((data)=>{
    if(data.length ==0){
        res.send({err:0,msg:'用户名未注册',data:data})
    }else if(data.length>0){
         res.send({err:0,msg:'查询成功',data:data})
        console.log(data)  
    }
       
  })
  .catch((err)=>{

  console.log(err)
    res.send({err:-1,msg:'查询失败',data:null})
  })

 })

 //查询数据库用户名
 /**
 * @api {post} /zhuce/checkName/checkName
 * @apiName checkName
 * @apiGroup zhuce
 *
 * @apiParam {String} name 邮箱地址.
 * @apiParam {String} pass 密码.

 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
 app.post('/checkName',(req,res)=>{
 
  let {name}=req.body;
  console.log(name)
       
   User.find()
  .then((data)=>{
      return User.find({name:{$regex:name}})
  })
  .then((data)=>{
        if(data.length > 0){
            res.send({err:0,msg:'查询成功',data:data})
            console.log(data)
        }else{
            res.send({err:0,msg:'用户名可使用',data:data})
        } 
  })
  .catch((err)=>{
    res.send({err:-1,msg:'查询不成功',data:null})
  })

})

module.exports = app;