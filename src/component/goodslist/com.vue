<template>
  <section>
  <v-title :title="title"></v-title>
     <v-comment :id="id">  </v-comment>
  </section>
</template>

<script>
 import Title from '../common/title.vue';
import comment from '../common/comment.vue'
     export default{
         data(){
             return{
                 id:this.$route.params.id,
                 title:'商品评论'
             }
         },
         components:{
          'v-title':Title,
          'v-comment':comment,
      }
     }
</script>
<style lang="">
    
</style>