<template>
    <div>
        <!--轮播图-->
        <my-swipe url="getlunbo"></my-swipe>
        <div class="grid">
            <!--九宫格-->
            <my-ul>
                <my-li v-for="(grid, i) in grids" :key="i">
                    <router-link :to="grid.router">
                        <span :class="grid.className" class="cms-com"></span>
                        <span class="cms-text">{{grid.title}}</span>
                    </router-link>
                </my-li>
            </my-ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            grids: [
                {
                    className: 'cms-news',
                    title: '新闻资讯',
                    router: {
                        name: 'news.list'
                    }
                },
                {
                    className: 'cms-pic',
                    title: '图文分享',
                    router: {
                        name: 'photo.list',
                        params: {
                            categoryId: 0
                        }
                    }
                },
                {
                    className: 'cms-goods',
                    title: '商品展示',
                    router: {
                        name: 'goods.list',
                        query: {
                            id: 1
                        }
                    }
                },
                {
                    className: 'cms-words',
                    title: '留言反馈',
                    router: {
                        name: 'news.list'
                    }
                },
                {
                    className: 'cms-info',
                    title: '搜索资讯',
                    router: {
                        name: 'news.list'
                    }
                },
                {
                    className: 'cms-link',
                    title: '联系我们',
                    router: {
                        name: 'news.list'
                    }
                },
            ]
        }
    },
    created() {
    },
    methods: {}
}
</script>
<style scoped>
.grid li a {
    height: 100%;
    text-decoration: none;
}
.grid li a, .grid li span {
    display: block;
}

.grid li span.cms-com {
    height: 50px;
    width: 50px;
    margin: 0 auto 5px;
    padding-top: 15px;
}
.cms-news {
    background: url('../../assets/images/0001.jpg') no-repeat center;
    background-size: contain;
}
.cms-pic {
    background: url('../../assets/images/0002.jpg') no-repeat center;
    background-size: contain;
}
.cms-goods {
    background: url('../../assets/images/0003.jpg') no-repeat center;
    background-size: contain;
}
.cms-words {
    background: url('../../assets/images/0004.jpg') no-repeat center;
    background-size: contain;
}
.cms-info {
    background: url('../../assets/images/0005.jpg') no-repeat center;
    background-size: contain;
}
.cms-link {
    background: url('../../assets/images/0006.jpg') no-repeat center;
    background-size: contain;
}
.cms-text {
    height: 30px;
    line-height: 30px;
    color: #26a2ff;
}
</style>
