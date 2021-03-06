import Vue from 'vue'
import App from './App'
import router from './router'
// 配置mintUI
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
// 引入图库css
import './assets/ttf/iconfont.css'
// 引入自定义css
import './assets/css/global.css'
// 配置axios
import Axios from 'axios'
// 引入vue缩略图组件
import VuePreview from 'vue-preview'
// 定义moment全局日期过滤器
import Moment from 'moment'
// 引入全局自定义组件
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'
import Comment from '@/components/Common/Comment'
import MySwipe from '@/components/Common/MySwipe'

// 时间换算中文显示
Moment.locale('zh-cn')
// {{'xxx'|converTime('yyyy-mm-dd')}}
Vue.filter('converTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})
Vue.filter('relativeTime', function (previousTime) {
  return Moment(previousTime).fromNow()
})
// 处理字符串过长的过滤器
Vue.filter('convertStr', function (str, count) {
  return str.substring(0, count) + '...'
})
// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
Vue.component(Comment.name, Comment)
Vue.component(MySwipe.name, MySwipe)

// 配置公共url
Axios.defaults.baseURL = 'http://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 安装插件，注册全局组件及挂载属性
Vue.use(MintUI)
// 内部运行
Vue.use(VuePreview)

// 配置请求拦截器，显示loading图标
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open({
    text: '玩命加载中...'
  })
  return config
})
// 配置相应拦截器，关闭loading
Axios.interceptors.response.use(function (response) {
  // response.config 类似上面config
  MintUI.Indicator.close()
  return response
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
