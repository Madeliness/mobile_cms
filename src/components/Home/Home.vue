<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="5000">
            <mt-swipe-item v-for="(v, i) in imgs" :key="i">
                <img :src="v.img" />
            </mt-swipe-item>
        </mt-swipe>
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
import pic01 from '@/assets/images/pic01.jpg'
import pic02 from '@/assets/images/pic02.jpg'
import pic03 from '@/assets/images/pic03.jpg'
export default {
    name: 'home',
    data() {
        return {
            imgs: [],
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
        // 接口返回图片加载失败
        // this.$axios.get('getlunbo').then(res => {
        //     console.log(res.data)
        //     this.imgs = res.data.message
        // }).catch(err => {
        //     console.log('轮播图获取异常', err)
        // })
        this.imgs = [
            { img: pic01 },
            { img: pic02 },
            { img: pic03 }
        ]
    },
    methods: {}
}
</script>
<style scoped>
.mint-swipe {
    height: 200px;
}
img {
    height: 100%;
    width: 100%;
}
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
