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
