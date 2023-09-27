<script setup lang="ts">
import { authStore } from '@/stores/auth'
import { type ProfileForm, editForm } from '@/schema/edit-profile'
import { useForm } from 'vee-validate'
import InputText from '@/components/InputText.vue'
import { onMounted, ref } from 'vue'
import InputFile from '@/components/InputFile.vue'
const { authState, edit, getUser } = authStore()

onMounted(() => {
  getUser()
})

const { handleSubmit } = useForm<ProfileForm>({
  validationSchema: editForm
})

const image = ref<File>()
function onSelectFile(e: File) {
  image.value = e
}

const onSubmit = handleSubmit((values) => {
  console.log(values)
  edit({ ...values, image: image.value })
})
</script>

<template>
  <div class="m-auto">
    <div class="border-b-2 block md:flex">
      <div class="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
        <div class="flex justify-between">
          <span class="text-xl font-semibold block">Admin Profile</span>
        </div>
        <div class="w-full p-8 mx-2 flex justify-center flex-col gap-5">
          <img
            id="showImage"
            class="max-w-xs w-32 items-center border rounded-box"
            :src="`${authState.data.image}`"
          />
          <!-- <input type="file" class="file file-input"> -->
        </div>
      </div>
      <form @submit.prevent="onSubmit" class="w-[28rem] rounded-2xl shadow-xl text-center py-10">
        <h1 class="text-3xl font-extrabold">Information</h1>
        <InputText name="username" label="Username" type="text" :values="authState.data.username" />
        <InputText name="email" label="Email" type="email" :values="authState.data.email" />
        <InputText name="role" label="Role" type="text" :values="authState.data.role" />
        <InputFile name="image" label="Image" @change="onSelectFile" />
        <button
          class="btn bg-blue-500 text-white"
          type="submit"
          :disabled="authState.isLoading && !authState.data"
        >
          submit
        </button>
      </form>
    </div>
  </div>
</template>
