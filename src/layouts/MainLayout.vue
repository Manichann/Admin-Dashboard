<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './NavbarLayout.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import { RouterView } from 'vue-router'

const menus = ref<{ to: string; label: string }[]>([
  { to: 'dashboard', name: 'Dashboard', icon: 'ri-home-4-line' },
  { to: 'bookmarks', name: 'Bookmarks', icon: 'ri-bookmark-line' },
  { to: 'revenue', name: 'Revenue', icon: 'ri-line-chart-line' },
  { to: 'expenses', name: 'Expenses', icon: 'ri-line-chart-line' },
  { to: 'team', name: 'Team', icon: 'ri-group-line' },
  { to: 'messages', name: 'Messages', icon: 'ri-question-answer-line' },
  { to: 'calendar', name: 'Calendar', icon: 'ri-calendar-line' },
  { to: 'setting', name: 'Setting', icon: 'ri-settings-5-line' }
])
</script>

<template>
  <div class="flex">
    <div>
      <SidebarComponent :menus="menus" />
    </div>
    <div class="w-full">
      <Navbar />
      <div class="p-6 flex justify-center items-center w-full"><RouterView /></div>
    </div>
  </div>
</template>
