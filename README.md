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