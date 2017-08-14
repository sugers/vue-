<template>
   <section>
      <!-- 评论提交-->
           <div class="mui-card">
				<div class="mui-card-header">提交评论</div>
				<div class="mui-card-content">
					<textarea v-model="content" id="textarea" rows="5" ></textarea>
				</div>
			     <button @click="submitcomment" type="button" class="mui-btn mui-btn-primary mui-btn-block">发表</button>
			</div>
            <!-- 评论列表-->
            <div class="mui-card">
				<h4>最新评论</h4>
				<div class="mui-card-content">
                <ul class="mui-table-view">
                    <li v-for='(v,i) in list' :key="i" class="mui-table-view-cell">
                        <div>
                            <span>第{{i+1}}楼</span>
                            <span>用户名:{{v.user_name}}</span>
                            <span>评论时间:{{v.add_time|formatDate('YYYY-MM-DD')}}</span>
                        </div>
                         <p>{{ v.content }}</p>
                    </li>
		     	</ul>
				</div>
			     <button ref='loadMoreBtn' @click="getlist" type="button" class="mui-btn mui-btn-primary mui-btn-block">加载更多</button>
			</div>
   </section>
</template>
<script>
    import config from '../../js/config.js';
    import { Toast } from 'mint-ui';
       export default {
           data() {
               return {
                   content:'',
                   pageIndex:1,
                   list:[]
               }
           },
        props:['id'],
        methods:{
            submitcomment(){
                let url=config.commentsubmit+this.id;
                //需要提交的内容
                let data={content:this.content};
                this.$http.post(url,data,{emulateJSON: true}).then(function(resp){
                    if(resp.body.status==0){
                        this.content='',
                        Toast({
                            message: '操作成功',
                            iconClass: 'icon icon-success'
                        });
                         this.list.unshift({
                            user_name: '不知名',
                            add_time: Date.now(),
                            content: this.content
                        });
                           this.content = '';
                    }
                })
            },
            getlist() {
                 let url = `${ config.commentlist + this.id }?pageindex=${ this.pageIndex }`;
                this.$http.get(url).then(function(resp){
                    if(resp.body.status==0 && resp.body.message.length > 0){
                        this.list.push(...resp.body.message)
                        this.pageIndex++;
                    }else {
                       console.log(this.$refs)
                        this.$refs.loadMoreBtn.disabled = true;
                    }
                })
            }
        },
         created() {
                this.getlist()
            }
     }
</script>

<style lang="less">
    h4{
        color:#000;
    }
</style>