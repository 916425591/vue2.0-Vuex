<template>
  <!--API有详解 default-active-->
  <el-menu
    mode="vertical"
    :show-timeout="200"
    :default-active="$route.path"
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409EFF"
  >
    <sidebar-item :routes="permission_routers"></sidebar-item>
  </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex'
    import  sidebarItem from './SidebarItem'
    export default {
        components:{sidebarItem},
        name: "index",
        computed:{//计算属性 最好用的属性没有之一
          ...mapGetters([

          ])
        }
    }
</script>

<style scoped>

</style>
