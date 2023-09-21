<script setup lang="ts">
import {useField} from 'vee-validate'

const props = defineProps<{name: string; label: string; type: string; placeholder: string}>()

const {value, errorMessage} = useField(()=> props.name)
</script>

<template>
    <div class="flex justify-center m-5">
    <div class="flex flex-col items-start gap-2">
      <label :for="name" class="text-base">{{ label }}</label>
      <input
        v-model="value"
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :class="{ 'input-error': errorMessage }"
        class="input input-bordered w-72 max-w-xs"
      />
      <small class="text-red-500" v-if="errorMessage">{{ errorMessage }}</small>
    </div>
  </div>
</template>

