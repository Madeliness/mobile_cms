<template>
    <div>
        <nav-bar title="购物车"></nav-bar>
        <div class="pay-detail">
            <ul>
                <li class="p-list" v-for="(goods, i) in shopcart" :key="goods.id">
                    <mt-switch v-model="goods.isSelected"></mt-switch>
                    <img :src="goods.thumb_path"/>
                    <div class="pay-calc">
                        <p>商品标题：{{goods.title}}</p>
                        <div class="calc">
                            <span>￥{{goods.sell_price}}</span>
                            <span @click="substract(goods)">-</span>
                            <span>{{goods.cou}}</span>
                            <span @click="add(goods)">+</span>
                            <a @click="del(i)" href="javascript:;">删除</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="show-price">
            <div class="show-1">
                <p>总计（不含运费）：</p>
                <span>已经选择商品{{payment.count}}件，总价￥{{payment.price}}元</span>
            </div>
            <div class="show-2">
                <mt-button type="danger" size="small">去结算</mt-button>
            </div>
        </div>
    </div>
</template>
<script>
import GoodsTools from '@/GoodsTools'
export default {
    name: 'shopcart',
    data() {
        return {
            shopcart: []
        }
    },
    beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        this.$messagebox({
            title:'提示',
            message: '亲，真的要离开吗？',
            showCancelButton: true,
            confirmButtonText:"确定",
            cancelButtonText:"取消"
        }).then(action => {
            if (action === 'confirm') {
                let obj = {}
                this.shopcart.forEach(goods => {
                    obj[goods.id] = goods.cou
                })
                GoodsTools.saveGoods(obj)
                next()
            }
        })
    },
    created() {
        let goodsList = GoodsTools.getGoodsList()
        let ids = Object.keys(goodsList).join(',')
        // 请求本地接口json-server
        // this.$axios.get('http://localhost:3000/getshopcarlist')
        this.$axios.get('goods/getshopcarlist/' + ids).then(res => {
            
            // 先丰富好对象的属性，一次性赋值，有效
            this.shopcart = res.data.message  
            // this.shopcart = res.data.message以后，再私自给shopcart元素加属性，无效
            // 如果一定是在数据不完整的情况下添加属性，就需要手动通知vue完成响应式 -> 双向数据绑定
            /*Object.defineProperty(this, 'shopcart', {
                set: function (resData) {
                //  遍历resData的所有属性，并未shopcart的元素，逐个添加这些属性，并设置其set
                // 遍历并监视其所有属性的set
                }
            })*/
            this.shopcart.forEach(goods => {
                //判断是否有有该商品
                if (goodsList[goods.id]) {
                    this.$set(goods, 'cou', goodsList[goods.id])
                }
                // 判断是否有该商品的操作
                this.$set(goods, 'isSelected', true)
            })
        }).catch(err => {
            console.log('购物车数据获取失败', err)
        })
    },
    computed: {
        payment() {
            let price = 0
            let count = 0;
            this.shopcart.forEach(goods => {
                if (goods.isSelected) {
                    count += goods.cou
                    price += goods.cou * goods.sell_price
                }
            })
            return {
                count, price
            }
        }
    },
    methods: {
        add(g) {
            g.cou ++
        },
        substract(g) {
            if (g.cou > 1) {
                g.cou --
            }
        },
        del(index) {
            this.$messagebox({
                title:'删除',
                message: '确定删除吗？',
                showCancelButton: true,
                confirmButtonText:"确定",
                cancelButtonText:"取消"
            }).then(action => {
                if (action === 'confirm') {
                    this.shopcart.splice(index, 1)
                }
            })
        }
    }
}
</script>
<style scoped>
.pay-detail ul {
    padding-left: 5px;
}
.pay-detail ul li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 3px;
}
.pay-detail ul li >:nth-child(1) {
    line-height: 80px;
}
.calc:nth-child(1) {
    color: red;
    font-size: 20px;
}
.calc span:not(:nth-child(1)) {
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: inline-block;
    width: 20px;
    text-align: center;
}
.calc a {
    margin-left: 20px;
}
.show-1, .show-2 {
    display: inline-block;
}
.show-1, .show-2 {
    margin-left: 30px;
}
.show-price {
    background-color: rgba(0, 0, 0, 0.2)
}
</style>