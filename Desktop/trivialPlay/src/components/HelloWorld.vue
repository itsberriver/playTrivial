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
            <button class="bg-sports box-border h-10 w-60 rounded-3xl font-Mont">sports</button>
            <button class="bg-art box-border h-10 w-60 rounded-3xl font-Mont">art</button>
            <button class="bg-tv box-border h-10 w-60 rounded-3xl font-Mont">tv</button>
            <button class="bg-science box-border h-10 w-60 rounded-3xl font-Mont">science</button>
            <button class="bg-geography box-border h-10 w-60 rounded-3xl font-Mont">geography</button>
            <button class="bg-history box-border h-10 w-60 rounded-3xl font-Mont">history</button>
            <button class="bg-general box-border h-10 w-60 rounded-3xl font-Mont">general</button>
            <button class="bg-random box-border h-10 w-60 rounded-3xl font-Mont">random</button>
        </div>

        <div class="font-Mont text-2xl bg-white text-science box-border h-11 w-52 rounded-3xl font-Mont">
        <!-- button confirm -->
        CONFIRM
        </div>

        <div>
        <!-- back arrow vector awesome fonts -->
        </div>
    </section>
</template>
