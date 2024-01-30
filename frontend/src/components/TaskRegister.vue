<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useTodoFormStore } from '@/stores/todo_form';

const router = useRouter();
const todoStore = useTodoFormStore();

const taskTitle = ref('');
const priority = ref(1);
const taskContent = ref('')

const toList = (): void => {
  router.push({ name: 'home' });
}

const doRegister = async (): Promise<void> => {
  const taskTitleValue = taskTitle.value;
  const priorityValue = priority.value;
  const taskContentValue = taskContent.value;
  const isDone = false;

  const data = {
    title: taskTitleValue,
    priority: priorityValue,
    content: taskContentValue,
    isDone: isDone,
  };

  try {
    await todoStore.register(data);
    toList();
  } catch (error) {
    console.error('タスクの登録エラー', error);
  }
}

</script>
<template>
  <main-header />
  <main class="w-9/12 h-screen mx-auto my-20">
    <div class="flex justify-between">
      <h2 class="text-lg font-serif font-semibold">User名さんのタスク登録</h2>
      <button class="bg-slate-600 text-white p-3 rounded-lg" @click="toList">戻る</button>
    </div>
    <form @submit.prevent="doRegister" class="max-w-md mx-auto my-10 bg-white rounded-xl p-10 shadow-lg">
      <div class="mb-4">
        <label for="taskName" class="block text-sm font-medium text-gray-600">タスク名</label>
        <input v-model="taskTitle" type="text" id="taskName" name="title"
              class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-sky-500">
      </div>

      <div class="mb-4">
        <label for="priority" class="block text-sm font-medium text-gray-600">優先度</label>
        <select v-model="priority" id="priority" name="priority"
                class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-sky-500">
          <option value="1">高</option>
          <option value="2">普通</option>
          <option value="3">低</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="taskContent" class="block text-sm font-medium text-gray-600">タスクの内容</label>
        <textarea v-model="taskContent" id="taskContent" name="content"
                  class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-sky-500">
        </textarea>
      </div>

      <div class="flex justify-center">
        <button type="submit" class="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 focus:outline-none focus:border-sky-700 focus:shadow-outline-sky active:bg-sky-800">
          送信
        </button>
      </div>
    </form>
  </main>
</template>