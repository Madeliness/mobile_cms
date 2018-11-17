<template>
    <li>
        <slot></slot>
    </li>
</template>
<script>
export default {
    name: 'my-li',
    data() {
        return {}
    }
}
</script>
<style scoped>
li {
    position: relative;
    list-style: none;
    float: left;
    width: 33.3%;
    background-color: #f4f4f4;
    text-align: center;
    height: 100px;
}
</style>
