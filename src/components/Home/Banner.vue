<template>
<div>
      <mt-swipe :auto="2000" class="banner">
          <mt-swipe-item v-for="(item,index) in bannerlist" :key="index" class="div">
              <img :src="'https://images.weserv.nl/?url='+item.image" alt="" class="bannerImg">
          </mt-swipe-item>
      </mt-swipe>  

    <div id="menus">
        <ul>
            <li v-for="(item,index) in menus" :key="index">
                <a :href="item">
                    <img :src="'https://images.weserv.nl/?url='+item.image" alt="">
                </a>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>

    <div class="hotActive">
        <div class="parthd"> <strong>热门活动</strong><span>POPULAR ACTIVITY</span> </div>
        <div class="partbd"> 
            <div class="active_list" id="active_list">  
                <p v-for="(item,index) in HotActive" :key="index"> 
                    <!-- <a :href="item.forwardUrl"> --> 

                    <router-link 
                      tag="a" 
                      :to="{ name: changePath(item.name), query: { itemMsg: item }}"
                      
                      >
                        <img :src="'https://images.weserv.nl/?url='+item.picUrl" height="221"> 
                    </router-link>
                        
                </p>  
                
            </div> 
        </div>

        <div class="parthd"> <strong>人气单品</strong><span>HOT PRODUCT</span> </div>
        

    <!-- <div class="loading" style="visibility: hidden;"><p>加载中...</p></div> </div> -->
    </div>

</div>
</template>

<script>
    import Vue from 'vue';
    import Axios from 'axios';
    import { Swipe, SwipeItem } from 'mint-ui';
    import HotActive from './HotActive.vue';
    
    // import { Lazyload } from 'mint-ui';

    // Vue.use(Lazyload)
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
	
	export default{
	name:'Banner',
	components:{HotActive},
    data(){
    	return {
            bannerlist:["http://img.lizi.com/lizi/user/5af28f61e4b0014dfdb84e40/c3d5de6696e1.jpg","http://img.lizi.com/lizi/user/5af28f61e4b0014dfdb84e40/22f96ce72d2bc.jpg"],
            menus:[],
            HotActive:[],
            changePath:function(name){
                if(name == "中国馆"){
                    return "china";
                }else if (name == "日本馆") {
                    return 'riben';
                }
            }
        };
    },
    methods:{

       
    	getBannerData(){
        Axios.get('/api/newIndex/index',{})
        .then((res)=>{
            console.log(res.data.model.sourceAdv.model)
            this.bannerlist = res.data.model.banners.list
            this.menus = res.data.model.menus.list
            this.HotActive = res.data.model.sourceAdv.model
        })
        .catch((err)=>{
            console.log(err)
        })
       }
        
    },
    created(){
        this.getBannerData();
    }
    
    
}	

</script>

<style lang="less" scoped>
@import url('../../styls/main.less');
.banner{
    .h(235);
    margin-top: 84px;
    .div{
       
        .bannerImg{
            .h(235);
        } 
    }
   
}

#menus{
    margin-top: 10px;
    ul{
        display: flex;
        background: #fff;
        justify-content: Space-around;
        .padding(15,0,0,0);
        li{
            .h(70);
            font-size: 12px;
            a{
                display: block;
                width: 35px;
                height: 35px;
                font-size: 12px;
                color: #666;
                background-position: center 0;
                background-repeat: no-repeat;
                background-size: 80%;
                margin: 0 auto;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

.hotActive{
    border: 5px solid #eee;
    .parthd{
        .fs(16);
        .h(32);
        .lh(32);
        .w(375);
        text-align:center;
        span{
            .fs(12);
        }
    }
    .partbd{
        .w(375);
        .active_list{
            p{
                text-align:center;
                a{
                    
                    img{
                        .w(353);
                        .h(211);
                        margin:0 auto;
                    }
                }
            }
        }

    }
}

</style>