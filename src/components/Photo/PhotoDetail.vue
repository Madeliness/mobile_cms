<template>
    <div>
        <nav-bar title="图文详情"></nav-bar>
        <div class="photo-title">
            <p>
                {{info.title}}
            </p>
            <span>
               发起日期: {{info.add_time | converTime('YYYY-MM-DD')}}
            </span>
            <span>
                浏览:{{info.click}}
            </span>
        </div>
        <vue-preview :slides="imgs" @close="handleClose(event)" ref="preview" class="preview-img"></vue-preview>
        <div class="photo-desc">
            <p v-html="info.content"></p>
        </div>
        <!--评论组件-->
        <comment :cid="id"></comment>
    </div>
</template>
<script>
export default {
    name: 'phone-detail',
    data() {
        return {
            info: {},
            imgs: [],
            id: ''
        }
    },
    created() {
        // 获取路由查询字符串参数id
        this.id = this.$route.query.id
        // this.id = id
        // 获取图文详情
        this.$axios.get(`getimageInfo/${this.id}`).then(res => {
            this.info = res.data.message[0]
        }).catch(err => {
            console.log('图文详情获取失败', err)
        })
        // 获取缩略图
        this.$axios.get('getthumimages/' + this.id).then(res => {
            res.data.message.forEach(img => {
              img.msrc = img.src
              img.art = "ioctre2";
              img.title = "缩略图";
              img.width = 600
              img.height = 400
            })
            this.imgs = res.data.message
        }).catch(err => {
            console.log('图文缩略图获取失败', err)
        })
    },
    methods: {
        handleClose(e) {
            console.log(e)
        }
    }
}
</script>
<style scoped>
.photo-title {
    overflow: hidden;
}
.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}
.photo-title span {
    margin-right: 20px;
}
.photo-desc, .photo-title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}
.photo-desc p {
    font-size: 18px;
}
</style>
