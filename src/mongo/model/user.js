 //创建数据模型
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;
 let userSchema=new Schema({
    name:{type:String,required:true},
    pass:{type:String,required:true}
 })

 let user=mongoose.model('user',userSchema);

module.exports=user;