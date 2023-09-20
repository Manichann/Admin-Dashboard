import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
<<<<<<< Updated upstream
      component: () => import('../layouts/MainLayout.vue')
=======
      name: 'home',
      component: () => import('@/layouts/MainLayout.vue')
>>>>>>> Stashed changes
    },
  ]
})

export default router
