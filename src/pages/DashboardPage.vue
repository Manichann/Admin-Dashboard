<script setup lang="ts">
import { authStore } from '@/stores/auth';
 
const {authState} = authStore()
</script>

<template>
  <h1>{{authState.data.username}}</h1>
</template>
