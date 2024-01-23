<script setup lang="ts">
import { ref, computed } from 'vue';

type Todos = {
  title: string;
  priority: number;
  content: string;
  isDone: boolean;
};

const todosList = ref([
  {
    "title": "ご飯を作る",
    "priority": 1,
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

</script>

<template>
<div v-for="(todo, index) in todosList" :key="index" class="bg-gray-50 rounded-lg shadow-md my-8 p-10">
  <h2 class="text-lg font-semibold ">{{ todo.title }}</h2>
  <p>優先度： {{ todo.priority }}</p>
  <p class="text-gray-400">{{ todo.content }}</p>
</div>
</template>
