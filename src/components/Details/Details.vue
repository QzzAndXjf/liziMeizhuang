<template>
	<div id="details">
         <Header></Header> 
         <div id="body">
             <div class="body"> 
                <p>
                    <img :src="'https://images.weserv.nl/?url='+detailsMsg.pic">
                </p>
                <div class="product_name">
                    <span>{{detailsMsg.title}}</span>
                    <a href="javascript:;" :class="fav_btn" id="fav_btn" @click="collect"><i class="fa fa-star-o" aria-hidden="true"></i><span v-model="haha">{{haha}}</span></a>
                </div>
             </div>
             <div class="price">
                    <p>￥{{detailsMsg.price}}</p>
                    <div>
                        <span>{{detailsMsg.salesCount}}</span>人已购买
                    </div>

            </div>
            <div class="desc">
                <p>{{currentGood.desc}}</p>
            </div>
            <div class="descimg">
                <img src="../.././../static/img/details02.jpg" alt="">
            </div>

            <div class="detail_box" id="item_intro">
                <div class="hd"><i class="fa fa-info-circle" aria-hidden="true"></i><b>商品参数</b></div>
                <div class="bd">
                    <ul class="item_intro">
                        <li><em>商品名称：</em><p>{{detailsMsg.title}}</p></li>
                        <li><em>所属品牌：</em><p>{{currentGood.goodPinpai}}</p></li>
                        <li><em>产&nbsp;&nbsp;&nbsp;&nbsp;地：</em><p>广州</p></li>
                        <li><em>适用肤质：</em><p>{{currentGood.shiyong}}</p></li>
                        <li><em>生产日期：</em><p>{{currentGood.productDate}}</p></li>
                        <li><em>保质期：</em><p>{{currentGood.paozhiqi}}</p></li>
                        <li><em>包装方式：</em><p>{{currentGood.packWay}}</p></li>
                    </ul>
                </div>
            </div>

            <!-- <div class="part_box">
                <div class="tit tit_zdy"><span>商品介绍</span></div>
                <div class="part_bd">
                    <p style="text-align:center;">
                        <img v-for="(item,index) in detailsImg" :key="index" :src="item" alt="" >
                    </p>
                </div>
            </div> -->

         </div>
         <Bottom></Bottom>
         <GoTop></GoTop>
    </div>
</template>
<script>
    import Vue from 'vue';
    import Header from './Header.vue';
    import Bottom from './Bottom.vue';
    import GoTop from '../../components/Home/commons/GoTop.vue';
export default{
	name:'Details',
	components:{Header,Bottom,GoTop},
    data(){
      return {
        DetailsData:[{
            "id": "30183090",
            "desc":"粉瓶适合中性、干性和敏感肌。温和干净的卸妆水，卸妆水中的佼佼者，卸日常妆真心妥妥的毫无压力的说，个别会碰到变态防水的眼线笔，用化妆棉敷一会也能卸得掉~",
            "goodPinpai":"贝德玛",
            "shiyong":"干性肌肤,敏感肌肤,中性肌肤",
            "productDate":"详见商品包装",
            "paozhiqi":"三年",
            "packWay":"全新无盒无塑封",
            "goodDescImg":"['http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1d48507ba74a7.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/28a6b28af114e.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/3405149a758aa.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/11e9ee6c62431.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/1d48507c05a88.jpg!wh600']"
        },{
            "id": "18535",
            "desc":"奶油质地 味道好闻 防水防汗 zui大的优点就是遮瑕力强",
            "goodPinpai":"黛玛蔻",
            "shiyong":"所有肤质",
            "productDate":"详见商品包装",
            "paozhiqi":"三年",
            "packWay":"有盒无塑封",
            "goodDescImg":"['http://img.lizi.com/lizi/store/554b07acf31ef04978652554/11eb70c5f548d.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/179aa4c151df1.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/3405149a758aa.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/c3eb0a41aaaa.jpg!wh600','http://http://img.lizi.com/lizi/store/554b07acf31ef04978652554/11eb70c5af008.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/340696f40306b.jpg!wh600','http://img.lizi.com/lizi/store/554b07acf31ef04978652554/22fb74c2d70e1.jpg!wh600']"
        }

        ],
        detailsMsg:[],
        currentGood:[],
        detailsImg:[],
        fav_btn:'',
        haha:'收藏'
        
      };
    	
    },
    methods:{
        getDetails(){
            console.log("getDs")
                 
            this.detailsMsg = this.$route.query;
            this.DetailsData.forEach( (item, index)=>{console.log(this.detailsImg);
                if(item.id == this.detailsMsg.id){
                    this.currentGood = item;
                    console.log(item.goodDescImg);
                    // this.detailsImg = JSON.parse(this.currentGood.goodDescImg);
                    console.log(this.detailsImg);
                    // this.detailsImg = this.currentGood.goodDescImg;
                    console.log(this.detailsData);
                }
            })   
        },
        collect(){    
            var storage = window.localStorage;
            let uname = storage.getItem("uname");
            let goods = this.detailsMsg;
            let cunzi = storage.getItem("mygoods");
            
            console.log(this.detailsMsg)

            if(uname){
                
                this.fav_btn = "shoucang";
                this.haha = "已收藏";
                storage.setItem("mygoods",JSON.stringify(goods));
                this.$store.commit('myCollect');
                  
            }else{
                alert('请先登录');
            }
        }
        
    },
    created(){
        this.getDetails();
        
    }
    
}	

</script>
<style lang="less" scoped>
@import url('../../styls/main.less');
#details{
    .margin(44,0,0,0);
    .w(375);
    #body{
        .minh(800);
        .body{
        position: relative;
        p{
            .w(375);
            .h(200);
            background: #fff;
            z-index: 9999;
            img{
                .h(200);
                display: block;
                margin:0 auto;
            }
        }
        .product_name{
            position: absolute;
            .padding(5,0,5,0);
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 10;
            background: rgba(0,0,0,.3);
            color: #fff;
            .h(48);
            .fs(14);
            display: flex;
            >span{
                .w(305);
                height:100%;
                .padding(0,10,0,10);
            }
            a{
                flex:1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #fff;
                i{
                    .fs(22);
                }
                >span{
                    .fs(12);
                }
            }
            .shoucang{
                flex:1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: #fff;
                i{
                    color:red;
                    .fs(22);
                }
                >span{
                    .fs(12);
                    color: red;
                }
            }
        }
        
    }

    .price{
        display: flex;
        .padding(0,10,0,10);
        background: #fff;
        border-bottom: 1px solid #ccc;
        .h(46);
        .w(375);
            p{
                color: #ff666b;
                .fs(24);
                .w(225);
                .lh(46);
            }
            div{
                .fs(12);
                .lh(46);
                span{
                   color: #ff666b; 
                }
            }
        }

    .desc{
        width: 100%;
        .h(80);
        background: #fff;
        .padding(5,10,5,10);
        .margin(0,0,20,0);
        p{
            .fs(12);
            .lh(20);

            color:#999;
        }
    }
    .descimg{
        img{
            .w(375);
        }
    }
    .detail_box{
        .margin(15,0,0,0);
        .fs(12);
        .h(220);
        background: #fff;
        .hd{
            .h(40);
            .lh(40);
            .padding(0,0,0,10);
            .fs(14);
            color:#333;
            i{
               .margin(0,5,0,10); 
            }
        }
        ul{
            li{
                display: flex;
                color:#666;
                .lh(20);
                em{
                    font-style: normal;
                    .w(74);
                    box-sizing: border-box;
                    .padding(0,0,0,10);
                }
                p{
                    .w(281);
                }
            }
        }
    }



    }
}

</style>