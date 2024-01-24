<script setup lang="ts">
import { ref } from 'vue';

const buttonText = ref("+ タスクの追加")
</script>

<template>
  <button class="w-full bg-slate-200 rounded-md py-8">{{ buttonText }}</button>
</template>