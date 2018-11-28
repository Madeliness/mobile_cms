# mobile_cms

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js", // 启动webpack工具，加载的是webpack.dev.conf.js
    
    "start": "npm run dev",
    
    "e2e": "node test/e2e/runner.js", // 端对端的最终真实测试
    
    "test": "npm run e2e",
    
    "lint": "eslint --ext .js,.vue src test/e2e/specs", // 检查语法
    
    "build": "node build/build.js" /**** 通过node编译****/
    
  },
#### 父子组件内样式的心得

* 父样式对子组件无效

* 子组件只对自己有效

* 全局样式对所有的都有效

*———建议：组件负责自己的样式，全局样式用的地方都可以控制

#抽取组件的条件

1.样式是否一致

2.动态数据接口的Url是否一致（传递url）

3.对象结构是否一致

#补充db的操作

1.npm i -g json-server

2.创建db.json文件

3.在此处打开命令行窗口 json-server --watch ./db.json

4.修改shopcart.vue中的请求url

#实例化一个vue对象

* EventBus -> new Vue

  -$emit('xxx', 数据)
  
  -$on('xxx', fn(){})
  
  -$once('xxx',fn(){})
  
  -$off('xxx')
  
#路由守卫

  #*路由钩子函数*#
  
  1.全局守卫（前置）：前端的权限控制中next() next(false)
  
  2.后置路由，不常用
  
  #*路由独享*#
  
  #组件内的路由钩子函数#
  
  1.进入前，根据过来的路由做判断，让组件做不同显示
  
    *next(vm => vm.xxx = 123)
    
  2.路由更新（组件created不会被调用）
  
    *路由参数的改变触发：?id=xxx
    
  3.路由离开前（用户离开前的询问及保存）
  
#slot 给子组件传入dom的时候也可以指定别名

  *<span slot="xx">1</span>
  
  *子组件内声明 <slot name="xx"></slot>
  
#内置组件

  *kepp-alive 缓存频繁的创建和销毁的组件 =>停用与激活
  
  *transition 给元素或组件添加 过渡效果(js+css)
  
#特殊函数

  *this.$nextTick(fn) 在vue生成dom以后的dom操作行为
  
    eg: 当前this.isExist= true,立刻操作这个元素不行，而需要在$nextTick中，因为当前代码执行的时候元素还未存在
    
  *this.$set(obj, key, value) 手动通知vue数据响应式
  
  *this.refs.xxx => ref = 'xxx'
  
    元素获取的就是元素对象
    
    组件获取的就是组件对象  xxx.$el 获取dom对象
    
