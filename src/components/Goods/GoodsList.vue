<template>
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange">
    <ul>
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>
<script>
  export default {
      name: 'goods-list',
    data() {
      return {
        topStatus: '',
        // ...
        list: [1, 2, 3]
      };
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
        console.log(status)
      },
      // ...
      loadTop() {
          console.log(1)
            this.$refs.loadmore.onTopLoaded()
      },
      loadBottom() {
          console.log(2)
          this.$refs.loadmore.onBottomLoaded()
      }
      // onTopLoaded() {}
    },
    // ...
  };
</script>
<style scoped>
li > a:not(.mui-btn) {
    margin: 0;
    padding: 0;
    boder: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;
}
li > a:not(.mui-btn) img {
    width: 100%;
}
.sell > span {
    float: left;
    color: red;
    text-align: left;
}
.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}
.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}
/**撑开，去处浮动没有的高度**/
.detail {
    overflow: hidden;
}
.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2)
}
img {
    height: 200px;
}
</style>