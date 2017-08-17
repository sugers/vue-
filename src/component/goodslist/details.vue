<template>
    <section class="swipe">
     <v-title :title="title">  </v-title>
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="(item, i) in list" :key="i">
                    <a :href="item.src">
                        <img :src="item.src" />
                    </a>
                </mt-swipe-item>    
        </mt-swipe>

        <div class="mui-card" v-for="(v, i) in goods" :key="v.id">
				<div class="mui-card-header">{{v.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<del class="one">市场价:￥{{v.market_price}}</del>
                        <p class="two">销售价:<strong>￥{{v.sell_price}}</strong></p>
                        <div>
                           <span class="three">购买数量:</span>
                         <v-numbox :initVal="total" @change="upTotal"></v-numbox>
                        </div>
                        <router-link :to="'/shopcar/shopcar'">
                             <button type="button" class="mui-btn mui-btn-primary">立即购买</button>
                         </router-link>
                        <button @click="shopcar" type="button" class="mui-btn mui-btn-primary" >加入购物车</button>
					</div>
				</div>
        <div class="five">
              <router-link :to="'/goodslist/intro/' + v.id">
                  <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined five">图文介绍</button> 
               </router-link>
          </div>
             <router-link :to="'/goodslist/com/' + v.id">
                 <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined five">商品评论</button>
             </router-link>
		</div>

       
        
        
  </section>
</template>

<script>
 import config from '../../js/config.js';
 import goodsStorage from '../../js/model/goods.js';
 import listTitle from '../common/title.vue';
 import numbox from '../common/addnumber.vue';
    export default{
        data(){
            return{
               list:[],
               goods:[],
               title:'商品信息',
               id:this.$route.params.id,
               total:goodsStorage.get(this.$route.params.id)
            } 
        },
        methods:{
            getdetails(){
               let url=config.goodsdetails+this.$route.params.id;
               this.$http.get(url).then(function(resp){
                   if(resp.body.status==0){
                      this.list=resp.body.message.map(function(photo,i){
                         photo.src = config.imgDomain + photo.src;
                         console.log(photo.src)
                        return photo;
                   })
               }
            })
        },
        addgoods(){
           let url=config.goodsgetinfo+this.$route.params.id;
           this.$http.get(url).then(function(resp){
               if(resp.body.status==0){
                   this.goods=resp.body.message
               }
           })
        },
        upTotal(val){
           this.total=val
        },
        shopcar(){
            goodsStorage.set(this.id, this.total);
           document.querySelector('.mui-badge').innerHTML = goodsStorage.get();
        }
       
    },
     created(){
            this.getdetails(),
            this. addgoods()
        },
        components: {
          'v-title':listTitle,
          'v-numbox': numbox
      }
    }
</script>

<style lang="less">
     .swipe{
       height:300px;
       img{
           width:100%;
           height:100%;
       }
       .one,.two{
           display:inline-block;
           font-size:12px;
       }
       .two{
           margin-left:20px;
          strong{
              font-size:20px;
          }
       }
    .five{
         margin-bottom:50px;
         input[type='submit'], .mui-btn-primary, .mui-btn-blue {
         position:relative;
          margin-top:20px;
      }
    }
    input[type='submit'], .mui-btn-primary, .mui-btn-blue{
        margin-top:20px;
    }
    .count{
        text-align:center;
        line-height:35px;
    }
      
   }
</style>