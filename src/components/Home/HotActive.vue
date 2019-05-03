<template>
    <div>
        <div class="partbd">
            <div id="hot_list">
                <ul class="hot_list"

                  infinite-scroll-distance="100"
                >
                    <li v-for="(item,index) in hotActiveList" :key="index">
                        <a>
                            <img :src="'https://images.weserv.nl/?url='+item.picSmall">
                            <h2>{{item.productTitle}}</h2>
                            <p class="info">{{item.recommend}}</p>
                            <div class="price">
                                <span class="now">￥<em>{{item.proPrice}}</em></span>
                                <span class="old">￥158</span> <span>已售出：{{item.salesCount}}</span>
                                <span class="button" @click="addCar(item)">加入购物车</span>
                            </div>
                        </a>
                        <div class ="xianshi"></div>
                    </li>
                </ul>
                <p :class="daodi">{{dataEnd}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "Vue"
    import { Toast } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';

    Vue.use(InfiniteScroll);

	export default{
	name:'HotActive',
	components:{},
    data(){
    	return {
            hotActiveList:[],
            page:0,
            dataEnd:"",
            daodi:""
        }

    },
    methods:{

        addCar(item){
            var storage = window.localStorage;
            let goodObj = Object.assign(item,{num:1})
            let uname = storage.getItem("uname");
            if(uname){
                 storage.setItem("good",JSON.stringify(goodObj));
                // this.$store.commit('incrementShopcar');
                this.$store.commit('addGoodsInCar');
            }else{
                alert('请先登录');
            }

        },
       loadMore(){
        this.page = this.page+5;
        // console.log(this.page)
        let toast = Toast({
          message: '数据加载ing',
          iconClass: 'fa fa-cog fa-spin',
          duration:-1
        });

        this.$axios.get('/qzz/newIndex/recItems?max=10&url=%2FnewIndex%2FrecItems&id=&type=HOT&offset='+this.page,{})
        .then((res)=>{
           this.hotActiveList = this.hotActiveList.concat(res.data.model);
           if(res.data.model.length == 0){
            this.dataEnd = "到底啦~";
            this.daodi = "showEnd";
           }
           // console.log(res.data.model);
           toast.close();
        })
        .catch((err)=>{
            toast.close();
            console.log(err)
        })
       },

       getHotActiveData(){
        let toast = Toast({
          message: '数据加载ing',
          iconClass: 'fa fa-cog fa-spin',
          duration:-1
        });

        this.$axios.get('/qzz/newIndex/recItems?max=10&url=%2FnewIndex%2FrecItems&id=&type=HOT&offset='+this.page,{})
        .then((res)=>{
           this.hotActiveList = res.data.model;
           console.log(res.data.model);
           toast.close();
        })
        .catch((err)=>{
            toast.close();
            console.log(err)
        })

       }
   },

    created(){
        this.getHotActiveData();
    }


}

</script>

<style lang="less" scoped>
@import url('../../styls/main.less');

#hot_list{

    .showEnd{
        .fs(20);
        .h(50);
        .lh(50);
        text-align:center;
        color:#999;
    }
            ul{
                background-color: #fff;
                li{
                    .minh(383);
                    .padding(5,0,10,0);
                    border-top: solid 1px #f0f0f0;
                    position: relative;
                    a{
                        display: block;color: #222;
                        .padding(0,10,0,10);
                        margin-bottom: 15px;
                        position: relative;
                        h2{
                                font-weight: 700;
                                .fs(16);
                                .lh(23);
                                .h(23);
                                margin: 5px 0;
                                overflow: hidden;
                        }
                        img{
                            .w(250);
                            .h(250);
                        }
                        p{
                            color: #bbb;
                            .fs(14);
                            text-align:center;
                        }
                        div.price{
                            color: #bbb;
                            .fs(16);
                            .now{
                                color: #f66;
                                .fs(20);
                                font-weight: 700;
                            }
                            .old{
                                text-decoration:line-through;

                            }
                            .button{
                                color: #fff;
                                border-radius: 20px;
                                background: #ff666b;
                                display: inline-block;
                                padding: 7px 12px;
                                box-shadow: 0 2px 8px 0 #ff666b;
                                margin-left: 10px;
                            }

                        }
                        .xianshi{
                            background: url(https://s02.lizi.com/images/wap/icon_xianshi.png) no-repeat;
                            background-size: contain;
                            width: 38px;
                            height: 38px;
                            position: absolute;
                            top: 208px;
                            left: 15px;
                        }
                    }
                }
            }
        }

</style>
