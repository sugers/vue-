<template> 
     <section class="swipe">
      <mt-swipe :auto="2000">
        <mt-swipe-item v-for="(item, i) in list" :key="i">
            <a :href="item.url">
                <img :src="item.img" />
            </a>
        </mt-swipe-item>
      </mt-swipe>
  </section>
</template>

<script>
    export default {
        data(){
            return {
                list:[]
            };
        },
        methods:{
            setlunbo(){
                let url='http://139.199.192.48:8888/api/getlunbo';
                this.$http.get(url).then(resp =>{
                      if(resp.body.status==0){
                          this.list=resp.body.message;
                      }   
                });
            }
        },
        //组件初始完毕,数据与事件都绑定好开始调用
        created(){
            this.setlunbo();
        }
    };
</script>

<style lang="less">
   .swipe{
       height:300px;
       img{
           width:100%;
           height:100%;
       }
   }
    
</style>