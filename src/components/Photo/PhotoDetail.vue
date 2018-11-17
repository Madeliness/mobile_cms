<template>
    <div class="tmpl">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p>
                {{newsDetail.title}}
            </p>
            <div>
                <span>
                    {{newsDetail.click}}次点击
                </span>
                <span></span>
                <span>
                    添加时间：{{newsDetail.add_time | converTime('YYYY-MM-DD')}}
                </span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>
<script>
export default {
    name: 'news-detail',
    data() {
        return {
            newsDetail: {}
        }
    },
    created() {
        // 获取路由查询字符串参数id
        let id = this.$route.query.id
        this.$axios.get(`getnew/${id}`).then(res => {
            this.newsDetail = res.data.message[0]
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>
<style scoped>
.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2); 
}
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}
.news-title span {
    margin-right: 30px;
}
.news-content {
    padding:  10px 5px;
}
</style>
