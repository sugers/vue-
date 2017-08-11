//导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

//手动启用插件
Vue.use(VueRouter);
Vue.use(VueResource);
//导入自己的模块
import router from './router.js'

//导入自己的组件
import ComptApp from '../component/App.vue'


//创建一个V设实例关联视图,把根组件喧嚷到视图中
new Vue({
    el:'#app',
    render:function(c){
        return c(ComptApp)
    },
    router
});


