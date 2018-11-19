<template>
    <div>
        <nav-bar title="新闻列表"></nav-bar>
        <div class="demo">
            <ul>
                <li v-for="news in newsList" :key="news.id">
                    <router-link :to="{name: 'news.detail', query: {id: news.id}}">
                        <img class="" :src="news.img_url"/>
                        <div class="content">
                            <span>
                                {{news.title}}
                            </span>
                            <div class="news-desc">
                                <p>点击数：{{news.click}}</p>
                                <p>发表时间：{{news.add_time | converTime('YYYY-MM-DD')}}</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'news-list',
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.$axios.get('getnewslist').then(res => {
            this.newsList = res.data.message
        }).catch(err => {
            console.log('新闻列表异常', err)
        })
    }
}
</script>
<style scoped>
.tmpl {
    margin-bottom: 55px;
}
.demo a {
    display: block;
    width: calc(100% - 30px);
    height: 56px;
    color: #000;
    margin: 6px 15px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 20px;
}
.demo a div.content {
    float: right;
    width: calc(100% - 62px);
}
.demo span {
    display: block;
    width: 100%;
    font-size: 14px;
    line-height: 17px;
}
.news-desc {
    float: left;
    width: 100%;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 12px;
    line-height: 21px;
}
.demo a p:nth-child(2) {
    float: right;
}
/* .line {
    margin-left: 16px;
    transform: scaleY(0.5);
    border-bottom: 1px solid #c8c7cc;
} */
</style>
