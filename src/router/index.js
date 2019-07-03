import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Chat from '../components/Chat.vue'
import { isAuthorized } from './guards/is-authorized';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      beforeEnter: isAuthorized
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})