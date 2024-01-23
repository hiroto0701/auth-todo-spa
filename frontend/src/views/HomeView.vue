<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import TaskList from '@/components/TaskList.vue';
</script>

<template>
  <main-header />
  <main class="w-9/12 h-screen mx-auto my-20">
    <div class="flex w-full justify-between items-center gap-x-10">
      <h2 class="text-lg font-serif font-semibold">User名さんのタスク一覧</h2>
      <button class="bg-sky-600 p-2.5 text-white text-sm rounded-md">タスクの追加</button>
    </div>
    <div class="my-20">
      <task-list />
    </div>
  </main>
</template>
