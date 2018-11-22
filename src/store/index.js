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
    incrementShopcar (state) {
      state.shopcarNum++;
    },
    addGoodsInCar(state){
    	var storage = window.localStorage;
    	state.carMsg.push(storage.getItem("good"));
    	console.log(state.carMsg);
    },
    setUname(state){
    	var storage = window.localStorage;
    	state.uname = storage.getItem("uname");
    	console.log(state.uname);
    	
    }
  }
})

export default store;