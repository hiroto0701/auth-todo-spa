<script setup lang="ts">
import { ref } from 'vue';

const title = ref('TodoApp')
</script>
<template>
  <header class="w-full h-20 bg-slate-100 shadow-md flex items-center px-5">
    <h1 class="text-lg font-bold text-black font-serif">{{ title }}</h1>
  </header>
</template>