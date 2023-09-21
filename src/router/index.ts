import path from 'path'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('@/pages/DashboardPage.vue'),
          name: 'dashboard'
        },
        {
          path: 'bookmarks',
          component: () => import('@/pages/BookmarksPage.vue'),
          name: 'bookmarks'
        },
        {
          path: 'revenue',
          component: () => import('@/pages/RevenuePage.vue'),
          name: 'revenue'
        },
        {
          path: 'expenses',
          component: () => import('@/pages/ExpensesPage.vue'),
          name: 'expenses'
        },
        {
          path: 'team',
          component: () => import('@/pages/TeamPage.vue'),
          name: 'team'
        },
        {
          path: 'messages',
          component: () => import('@/pages/MessagesPage.vue'),
          name: 'messages'
        },
        {
          path: 'calendar',
          component: () => import('@/pages/CalendarPage.vue'),
          name: 'calendar'
        },
        {
          path: 'setting',
          component: () => import('@/pages/SettingPage.vue'),
          name: 'setting'
        },
      ]
    },
    { 
      path: '/login', 
      component: () => import('@/pages/LoginPage.vue'), 
      name: 'login' }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.name !== 'login' && !localStorage.getItem('user')) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
