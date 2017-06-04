import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mail from '@/components/Mail'
import MailList from '@/components/Mail-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/mail/:hash',
      name: 'Mail',
      component: Mail
    }
    ,
    {
      path: '/mailList',
      name: 'MailList',
      component: MailList
    }
  ]
})
