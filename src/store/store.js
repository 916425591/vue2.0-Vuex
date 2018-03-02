/*需要引入vuex的*/
import  Vue from  'vue';//主体
import  Vuex from 'vuex';//主体
import * as actions from './notes/actions' //肯定是需要引入actions
import * as getters from './notes/getters' //getters
import  mutations from './notes/mutations' //getters
Vue.use(Vuex);//引入全局

//创建state 类似初始数据
const state = {
  solidsNumber:0,//控制侧边栏的变化
  todos:[
    {
      id:1,
      text:'我是第一个',
      done:true
    },
    {
      id:2,
      text:'我是第二个',
      done:false
    },
  ],
  notes:[],//装小笔记的数组位置
  activeNote:{} //选中未选中的描述

}
//例如列表进行检查并计数
// const  getters = {
//   count:function (state) {
//     console.log(state.solidsNumber+=10)
//     return state.solidsNumber+=10
//   }
// }

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
