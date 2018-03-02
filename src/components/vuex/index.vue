<template>
<el-container>
  {{msg}}<el-button type="primary"  @click="home()">跳转</el-button>
  <button class="add" @click="add()">$是否可用</button>

</el-container>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
            msg:"欢迎来到vuex"
          }
        },
        mounted(){

        },
        methods:{
          home(){
             this.$router.push("/view/home/info");
          },
          add(){
            $('.add').hide();
          }
        }
    }
</script>

<style scoped>

</style>
