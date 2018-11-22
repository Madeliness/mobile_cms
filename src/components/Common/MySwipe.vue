<template>
    <mt-swipe :auto="0">
            <mt-swipe-item v-for="(v, i) in imgs" :key="i">
                <img :src="v.img || v.src" />
            </mt-swipe-item>
        </mt-swipe>
</template>
<script>
import pic01 from '@/assets/images/pic01.jpg'
import pic02 from '@/assets/images/pic02.jpg'
import pic03 from '@/assets/images/pic03.jpg'
export default {
    name: 'my-swipe',
    props: ['url'],
    data() {
        return {
            imgs: []
        }
    },
    created() {
        // 接口返回图片加载失败
        if (this.url === 'getlunbo') {
            this.imgs = [
                { img: pic01 },
                { img: pic02 },
                { img: pic03 }
            ]
        } else {
            this.$axios.get(this.url).then(res => {
                this.imgs = res.data.message
            }).catch(err => {
                console.log('首页或者商品详情轮播图获取异常', err)
            })
        }
    }
}
</script>
<style scoped>
.mint-swipe {
    height: 200px;
}
img {
    height: 100%;
    width: auto;
}
</style>
