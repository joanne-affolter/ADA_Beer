import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/second-page',
    name: 'second-page',
    component: () => import('@/views/SecondPage.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/third-page',
    name: 'third-page',
    component: () => import('@/views/ThirdPage.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/fourth-page',
    name: 'fourth-page',
    component: () => import('@/views/FourthPage.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/fifth-page',
    name: 'fifth-page',
    component: () => import('@/views/FifthPage.vue'),
    meta: {
      layout: 'content',
    },
  },

  {
    path: '/conclusion',
    name: 'conclusion',
    component: () => import('@/views/Conclusion.vue'),
    meta: {
      layout: 'content',
    },
  },

  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
