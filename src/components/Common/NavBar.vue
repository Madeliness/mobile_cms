<template>
    <div class="cms-s-header">
        <h1 @click="goback">&lt;</h1>
        <h1 class="page-title">
            {{title}}
        </h1>
    </div>
</template>
<script>
export default {
   name: 'nav-bar',
   props: ['title'],
   methods: {
       goback() {
           this.$router.go(-1)
       }
   }
}
</script>
<style scoped>
h1 {
    display: inline-block;
    font-size: 1.5em;
    margin: 10px auto;
}
.cms-s-header {
    background: #f7f7f7;
}
.page-title {
    margin-left: 25%;
}
</style>
