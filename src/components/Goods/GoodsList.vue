<template>
    <div>
        <nav-bar title="商品展示"></nav-bar>
        <mt-loadmore :auto-fill="false" :bottom-method="loadBottom" :bottom-all-loaded="isAllLoaded" ref="loadmore">
            <ul>
                <li v-for="goods in goodsList" :key="goods.id">
                    <router-link :to="{name: 'goods.detail', params: {id: goods.id}}">
                        <img :src="goods.img_url" />
                        <div class="title">
                            {{goods.title | convertStr(24)}}
                        </div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{goods.sell_price}}</span>
                                <s>￥{{goods.market_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">热卖中</div>
                                <div class="count">剩{{goods.stock_quantity}}</div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </mt-loadmore>
    </div>
</template>
<script>
// 网络图片 img src 随便用
// 本地静态资源图片 告知webpack 帮助移动到未来的dist目录
// import ImgSrc from '../xxx.jpg'
// <img :src="ImgSrc"/>
export default {
    name: 'goods-list',
    data() {
        return {
            goodsList: [],
            page: 1,
            isAllLoaded: false // 全部数据是否加载完毕
        }
    },
    created() {
        this.page = this.$route.query.id
        this.loadByPage()
    },
    methods: {
        loadByPage() {
            this.$axios.get(`getgoods?pageindex=${this.page}`).then(res => {
                if (parseInt(this.page) === 1) {
                    this.goodsList = res.data.message
                    this.page ++
                }
            }).catch(err => {
                console.log('商品列表获取失败', err)
            })
        },
        concatByPage() {
            this.$axios.get('getgoods?pageindex=' + this.page).then(res => {
                // 判断是否有数据
                if (res.data.message.length === 0) {
                    this.$toast('没有更多数据了！')
                    // loadMore的禁止函数调用的属性控制
                    this.isAllLoaded = true
                }
                this.goodsList = this.goodsList.concat(res.data.message)
                // 通知元素重新定位
                this.$refs.loadmore.onBottomLoaded()
                this.page ++
            }).catch(err => {
                console.log('商品列表获取失败', err)
            })
        },
        // auto-fill 自动帮助发请求填充满父元素
        // 子元素，向上移动，移动到底边接近于父容器（可视区域+卷入的高度scollTop=数据总体长度 + 1 = loadmore）底边平行的时候，再上拉才进入检测
        // 固定父容器高度，不让其被子元素无限撑大
        loadBottom() {
            this.concatByPage()
        }
    }
}
</script>
<style scoped>
ul {
    overflow: hidden;
}
li {
    width: 50%;
    padding: 5px;
    display: inline-block;
    box-sizing: border-box;
}
li > a:not(.mui-btn) {
    margin: 0;
    padding: 0;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;
}
li > a:not(.mui-btn) img {
    width: 150px;
    
}
.sell > span {
    float: left;
    color: red;
    text-align: left;
}
.detail > .hot {
    float: left;
    text-align: left;
    font-size: 15px;
}
.detail > .count {
    float: right;
    text-align: right;
    font-size: 15px;
}
/**撑开，去处浮动没有的高度**/
.detail {
    overflow: hidden;
}
.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}
img {
    height: 150px;
}
</style>