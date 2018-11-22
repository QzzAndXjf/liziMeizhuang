import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    shopcarNum:0,
    carMsg:[]
  },
  mutations: {
    incrementShopcar (state) {
      state.shopcarNum++;
    },
    addGoodsInCar(state){
    	var storage = window.localStorage;
    	state.carMsg.push(storage.getItem("good"));
    	console.log(state.carMsg);
    }
  }
})

export default store;