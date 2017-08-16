<template>
    <section class="list">
        <v-title :title="title"></v-title>
        <div class="mui-card">
        <div class="mui-card-header">{{ news.title }}</div>
        <div class="mui-card-footer" >
            <span>创建时间：{{ news.add_time|formatDate('YYYY-MM-DD')}}</span>
            <span>浏览量：{{ news.click }}</span>
        </div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" v-html="news.content"></div>
        </div>
        </div>
        <v-comment :id="id">  </v-comment>

        
    </section>
</template>

<script>

  import Title from '../common/title.vue';
  import comment from '../common/comment.vue'
  import config from '../../js/config.js'

  export default {
      data() {
          return {
              news:{},
              title:"新闻咨询",
              id:this.$route.params.id
          }
      },
      methods:{
          getdetails() {
             let url=config.newsdetails+this.$route.params.id;
             this.$http.get(url).then(function(resp){
                 if(resp.body.status==0){
                     //此时message是一个数组
                     this.news=resp.body.message[0]
                 }
             })
          }
      },
      created() {
          this.getdetails();
      },
      components:{
          'v-title':Title,
          'v-comment':comment,
      }
      
  }
    
</script>

<style>
    
</style>