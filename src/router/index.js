import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 引入组件
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopcart from '@/components/Shopcart/Shopcart'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'
import GoodsList from '@/components/Goods/GoodsList'
import GoodsDetail from '@/components/Goods/GoodsDetail'
import GoodsComment from '@/components/Goods/GoodsComment'

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
  }
  ]
})
