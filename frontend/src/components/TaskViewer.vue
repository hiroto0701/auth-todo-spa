<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { ref, computed } from 'vue';
</script>

<template>
  <main-header />
  <main class="w-9/12 h-screen mx-auto my-20">
    <div class="flex w-full justify-between items-center gap-x-10">
      <h2 class="text-lg font-serif font-semibold">User名さんのタスク詳細</h2>
    </div>

    <div class="rounded-lg shadow-md my-8 p-10 cursor-pointer">
    <div class="flex justify-between">
      <h2 class="text-lg font-semibold "></h2>
      <input type="checkbox" @click.stop>
    </div>
    <p>優先度：</p>
    <p class="text-gray-400"></p>
  </div>
  </main>
</template>