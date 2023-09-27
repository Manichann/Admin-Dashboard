<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string
  label: string
  values?: File
}>()

const emit = defineEmits< {(e: 'change', file: File): void}>()

const { value, errorMessage } = useField<File>(() => props.name)
if (props.values) {
  value.value = props.values
}
function onInput(e: any){
    value.value = e.target.files[0]
    emit('change', value.value)
}
</script>

<template>
  <div class="flex justify-center m-5">
    <div class="flex flex-col items-start gap-2">
      <label :for="name" class="text-base">{{ label }}</label>
      <input
        @change="onInput"
        type="file"
        :id="name"
        :name="name"
        :class="{ 'input-error': errorMessage }"
        class="file-input w-72 max-w-xs"
      />
      <small class="text-red-500" v-if="errorMessage">{{ errorMessage }}</small>
    </div>
  </div>
</template>
