<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const buttonText = ref("+ タスクの追加")

const toRegister = (): void => {
  router.push({ name: 'register' });
}
</script>

<template>
  <button class="w-full bg-slate-200 rounded-md py-8 mb-10" @click="toRegister">{{ buttonText }}</button>
</template>