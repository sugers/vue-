<template>
   <article class="shopcart-list">

   <v-title :title='title'></v-title>
    <!-- 商品列表 -->
    <div class="goods" v-for="item in list" :key="item.id">
      <mt-switch class="switch" v-model="item.selected"></mt-switch> 
      <img class="img" :src="item.thumb_path">
      <div class="inforight">
        <h4 class="mui-ellipsis-2">{{ item.title }}</h4>
        <div class="bottom">
          <ul>
            <li>￥{{ item.sell_price }}</li>
            <li>
             <v-numbox :initval="getTotal(item.id)" @change="upTotal(item.id,$event)"></v-numbox>
            </li>
            <li>
              <a href="javascript:void(0)" @click="remove(item.id)">删除</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总价 -->
    <div class="total">
      <div class="total_val">
        <ul>
          <li>总计（不含运费）</li>
          <li>已勾选商品{{sumTotal}}件,总价:￥{{priceTotal}}元</li>
        </ul>
      </div>
      <div class="total_btn">
        <mt-button type="primary">付 款</mt-button>
      </div>
    </div>

  </article>
</template>

<script>
 import config from '../../js/config.js';
 import Cnumbox from '../common/addnumber.vue';
 import goodsStorage from '../../js/model/goods.js';
 import Title from '../common/title.vue'
    export default {
        data(){
            return{
           list:[],
           title:'结算商品'
            }
        },
        //据算属性
        computed:{
          //总数量
            sumTotal(){
              let totalArr=this.list.map(item =>item.selected ? +goodsStorage.get(item.id):0)
              return totalArr.length && totalArr.reduce((v1,v2) =>v1+v2)
            },

            //总价格
            priceTotal(){
              let priceArr=this.list.map(item =>item.selected ? +goodsStorage.get(item.id)*item.sell_price:0)
              return priceArr.length && priceArr.reduce((v1,v2) =>v1+v2)
            }
        },
        methods:{
           getshopcar(){
              let ids=goodsStorage.getId()
              //如果之前没有选择商品,就不用请求借口 
              if(!ids.length){return;}
               let url=config.shopcarlist+ids
               this.$http.get(url).then(function(resp){
                   if(resp.body.status==0){
                      this.list=resp.body.message.map(item =>{
                          item.selected=true;
                          console.log(item.selected)
                        item.thumb_path=config.imgDomain+item.thumb_path
                        return item
                      })
                   }
               })
           },
           //删除商品
           remove(id){
              //找到要删除的的商品下标,有就删除
              let index=this.list.findIndex(item => item.id==id);
              index>-1 && this.list.splice(index,1)
               goodsStorage.remove(id);
           },
           //通过ID拿到商品的选购数量
           getTotal(id){
             return goodsStorage.get(id)
           },
           //更新指定商品的购买数量
           upTotal(id,total){
              this.list[0].selected = !this.list[0].selected;
              this.list[0].selected = !this.list[0].selected;
              goodsStorage.set(id, total);
                document.querySelector('.mui-badge').innerHTML = goodsStorage.get();
           }

        },
        created(){
            this.getshopcar()
        },
      components:{
        'v-title':Title,
        'v-numbox': Cnumbox
     }
    }
</script>

<style lang="less">
  .shopcart-list {
    .goods {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      height: 102px;
      display: flex;
      padding: 5px;
      .switch {
        flex: 0 0 52px;
      }
      .img {
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
      }
      .inforight {
        margin-left: 5px;
        flex: 1;
      }
      .inforight ul {
        padding-left: 0px;
      }
      .inforight li {
        list-style: none;
        display: inline-block;
      }
      .inforight h4 {
        color: #0094ff;
        font-size: 14px;
      }
      .bottom li:first-child {
        color: red;
        margin-right: 5px;
      }
      .bottom li:last-child {
        margin-left: 5px;
      }
    }
    .total {
      height: 84px;
      background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      padding: 5px 14px;
      ul {
		    padding-left: 0px;
		    margin: 14px 0;
		    li {
		      list-style: none;
		      font-size: 14px;
		    }
		  }
		  &_val {
		  	flex: 1;
		  }
		  &_btn {
		  	flex: 0 0 60px;
	      margin: 18px 0 0 0;
		  }
    }
  }

</style>