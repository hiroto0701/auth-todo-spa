<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import TaskList from '@/components/TaskList.vue';
import AddTaskButton from '@/components/AddTaskButton.vue';
</script>

<template>
  <main-header />
  <main class="w-9/12 h-screen mx-auto my-20">
    <h2 class="text-lg font-serif font-semibold">User名さんのタスク一覧</h2>
    <div class="my-20">
      <task-list />
      <add-task-button />
    </div>
  </main>
</template>
