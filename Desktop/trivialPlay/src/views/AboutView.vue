<template>
  <section class="font-Mon container max-auto bg-bgpurple text-white ">
    <div class=" ">
      <h1 class="font-Guy text-xl ">Trivueal Factória</h1>

    </div>

    <div class=" font-extra-bold text-3xl "> 
      <!-- api question -->
      <h1 class="  font-extrabold ">Who painted the biblical fresco The Creation of Adam?</h1>

    </div>

    <div class="flex flex-col justify-center space-y-5 text-xl  " >
    <!-- api answers -->
      <button class="bg-art rounded-full w-80 h-8 ">Rembrandt</button>
      <button class="bg-art rounded-full w-80 h-8">Leonardo Da Vinci</button>
      <button class="bg-art rounded-full w-80 h-8">Michelangelo</button>
      <button class="bg-art rounded-full w-80 h-8">Caravaggio</button>

    </div>

    <div class="py-5">

      <button class="bg-white rounded-full font-extra-bold text-science w-52 h-8">Next</button> 
    </div>
    <TheWelcome/>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
