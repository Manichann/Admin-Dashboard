<script setup lang="ts">
import { authStore } from '@/stores/auth';

const {authState} = authStore()
</script>
<template>
  <div class="flex gap-2">
    <a href=""
      ><img
        :src="`${authState.data.image}`"
        alt=""
        class="rounded-full object-cover w-8 h-8"
      />
    </a>
    <div class="text-base font-medium">{{ authState.data.username }}</div>
  </div>
</template>
