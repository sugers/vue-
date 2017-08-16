<template>
   <section>
       <v-title :title="title">  </v-title>
        <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in list" :key="item.id">
                    <router-link :to="'/goodslist/details/'+ item.id">
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="mui-media-body">
                            <p class="one">{{item.title}}</p>
                            <div class="list">
                              <p class="two">￥{{item.sell_price}}</p>
                            <del class="three">￥{{item.market_price}}</del>
                            <p class="four">剩{{item.stock_quantity}}件</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>       
   </section>
</template>
  
<script>
import config from '../../js/config.js';
import listTitle from '../common/title.vue'
    export default {
        data(){
            return{
                list:[],
                title:'商品列表'
            }
        },
        methods:{
            getimglist(){
                let url=config.goodslist;
                this.$http.get(url).then(function(resp){
                    if(resp.body.status==0){
                      this.list=resp.body.message;
                    }
                })
            }
        },
        created(){
            this.getimglist()
        },
        components:{
             'v-title':listTitle
        }
    }
</script>

<style scoped lang="less">
    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
         text-align:left;
        height:100px;
        .one{
            height:30px;
            overflow-y:hidden;
            white-space:normal;
        }
        .list{
             background-color:#f0f0f0;
            .two,.three{
            display:inline-block;
        }
        .two{
            margin-top:10px;
        }
        .three{
            font-size:12px;

        }
        .four{
            text-align:right;
            font-size:12px;
        }
        }
    }
</style>