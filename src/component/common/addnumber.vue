<template>
  <section>
     <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" @click="subtract">-</button>
        <input class="mui-input-numbox" type="number" v-model="value">
        <button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
    </div>
  </section>
</template>
<script>
    export default {
        data(){
            return{
                value: this.initVal || 0
            }
        },
        props:['initVal'],
        methods:{
            add(){
                this.value++
            },
            subtract(){
                this.value&&this.value--
            }
        },
        //当value值变化,监听事件传给父
        watch:{
             value() {
                this.$emit('change', this.value);
            }
        }
    }
</script>

<style lang="less">
    
</style>