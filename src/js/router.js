//对外到处一个路由实例
import VueRouter from 'vue-router';
//导入自己写的组件
import component from '../component/index/index.vue'
export default new VueRouter({
       routes:[
           {path:'/',redirect:'/index'},
           {path:'/index',component:component},
         
       ]
})