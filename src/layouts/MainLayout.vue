<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './NavbarLayout.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import { RouterView } from 'vue-router'
import { authStore } from '@/stores/auth'

const { authState, getAuth } = authStore()

const menus = ref<
  { to?: string; name: string; icon: string; sub?: { to: string; name: string; icon: string }[] }[]
>([
  { to: 'dashboard', name: 'Dashboard', icon: 'ri-home-4-line' },
  { to: 'bookmarks', name: 'Bookmarks', icon: 'ri-bookmark-line' },
  {
    name: 'Reports',
    icon: 'ri-line-chart-line',
    sub: [
      { to: 'revenue', name: 'Revenue', icon: 'ri-line-chart-line' },
      { to: 'expenses', name: 'Expenses', icon: 'ri-line-chart-line' }
    ]
  },
  { to: 'team', name: 'Team', icon: 'ri-group-line' },
  { to: 'messages', name: 'Messages', icon: 'ri-question-answer-line' },
  { to: 'calendar', name: 'Calendar', icon: 'ri-calendar-line' },
  { to: 'setting', name: 'Setting', icon: 'ri-settings-5-line' }
])
await getAuth()
</script>

<template>
  <div class="flex">
    <div>
      <SidebarComponent :menus="menus" />
    </div>
    <div class="w-full">
      <Navbar :menus="menus" />
      <div class="flex justify-center items-center w-full h-screen">
        <RouterView />
      </div>
    </div>
  </div>
</template>
