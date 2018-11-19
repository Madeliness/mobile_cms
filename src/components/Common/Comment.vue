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
                   <textarea></textarea>
               </li>
               <li>
                   <mt-button size="large" type="primary">发表评论</mt-button>
               </li>
               <li class="photo-comment">
                   <div>
                       <span>2</span>
                       <span>2</span>
                   </div>
                </li>
           </ul>
           <ul class="comment-list">
               <li></li>
           </ul>
        </div> 
    </div>
</template>
<script>
export default {
    name: 'comment',
    data() {
        return {
            info: {},
            imgs: []
        }
    },
    created() {
        // 获取路由查询字符串参数id
        let id = this.$route.query.id
        // 获取图文详情
        this.$axios.get(`getimageInfo/${id}`).then(res => {
            this.info = res.data.message[0]
        }).catch(err => {
            console.log('图文详情获取失败', err)
        })
        // 获取缩略图
        this.$axios.get('getthumimages/' + id).then(res => {
            this.imgs = res.data.message
            this.imgs.forEach(img => {
              img.msrc = img.src
              img.width = 600
              img.height = 400
            })
        }).catch(err => {
            console.log('图文缩略图获取失败', err)
        })
    },
    methods: {
        handleClose() {}
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
