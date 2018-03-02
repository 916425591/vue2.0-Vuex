import Vue from 'vue'
import Router   from 'vue-router'
import header  from '@/components/header/headers'  /*header*/
import vueIndex from '@/components/vuex/index'  /*vuex*/
import info from '@/components/view/home/info'  /*home*/
import housers from '@/components/view/home/housers/housers'  /*表格*/
import hosersCode from '@/components/view/home/housers/hosersCode'  /*zTree*/
import notes from '@/components/view/home/housers/notes'  /*笔记*/
import landing from '@/components/landing'  /*home*/
Vue.use(Router)

export default new Router({
  routes: [
    {//默认页面
      path: '/view/home/info',
      name: 'info',
      components: {
        default: info,
        headers: header
      },
      children:[
        {
          path: '/',
          name: 'housers',
          components: {
            default: housers,
            headers: header
          }
        },
        {
          path: '/view/home/housers/hosersCode',
          name: 'hosersCode',
          components: {
            default: hosersCode,
            headers: header
          }
        },
        {
          path: '/view/home/housers/notes',
          name: 'notes',
          components: {
            default: notes,
            headers: header
          }
        },
      ]
    },
    {
      path: '/vuex/index',
      name: 'vueIndex',
      components: {
        default: vueIndex,
        headers: header
      }
    },
    {
      path: '/',
      name: 'landing',
      component: landing
    }
  ]
})
