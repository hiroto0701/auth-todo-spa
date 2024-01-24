<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoStore } from '@/stores/todo'

const router = useRouter();
const todoStore = useTodoStore();

// const todosList = ref([
//   {
//     "id": 1,
//     "title": "ご飯を作る",
//     "priority": 3,
//     "content": "お昼ご飯を作ります",
//     "isDone": false
//   },
//   {
//     "id": 2,
//     "title": "お風呂に入る",
//     "priority": 2,
//     "content": "お風呂に入ります",
//     "isDone": false
//   },
//   {
//     "id": 9,
//     "title": "寝る",
//     "priority": 3,
//     "content": "寝ます",
//     "isDone": false
//   },
// ]);

const todosList = computed(() => {
  return todoStore.todos;
})

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

const toViewer = (id: number): void => {
  router.push({ name: 'viewer', params: { id: id }})
}
</script>

<template>
  <div v-for="(todo, index) in todosList" :key="index" class="rounded-lg shadow-md my-8 p-10 cursor-pointer" :disabled="todo.isDone" :class="todo.isDone ? 'bg-gray-200' : 'bg-gray-50'" @click="toViewer(todo.id)">
    <div class="flex justify-between">
      <h2 class="text-lg font-semibold ">{{ todo.title }}</h2>
      <input type="checkbox" v-model="todo.isDone">
    </div>
    <p>優先度：{{ priorityText[index] }}</p>
    <p class="text-gray-400">{{ todo.content }}</p>
  </div>
</template>
