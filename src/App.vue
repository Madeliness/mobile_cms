<template>
  <div>
    <mt-header title="信息管理系统"></mt-header>
    <router-view class="tmpl"></router-view>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/images/0001.jpg"> 首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/images/0002.jpg"> 会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/images/0003.jpg"> 购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/images/0005.jpg"> 查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeHash: function() {
      // nextTick在vue完成渲染任务以后的行为
      this.$nextTick(function() {
        this.$router.push({name: this.selected})
      })
    }
  }
}
</script>
<style>
</style>
