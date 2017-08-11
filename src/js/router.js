//对外到处一个路由实例
import VueRouter from 'vue-router';
import component from '../component/index.vue'
export default new VueRouter({
       routes:[
           {path:'/',redirect:'/index'},
           {path:'/index',component:component},
         
       ]
})