<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { useRouter } from 'vue-router';
import { useTodoFormStore } from '@/stores/todo_form';
import { computed, onMounted } from 'vue';

const router = useRouter();
const todoStore = useTodoFormStore();

const todo = computed(() => {
  return todoStore.todos;
});

const toList = (): void => {
  router.push({ name: 'home' });
}

const getPriorityText = (priority: number): string => {
  switch (priority) {
    case 1:
      return "高";
    case 2:
      return "普通";
    case 3:
      return "低";
    default:
      return "";
  }
}

onMounted(() => {
  todoStore.load(router.currentRoute.value.params.id);
});
</script>

<template>
  <main-header />
  <main class="w-9/12 h-screen mx-auto my-20">
    <div class="flex w-full justify-between items-center gap-x-10">
      <h2 class="text-lg font-serif font-semibold">User名さんのタスク詳細</h2>
      <button class="bg-slate-600 text-white p-3 rounded-lg" @click="toList">戻る</button>
    </div>

    <div class="rounded-lg shadow-md my-8 p-10 cursor-pointer">
      <h2 class="text-lg font-semibold my-3">{{ todo.title }}</h2>
      <p class="my-3">優先度：{{ getPriorityText(todo.priority) }}</p>
      <p class="text-gray-400 my-3">{{ todo.content }}</p>
    </div>
  </main>
</template>