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
