import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shopcarNum:0,
    carMsg:[],
    uname:"",
  },
  mutations: {
    // incrementShopcar (state) {
    //   state.shopcarNum++;
    // },
    addGoodsInCar(state){
    	var storage = window.localStorage;
      let goodObj = JSON.parse(storage.getItem("good"));
      console.log(state.carMsg.length);
      if(state.carMsg.length == 0){
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
    setUname(state){
    	var storage = window.localStorage;
    	state.uname = storage.getItem("uname");
    	
    }
  }
})

export default store;