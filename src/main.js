// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//引入路由设置
import Vuex from 'vuex' // 引入状态管理框架
import store from './store/index';
import $ from 'jquery'  //引入
import zTree from 'ztree' //引入zTree小兄弟 //import store from './vuex/store'
import axios from 'axios' // 引入http管理
import ElementUI from 'element-ui'//引入elementui
import 'element-ui/lib/theme-chalk/index.css'//引入elementui
import './assets/ztree/zTreeStyle.css';
import './assets/css/foot-awesomeweb.css'//字体包
import './assets/css/style.css'//本地全局 实际开发建议用sass
Vue.config.productionTip = false

Vue.prototype.$http = axios //全局变量
Vue.prototype.$trafficHttp = 'http://192.168.2.25/vuex' //http前缀地址后端请求地址
Vue.use(ElementUI);
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
