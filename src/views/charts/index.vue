<template>
  <div>我只是一个页面</div>
</template>

<script>
    export default {
        name: "index",
        mounted(){
          console.log(this.$store.state.auth.userName,)
        }
    }
</script>

<style scoped>

</style>
