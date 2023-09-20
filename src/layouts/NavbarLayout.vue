<script setup lang="ts">
import FooterComponent from '@/components/FooterComponent.vue'
defineProps<{ menus: { to: string; name: string; icon: string }[] }>()
</script>

<template>
  <div class="h-16 flex justify-between items-center px-5 shadow-sm relative lg:static">
    <div class="flex justify-between items-center">
      <div class="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <label for="my-drawer" class="mr-5 btn btn-ghost drawer-button lg:hidden"
            ><i class="ri-menu-line text-3xl"></i
          ></label>
        </div>
        <div class="drawer-side z-50 ">
          <label for="my-drawer" class="drawer-overlay"></label>
          <!-- <div class="menu p-4 w-80 bg-base-200 text-base-content h-screen">
            <label for="my-drawer-2" class="bg-base-200 font-bold text-2xl">LOGO</label>
          </div> -->
          <ul class="menu p-4 w-80 bg-base-200 text-base-content h-screen">
            <label for="my-drawer-2" class="bg-base-200 font-bold text-2xl">LOGO</label>
            <div class="divider"></div>
            <li v-for="(menu, idx) of menus" :key="idx" class="p-2">
              <router-link :to="{ name: menu.to }" active-class="active"
                ><i :class="`${menu.icon}`"></i><span>{{ menu.name }}</span></router-link
              >
            </li>
            <li class="mt-36">
              <div class="divider"></div>
              <FooterComponent />
            </li>
          </ul>
        </div>
      </div>
      <label class="input-group">
        <span><i class="ri-search-line text-xl"></i></span>
        <input type="text" placeholder="Search" class="input w-[10rem] sm:w-[20rem] px-4" />
      </label>
    </div>
    <div class="flex items-center justify-center">
      <div>
        <ul class="hidden lg:flex lg:items-center absolute lg:static gap-x-6">
          <li>
            <a href="">
              <i class="ri-inbox-2-line text-3xl flex items-center justify-center">
                <span class="font-sans block lg:hidden text-base mx-2 lg:mx-0">Inbox</span>
              </i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="ri-notification-2-line text-3xl flex items-center justify-center">
                <span class="font-sans block lg:hidden text-base mx-2 lg:mx-0">Notifications</span>
              </i>
            </a>
          </li>
          <li>
            <a href=""
              ><img
                src="https://th.bing.com/th/id/R.5b1a7d81d5781ae876c40ef119b50bd6?rik=lAXGksIDSng7lw&pid=ImgRaw&r=0"
                alt=""
                class="rounded-full w-8 h-8"
              />
              <div class="block lg:hidden">
                <div class="text-base font-medium">Phongsavanh Bank</div>
                <span class="text-sm font-normal">Software Developer</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div class="dropdown dropdown-end">
        <label href="" tabindex="0">
          <i class="ri-more-2-fill text-2xl lg:hidden"></i>
        </label>
        <ul
          class="lg:flex lg:items-center lg:flex-row absolute lg:static dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-60"
        >
          <li>
            <a href="">
              <i class="ri-inbox-2-line text-2xl flex items-center justify-center">
                <span class="font-sans block lg:hidden text-base mx-2 lg:mx-0">Inbox</span>
              </i>
            </a>
          </li>
          <li>
            <a href="">
              <i class="ri-notification-2-line text-2xl flex items-center justify-center">
                <span class="font-sans block lg:hidden text-base mx-2 lg:mx-0">Notifications</span>
              </i>
            </a>
          </li>
          <li>
            <a href=""
              ><img
                src="https://th.bing.com/th/id/R.5b1a7d81d5781ae876c40ef119b50bd6?rik=lAXGksIDSng7lw&pid=ImgRaw&r=0"
                alt=""
                class="rounded-full w-8 h-8"
              />
              <div class="block lg:hidden">
                <div class="text-base font-medium">Phongsavanh Bank</div>
                <span class="text-sm font-normal">Software Developer</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
