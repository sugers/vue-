<template>  
     <section class="details">
     <v-title :title="title">  </v-title>
       <div class="mui-card">
        <div class="mui-card-header">
        <h4>{{ info.title }}</h4>
        <p>
          <span>发布时间：{{ info.add_time | formatDate('YYYY-MM-DD') }}</span>
          <span>预览量：{{ info.click }}</span>                                                                           
        </p>
      </div>
      <div class="mui-card-content">
        <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in hums" :key="item.src">
		            <img :src="item.src"/>
            </li>
		    </ul>
      </div>
      <div class="mui-card-footer" v-html='info.content'></div>
    </div>
     </section>
</template>

<script>
    import config from '../../js/config.js';
    import listTitle from '../common/title.vue'
    export default {
          data() {
        return {
            info:{},
            hums:[],
            title:"图片详情"
        }
     },
    methods:{
        getdetails(){
            console.log(this.$route.params.id)
            let url=config.imageInfo+this.$route.params.id
           this.$http.get(url).then(function(resp){
               this.info=resp.body.message[0]
           })
        },
        getdetailsImage(){
            let url=config.imageThu+this.$route.params.id
            this.$http.get(url).then(function(resp){
              if(resp.body.status==0){
                    this.hums=resp.body.message.map(function(photo,i){
                         photo.src = config.imgDomain + photo.src;
                        return photo;
                    })
              }
            })
        }
    },
    created(){
        this.getdetails(),
        this. getdetailsImage()
    },
     components: {
          'v-title':listTitle
      }
 }
</script>

<style scoped lang="less">
   .mui-card-header, .mui-card-footer {
    display: block
  }
  img{
      width:100%;
  }
</style>