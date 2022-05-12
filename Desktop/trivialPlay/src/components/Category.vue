<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <section>
    <!--'category'-->

    <div>
      <!-- title 'choose category' -->
      <p class="flex justify-center pt-12 font-Guy text-white text-6xl">
        CHOOSE
      </p>
      <p class="flex justify-center font-Guy text-white text-6xl">CATEGORY</p>
    </div>

    <div
      class="font-Mont font-extra-bold text-xl text-white p-5 space-y-5"
      id="buttons"
    >
      <!-- buttons with colors and categories -->
      <button class="bg-sports box-border h-10 w-60 rounded-3xl font-Mont">
        Sports
      </button>
      <button class="bg-art box-border h-10 w-60 rounded-3xl font-Mont">
        Art
      </button>
      <button class="bg-tv box-border h-10 w-60 rounded-3xl font-Mont">
        TV
      </button>
      <button class="bg-science box-border h-10 w-60 rounded-3xl font-Mont">
        Science
      </button>
      <button class="bg-geography box-border h-10 w-60 rounded-3xl font-Mont">
        Geography
      </button>
      <button class="bg-history box-border h-10 w-60 rounded-3xl font-Mont">
        History
      </button>
      <button class="bg-general box-border h-10 w-60 rounded-3xl font-Mont">
        General
      </button>
      <button class="bg-random box-border h-10 w-60 rounded-3xl font-Mont">
        Random
      </button>
    </div>

    <div
      class="m-8 text-2xl bg-white flex m-auto justify-center py-2 text-science box-border h-11 w-52 rounded-3xl font-Mont"
    >
      CONFIRM
    </div>
  </section>
</template>

<style>
#buttons {
  display: inline-block;
  text-align: center;
  flex-direction: row;
}
</style>
