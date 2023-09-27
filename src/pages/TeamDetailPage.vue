<script setup lang="ts">
import { users, type User } from '@/data/user'
import { reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const state = reactive<{ data?: User }>({})

onMounted(() => {
  state.data = users.find((user) => user.id === route.params.id)
})
</script>

<template>
  <!-- <div class="card shadow-xl">
    <div class="card-body items-center px-20">
      <div v-if="state.data">
        <figure>
          <img
            :src="`${state.data.image}`"
            alt=""
            class="w-[10rem] h-[10rem] rounded-full object-cover my-5"
          />
        </figure>
        <div class="text-lg pt-10 py-2">
          <span class="font-bold text-lg">ID: </span>{{ state.data.id }}
        </div>
        <div class="text-lg py-2">
          <span class="font-bold text-lg">Name: </span>{{ state.data.username }}
        </div>
        <div class="text-lg py-2">
          <span class="font-bold text-lg">Role: </span>{{ state.data.role }}
        </div>
        <div class="text-lg py-2">
          <span class="font-bold text-lg">Email: </span>{{ state.data.email }}
        </div>
      </div>
      <button class="btn bg-gray-700 text-white my-5" @click="router.back()">Back</button>
    </div>
  </div> -->
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <div v-if="state.data" class="flex items-center justify-center px-10">
      <figure>
        <img
          :src="`${state.data.image}`"
          alt=""
          class="w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover"
        />
      </figure>
    </div>
    <div class="card-body mx-10">
      <h2 class="card-title text-2xl lg:text-3xl font-bold py-3">Profile Info</h2>
      <p class="text-base lg:text-lg"><b>ID: </b> {{ state.data?.id }}</p>
      <p class="text-base lg:text-lg"><b>Name: </b>{{ state.data?.username }}</p>
      <p class="text-base lg:text-lg"><b>Role: </b>{{ state.data?.role }}</p>
      <p class="text-base lg:text-lg"><b>Email: </b>{{ state.data?.email }}</p>
      <div class="card-actions justify-center lg:justify-end">
        <button class="btn bg-gray-700 text-white my-5" @click="router.back()">Back</button>
      </div>
    </div>
  </div>
</template>
