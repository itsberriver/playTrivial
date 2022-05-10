<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
   <section class="flex flex-col ">
        <!--'category'--> 

        <div>
        <!-- tittle 'choose category' --> 
        <p class="font-Guy text-general text-6xl ">CHOOSE</p>
        <p class="font-Guy text-art text-6xl ">CATEGORY</p>
        </div>

        <div class=" font-Mont font-extra-bold text-xl p-5 space-y-5" id="buttons">
        <!-- buttons with colors and categories -->
            <button class="bg-sports box-border h-10 w-60 rounded-3xl ">sports</button>
            <button class="bg-art box-border h-10 w-60 rounded-3xl ">art</button>
            <button class="bg-tv box-border h-10 w-60 rounded-3xl">tv</button>
            <button class="bg-science box-border h-10 w-60 rounded-3xl">science</button>
            <button class="bg-geography box-border h-10 w-60 rounded-3xl">geography</button>
            <button class="bg-history box-border h-10 w-60 rounded-3xl">history</button>
            <button class="bg-general box-border h-10 w-60 rounded-3xl">general</button>
            <button class="bg-random box-border h-10 w-60 rounded-3xl">random</button>
        </div>

        <div class="font-Mont text-2xl bg-white text-science box-border h-11 w-52 rounded-3xl">
        <!-- button confirm -->
        CONFIRM
        </div>

        <div>
        <!-- back arrow vector awesome fonts -->
        </div>
    </section>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
