<template>
       <section>
        <v-title :title="title"></v-title>
         <div class="mui-card" v-for="(v, i) in intro" :key="v.id" >
				<div class="mui-card-header">{{v.title}}</div>
				<div class="mui-card-content">
					<div v-html="v.content" class="mui-card-content-inner">
					</div>
				</div>

			</div>
       </section>
</template>

<script> 
import config from '../../js/config.js';
import Title from '../common/title.vue';
      export default{
         data(){
            return{
                intro:[],
                title:'商品图文介绍'
            }  
         },
         methods:{
             goodsesc(){
                 let url=config.goodsgetdesc+this.$route.params.id;
                 this.$http.get(url).then(function(resp){
                     if(resp.body.status==0){
                         this.intro=resp.body.message
                     }
                 })
             }
         },
         created(){
             this.goodsesc()
         },
          components:{
          'v-title':Title,
      }
     }
</script>

<style lang="less">
    img{
        width:100%;
    }
</style>