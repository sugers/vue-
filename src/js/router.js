//对外到处一个路由实例
import VueRouter from 'vue-router';
//导入自己写的组件
import component from '../component/index/index.vue'
import CnewsList from '../component/news/list.vue';
import Cdetails from '../component/news/details.vue'

//图片导入
import Cimgdet from '../component/photo/details.vue';
import Cimglist from '../component/photo/list.vue'

//商品列表导入
import Cgoodslist from '../component/goodslist/list.vue'
import Cdoogsdetail from '../component/goodslist/details.vue'

export default new VueRouter({
       routes:[
           {path:'/',redirect:'/index'},
           {path:'/index',component:component},
           {path: '/news/list', component: CnewsList},
           {path:'/news/:details/:id',component:Cdetails},

           //配图片路由
           {path:'/photo/list/:id',component:Cimglist,name:'listName'},
           {path:'/photo/details/:id',component:Cimgdet,name:'detailsName'},

           //配商品列表数据
           {path:'/goodslist/list',component:Cgoodslist},
           {path:'/goodslist/details/:id',component:Cdoogsdetail}

       ]
})