<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'

defineProps<{ menus: { to: string; name: string; icon: string }[] }>()
</script>

<template>
  <div class="drawer lg:drawer-open hidden lg:flex">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side">
      <ul class="menu p-4 w-56 min-h-full bg-base-200 text-lg flex items-center">
        <label for="my-drawer-2" class="bg-base-200 font-bold text-2xl">LOGO</label>
        <div class="divider"></div>
        <li v-for="(menu, idx) of menus" :key="idx" class="p-2 w-full">
          <router-link :to="{ name: menu.to }" active-class="active"
            ><i :class="`${menu.icon}`"></i><span>{{ menu.name }}</span></router-link
          >
        </li>
        <div class="divider"></div>
        <FooterComponent />
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
