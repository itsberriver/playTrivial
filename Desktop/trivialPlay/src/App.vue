<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template >
  <header>
  </header>
    <main> 
      <!-- <HelloWorld msg="You did it!" /> -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        
      <div id="background">
        <!-- <RouterLink to="/category">START</RouterLink> -->
      </div>
    </main> 
  <RouterView />
</template>

<style>
</style>
