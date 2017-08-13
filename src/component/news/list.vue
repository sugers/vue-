<template>
 <section class="list">
    <ul class="mui-table-view">
        <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img :src="item.img_url" class="mui-media-object mui-pull-left">
                <div class="mui-media-body">
                    <p class="mui-ellipsis">{{ item.title }}</p>
                    <div class="list_item">
                        <p>创建时间：{{ item.add_time }}</p>
                        <p>点击量：{{ item.click }}</p>
                    </div>
                </div>
            </a>
        </li>
    </ul>
  </section>
</template>

<script>
import config from '../../js/config.js';
  export default {
      data() {
          return {
              list:[]
          }
      },
      methods:{
          getList(){
              let url=config.newslist
              this.$http.get(url).then(resp =>{
                   if(resp.body.status==0){
                          this.list=resp.body.message;
                      }   
              })
          }
      },
      created(){
          this.getList();
      }
  }
    
</script>

<style lang="less">
    .list {
        &_item p{
            display: inline-block;
        }
    }
</style>