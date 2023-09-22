<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import { useForm } from 'vee-validate'
import { authStore } from '@/stores/auth'
import { type ForgotPasswordForm, forgotPasswordForm } from '@/schema/forgot-password'

const { authState, forgot } = authStore()

const { handleSubmit, handleReset } = useForm<ForgotPasswordForm>({
  validationSchema: forgotPasswordForm
})

const onSubmit = handleSubmit((values) => {
  forgot(values)
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
      <span>{{authState.error}}</span>
    </div>
    <form @submit.prevent="onSubmit" class="w-[28rem] rounded-2xl shadow-xl text-center py-10">
      <h1 class="text-3xl font-extrabold">forgot password</h1>
      <InputText name="email" label="email" type="email" placeholder="enter email" />
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
@/schema/login
