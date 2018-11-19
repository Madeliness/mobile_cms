<template>
    <div>
       <div class="photo-bottom">
           <ul>
               <li class="photo-comment">
                   <div>
                       <span>1</span>
                       <span>
                           <a>1</a>
                       </span>
                   </div>
               </li>
               <li class="txt-comment">
                   <textarea v-model="newComment"></textarea>
               </li>
               <li>
                   <mt-button size="large" type="primary" @click="sendMsg">发表评论</mt-button>
               </li>
               <li class="photo-comment">
                   <div>
                       <span>2</span>
                       <span>2</span>
                   </div>
                </li>
           </ul>
           <ul class="comment-list">
               <li v-for="(msg, i) in msgs" :key="i">
                {{msg.user_name}}：{{msg.content}} <span>{{msg.add_time | relativeTime}}</span>
               </li>
           </ul>
           <mt-button type="danger" size="large" plain @click="loadMore(page)">加载更多</mt-button>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'comment',
    data() {
        return {
            info: {},
            msgs: [],
            page: 1,
            newComment: ''
        }
    },
    props: ['cid'], // 评论所需id
    created() {
        // 判断是否有页码，默认页码为1
        this.page = this.$route.query.page || '1'
        this.loadMore()
    },
    methods: {
        handleClose() {},
        // 该函数传参，表示页面点击按钮，追加数据；否则就是赋值，一般是针对第一次或者刷新第n页数据的时候
        loadMore(page) {
            this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`).then(res => {
                if (res.data.message.length === 0) {
                    this.$toast('没有数据了！')
                }
                if (page) {
                    this.msgs = this.msgs.concat(res.data.message)
                } else {
                    this.msgs = res.data.message
                }
                this.page ++
            }).catch(err => {
                console.log('评论获取失败', err)
            })
        },
        sendMsg() {
            // this.newComment
            if (this.newComment.trim() === '') {
                return this.$toast('评论信息不能为空!')
            }
            this.$axios.post(`postcomment/${this.cid}`, `content=${this.newComment}`).then(res => {
                this.newComment = ''
                this.page = 1
                this.loadMore()
            }).catch(err => {
                console.log('发表评论失败！', err)
            })
        }
    }
}
</script>
<style scoped>
.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    margin-bottom: 5px;
}
.photo-comment > div span:nth-child(2) {
    float: right;
}
.txt-comment {
    padding: 5 5;
}
.txt-comment textarea {
    width: 100%;
    margin-bottom: 5px;
}
.txt-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
}
</style>
