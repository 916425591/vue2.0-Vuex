/*需要引入vuex的*/
import  Vue from  'vue';//主体
import  Vuex from 'vuex';//主体
import  permission from './modules/permission'
import  user from './modules/user'//比较重要的user 精彩请查看api/api
import  getters from './getters' //getters
Vue.use(Vuex);//引入全局

const  store = new Vuex.Store({
  modules:{
    permission,
    user
  },
  getters
})

export  default  stote
