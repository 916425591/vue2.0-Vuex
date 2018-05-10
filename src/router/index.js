import Vue from 'vue'
import Router   from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV) //定义初始位置
Vue.use(Router)

export  const initalMap=[
  { path: '/login', component: _import('login/index'), hidden: true }
]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: initalMap
})
