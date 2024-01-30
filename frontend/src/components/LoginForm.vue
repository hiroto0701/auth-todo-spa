<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const email = ref<string>('');
const password = ref<string>('');

const login = () => {
  return new Promise((resolve, reject) => {
    axios.get('/sanctum/csrf-cookie').then(() => {
      axios.post('/api/login', {
        email: email.value,
        password: password.value
      }).then(() => {
        resolve(true);
        router.push({ name: 'home' });
      }).catch((error) => {
        console.log(error);
        reject(true);
      })
    });
  });
}
</script>

<template>
  <main-header />
  <main class="w-9/12 h-screen mx-auto my-20">
    <div class="flex justify-center">
      <h2 class="text-lg font-semibold">ログインフォーム</h2>
    </div>
    <form @submit.prevent="login" class="max-w-md mx-auto my-10 bg-white rounded-xl p-10 shadow-lg">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-600">email</label>
        <input v-model="email" type="email" id="email" name="email"
              class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-sky-500">
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-600">password</label>
        <input v-model="password" type="password" id="password" name="password"
              class="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-sky-500">
      </div>

      <div class="flex justify-center">
        <button type="submit" class="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 focus:outline-none focus:border-sky-700 focus:shadow-outline-sky active:bg-sky-800">
          送信
        </button>
      </div>
    </form>
  </main>
</template>
<style scoped>
</style>