// 静态加载
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 引入组件(比较耗时，加载资源负荷大)
// import Home from '@/components/Home/Home'
// import Member from '@/components/Member/Member'
// import Search from '@/components/Search/Search'
// import Shopcart from '@/components/Shopcart/Shopcart'
// import NewsList from '@/components/News/NewsList'
// import NewsDetail from '@/components/News/NewsDetail'
// import PhotoList from '@/components/Photo/PhotoList'
// import PhotoDetail from '@/components/Photo/PhotoDetail'
// import GoodsList from '@/components/Goods/GoodsList'
// import GoodsDetail from '@/components/Goods/GoodsDetail'
// import GoodsComment from '@/components/Goods/GoodsComment'
// 优化方案：Lazy Loading Routes（路由懒加载）
// 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
const Home = () => import('@/components/Home/Home')
const Member = () => import('@/components/Member/Member')
const Search = () => import('@/components/Search/Search')
const Shopcart = () => import('@/components/Shopcart/Shopcart')
const NewsList = () => import('@/components/News/NewsList')
const NewsDetail = () => import('@/components/News/NewsDetail')
const PhotoList = () => import('@/components/Photo/PhotoList')
const PhotoDetail = () => import('@/components/Photo/PhotoDetail')
const GoodsList = () => import('@/components/Goods/GoodsList')
const GoodsDetail = () => import('@/components/Goods/GoodsDetail')
const GoodsComment = () => import('@/components/Goods/GoodsComment')
Vue.use(Router)

export default new Router({
  routes: [{
    // 最开始重定向
    path: '/',
    redirect: {
      name: 'home'
    }
  }, {
    path: '/home',
    name: 'home',
    component: Home
  }, {
    path: '/search',
    name: 'search',
    component: Search
  }, {
    path: '/shopcart',
    name: 'shopcart',
    component: Shopcart
  }, {
    path: '/member',
    name: 'member',
    component: Member
  }, {
    path: '/news/list', // 导航列表
    name: 'news.list',
    component: NewsList
  }, {
    // 新闻详情
    name: 'news.detail',
    path: '/news/detail',
    component: NewsDetail
  }, {
    name: 'photo.list', // 图文列表
    path: '/photo/list/:categoryId',
    component: PhotoList
  }, {
    name: 'photo.detail',
    path: '/photo/detail',
    component: PhotoDetail
  }, {
    name: 'goods.list',
    path: '/goods/list',
    component: GoodsList
  }, {
    name: 'goods.detail',
    path: '/goods/detail/:id',
    component: GoodsDetail
  }, {
    name: 'photo.info',
    path: '/goods/photo/info',
    component: NewsDetail
  }, {
    name: 'goods.comment',
    path: '/goods/comment',
    component: GoodsComment
  }]
})
