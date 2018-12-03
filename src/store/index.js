import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shopcarNum:0,
    carMsg:[],
    uname:"",
    mygoods:[]
  },
  mutations: {
    // incrementShopcar (state) {
    //   state.shopcarNum++;
    // },
    addGoodsInCar(state){
    	var storage = window.localStorage;
      let goodObj = JSON.parse(storage.getItem("good"));
      console.log(state.carMsg.length);
      if(!storage.getItem("goods")){
          state.shopcarNum++;
          state.carMsg.push(goodObj);
          storage.setItem("goods",JSON.stringify(state.carMsg));
          state.carMsg = JSON.parse(storage.getItem("goods"));
      }else{
          let panduan = state.carMsg.map((item, index)=>{
              return item.id == goodObj.id?true:false;
          });
          if(panduan.indexOf(true) == -1){ //不存在返回-1
            // 不存在同样的id
            
            state.shopcarNum++;
            state.carMsg.push(goodObj);
            storage.setItem("goods",JSON.stringify(state.carMsg));
            state.carMsg = JSON.parse(storage.getItem("goods"));
            console.log(state.carMsg);
          }else{
            let idx = panduan.indexOf(true);
            let currendGood = JSON.parse(storage.getItem("goods"));
            currendGood[idx].num++;
            storage.setItem("goods",JSON.stringify(currendGood));
            state.carMsg = JSON.parse(storage.getItem("goods"));
            console.log(currendGood);
            // state.carMsg.push(goodObj);      
          }

      } 
    },
    myCollect(state){
      var storage = window.localStorage;
      let goods = JSON.parse(storage.getItem("my"));
      if(state.mygoods.length==0){
        state.mygoods.push(goods);

        storage.setItem("mygoods",JSON.stringify(state.mygoods));
        state.mygoods = JSON.parse(storage.getItem("mygoods"));
      }else{
        let panduan = state.mygoods.map((item, index)=>{
            return item.id == goods.id?true:false;
        });
        console.log(panduan)
        if(panduan.indexOf(true) == -1){ 

          state.mygoods.push(goods);

          storage.setItem("mygoods",JSON.stringify(state.mygoods));
          state.mygoods = JSON.parse(storage.getItem("mygoods"));
          console.log(state.mygoods);
        }else{
          let idx = panduan.indexOf(true);
          let currendGood = JSON.parse(storage.getItem("mygoods"));

          storage.setItem("mygoods",JSON.stringify(currendGood));
          state.mygoods = JSON.parse(storage.getItem("mygoods"));
          console.log(currendGood);
        }
      }
    
    },
    setUname(state){
    	var storage = window.localStorage;
    	state.uname = storage.getItem("uname");
    	
    }
  }
})

export default store;

 