<template>
    <div class="shop_line"> 
        <div class="allShopItems"> 
            <ul>
                <li v-for="(item,index) in goodlist" :key="index">
                    <p class="hd">
                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                        <!-- <i class="fa fa-check-circle" aria-hidden="true"></i> -->
                        <span>艾斯臣旗舰店</span>
                        <i class="fa fa-commenting" aria-hidden="true"></i>
                    </p>
                    <div class="bd">
                        <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                        <img :src="'https://images.weserv.nl/?url='+item.picUrl" alt="">
                        <div>
                            <p>
                                <span>{{item.name}}</span>
                                <i class="fa fa-trash" aria-hidden="true" @click="clear(item.id)"></i>
                            </p>
                            <div class="num">
                                <p>
                                    <span>规格：</span>
                                    <span class="price">￥<em>{{item.liziPrice}}</em></span>
                                </p>
                                <div>
                                    <i class="fa fa-minus" aria-hidden="true"></i>
                                    <input type="text" :value="item.num">
                                    <i class="fa fa-plus" aria-hidden="true"></i>   
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>     

        </div> 
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
export default{
    name:'Goodlist',
    components:{},
    data(){
        return {
            goodlist:[]
        }
    },
    methods:{
        getShopcarData(){
            var storage = window.localStorage;
            let goodsArr = JSON.parse(storage.getItem("goods"));
            this.goodlist =  goodsArr;
            // console.log(this.goodlist[sss0s].id)
        },
        // changeNum(num){
        //     return num;
        // },
        clear(currentId){
        var storage = window.localStorage;
        if(storage.getItem("goods")!=''){
            let arr = JSON.parse(storage.getItem("goods"));

                for(var i=0;i<arr.length;i++){
                  if(arr[i].id==currentId){
                    arr.splice(i,1);
                    break;
                  }
              }
              console.log(arr)
             
            storage.setItem("goods",JSON.stringify(arr));
            this.$store.commit('addGoodsInCar'); 
            this.goodlist = arr;
              if(arr.length==0){
                storage.setItem("goods",'');
                this.goodlist = ''
              }

            } 

        }
    },
    created(){
        this.getShopcarData();
    }
}   

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');
.allShopItems{
    background:#fff;
          ul{
            .padding(5,5,5,5);
            box-sizing:border-box;
            li{
                box-sizing:border-box;
                border:1px solid #999;
                margin:5px auto;
                .padding(5,5,5,5);
                p.hd{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color:#666;

                    i{
                        .w(30);
                        .h(30);
                        .lh(30);
                        .fs(22);
                    }
                    i.fa-check-circle-o{
                        color:#999;
                    }
                    i.fa-commenting{
                        color: #ff666b;
                    }
                    span{
                    .padding(0,0,0,10);
                    .w(285);
                    .fs(16);
                    }
                }

                div.bd{
                    .h(100);
                    display: flex;
                    align-items: center;
                    >i{
                        .w(30);
                        .h(30);
                        .lh(30);
                        .fs(22);
                    }
                    >i.fa-check-circle-o{
                        color:#999;
                    }
                    img{
                        .w(74);
                        .h(74);
                        vertical-align: middle;
                        .margin(0,15,0,5);
                        border:1px solid #ddd;

                    }
                    >div{
                        .fs(14);
                        .w(229);
                        >p{
                            width: 100%;
                            .padding(0,5,0,5);
                            .fs(12);
                            i{
                                float: right;
                                .fs(22);
                                color: #666;
                            }

                        }
                        div.num{
                            display: flex;
                            justify-content: space-between;
                            p{
                                .margin(10,0,0,0);
                                display: flex;
                                flex-direction: column;
                                span{
                                    .fs(12);
                                }
                                span.price{
                                    color: #ff666b;
                                    em{
                                        font-style: normal;
                                        .fs(20);
                                    }
                                }
                            }
                            >div{
                                color: #333;
                                .margin(10,0,0,10);
                                .w(78);
                                .h(26); 
                                i{
                                    float: left;
                                    .w(26);
                                    .h(26); 
                                    border:1px solid #ddd;
                                    text-align: center;
                                    .lh(26);
                                    .fs(16);
                                    color: #666;
                                }
                                input{
                                    float: left;
                                    .w(26);
                                    .h(26); 
                                    border:1px solid #ddd;
                                }
                            }
                            

                        }
                    }
                }


            }
          }

        }

</style>