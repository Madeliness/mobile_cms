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
// 定义moment全局日期过滤器
import Moment from 'moment'
// 引入自定义组件
import MyUl from '@/components/Common/MyUl'
import MyLi from '@/components/Common/MyLi'
import NavBar from '@/components/Common/NavBar'
// {{'xxx'|converTime('yyyy-mm-dd')}}
Vue.filter('converTime', function (data, formatStr) {
  return Moment(data).format(formatStr)
})

// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
// 配置公共url
Axios.defaults.baseURL = 'http://www.sinya.online/api/'
Vue.prototype.$axios = Axios

// 安装插件，注册全局组件及挂载属性
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
