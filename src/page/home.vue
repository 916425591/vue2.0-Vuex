<template>
  <div id="home">
    hello world
    <button @click="tofirst()">点击显示普通树</button>
    <button @click="tocheckTree()">点击带复选框的普通树</button>
    <div class="content-wrapper">
      <transition name="fade" mode="out-in">
        <router-view></router-view>  
      </transition>
    </div>
  </div>
</template>



<script>
export default {
  name: 'home',
  components:{
    
  },
  data:function(){
    return{
      
    }
  },
  computed:{
      
  },
  methods:{
    tofirst(){
      this.$router.push({'path':'/first'})
    },
    tocheckTree(){
      this.$router.push({'path':'/second'})
    }
  }
}
</script>

<style>
@import '../common/css/common.css';
</style>
