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

        <div class="mui-card" v-for="(v, i) in goods" :key="i">
				<div class="mui-card-header">{{v.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<del class="one">市场价:￥{{v.market_price}}</del>
                        <p class="two">销售价:<strong>￥{{v.sell_price}}</strong></p>
                        <div>
                           <span class="three">购买数量:</span>
                        <div class="mui-numbox">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input class="mui-input-numbox" type="number" placeholder="0">
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				        </div>
                        </div>
                        <button type="button" class="mui-btn mui-btn-primary">立即购买</button>
                        <button type="button" class="mui-btn mui-btn-primary">加入购物车</button>
					</div>
				</div>
		</div>

          <div class="five">
              <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">图文介绍</button>
             <button type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined five">商品评论</button>
          </div>
      
  </section>
</template>

<script>
import config from '../../js/config.js';
 import listTitle from '../common/title.vue'
    export default{
        data(){
            return{
               list:[],
               goods:[],
               title:'商品信息'
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
        }
       
    },
     created(){
            this.getdetails(),
            this. addgoods()
        },
        components: {
          'v-title':listTitle
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
         margin-bottom:65px;
         input[type='submit'], .mui-btn-primary, .mui-btn-blue {
         position:relative;
          margin-top:20px;
      }
    }
      
   }
</style>