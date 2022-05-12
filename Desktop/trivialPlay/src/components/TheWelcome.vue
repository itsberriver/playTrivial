<script setup></script>

<template>
  <div class="flex flex-col text-white mt-60 text-center font-Guy">
    <p class="text-6xl px-6">TRIVUEAL</p>
    <p class="text-7xl">FACTÓRIA</p>
  </div>

  <div class="text-white flex justify-center text-center">
    <button
      class="shadow-2xl bg-[#8BD048] box-border h-10 w-40 rounded-3xl font-Mont mt-20"
    >
      <RouterLink to="/category">START</RouterLink>
    </button>
  </div>

  <div class="text-white flex flex-col justify-center mt-60 text-center">
    <p>Don’t know how to play?</p>
    <p class="">PRESS HERE</p>
  </div>
</template>

<style>
body {
  background-image: url(../assets/blurred-bg.png);
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
</style>
