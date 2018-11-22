<template>
    <ul class='goodlist'  
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
       <li v-for="(item,index) in goodlist" :key="index">
           
       </li>
    </ul>
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
            goodlist:[],
            loading:false,
            current:0,
            toatl:10
        }
    },
    methods:{
        loadMore(){
            this.getData();
        },
        getData(){
            if(this.current==this.total){
                Toast({
                  message: '已经到底',
                  position:'bottom', 
                  duration: -1
                });
                return false
            }
            let toast = Toast({
              message: '数据加载...',
              iconClass: "fa fa-cog fa-spin",
              duration: -1
            });
            this.loading=true
            // this.$axios.get(`/api/v4/api/film/coming-soon`,{params:{
            //      __t:new Date().getTime(),
            //     page:this.current+1,
            //     count:7

            // }
               
            // })
            // .then((res)=>{
            //     this.movielist = this.movielist.concat(res.data.data.films)
            //     toast.close()
            //     this.loading=false
            //     this.current=res.data.data.page.current
            //     this.total=res.data.data.page.total
            //     console.log(res.data.data)
            // })
            // .catch((err)=>{
            //     this.loading=false
            //     toast.close()
            //     console.log(err)
            // })
        }
    },
    created(){
        this.getData()
    }
}   

</script>
<style lang="less" scoped>
@import url('../../../styles/main.less');
  
    
</style>