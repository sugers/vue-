<template>  
    <article class="index">
        <v-swipe></v-swipe>
        <v-nav></v-nav>
    </article>
</template>

<script>
import Cnav from './nav.vue';
import Cswipe from './swipe.vue';
    export default {
        components: {
            'v-nav':Cnav,
            'v-swipe':Cswipe
        }

    }
</script>

<style >
    
</style>