<template>
  <div class="app-wrapper" >
    <!--<sidebar class="sidebar-container"></sidebar>-->
    <div class="main-container">
      <!--<navbar></navbar>-->
      <!--<tags-view></tags-view>-->
      <!--<app-main></app-main>-->
    </div>
  </div>
</template>
<script>
  import { Navbar, Sidebar, AppMain, TagsView } from './components'
  export default {
    name: 'layout',
    components: {Navbar, Sidebar, AppMain, TagsView},
    computed: {
      // sidebar() {
      //   return this.$store.state.app.sidebar
      // },
      // device() {
      //   return this.$store.state.app.device
      // },
      // classObj() {
      //   return {
      //     hideSidebar: !this.sidebar.opened,
      //     withoutAnimation: this.sidebar.withoutAnimation,
      //     mobile: this.device === 'mobile'
      //   }
      // }
    },
    mounted(){
      console.log(this.$store.state.auth.userName,)
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
