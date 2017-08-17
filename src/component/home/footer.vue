<template>  
   <footer class="footer">
     <nav class="mui-bar mui-bar-tab">
        <router-link to="/index" class="mui-tab-item mui-active" href="#tabbar">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/goodslist/list/0"  class="mui-tab-item" href="#tabbar-with-chat">
          <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
          <span class="mui-tab-label">商品购买</span>
        </router-link>
        <router-link to="/shopcar/shopcar" class="mui-tab-item" href="#tabbar-with-contact">
          <span class="mui-icon mui-icon-extra mui-icon-extra-express">
            <span class="mui-badge">{{total}}</span>
          </span>
          <span class="mui-tab-label" >购物车</span>
        </router-link>
        <router-link to="/selfcenter/self" class="mui-tab-item" href="#tabbar-with-map">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">个人中心</span>
        </router-link>
      </nav>
      <div></div>
   </footer>
</template>

<script>
import total from "../../js/model/goods.js"
    export default {
         data(){
           return{
             total:total.get()
           }
         }
}
</script>


<style lang="less">
  .footer {
    div {
      height: 50px;
    }
  }
</style>