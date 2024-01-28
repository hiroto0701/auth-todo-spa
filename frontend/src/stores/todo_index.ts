// store.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  priority: number;
  content: string;
  isDone: boolean;
}

export const useTodoIndexStore = defineStore('todo_index', {
  state: () => ({
    todos: [] as Todo[],
  }),
  getters: {

  },
  actions: {
    loadPage() {
      axios.get('/api/load').then(response => {
        this.todos = response.data;
      }).catch(error => {
        console.error('API呼び出しエラー', error);
      });
    },
  }
});
