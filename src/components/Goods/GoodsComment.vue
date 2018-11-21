<template>
    <div>
        <nav-bar title="商品评论"></nav-bar>
        <comment :cid="$route.query.id"/>
    </div>
</template>
<script>
export default {
    name: 'goods-comment',
    data() {
        return {}
    }
}
</script>
<style scoped>

</style>
