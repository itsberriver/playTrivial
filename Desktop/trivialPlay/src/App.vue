<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

</script>

<template>
  <header>

      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Start</RouterLink>
        <RouterLink to="/about">Continue</RouterLink>
        <RouterLink to="/category">Confirm</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>

</style>
