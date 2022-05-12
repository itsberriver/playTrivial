<script setup>
import { RouterLink, RouterView } from "vue-router";
import Category from "@/components/Category.vue";
</script>

<template>
  <RouterView />
</template>

<style>
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
