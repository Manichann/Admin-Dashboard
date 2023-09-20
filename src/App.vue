<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <suspense>
        <component :is="Component" />
        <template #fallback>
          <div class="flex justify-center items-center w-screen h-screen">
            <div class="flex flex-col justify-center items-center">
              <div class="loading loading-spiner loading-lg">
                <h3>Loading...</h3>
              </div>
            </div>
          </div>
        </template>
      </suspense>
    </template>
  </router-view>
</template>
