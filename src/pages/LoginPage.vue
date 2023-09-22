<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import { RouterLink } from 'vue-router'
import { useForm } from 'vee-validate'
import { type LoginForm, loginForm } from '../schema/schema'
import { onMounted } from 'vue'
import { authStore } from '../stores/auth'

const { authState, login } = authStore()

onMounted(() => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user')
  }
})

const { handleSubmit, handleReset } = useForm<LoginForm>({ validationSchema: loginForm })

const onSubmit = handleSubmit((values) => {
  login(values)
  handleReset()
})
</script>

<template>
  <div class="h-screen w-screen flex flex-col items-center justify-center">
    <div class="alert alert-warning w-fit" v-if="authState.error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>Warning: Invalid username!</span>
    </div>
    <form @submit.prevent="onSubmit" class="w-[28rem] rounded-2xl shadow-xl text-center py-10">
      <h1 class="text-3xl font-extrabold">Log in</h1>
      <InputText name="username" label="username" type="text" placeholder="enter username" />
      <InputText name="password" label="password" type="password" placeholder="enter password" />
      <div class="my-5">
        <RouterLink :to="{ name: 'forgot_password' }" class="text-red-500">forgot password ?</RouterLink>
      </div>
      <button
        class="btn bg-blue-500 text-white"
        type="submit"
        :disabled="authState.isLoading && !authState.data"
      >
        submit
      </button>
    </form>
  </div>
</template>
