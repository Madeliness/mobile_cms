<template>
    <div>
        <nav-bar title="商品详情"></nav-bar>
        <div class="outer-swiper">
            <div class="swiper">
                <my-swipe url="getthumimages/87"></my-swipe>
            </div>
        </div>
        <div class="product-desc">
            <ul>
                <li>
                    <span class="product-desc-span">
                        {{info.title}}
                    </span>
                </li>
                <li class="price-li">
                    市场价：<s>
                        ￥{{info.market_price}}
                    </s>
                    销售价：￥<span>
                        {{info.sell_price}}
                    </span>
                </li>
                <li class="number-li">
                    购买数量：
                    <span @click="substract">-</span>
                    <span>
                        {{pickNum}}
                    </span>
                    <span @click="add">+</span>
                </li>
                <li>
                    <mt-button type="primary">立即购买</mt-button>
                    <mt-button type="danger" @click="insertBall">加入购物车</mt-button>
                </li>
            </ul>
        </div>
        <transition name="ball" @after-enter="afterEnter">
            <div class="ball" v-if="isExist"></div>
        </transition>
        <div class="product-props">
            <ul>
                <li>商品参数</li>
                <li>商品货号：{{info.goods_no}}</li>
                <li>库存情况：{{info.stock_quantity}}件</li>
                <li>上架时间：{{info.add_time | converTime('YYYY-MM-DD')}}</li>
            </ul>
        </div>
        <div class="product-info">
            <ul>
                <li>
                    <mt-button type="primary" size="large" plain @click="showPhotoInfo">图文介绍</mt-button>
                </li>
                <li>
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import EventBus from '@/EventBus'
export default {
    name: 'goods-detail',
    data() {
        return {
            isExist: false, // 小球
            info: {},
            imgs: [],
            imgId: '',
            pickNum: 1
        }
    },
    created() {
        // 获取路由查询字符串参数id
        this.imgId = this.$route.params.id
        // 获取图文详情
        this.$axios.get(`goods/getinfo/${this.imgId}`).then(res => {
            this.info = res.data.message[0]
        }).catch(err => {
            console.log('商品详情获取失败', err)
        })
    },
    methods: {
        insertBall() {
            this.isExist = true
        },
        afterEnter() {
            this.isExist = false
            // 通知App组件添加小球数量
            EventBus.$emit('addShopcart', this.pickNum)
        },
        add() {
            if(this.info.stock_quantity <= this.pickNum) return
            this.pickNum ++
        },
        substract() {
            if (this.pickNum <= 1)  return
            this.pickNum --
        },
        // 图文介绍
        showPhotoInfo() {
            // 编程导航
            this.$router.push({
                name: 'photo.info',
                query: {
                    id: this.imgId
                }
            })
        }
    }
}
</script>
<style scoped>
.ball {
    border-radius: 50%;
    background-color: red;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 440px;
    left: 120px;
    display: inline-block;
    z-index: 999;
}
.ball-enter-active {
    animation: bounce-in 1s;
}
.ball-leave {
    /**元素进入以后，透明度0，整个动画都是0**/
    /**元素离开默认是1，所以会闪一下，设置为0**/
    opacity: 0;
}
@keyframes bounce-in {
    0% {
        transform: translate3d(0, 0, 0)
    }
    50% {
        transform: translate3d(140px, -50px, 0)
    }
    75% {
        transform: translate3d(160px, 0, 0)
    }
    100% {
        transform: translate3d(140px, 300px, 0)
    }
}
.swiper {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 8px;
    width: 95%;
    border-radius: 15px;
    overflow: hidden;
}
.outer-swiper {}
.outer-swiper, .product-desc, .product-props, .product-info {
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px;
}
.product-desc ul li, .product-props ul li, .product-info ul li {
    list-style: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 8px;
}
.product-info {
    padding-bottom: 10px;
}
.product-desc ul >:nth-child(1) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5)
}
.product-desc ul >:nth-child(1) span {
    color: blue;
    font-size: 22px;
    font-weight: bold;
}
.number-li span {
    display: inline-block;
    width: 24px;
    height: 26px;
    line-height: 24px;
    text-align: center;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 16px;
}
</style>
