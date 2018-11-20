<template>
    <div>
        <nav-bar :title="title"></nav-bar>
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
            newsDetail: {},
            title: ''
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
    },
    // 路由确认前，组件渲染前的守卫函数
    beforeRouteEnter(to, from, next) {
        console.log('to', to)
        console.log('from', from)
        // ①判断from 的name为空，说明是粘贴地址栏
        // ①.① 继续判断，根据to来设置title
        // ②如果from 是新闻列表
        // ③商品详情
        next(vm => {
            // 通过vm访问组件实例
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
