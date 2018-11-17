<template>
    <div class="tmpl">
        <nav-bar title="图文列表"></nav-bar>
        <div class="photo-header">
            <ul>
                <li v-for="v in categorys" :key="v.id">
                    <a @click="loadImgsByCategotyId(v.id)" href="javascript:;">
                        {{v.title}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="img in photoList" :key="img.id">
                    <router-link :to="{name: 'photo.detail', query: {id: img.id}}">
                        <img v-lazy="img.img_url" />
                        <p>
                            <span>
                                {{img.title}}
                            </span>
                            <br/>
                            <span>
                                {{img.zhaiyao}}
                            </span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'photo-list',
    data() {
        return {
            categoryId: '',
            categorys: [],
            photoList: []
        }
    },
    created() {
        // 获取路由参数categoryId
        this.categoryId = this.$route.params.categoryId
        this.loadImgById(this.categoryId)
        // 获取分类信息
        this.$axios.get('getimgcategory').then(res => {
            this.categorys = res.data.message
            // 向数组categorys第一个添加元素
            this.categorys.unshift({
                id: 0,
                title: '全部'
            })
        }).catch(err => {
            console.log('分类信息获取异常', err)
        })
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        // 路由复用，但是参数改变触发，query||params
        this.loadImgById(to.params.categoryId)
        next() // 影响锚点值改变
    },
    methods: {
        loadImgsByCategotyId(categoryId) { // 点击了a标签之后调用loadImgsByCategotyId，路由改变，触发beforeRouteUpdate，最后调用了loadImgById
            this.$router.push({
                name: 'photo.list',
                params: {
                    categoryId
                }
            })
        },
        loadImgById(id) {
            // 根据当前分类id获取图片
            this.$axios
                .get(`getimages/${id}`)
                .then(res => {
                    this.photoList = res.data.message
                    // 是否有图片
                    if (this.photoList.length === 0) {
                        this.$toast({
                            message: '没有图片了',
                            iconClass: 'iconfont icon-picture'
                        })
                    }
                })
                .catch(err => {
                    console.log('图片获取异常', err)
                })
        }
    }
}
</script>
<style scoped>
.photo-header ul {
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5px;
}
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}
.photo-list ul {
    padding-left: 0px;
    margin: 0;
}
.photo-list li a {
    position: relative;
    display: block;
    border-top: 1px solid #abcd;
}
.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}
.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}
.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}
/***图片懒加载样式***/
image[lazy='loading'] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>
