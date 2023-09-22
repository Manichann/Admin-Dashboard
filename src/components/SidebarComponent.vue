<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'

defineProps<{
  menus: {
    to?: string
    name: string
    icon: string
    sub?: { to: string; name: string; icon: string }[]
  }[]
}>()
</script>

<template>
  <div class="drawer lg:drawer-open hidden lg:flex">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-side px-10 bg-base-200">
      <div
        class="flex flex-col items-center justify-center w-full sticky top-0 bg-base-200 z-50 pt-10"
      >
        <label for="my-drawer-2" class="font-bold text-2xl">LOGO</label>
        <div class="divider"></div>
      </div>
      <div>
        <ul class="menu min-h-full flex text-xl font-semibold gap-y-4">
          <li v-for="(menu, idx) of menus" :key="idx" tabindex="0">
            <details v-if="menu.sub && menu.sub?.length > 0" open>
              <summary>
                <i :class="`${menu.icon}`"></i><span>{{ menu.name }}</span>
              </summary>
              <ul tabindex="0" class="flex flex-col gap-y-2 pt-2">
                <li v-for="(item, idx) of menu.sub" :key="idx">
                  <RouterLink :to="{ name: item.to }" active-class="active"
                    ><i :class="`${item.icon}`"></i><span>{{ item.name }}</span></RouterLink
                  >
                </li>
              </ul>
            </details>
            <RouterLink v-else :to="{ name: menu.to }" class="flex gap-2" active-class="active"
              ><i :class="`${menu.icon}`"></i><span>{{ menu.name }}</span></RouterLink
            >
          </li>
        </ul>
      </div>
      <footer class="mt-auto sticky bottom-0 w-full bg-base-200 pb-6">
        <div class="divider"></div>
        <FooterComponent />
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
