<template>
   <section class="imagelist">
        <div class="image">
            <div class="item"><a>全部</a></div>
            <div v-for="(v,i) in list" id="box1" class="box1" >
            <div class="box1-item"><a>{{v.title}}</a></div>
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
            }
        },
        methods:{
            getTitle(){
                let url =config.imagecategory
                this.$http.get(url).then(function(resp){
                   if(resp.body.status==0){
                        this.list=resp.body.message;
                   }
                })
            }
        },
        created(){
            this.getTitle()
        }
    }
</script>

<style lang="less">
  .image{
      .item{
          display:inline-block;
           a{
               color:#000;
           }
      }
       overflow:scroll;
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