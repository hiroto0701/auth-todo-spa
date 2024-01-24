<script setup lang="ts">
import { ref, computed } from 'vue';

const todosList = ref([
  {
    "title": "ご飯を作る",
    "priority": 3,
    "content": "お昼ご飯を作ります",
    "isDone": false
  },
  {
    "title": "お風呂に入る",
    "priority": 2,
    "content": "お風呂に入ります",
    "isDone": false
  },
  {
    "title": "寝る",
    "priority": 3,
    "content": "寝ます",
    "isDone": false
  },
]);

const priorityText = computed((): string[] => {
  return todosList.value.map(todo => {
    switch (todo.priority) {
      case 1:
        return "低";
      case 2:
        return "普通";
      case 3:
        return "高";
      default:
        return "";
    }
  });
});

</script>

<template>
  <div v-for="(todo, index) in todosList" :key="index" class="rounded-lg shadow-md my-8 p-10" :disabled="todo.isDone" :class="todo.isDone ? 'bg-gray-200' : 'bg-gray-50'">
    <div class="flex justify-between">
      <h2 class="text-lg font-semibold ">{{ todo.title }}</h2>
      <input type="checkbox" v-model="todo.isDone">
    </div>
    <p>優先度：{{ priorityText[index] }}</p>
    <p class="text-gray-400">{{ todo.content }}</p>
  </div>
</template>
