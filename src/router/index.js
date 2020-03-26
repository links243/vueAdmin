import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/page/login.vue'
import Index from '@/page/index.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Index',
      path: '/index',
      component: Index
    }
  ]
})

export default router