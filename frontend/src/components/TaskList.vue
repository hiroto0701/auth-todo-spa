<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoStore } from '@/stores/todo'

const router = useRouter();
const todoStore = useTodoStore();

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

const toViewer = (id: number, isDone: boolean): void => {
  if (!isDone) {
    router.push({ name: 'viewer', params: { id: id }})
  }
}
</script>

<template>
  <div v-for="(todo, index) in todosList" :key="index" class="rounded-lg shadow-md my-8 p-10 cursor-pointer" 
                                          :disabled="todo.isDone"
                                          :class="todo.isDone ? 'bg-gray-200 cursor-default' : 'bg-gray-50'"
                                          @click="toViewer(todo.id, todo.isDone)">
    <div class="flex justify-between">
      <h2 class="text-lg my-3 font-semibold ">{{ todo.title }}</h2>
      <input type="checkbox" class="my-3" v-model="todo.isDone" @click.stop>
    </div>
    <p class="my-3">優先度：{{ priorityText[index] }}</p>
    <p class="text-gray-400 my-3">{{ todo.content }}</p>
  </div>
</template>