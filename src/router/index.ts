import { createRouter, createWebHistory } from 'vue-router'
import { RouteName } from './route-name.enum'

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
          path: 'team/:id',
          component: () => import('@/pages/TeamDetailPage.vue'),
          name: 'team.detail'
        },
        {
          path: 'add-user',
          component: () => import('@/pages/AddUser.vue'),
          name: RouteName.AddUser
        },
        {
          path: 'edit-user',
          component: () => import('@/pages/EditUser.vue'),
          name: RouteName.EditUser
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
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/pages/LoginPage.vue'),
      name: RouteName.Login,
      meta: { public: true }
    },
    {
      path: '/reset-password',
      component: () => import('@/pages/ResetPassPage.vue'),
      name: RouteName.ResetPassword
    },
    {
      path: '/forgot-password',
      component: () => import('@/pages/ForgotPassword.vue'),
      name: RouteName.ForgotPassword,
      meta: { public: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.meta.public && !localStorage.getItem('user')) {
    next({ name: RouteName.Login })
  } else {
    next()
  }
})

export default router
