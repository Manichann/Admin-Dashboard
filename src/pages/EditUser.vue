<script setup lang="ts">
import InputText from '@/components/InputText.vue'
import { type EditUser, editUser } from '@/schema/edit-user'
import { useForm } from 'vee-validate'
import { authStore } from '@/stores/auth'

import { useRouter } from 'vue-router'

const router = useRouter()

const { authState, edit } = authStore()
const { handleSubmit } = useForm<EditUser>({ validationSchema: editUser })

const onSubmit = handleSubmit((values) => {
  // edit(values)
  console.log(values);
  
})
</script>

<template>
  <div class="card flex items-center justify-center">
    <form @submit.prevent="onSubmit" class="rounded-2xl shadow-xl text-center p-10">
      <h1 class="text-3xl font-extrabold">Edit user profile</h1>
      <ul class="grid grid-cols-2">
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <InputText name="username" label="username" type="text" placeholder="enter username" />
        </li>
        <li>
          <InputText name="email" label="email" type="email" placeholder="enter email" />
        </li>
        <li>
          <InputText name="role" label="role" type="text" placeholder="enter role" />
        </li>
        <li>
          <InputText
            name="password"
            label="password"
            type="password"
            placeholder="enter password"
          />
        </li>
      </ul>
      <button
        class="btn w-24 bg-blue-500 text-white mt-5 mx-5"
        type="submit"
        @click="router.push({ name: 'team' })"
      >
        update
      </button>
      <button class="btn w-24 bg-red-500 text-white mt-5 mx-5" @click="router.back()">
        cancel
      </button>
    </form>
  </div>
</template>
