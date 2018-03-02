<template>
    <el-container>
      <sidebar></sidebar>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>

<script>
  import sidebar from '@/components/modules/sidebar'  /*header*/
  export default {
    name: 'index',
    data () {
      return {
        msg: '欢迎来到vue 全家桶，我是一个单独组件'
      }
    },
    mounted () {

    },
    methods: {

    },
    components:{sidebar}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
