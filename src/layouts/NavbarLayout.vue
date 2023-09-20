<script setup lang="ts"></script>

<template>
  <div class="h-16 flex justify-between items-center px-5 bottom-1 relative lg:static">
    <div class="flex justify-between items-center">
      <a href="" class="mr-5"><i class="ri-menu-line text-4xl lg:hidden"></i></a>
      <label class="input-group">
        <span><i class="ri-search-line text-xl"></i></span>
        <input type="text" placeholder="Search" class="input w-[10rem] sm:w-[20rem] px-4" />
      </label>
    </div>
    <a href=""><i class="ri-more-2-fill text-3xl lg:hidden"></i></a>
    <ul class="hidden lg:flex lg:gap-6">
      <li>
        <a href=""><i class="ri-inbox-2-line text-3xl"></i></a>
      </li>
      <li>
        <a href=""><i class="ri-notification-2-line text-3xl"></i></a>
      </li>
      <li>
        <a href=""
          ><img
            src="https://th.bing.com/th/id/R.0d3542651c776e42213c5fec41135d90?rik=Yb6lb52WvDq9sw&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f5900000%2fKittens-cats-5979853-2560-1817.jpg&ehk=M5ssACU9nmKUthjfl6TlIir4JVJPNnlk7yo6Nx%2bUzus%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            class="rounded-full w-8 h-8"
        /></a>
      </li>
    </ul>
  </div>
</template>
