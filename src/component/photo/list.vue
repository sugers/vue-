<template>
   <section class="imagelist">
        <div class="image">
            <div class="item"><a>全部</a></div>
            <div v-for="(v,i) in list" id="box1" class="box1" >
            <div class="box1-item">
                 <router-link :to="'/photo/list/'+v.id">{{v.title}}</router-link>
            </div>
         </div>
        </div>
    <div class="mui-card" v-for="(v,i) in imageList">
        <router-link :to="'/photo/details/' + v.id">
          <div class="mui-card-header mui-card-media" :style="getStyle(v)"></div>
        </router-link>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>{{ v.title }}</p>
            <p style="color: #333;">{{ v.zhaiyao }}</p>
          </div>
        </div>
      </div>
   </section>
</template>

<script>
    import config from '../../js/config.js';
      
    export default {
        data() {
            return {
                list:[],
                imageList:[],
            };
        },
        watch:{
            $route(){
                this.getimage(this.$route.params.id)
            }
        },
        methods:{
            getTitle() {
                let url =config.imagecategory
                this.$http.get(url).then(function(resp){
                   if(resp.body.status==0){
                        this.list=resp.body.message;
                   }
                })
            },
           getimage(id){
            let url=config.imageList+id;
            this.$http.get(url).then(function(resp){
                if(resp.body.status==0){
                    this.imageList=resp.body.message.map(function(photo,i){
                        console.log(photo)
                         photo.img_url = config.imgDomain + photo.img_url;
                        return photo;
                    })
                }
                
            })
         },
            getStyle(v) {
                return 'height:40vw; background-image:url("' + v.img_url + '")';
            }
        },
        created(){
            this.getTitle(),
            this.getimage(this.$route.params.id)
        }
    }
</script>

<style scoped lang="less">
  .image{
      .item{
          display:inline-block;
           a{
               color:#000;
           }
      }
        .box1{
        display:inline-block;
            .box1-item{
                margin:0 5px;
                a{
                     color:#000;
                }
            }
    }
  }
</style>