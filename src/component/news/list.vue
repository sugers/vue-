<template>
 <section class="list">
 <v-title :title="title">  </v-title>
    <ul class="mui-table-view">
        <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media">
            <router-link :to="'/news/details/'+item.id">
                <img :src="item.img_url" class="mui-media-object mui-pull-left">
                <div class="mui-media-body">
                    <p class="mui-ellipsis">{{ item.title }}</p>
                    <div class="list_item">
                        <p>创建时间：{{ item.add_time |formatDate('YYYY-MM-DD')}}</p>
                        <p>点击量：{{ item.click }}</p>
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
      data() {
          return {
              list:[],
              title:"新闻咨询"
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
      },
      components: {
          'v-title':listTitle
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