<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const toList = (): void => {
  router.push({ name: 'home' });
}
</script>

<template>
  <main-header />
  <main class="w-9/12 h-screen mx-auto my-20">
    <div class="flex w-full justify-between items-center gap-x-10">
      <h2 class="text-lg font-serif font-semibold">User名さんのタスク詳細</h2>
      <button class="bg-slate-600 text-white p-3 rounded-lg" @click="toList">戻る</button>
    </div>

    <div class="rounded-lg shadow-md my-8 p-10 cursor-pointer">
    <h2 class="text-lg font-semibold my-3">タスク名</h2>
    <p class="my-3">優先度：</p>
    <p class="text-gray-400 my-3">タスクの内容</p>
  </div>
  </main>
</template>