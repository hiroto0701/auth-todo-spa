// store.ts
import { defineStore } from 'pinia';
import axios from 'axios';

interface Todo {
  id?: number;
  title: string;
  priority: number;
  content: string;
  isDone: boolean;
}

export const useTodoFormStore = defineStore('todo_form', {
  state: () => ({
    todos: [] as Todo[],
    data: {} as Todo,
  }),
  getters: {
    parameters(): Todo {
      return { ...this.data };
    }
  },
  actions: {
    load(id: number): void {
      axios.get(`/api/viewer/${id}`).then(response => {
        this.todos = response.data;
      }).catch(error => {
        console.error('API呼び出しエラー', error);
      });
    },
    register(data: Todo): Promise<void> {
      return axios.post('/api/register', data);
    }
  }
});
