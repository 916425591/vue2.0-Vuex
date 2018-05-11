import Vue from 'vue'
import Router   from 'vue-router'
//const _import = require('_import' + process.env.NODE_ENV) //定义初始位置
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

import Layout from '../views/layout/Layout'

export  const initalMap=[
  { path: '/', component: _import('login/index'), hidden: true },
  {
    path: '/charts',
    component: Layout,
    name: 'charts',
    meta: {
      title: 'charts',
      icon: 'chart'
    },
    children: [
      { path: 'keyboard', component: _import('charts/index'), name: 'keyboardChart', meta: { title: 'keyboardChart', noCache: true }},
    ]
  },
  // {
  //   path: '/',
  //   name: 'index',
  //   component: resolve => require(['../views/login/index'], resolve) // 登陆
  // }
]


const router= new Router({
  mode: "history",
  routes:initalMap
});

router.beforeEach((to, from, next) => {
    next()
});

export default router
