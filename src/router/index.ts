import { createRouter, createWebHistory } from 'vue-router'
import CovidFormVue from '@/views/CovidForm.vue'
import ConfirmCovid from '@/views/ConfirmCovid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CovidFormVue
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/confirmcovid',
      name: 'confirmcovid',
      component: ConfirmCovid
    },
  ]
})

export default router
