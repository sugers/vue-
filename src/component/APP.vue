<template>  
    <main>
        <v-header></v-header>
        <router-view></router-view>
        <v-footer></v-footer>
    </main>
</template>

<script>
    import heardCom from './home/header.vue';
    import footCom from './home/footer.vue'

    export default{
        components:{
           'v-header':heardCom,
           'v-footer':footCom
        }
    }
</script>

<style >
    
</style>