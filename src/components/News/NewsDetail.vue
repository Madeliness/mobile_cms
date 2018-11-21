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
    },
    // 路由确认前，组件渲染前的守卫函数
    // 进入路由前，组件还未实例化
    beforeRouteEnter(to, from, next) {
        // ①判断from 的name为空，说明是粘贴地址栏
        // ①.① 继续判断，根据to来设置title {news.detail||photo.info}
        // ②如果from 是新闻列表 title=新闻详情
        // ③如果from商品详情 title = 图文介绍
        let title = ''
        if (from.name == null) {
            if (to.name === 'news.detail') {
                title = '新闻详情'
            } else if (to.name === 'photo.info') {
                title = '商品图文介绍'
            }
        } else if (from.name === 'news.list') {
            title = '新闻详情'
        } else if (from.name === 'goods.detail') {
            title = '商品图文介绍'
        }
        next(vm => {
            // 通过vm访问组件实例
            vm.title = title // vm就是未来组件的this
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
.news-title span:last-child {
    float: right;
}
.news-content {
    padding:  10px 5px;
}
</style>
