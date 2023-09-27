<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { users, type User, getUser } from '@/data/user'

const datas = ref<User[]>(users)
const search = ref<string>('')
const router = useRouter()
const route = useRoute()
const user = ref<any>()

function onViewData(id: string) {
  router.push({ name: 'team.detail', params: { id: id } })
}

onMounted(() => {
  const qsearch: string = route.query.search as string

  search.value = qsearch
  datas.value = getUser(qsearch)
  user.value = JSON.parse(localStorage.getItem('user') as string)
})

async function onSearch() {
  router.push({ name: 'team', query: { search: search.value } })

  datas.value = getUser(search.value)
}

function onClearSearch(search: string) {
  if (search == '') {
    router.push({ name: 'team' })
    datas.value = getUser(search)
  }
}
</script>

<template>
  <div class="card shadow-xl">
    <div class="flex justify-between gap-x-6">
      <input
        type="text"
        v-model="search"
        placeholder="search... "
        class="input input-bordered input-sm w-full"
        @keyup="onSearch()"
        @input="onClearSearch(search)"
      />
      <button @click="$router.push({ name: 'add-user' })" class="btn btn-sm bg-green-400 w-24">
        <i class="ri-user-add-line text-black"></i>
      </button>
    </div>

    <div class="h-[30rem] w-full overflow-auto">
      <table class="table">
        <thead>
          <tr>
            <th class="text-black text-sm lg:text-lg px-5 lg:px-10">ID</th>
            <th class="text-black text-sm lg:text-lg px-5 lg:px-10">Name</th>
            <th class="text-black text-sm lg:text-lg px-5 lg:px-10">Role</th>
            <th class="text-black text-sm lg:text-lg px-5 lg:px-10">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in datas" :key="index">
            <td class="text-sm lg:text-base px-5 lg:px-10">{{ data.id }}</td>
            <td class="text-sm lg:text-base px-5 lg:px-10">{{ data.username }}</td>
            <td class="text-sm lg:text-base px-5 lg:px-10">{{ data.role }}</td>
            <td class="text-sm lg:text-base px-5 lg:px-10">
              <button class="mr-4" @click="onViewData(data.id)">
                <i class="ri-article-line"></i>
              </button>
              <button class="mr-4" @click="$router.push({name:'edit-user'})">
                <i class="ri-edit-2-line"></i>
              </button>
              <button class="mr-4" @click="onViewData(data.id)">
                <i class="ri-delete-bin-line"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
