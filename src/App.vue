<template>
  <div id="app">
      <router-view name="headers"></router-view>
      <router-view/>
    </div>
</template>

<script>
  import headers from '@/components/header/headers'  /*header*/
export default {
  name: 'App',
  methods: {

  },
  mounted() {
    // this.$router.beforeEach((to, from, next) => {
    //   this.$store.commit("newPath",to.fullPath);
    //   window.document.title = to.meta.title;
    //   next()
    // });
  },
  components:{headers}
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
  margin: 0px;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
