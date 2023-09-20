<script setup lang="ts">
</script>

<template>
  <div class="h-16 flex justify-between items-center px-5 shadow-sm relative lg:static">
    <div class="flex justify-between items-center">
      <a href="" class="mr-5"><i class="ri-menu-line text-3xl lg:hidden"></i></a>
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
